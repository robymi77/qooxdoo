#!/usr/bin/env python
# -*- coding: utf-8 -*-
################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2013 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Thomas Herchenroeder (thron7)
#
################################################################################

##
# Loader.py - class and code to represent the generated loader script
##

import sys, os, re, types, string
from ecmascript.frontend        import treegenerator, tokenizer
from ecmascript.backend.Packer  import Packer
from generator.output           import OutputFile
from misc                       import json, filetool
from misc.Path                  import OsPath, Uri

class Loader(OutputFile):

    def __init__(self, *args):
        super(Loader, self).__init__(*args)

    ##
    # returns the Javascript code for the loader script as a string,
    # using the loader.tmpl template and filling its placeholders;
    # can take the code of the first ("boot") script of class code
    def generateLoader(self, script, compConf, globalCodes, bootCode='', ):

        ##
        # currently, we use the package key as the closure key to load
        # packages, hence the package must only contain a single script,
        # which is currently true if the package is free of source
        # scripts ("not package.has_source").
        # ---
        # theoretically, multiple scripts in a packages could be
        # supported, if they're all compiled (no source scripts) and 
        # each is assigned its own closure key.
        def isClosurePackage(package, bootPackageId):
            if not package.has_source and not package.id == bootPackageId:
                return True
            else:
                return False


        def bootPackageId(script):
            return script.parts[script.boot].packages[0].id # should only be one anyway


        ##
        # Translate URI data to JavaScript
        # using Package objects
        def packageUrisToJS(packages, version):

            allUris = []
            for packageId, package in enumerate(packages):
                package_uris = []
                if package.file: # build
                    namespace = "__out__"
                    fileId    = package.file
                    relpath    = OsPath(fileId)
                    shortUri   = Uri(relpath.toUri())
                    entry      = "%s:%s" % (namespace, shortUri.encodedValue())
                    package_uris.append(entry)
                    package.files.append(entry)  # TODO: make package.file obsolete
                elif package.files:  # hybrid
                    package_uris = package.files
                else: # "source" :
                    for clazz in package.classes:
                        namespace  = clazz.library.namespace
                        relpath    = OsPath(clazz.relpath)
                        shortUri   = Uri(relpath.toUri())
                        entry      = "%s:%s" % (namespace, shortUri.encodedValue())
                        package_uris.append(entry)
                        package.files.append(entry)  # TODO: this should done be elsewhere?!
                allUris.append(package_uris)

            return allUris


        ##
        # Works only after all scripts have been created!
        def inlineBoot(script, compConf):

            def firstScriptCompiled(script, compConf):
                firstPackage = script.packagesSorted()[0]
                if firstPackage.has_source:
                    return False
                else:
                    return True

            # ------------------------------------------------------
            configWithBoot = not self._job.get("packages/separate-loader", False)
            if configWithBoot and firstScriptCompiled(script, compConf):
                return True
            else:
                return False

        def loaderBootInline(script, compConf):
            return json.dumpsCode(inlineBoot(script, compConf))

        ##
        # Code of the boot package to be included with the loader
        # TODO: There must be a better way than pulling bootCode through all
        # the functions.
        def loaderBootPart(script, compConf, bootCode):
            if bootCode:
                val = bootCode
            else:
                val = ""
                # fake package data
                for key, package in enumerate(script.packagesSorted()): 
                    #val += "qx.$$packageData['%d']={};\n" % key
                    pass
            return val


        def loaderNocacheParam(script, compConf):
            return "true" if compConf.get("uris/add-nocache-param", True) else "false"


        ##
        # Return the JS snippet that is to be plugged into the decodeUris
        # function in the loader.
        def loaderDecodeUrisPlug(script, compConf):
            plugCodeFile = compConf.get("code/decode-uris-plug", False)
            plugCode = ""
            if plugCodeFile:
                plugCode = filetool.read(self._config.absPath(plugCodeFile))  # let it bomb if file can't be read
            return plugCode.strip()


        ##
        # Replace the placeholders in the loader template.
        # @throw KeyError a placeholder could not be filled from <vals>
        def loaderFillTemplate(vals, template):
            templ  = MyTemplate(template)
            result = templ.substitute(vals)
            return result

        ##
        # Find and read the loader template.
        def loaderTemplate(script, compConf):
            templatePath = compConf.get("paths/loader-template", None)
            if not templatePath:
                # use default template
                templatePath = os.path.join(filetool.root(), os.pardir, "data", "generator", "loader.tmpl.js")
            templateCont = filetool.read(templatePath)
            return templateCont, templatePath


        def loaderUrisBefore(script, compConf):
            urisBefore = []
            additional_scripts = self._job.get("add-script",[])
            for additional_script in additional_scripts:
                urisBefore.append(additional_script["uri"])
            return json.dumpsCode(urisBefore)


        def loaderCssBefore(script, compConf):
            cssBefore = []
            additional_csses = self._job.get("add-css",[])
            for additional_css in additional_csses:
                cssBefore.append(additional_css["uri"])
            return json.dumpsCode(cssBefore)


        def loaderPartsList(script, compConf):
                pass


        def loaderPackageHashes(script, compConf):
            packageHashes = {}
            for pos, package in enumerate(script.packagesSorted()):
                packageHashes[pos] = "%d" % package.id
            return json.dumpsCode(packageHashes)


        def loaderClosureParts(script, compConf):
            cParts = {}
            bootPkgId = bootPackageId(script)
            for part in script.parts.values():
                closurePackages = [isClosurePackage(p, bootPkgId) for p in part.packages if p.id != bootPkgId] # the 'boot' package may be the only non-closure package
                if closurePackages and all(closurePackages):
                    cParts[part.name] = True
            return json.dumpsCode(cParts)


        ##
        # create a map with part names as key and array of package id's and
        # return as string
        def loaderPartsMap(script, compConf):
            partData = {}
            #print "packages: %r" % packages
            for part in script.parts:
                #partData[part] = script.parts[part].packagesAsIndices(packages)
                partData[part] = []
                for package in script.parts[part].packages:
                    partData[part].append(package.id)
                #print "part '%s': %r" % (part, script.parts[part].packages)
            partData = json.dumpsCode(partData)

            return partData


        def loaderLibInfo(script, compConf):
            pass

        
        def loaderPackages(script, compConf):
            packagemap = {}
            for package in script.packages:
                packageentry = {}
                packagemap[package.id] = packageentry
                packageentry['uris'] = package.files
            return json.dumpsCode(packagemap)


        ##
        # Goes through all packages and returns the list of uri-like entries for
        # JS files in each package.
        #
        # @return [[package_entry]]   e.g. [["gui:gui/Application.js"],["__out__:gui.21312313.js"]]
        def loaderScriptUris(script, compConf):
            uris = packageUrisToJS(script.packagesSorted(), script.buildType)
            return json.dumpsCode(uris)

        ##
        # TODO: Replace the above function with this one when it works.
        def loaderScriptUris_1(script, compConf):
            uris = []
            for package in script.packagesSorted():
                package_scripts = []
                uris.append(package_scripts)
                for script in package:
                    script_entry = "%s:%s" % (libname, file_basename)
                    package_scripts.append(script_entry)
            return json.dumpsCode(uris)


        def loaderTranslations(script, compConf):
                pass


        def loaderResources(script, compConf):
                pass


        def loaderLocales(script, compConf):
                pass


        def loaderVariants(script, compConf):
                pass


        def loaderEnvironment(script, compConf):
                pass


        def loaderSettings(script, compConf):
                pass


        def loaderBootName(script, compConf):
            return '"%s"' % script.boot


        #def loaderGlobalsTable(script):
        #    if "globals" not in script.optimize:
        #        return "{}"
        #    else:
        #        gm = globalsoptimizer.reverse_globals_map()
        #        gm_str = ['{']
        #        items = []
        #        for k,v in gm.items():
        #            items.append("%s:%s" % (k,v))
        #        gm_str.append( u','.join(items))
        #        gm_str.append('}')
        #        return u''.join(gm_str)


        self._console.info("Generate loader script")
        result = ""
        vals   = {}

        if not script.parts:
            return result

        # stringify data in globalCodes
        for entry in globalCodes:
            globalCodes[entry] = json.dumpsCode(globalCodes[entry])
            # undo damage done by simplejson to raw strings with escapes \\ -> \
            globalCodes[entry] = globalCodes[entry].replace('\\\\\\', '\\').replace(r'\\', '\\')  # " gets tripple escaped, therefore the first .replace()

        vals.update(globalCodes)

        vals["Resources"]    = json.dumpsCode({})  # just init with empty map
        vals["Translations"] = json.dumpsCode(dict((l,None) for l in script.locales))  # init with configured locales
        vals["Locales"]      = json.dumpsCode(dict((l,None) for l in script.locales))

        # A table of alias names to global symbols like 'Date', 'Array', etc.
        # (for 'globals' optimization) - currently not used as the list of those
        # global symbols that are truely cross-browser is rather short.
        #vals["GlobalsTable"] = loaderGlobalsTable(script)

        # Name of the boot part
        vals["Boot"] = loaderBootName(script, compConf)

        # Code (pot.) of the boot part
        vals["BootPart"] = loaderBootPart(script, compConf, bootCode)

        # Translate part information to JavaScript
        vals["Parts"] = loaderPartsMap(script, compConf)

        # Translate URI data to JavaScript
        #vals["Uris"] = loaderScriptUris(script, compConf)

        # Translate URI data to JavaScript
        vals["Packages"] = loaderPackages(script, compConf)

        # Add potential extra scripts
        vals["UrisBefore"] = loaderUrisBefore(script, compConf)

        # Add potential extra css
        vals["CssBefore"] = loaderCssBefore(script, compConf)

        # Whether boot package is inline
        vals["BootIsInline"] = loaderBootInline(script, compConf)
            
        # Closure package information
        vals["ClosureParts"] = loaderClosureParts(script, compConf)

        # Package Hashes
        #vals["PackageHashes"] = loaderPackageHashes(script, compConf)

        # Script hook for qx.$$loader.decodeUris() function
        vals["DecodeUrisPlug"] = loaderDecodeUrisPlug(script, compConf)
        
        # Enable "?nocache=...." for script loading?
        vals["NoCacheParam"] = loaderNocacheParam(script, compConf)

        # Locate and load loader template
        template, templatePath = loaderTemplate(script, compConf)

        # Fill template gives result
        try:
            result = loaderFillTemplate(vals, template)
        except KeyError, e:
            raise ValueError("Unknown macro used in loader template (%s): '%s'" % 
                             (templatePath, e.args[0])) 

        # Compress it
        if False: # - nope; this is taking around 14s on my box, with parsing being 10s  :(
            resTokens = tokenizer.Tokenizer().parseStream(result, templatePath)
            resTree = treegenerator.createFileTree(resTokens, templatePath)
            [result] = Packer().serializeNode(resTree, None, None, compConf.get('code/format', False))

        return result



# Helper class for string.Template, to overwrite the placeholder introducing delimiter
class MyTemplate(string.Template):
    delimiter = "%"

