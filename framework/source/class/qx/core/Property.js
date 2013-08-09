/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Internal class for handling of dynamic properties. Should only be used
 * through the methods provided by {@link qx.Class}.
 *
 * For a complete documentation of properties take a look at
 * http://manual.qooxdoo.org/${qxversion}/pages/core.html#properties.
 *
 *
 * *Normal properties*
 *
 * The <code>properties</code> key in the class definition map of {@link qx.Class#define}
 * is used to generate the properties.
 *
 * Valid keys of a property definition are:
 *
 * <table>
 *   <tr><th>Name</th><th>Type</th><th>Description</th></tr>
 *   <tr><th>check</th><td>Array, String, Function</td><td>
 *     The check is used to check the type the incoming value of a property. This will only
 *     be executed in the source version. The build version will not contain the checks.
 *     The check can be:
 *     <ul>
 *       <li>a custom check function. The function takes the incoming value as a parameter and must
 *           return a boolean value to indicate whether the values is valid.
 *       </li>
 *       <li>inline check code as a string e.g. <code>"value &gt; 0 && value &lt; 100"</code></li>
 *       <li>a class name e.g. <code>qx.ui.form.Button</code></li>
 *       <li>a name of an interface the value must implement</li>
 *       <li>an array of all valid values</li>
 *       <li>one of the predefined checks: Boolean, String, Number, Integer, Float, Double,
 *           Object, Array, Map, Class, Mixin, Interface, Theme, Error, RegExp, Function,
 *           Date, Node, Element, Document, Window, Event
 *       </li>
 *     <ul>
 *   </td></tr>
 *   <tr><th>init</th><td>var</td><td>
 *     Sets the default/initial value of the property. If no property value is set or the property
 *     gets reset, the getter will return the <code>init</code> value.
 *   </td></tr>
 *   <tr><th>apply</th><td>String</td><td>
 *     On change of the property value the method of the specified name will be called. The signature of
 *     the method is <code>function(newValue, oldValue, propertyName)</code>. It is conventional to name
 *     the callback <code>_apply</code> + <i>PropertyName</i>, with the property name camel-cased (e.g.
 *     "<i>_applyFooBar</i>" for a property <i>fooBar</i>).
 *   </td></tr>
 *   <tr><th>event</th><td>String</td><td>
 *     On change of the property value an event with the given name will be dispatched. The event type is
 *     {@link qx.event.type.Data}.
 *   </td></tr>
 *   <tr><th>themeable</th><td>Boolean</td><td>
 *     Whether this property can be set using themes.
 *   </td></tr>
 *   <tr><th>inheritable</th><td>Boolean</td><td>
 *     Whether the property value should be inheritable. If the property does not have an user defined or an
 *     init value, the property will try to get the value from the parent of the current object.
 *   </td></tr>
 *   <tr><th>nullable</th><td>Boolean</td><td>
 *     Whether <code>null</code> is an allowed value of the property. This is complementary to the check
 *     defined using the <code>check</code> key.
 *   </td></tr>
 *   <tr><th>refine</th><td>Boolean</td><td>
 *     Whether the property definition is a refinement of a property in one of the super classes of the class.
 *     Only the <code>init</code> value can be changed using refine.
 *   </td></tr>
 *   <tr><th>transform</th><td>String</td><td>
 *     On setting of the property value the method of the specified name will
 *     be called. The signature of the method is <code>function(value)</code>.
 *     The parameter <code>value</code> is the value passed to the setter.
 *     The function must return the modified or unmodified value.
 *     Transformation occurs before the check function, so both may be
 *     specified if desired.  Alternatively, the transform function may throw
 *     an error if the value passed to it is invalid.
 *   </td></tr>
 *   <tr><th>validate</th><td>Function, String</td><td>
 *     On setting of the property value the method of the specified name will
 *     be called. The signature of the method is <code>function(value)</code>.
 *     The parameter <code>value</code> is the value passed to the setter.
 *     If the validation fails, an <code>qx.core.ValidationError</code> should
 *     be thrown by the validation function. Otherwise, just do nothing in the
 *     function.<br>
 *     If a string is given, the string should hold a reference to a member
 *     method.<br>
 *     <code>"<i>methodname</i>"</code> for example
 *     <code>"__validateProperty"</code><br>
 *     There are some default validators in the {@link qx.util.Validate} class.
 *     See this documentation for usage examples.
 *   </td></tr>
 *   <tr><th>dereference</th><td>Boolean</td><td>
 *     By default, the references to the values (current, init, ...) of the
 *     property will be stored as references on the object. When disposing
 *     this object, the references will not be deleted. Setting the
 *     dereference key to true tells the property system to delete all
 *     connections made by this property on dispose. This can be necessary for
 *     disconnecting DOM objects to allow the garbage collector to work
 *     properly.
 *   </td></tr>
 *   <tr><th>deferredInit</th><td>Boolean</td><td>
 *     Allow for a deferred initialization for reference types. Defaults to false.
 *   </td></tr>
 * </table>
 *
 * *Property groups*
 *
 * Property groups are defined in a similar way but support a different set of keys:
 *
 * <table>
 *   <tr><th>Name</th><th>Type</th><th>Description</th></tr>
 *   <tr><th>group</th><td>String[]</td><td>
 *     A list of property names which should be set using the property group.
 *   </td></tr>
 *   <tr><th>mode</th><td>String</td><td>
 *     If mode is set to <code>"shorthand"</code>, the properties can be set using a CSS like shorthand mode.
 *   </td></tr>
 *   <tr><th>themeable</th><td>Boolean</td><td>
 *     Whether this property can be set using themes.
 *   </td></tr>
 * </table>
 *
 * @internal
 * @ignore(qx.Interface)
 */
qx.Bootstrap.define("qx.core.Property",
{
  statics :
  {
    /**
     * This is a method which does nothing than gethering dependencies for the
     * module system. Calling this method is useless because it does nothing.
     */
    __gatherDependency : function() {
      if (qx.core.Environment.get("module.events")) {
        qx.event.type.Data;
        qx.event.dispatch.Direct;
      }
    },


    /**
     * Built-in checks
     * The keys could be used in the check of the properties
     */
    __checks :
    {
      "Boolean"   : 'qx.core.Assert.assertBoolean(value, msg) || true',
      "String"    : 'qx.core.Assert.assertString(value, msg) || true',

      "Number"    : 'qx.core.Assert.assertNumber(value, msg) || true',
      "Integer"   : 'qx.core.Assert.assertInteger(value, msg) || true',
      "PositiveNumber" : 'qx.core.Assert.assertPositiveNumber(value, msg) || true',
      "PositiveInteger" : 'qx.core.Assert.assertPositiveInteger(value, msg) || true',

      "Error"     : 'qx.core.Assert.assertInstance(value, Error, msg) || true',
      "RegExp"    : 'qx.core.Assert.assertInstance(value, RegExp, msg) || true',

      "Object"    : 'qx.core.Assert.assertObject(value, msg) || true',
      "Array"     : 'qx.core.Assert.assertArray(value, msg) || true',
      "Map"       : 'qx.core.Assert.assertMap(value, msg) || true',

      "Function"  : 'qx.core.Assert.assertFunction(value, msg) || true',
      "Date"      : 'qx.core.Assert.assertInstance(value, Date, msg) || true',
      "Node"      : 'value !== null && value.nodeType !== undefined',
      "Element"   : 'value !== null && value.nodeType === 1 && value.attributes',
      "Document"  : 'value !== null && value.nodeType === 9 && value.documentElement',
      "Window"    : 'value !== null && value.document',
      "Event"     : 'value !== null && value.type !== undefined',

      "Class"     : 'value !== null && value.$$type === "Class"',
      "Mixin"     : 'value !== null && value.$$type === "Mixin"',
      "Interface" : 'value !== null && value.$$type === "Interface"',
      "Theme"     : 'value !== null && value.$$type === "Theme"',

      "Color"     : 'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',
      "Decorator" : 'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',
      "Font"      : 'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'
    },


    /**
     * Contains types from {@link #__checks} list which need to be dereferenced
     */
    __dereference :
    {
      "Node"      : true,
      "Element"   : true,
      "Document"  : true,
      "Window"    : true,
      "Event"     : true
    },


    /**
     * Inherit value, used to override defaults etc. to force inheritance
     * even if property value is not undefined (through multi-values)
     *
     * @internal
     */
    $$inherit : "inherit",


    /**
     * Caching field names for each property created
     *
     * @internal
     */
    $$store :
    {
      runtime : {},
      user    : {},
      theme   : {},
      inherit : {},
      init    : {},
      useinit : {}
    },


    /**
     * Caching function names for each property created
     *
     * @internal
     */
    $$method :
    {
      get          : {},
      set          : {},
      reset        : {},
      init         : {},
      refresh      : {},
      setRuntime   : {},
      resetRuntime : {},
      setThemed    : {},
      resetThemed  : {}
    },


    /**
     * Supported keys for property defintions
     *
     * @internal
     */
    $$allowedKeys :
    {
      name         : "string",   // String
      dereference  : "boolean",  // Boolean
      inheritable  : "boolean",  // Boolean
      nullable     : "boolean",  // Boolean
      themeable    : "boolean",  // Boolean
      refine       : "boolean",  // Boolean
      init         : null,       // var
      apply        : "string",   // String
      event        : "string",   // String
      check        : null,       // Array, String, Function
      transform    : "string",   // String
      deferredInit : "boolean",  // Boolean
      validate     : null        // String, Function
    },


    /**
     * Supported keys for property group definitions
     *
     * @internal
     */
    $$allowedGroupKeys :
    {
      name      : "string",   // String
      group     : "object",   // Array
      mode      : "string",   // String
      themeable : "boolean"   // Boolean
    },


    /** Contains names of inheritable properties, filled by {@link qx.Class.define} */
    $$inheritable : {},


    /**
     * Generate optimized refresh method and  attach it to the class' prototype
     *
     * @param clazz {Class} clazz to which the refresher should be added
     */
    __executeOptimizedRefresh : function(clazz)
    {
      var inheritables = this.__getInheritablesOfClass(clazz);

      if (!inheritables.length) {
        var refresher = function () {};
      } else {
        refresher = this.__createRefresher(inheritables);
      }

      clazz.prototype.$$refreshInheritables = refresher;
    },


    /**
     * Get the names of all inheritable properties of the given class
     *
     * @param clazz {Class} class to get the inheritable properties of
     * @return {String[]} List of property names
     */
    __getInheritablesOfClass : function(clazz)
    {
      var inheritable = [];

      while(clazz)
      {
        var properties = clazz.$$properties;

        if (properties)
        {
          for (var name in this.$$inheritable)
          {
            // Whether the property is available in this class
            // and whether it is inheritable in this class as well
            if (properties[name] && properties[name].inheritable)
            {
              inheritable.push(name);
            }
          }
        }

        clazz = clazz.superclass;
      }

      return inheritable;
    },


    /**
     * Assemble the refresher code and return the generated function
     *
     * @param inheritables {String[]} list of inheritable properties
     * @return {Function} refresher function
     */
    __createRefresher : function(inheritables)
    {
      var inherit = this.$$store.inherit;
      var init = this.$$store.init;
      var refresh = this.$$method.refresh;

      var code = [
        "var parent = this.getLayoutParent();",
        "if (!parent) return;"
      ];

      for (var i=0, l=inheritables.length; i<l; i++)
      {
        var name = inheritables[i];
        code.push(
          "var value = parent.", inherit[name],";",
          "if (value===undefined) value = parent.", init[name], ";",
          "this.", refresh[name], "(value);"
        );
      }

      return new Function(code.join(""));
    },


    /**
     * Attach $$refreshInheritables method stub to the given class
     *
     * @param clazz {Class} clazz to which the refresher should be added
     */
    attachRefreshInheritables : function(clazz)
    {
      clazz.prototype.$$refreshInheritables = function()
      {
        qx.core.Property.__executeOptimizedRefresh(clazz);
        return this.$$refreshInheritables();
      }
    },


    /**
     * Attach one property to class
     *
     * @param clazz {Class} Class to attach properties to
     * @param name {String} Name of property
     * @param config {Map} Configuration map of property
     */
    attachMethods : function(clazz, name, config)
    {
      // Divide groups from "normal" properties
      config.group ?
        this.__attachGroupMethods(clazz, config, name) :
        this.__attachPropertyMethods(clazz, config, name);
    },


    /**
     * Attach group methods
     *
     * @param clazz {Class} Class to attach properties to
     * @param config {Map} Property configuration
     * @param name {String} Name of the property
     */
    __attachGroupMethods : function(clazz, config, name)
    {
      var upname = qx.Bootstrap.firstUp(name);
      var members = clazz.prototype;
      var themeable = config.themeable === true;

      if (qx.core.Environment.get("qx.debug"))
      {
        if (qx.core.Environment.get("qx.debug.property.level") > 1) {
          qx.Bootstrap.debug("Generating property group: " + name);
        }
      }

      var setter = [];
      var resetter = [];

      if (themeable)
      {
        var styler = [];
        var unstyler = [];
      }

      var argHandler = "var a=arguments[0] instanceof Array?arguments[0]:arguments;";

      setter.push(argHandler);

      if (themeable) {
        styler.push(argHandler);
      }

      if (config.mode == "shorthand")
      {
        var shorthand = "a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
        setter.push(shorthand);

        if (themeable) {
          styler.push(shorthand);
        }
      }

      for (var i=0, a=config.group, l=a.length; i<l; i++)
      {
        if (qx.core.Environment.get("qx.debug"))
        {
          if (!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]) {
            throw new Error("Cannot create property group '" + name + "' including non-existing property '" + a[i] + "'!");
          }
        }

        setter.push("this.", this.$$method.set[a[i]], "(a[", i, "]);");
        resetter.push("this.", this.$$method.reset[a[i]], "();");

        if (themeable)
        {
          if (qx.core.Environment.get("qx.debug"))
          {
            if (!this.$$method.setThemed[a[i]]) {
              throw new Error("Cannot add the non themable property '" + a[i] + "' to the themable property group '"+ name +"'");
            }
          }

          styler.push("this.", this.$$method.setThemed[a[i]], "(a[", i, "]);");
          unstyler.push("this.", this.$$method.resetThemed[a[i]], "();");
        }
      }

      // Attach setter
      this.$$method.set[name] = "set" + upname;
      members[this.$$method.set[name]] = new Function(setter.join(""));

      // Attach resetter
      this.$$method.reset[name] = "reset" + upname;
      members[this.$$method.reset[name]] = new Function(resetter.join(""));

      if (themeable)
      {
        // Attach styler
        this.$$method.setThemed[name] = "setThemed" + upname;
        members[this.$$method.setThemed[name]] = new Function(styler.join(""));

        // Attach unstyler
        this.$$method.resetThemed[name] = "resetThemed" + upname;
        members[this.$$method.resetThemed[name]] = new Function(unstyler.join(""));
      }
    },


    /**
     * Attach property methods
     *
     * @param clazz {Class} Class to attach properties to
     * @param config {Map} Property configuration
     * @param name {String} Name of the property
     */
    __attachPropertyMethods : function(clazz, config, name)
    {
      var upname = qx.Bootstrap.firstUp(name);
      var members = clazz.prototype;

      if (qx.core.Environment.get("qx.debug"))
      {
        if (qx.core.Environment.get("qx.debug.property.level") > 1) {
          qx.Bootstrap.debug("Generating property wrappers: " + name);
        }
      }

      // Fill dispose value
      if (config.dereference === undefined && typeof config.check === "string") {
        config.dereference = this.__shouldBeDereferenced(config.check);
      }

      var method = this.$$method;
      var store = this.$$store;

      store.runtime[name] = "$$runtime_" + name;
      store.user[name] = "$$user_" + name;
      store.theme[name] = "$$theme_" + name;
      store.init[name] = "$$init_" + name;
      store.inherit[name] = "$$inherit_" + name;
      store.useinit[name] = "$$useinit_" + name;

      method.get[name] = "get" + upname;
      members[method.get[name]] = function() {
        return qx.core.Property.executeOptimizedGetter(this, clazz, name, "get");
      }

      method.set[name] = "set" + upname;
      members[method.set[name]] = function(value) {
        return qx.core.Property.executeOptimizedSetter(this, clazz, name, "set", arguments);
      }

      method.reset[name] = "reset" + upname;
      members[method.reset[name]] = function() {
        return qx.core.Property.executeOptimizedSetter(this, clazz, name, "reset");
      }

      if (config.inheritable || config.apply || config.event || config.deferredInit)
      {
        method.init[name] = "init" + upname;
        members[method.init[name]] = function(value) {
          return qx.core.Property.executeOptimizedSetter(this, clazz, name, "init", arguments);
        }
        if (qx.core.Environment.get("qx.debug")) {
          members[method.init[name]].$$propertyMethod = true;
        }
      }

      if (config.inheritable)
      {
        method.refresh[name] = "refresh" + upname;
        members[method.refresh[name]] = function(value) {
          return qx.core.Property.executeOptimizedSetter(this, clazz, name, "refresh", arguments);
        }
        if (qx.core.Environment.get("qx.debug")) {
          members[method.refresh[name]].$$propertyMethod = true;
        }
      }

      method.setRuntime[name] = "setRuntime" + upname;
      members[method.setRuntime[name]] = function(value) {
        return qx.core.Property.executeOptimizedSetter(this, clazz, name, "setRuntime", arguments);
      }

      method.resetRuntime[name] = "resetRuntime" + upname;
      members[method.resetRuntime[name]] = function() {
        return qx.core.Property.executeOptimizedSetter(this, clazz, name, "resetRuntime");
      }

      if (config.themeable)
      {
        method.setThemed[name] = "setThemed" + upname;
        members[method.setThemed[name]] = function(value) {
          return qx.core.Property.executeOptimizedSetter(this, clazz, name, "setThemed", arguments);
        }

        method.resetThemed[name] = "resetThemed" + upname;
        members[method.resetThemed[name]] = function() {
          return qx.core.Property.executeOptimizedSetter(this, clazz, name, "resetThemed");
        }
        if (qx.core.Environment.get("qx.debug")) {
          members[method.setThemed[name]].$$propertyMethod = true;
          members[method.resetThemed[name]].$$propertyMethod = true;
        }
      }

      if (config.check === "Boolean")
      {
        members["toggle" + upname] = new Function("return this." + method.set[name] + "(!this." + method.get[name] + "())");
        members["is" + upname] = new Function("return this." + method.get[name] + "()");

        if (qx.core.Environment.get("qx.debug")) {
          members["toggle" + upname].$$propertyMethod = true;
          members["is" + upname].$$propertyMethod = true;
        }
      }

      // attach a flag to makr generated property methods
      if (qx.core.Environment.get("qx.debug")) {
        members[method.get[name]].$$propertyMethod = true;
        members[method.set[name]].$$propertyMethod = true;
        members[method.reset[name]].$$propertyMethod = true;
        members[method.setRuntime[name]].$$propertyMethod = true;
        members[method.resetRuntime[name]].$$propertyMethod = true;
      }
    },


    /**
     * Returns if the reference for the given property check should be removed
     * on dispose.
     *
     * @param check {var} The check of the property definition.
     * @return {Boolean} If the dereference key should be set.
     */
    __shouldBeDereferenced :  function(check) {
      return !!this.__dereference[check];
    },


    /** @type {Map} Internal data field for error messages used by {@link #error} */
    __errors :
    {
      0 : 'Could not change or apply init value after constructing phase!',
      1 : 'Requires exactly one argument!',
      2 : 'Undefined value is not allowed!',
      3 : 'Does not allow any arguments!',
      4 : 'Null value is not allowed!',
      5 : 'Is invalid!'
    },


    /**
     * Error method used by the property system to report errors.
     *
     * @param obj {qx.core.Object} Any qooxdoo object
     * @param id {Integer} Numeric error identifier
     * @param property {String} Name of the property
     * @param variant {String} Name of the method variant e.g. "set", "reset", ...
     * @param value {var} Incoming value
     */
    error : function(obj, id, property, variant, value)
    {
      var classname = obj.constructor.classname;
      var msg = "Error in property " + property + " of class " + classname +
        " in method " + this.$$method[variant][property] + " with incoming value '" + value + "': ";

      throw new Error(msg + (this.__errors[id] || "Unknown reason: " + id));
    },


    /**
     * Compiles a string builder object to a function, executes the function and
     * returns the return value.
     *
     * @param instance {Object} Instance which have called the original method
     * @param members {Object} Prototype members map where the new function should be stored
     * @param name {String} Name of the property
     * @param variant {String} Function variant e.g. get, set, reset, ...
     * @param code {Array} Array which contains the code
     * @param args {arguments} Incoming arguments of wrapper method
     * @return {var} Return value of the generated function
     */
    __unwrapFunctionFromCode : function(instance, members, name, variant, code, args)
    {
      var store = this.$$method[variant][name];

      // Output generate code
      if (qx.core.Environment.get("qx.debug"))
      {
        if (qx.core.Environment.get("qx.debug.property.level") > 1) {
          qx.Bootstrap.debug("Code[" + this.$$method[variant][name] + "]: " + code);
        }
      }
      // Overriding temporary wrapper
      members[store] =  code

      // Enable profiling code
      if (qx.core.Environment.get("qx.aspects")) {
        members[store] = qx.core.Aspect.wrap(instance.classname + "." + store, members[store], "property");
      }

      qx.Bootstrap.setDisplayName(members[store], instance.classname + ".prototype", store)

      // Executing new function
      if (args === undefined) {
        return instance[store]();
      } else if (qx.core.Environment.get("qx.debug")) {
        return instance[store].apply(instance, args);
      } else {
        return instance[store](args[0]);
      }
    },


    /**
     * Generates the optimized getter
     * Supported variants: get
     *
     * @param instance {Object} the instance which calls the method
     * @param clazz {Class} the class which originally defined the property
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     * @return {var} Execute return value of apply generated function, generally the incoming value
     */
    executeOptimizedGetter : function(instance, clazz, name, variant)
    {
      var config = clazz.$$properties[name];
      var members = clazz.prototype;
      var store = this.$$store;

      var code = function() {

          if(this[store.runtime[name]]!==undefined)
            return this[store.runtime[name]];

          if (config.inheritable)
          {
            if(this[store.inherit[name]]!==undefined)
              return this[store.inherit[name]];
          }

          if(this[store.user[name]]!==undefined)
            return this[store.user[name]];

          if (config.themeable)
          {
            if(this[store.theme[name]]!==undefined)
              return this[store.theme[name]];
          }

          if (config.deferredInit && config.init === undefined)
          {
            if(this[store.init[name]]!==undefined)
              return this[store.init[name]];
          }

          if (config.init !== undefined)
          {
            if (config.inheritable)
            {
              var init=this[store.init[name]];

              if (config.nullable) {
                if(init==qx.core.Property.$$inherit)init=null;
              } else if (config.init !== undefined) {
                return this[store.init[name]];
              } else {
                if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property " + name + ' of an instance of ' + clazz.classname + ' is not (yet) ready!');
              }

              return init;
            }
            else
            {
              return this[store.init[name]];
            }
          }
          else if (config.inheritable || config.nullable) {
            return null;
          } else {
            throw new Error('Property ' + name + ' of an instance of ' + clazz.classname + ' is not (yet) ready!');
          }
        };

      return this.__unwrapFunctionFromCode(instance, members, name, variant, code);
    },

    /**
     * Generates the optimized setter
     * Supported variants: set, reset, init, refresh, style, unstyle
     *
     * @param instance {Object} the instance which calls the method
     * @param clazz {Class} the class which originally defined the property
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     * @param args {arguments} Incoming arguments of wrapper method
     * @return {var} Execute return value of apply generated function, generally the incoming value
     */
    executeOptimizedSetter : function(instance, clazz, name, variant, args)
    {
      var config = clazz.$$properties[name];
      var members = clazz.prototype;
      var incomingValue = variant === "set" || variant === "setThemed" || variant === "setRuntime" || (variant === "init" && config.init === undefined);
      var hasCallback = config.apply || config.event || config.inheritable;
      var store = this.__getStore(variant, name);
      var that = this;

      var code = function (value) {
        var prop=qx.core.Property;
        var computed;

        var setterPreConditions = that.__emitSetterPreConditions(prop, config, name, variant, incomingValue);
        setterPreConditions(value);

        if (incomingValue) {
          var incomingValueTransformation = that.__emitIncomingValueTransformation(clazz, config, name);
          value = incomingValueTransformation(value);
        }

        if (hasCallback) {
          //that.__emitOldNewComparison_1(incomingValue, store, variant);
          var resetValue = (
            variant === "reset" ||
            variant === "resetThemed" ||
            variant === "resetRuntime"
          );

          if (incomingValue) {
            if(that[store]===value)return value;
          } else if (resetValue) {
            if(that[store]===undefined)return;
          }
        }

        if (config.inheritable) {
          var inherit=prop.$$inherit;
        }

        if (qx.core.Environment.get("qx.debug"))
        {
          if (incomingValue) {
            var incomingValueValidation = that.__emitIncomingValueValidation(prop, inherit, config, clazz, name, variant);
            incomingValueValidation(value);
          }
        }

        if (!hasCallback) {
          var emitStoreValue = that.__emitStoreValue(name, variant, incomingValue);
          // the enclosing function will be called with proper 'this' binding,
          // so it should not be necessary to explicitly bind 'this' for the
          // subcalls
          //emitStoreValue.call(instance, value) 
          emitStoreValue(value);
        } else {
          var emitStoreComputedAndOldValue = that.__emitStoreComputedAndOldValue(config, name, variant, incomingValue);
          computed = emitStoreComputedAndOldValue(value, prop);
        }

        if (config.inheritable) {
          var emitStoreInheritedPropertyValue = that.__emitStoreInheritedPropertyValue(config, name, variant);
          computed = emitStoreInheritedPropertyValue(value, computed);
        } else if (hasCallback) {
          var emitNormalizeUndefinedValues = that.__emitNormalizeUndefinedValues(config, name, variant)
          emitNormalizeUndefinedValues(value);
        }

        if (hasCallback)
        {
          that.__emitCallCallback(code, config, name, variant);

          // Refresh children
          // Requires the parent/children interface
          if (config.inheritable && members._getChildren) {
            that.__emitRefreshChildrenValue(code, name);
          }
        }

        // Return value
        if (incomingValue) {
          return value;
        }
      };

      return this.__unwrapFunctionFromCode(instance, members, name, variant, code, args);
    },

    __getSetter : function(clazz, config, name, variant)
    {
      var prop = qx.core.Property;
      var msg = "Invalid incoming value for property '"+name+"' of class '"+clazz+"'";
      //var config_apply = config.apply; // etc.

      return function(value)
      {
        var computed, old;
        if (arguments.length !== 1)
          prop.error(this, 1, name, variant, value);

        if (value === undefined)
          prop.error(this, 2, name, variant, value);

        if (this[prop.$$store.user[name]] === value)
          return value;

        if (value !== null)
          if (!(qx.core.Assert.assertString(value, msg) || true))
            prop.error(this, 5, name, variant, value);

        if (this[prop.$$store.runtime[name]] !== undefined)
        {
          old = computed = this[prop.$$store.runtime[name]];
          this[prop.$$store.user[name]] = value;
        } else if (this[prop.$$store.user[name]] !== undefined)
        {
          old = this[prop.$$store.user[name]];
          computed = this[prop.$$store.user[name]] = value;
        } else if (this[prop.$$store.useinit[name]])
        {
          old = this[prop.$$store.init[name]];
          delete this[prop.$$store.useinit[name]];
          computed = this[prop.$$store.user[name]] = value;
        } else
        {
          computed = this[prop.$$store.user[name]] = value;
        }

        if (old === computed)
          return value;

        if (old === undefined)
          old = null;

        if (config.apply)
          this[config.apply](computed, old, name, variant);
        if (config.event)
        {
          var reg = qx.event.Registration;
          if (reg.hasListener(this, config.event))
            reg.fireEvent(this, config.event, qx.event.type.Data, [computed, old]);
        }
        return value;
      }
    },


    /**
     * Get the object to store the value for the given variant
     *
     * @param variant {String} Method variant.
     * @param name {String} name of the property
     *
     * @return {Object} the value store
     */
    __getStore : function(variant, name)
    {
      if (variant === "setRuntime" || variant === "resetRuntime") {
        var store = this.$$store.runtime[name];
      } else if (variant === "setThemed" || variant === "resetThemed") {
        store = this.$$store.theme[name];
      } else if (variant === "init") {
        store = this.$$store.init[name];
      } else {
        store = this.$$store.user[name];
      }

      return store;
    },


    /**
     * Emit code to check the arguments pre-conditions
     *
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     * @param incomingValue {Boolean} Whether the setter has an incoming value
     */
    __emitSetterPreConditions : function(prop, config, name, variant, incomingValue)
    {
      return function(value) {
        if (qx.core.Environment.get("qx.debug"))
        {
          if (variant === "init") {
            if(this.$$initialized)prop.error(this,0,name,variant,value);
          }

          if (variant === "refresh")
          {
            // do nothing
            // refresh() is internal => no arguments test
            // also note that refresh() supports "undefined" values
          }
          else if (incomingValue)
          {
            // Check argument length
            if(arguments.length!==1)prop.error(this,1,name,variant,value);

            // Undefined check
            if(value===undefined)prop.error(this,2,name,variant,value);
          }
          else
          {
            // Check argument length
            if(arguments.length!==0)prop.error(this,3,name,variant,value);
          }
        }
        else
        {
          // Undefined check
          if (variant === "set") {
            if(value===undefined)prop.error(this,2,name,variant,value);
          }
        }
      };
    },


    /**
     * Emit code to apply the "validate" and "transform" config keys.
     *
     * @param code {String[]} String array to append the code to
     * @param clazz {Class} the class which originally defined the property
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     */
    __emitIncomingValueTransformation : function(clazz, config, name)
    {
      return function(value) 
      {
        // Call user-provided transform method, if one is provided.  Transform
        // method should either throw an error or return the new value.
        if (config.transform) {
          value=this[config.transform](value);
        }

        // Call user-provided validate method, if one is provided.  Validate
        // method should either throw an error or do nothing.
        if (config.validate) {
          // if it is a string
          if (typeof config.validate === "string") {
            this[config.validate](value);
          // if its a function otherwise
          } else if (config.validate instanceof Function) {
            clazz.classname.$$properties[name].validate.call(this, value);
          }
        }
        return value;
      };
    },


    /**
     * Emit code, which returns if the incoming value equals the current value.
     *
     * @param code {String[]} String array to append the code to
     * @param incomingValue {Boolean} Whether the setter has an incoming value
     * @param store {Object} The data store to use for the incoming value
     * @param variant {String} Method variant.
     */
    __emitOldNewComparison : function(code, incomingValue, store, variant)
    {
      var resetValue = (
        variant === "reset" ||
        variant === "resetThemed" ||
        variant === "resetRuntime"
      );

      if (incomingValue) {
        code.push('if(this.', store, '===value)return value;');
      } else if (resetValue) {
        code.push('if(this.', store, '===undefined)return;');
      }
    },

    __emitOldNewComparison_1 : function(incomingValue, store, variant)
    {
      return function(value) 
      {
        var resetValue = (
          variant === "reset" ||
          variant === "resetThemed" ||
          variant === "resetRuntime"
        );

        if (incomingValue) {
          if(this[store]===value)return value;
        } else if (resetValue) {
          if(this[store]===undefined)return;
        }
      };
    },


    /**
     * Emit code, which performs validation of the incoming value according to
     * the "nullable", "check" and "inheritable" config keys.
     *
     * @signature function(code, config, clazz, name, variant)
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param clazz {Class} the class which originally defined the property
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     */
    __emitIncomingValueValidation : qx.core.Environment.select("qx.debug",
    {
      "true" : function(prop, inherit, config, clazz, name, variant)
      {
        return function(value)
        {
          // Null check
          if (!config.nullable) {
            if(value===null)prop.error(this,4,name,variant,value);
          }

          // Processing check definition
          if (config.check !== undefined)
          {
            //code.push('var msg = "Invalid incoming value for property \''+name+'\' of class \'' + clazz.classname + '\'";');
            var msg = "Invalid incoming value for property '"+name+"' of class '" + clazz.classname + "'";

            // Accept "null"
            if (config.nullable && value!==null) 
            {

              // Inheritable properties always accept "inherit" as value
              if (config.inheritable && value!==inherit) 
              {
                if (this.__checks[config.check] !== undefined)
                {
                  var cond = !(this.__checks[config.check]);
                }
                else if (qx.Class.isDefined(config.check))
                {
                  cond = qx.core.Assert.assertInstance(value, qx.Class.getByName(config.check), msg);
                }
                else if (qx.Interface && qx.Interface.isDefined(config.check))
                {
                  cond = qx.core.Assert.assertInterface(value, qx.Interface.getByName(config.check), msg);
                }
                else if (typeof config.check === "function")
                {
                  cond = !clazz.classname.$$properties[name].check.call(this, value);
                }
                else if (typeof config.check === "string")
                {
                  cond = !(config.check);
                }
                else if (config.check instanceof Array)
                {
                  cond = qx.core.Assert.assertInArray(value, clazz.classname.$$properties[name].check, msg);
                }
                else
                {
                  throw new Error("Could not add check to property " + name + " of class " + clazz.classname);
                }

                if (cond)prop.error(this,5,name,variant,value);
              }
            }
          }
        };
      },

      "false" : undefined
    }),


    /**
     * Emit code to store the incoming value
     *
     * @param code {String[]} String array to append the code to
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     * @param incomingValue {Boolean} Whether the setter has an incoming value
     */
    __emitStoreValue : function(name, variant, incomingValue)
    {
      var prop = this;
      return function(value)
      {
        if (variant === "setRuntime")
        {
          this[prop.$$store.runtime[name]]=value;
        }
        else if (variant === "resetRuntime")
        {
          if(this[prop.$$store.runtime[name]]!==undefined)
            delete this[prop.$$store.runtime[name]];
        }
        else if (variant === "set")
        {
          this[prop.$$store.user[name]]=value;
        }
        else if (variant === "reset")
        {
          if(this[prop.$$store.user[name]]!==undefined)
            delete this[prop.$$store.user[name]];
        }
        else if (variant === "setThemed")
        {
          this[prop.$$store.theme[name]]=value;
        }
        else if (variant === "resetThemed")
        {
          if(this[prop.$$store.theme[name]]!==undefined)
            delete this[prop.$$store.theme[name]];
        }
        else if (variant === "init" && incomingValue)
        {
          this[prop.$$store.init[name]]=value;
        }
      };
    },


    /**
     * Emit code to store the incoming value and compute the "old" and "computed"
     * values.
     *
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     * @param incomingValue {Boolean} Whether the setter has an incoming value
     */
    __emitStoreComputedAndOldValue : function(config, name, variant, incomingValue)
    {
      return function(value, prop)
      {
        if (config.inheritable) {
          var computed, old=this[prop.$$store.inherit[name]];
        } else {
          var computed, old;
        }


        // OLD = RUNTIME VALUE
        if(this[prop.$$store.runtime[name]]!==undefined)
        {
          if (variant === "setRuntime")
          {
            // Replace it with new value
            computed=this[prop.$$store.runtime[name]]=value;
          }
          else if (variant === "resetRuntime")
          {
            // Delete field
            delete this[prop.$$store.runtime[name]];

            // Complex compution of new value
            if(this[prop.$$store.user[name]]!==undefined)
              computed=this[prop.$$store.user[name]];
            else if(this[prop.$$store.theme[name]]!==undefined)
              computed=this[prop.$$store.theme[name]];
            else if(this[prop.$$store.init[name]]!==undefined){
              computed=this[prop.$$store.init[name]];
              this[prop.$$store.useinit[name]]=true;
            }
          }
          else
          {
            // Use runtime value as it has higher priority
            old=computed=this[prop.$$store.runtime[name]];

            // Store incoming value
            if (variant === "set")
            {
              this[prop.$$store.user[name]]=value;
            }
            else if (variant === "reset")
            {
              delete this[prop.$$store.user[name]];
            }
            else if (variant === "setThemed")
            {
              this[prop.$$store.theme[name]]=value;
            }
            else if (variant === "resetThemed")
            {
              delete this[prop.$$store.theme[name]];
            }
            else if (variant === "init" && incomingValue)
            {
              this[prop.$$store.init[name]]=value;
            }
          }
        }


        // OLD = USER VALUE
        else if(this[prop.$$store.user[name]]!==undefined)
        {
          if (variant === "set")
          {
            if (!config.inheritable)
            {
              // Remember old value
              old=this[prop.$$store.user[name]];
            }

            // Replace it with new value
            computed=this[prop.$$store.user[name]]=value;
          }
          else if (variant === "reset")
          {
            if (!config.inheritable)
            {
              // Remember old value
              old=this[prop.$$store.user[name]];
            }

            // Delete field
            delete this[prop.$$store.user[name]];

            // Complex compution of new value
            if(this[prop.$$store.runtime[name]]!==undefined)
              computed=this[prop.$$store.runtime[name]];
            if(this[prop.$$store.theme[name]]!==undefined)
              computed=this[prop.$$store.theme[name]];
            else if(this[prop.$$store.init[name]]!==undefined){
              computed=this[prop.$$store.init[name]];
              this[prop.$$store.useinit[name]]=true;
            }
          }
          else
          {
            if (variant === "setRuntime")
            {
              // Use runtime value where it has higher priority
              computed=this[prop.$$store.runtime[name]]=value;
            }
            else if (config.inheritable)
            {
              // Use user value where it has higher priority
              computed=this[prop.$$store.user[name]];
            }
            else
            {
              // Use user value where it has higher priority
              old=computed=this[prop.$$store.user[name]];
            }

            // Store incoming value
            if (variant === "setThemed")
            {
              this[prop.$$store.theme[name]]=value;
            }
            else if (variant === "resetThemed")
            {
              delete this[prop.$$store.theme[name]];
            }
            else if (variant === "init" && incomingValue)
            {
              this[prop.$$store.init[name]]=value;
            }
          }
        }


        // OLD = THEMED VALUE
        if (config.themeable)
        {
          if(this[prop.$$store.theme[name]]!==undefined)
          {
            if (!config.inheritable)
            {
              old=this[prop.$$store.theme[name]];
            }

            if (variant === "setRuntime")
            {
              computed=this[prop.$$store.runtime[name]]=value;
            }

            else if (variant === "set")
            {
              computed=this[prop.$$store.user[name]]=value;
            }

            // reset() is impossible, because the user has higher priority than
            // the themed value, so the themed value has no chance to ever get used,
            // when there is an user value, too.

            else if (variant === "setThemed")
            {
              computed=this[prop.$$store.theme[name]]=value;
            }
            else if (variant === "resetThemed")
            {
              // Delete entry
              delete this[prop.$$store.theme[name]];

              // Fallback to init value
              if(this[prop.$$store.init[name]]!==undefined){
                computed=this[prop.$$store.init[name]];
                this[prop.$$store.useinit[name]]=true;
              }
            }
            else if (variant === "init")
            {
              if (incomingValue) {
                this[prop.$$store.init[name]]=value;
              }

              computed=this[prop.$$store.theme[name]];
            }
            else if (variant === "refresh")
            {
              computed=this[prop.$$store.theme[name]];
            }
          }


          // OLD = INIT VALUE
          else if(this[prop.$$store.useinit[name]])
          {
            if (!config.inheritable) {
              old=this[prop.$$store.init[name]];
            }

            if (variant === "init")
            {
              if (incomingValue) {
                computed=this[prop.$$store.init[name]]=value;
              } else {
                computed=this[prop.$$store.init[name]];
              }

              // useinit flag is already initialized
            }

            // reset(), resetRuntime() and resetStyle() are impossible, because the user and themed values have a
            // higher priority than the init value, so the init value has no chance to ever get used,
            // when there is an user or themed value, too.

            else if (variant === "set" || variant === "setRuntime" || variant === "setThemed" || variant === "refresh")
            {
              delete this[prop.$$store.useinit[name]];

              if (variant === "setRuntime") {
                computed=this[prop.$$store.runtime[name]]=value;
              } else if (variant === "set") {
                computed=this[prop.$$store.user[name]]=value;
              } else if (variant === "setThemed") {
                computed=this[prop.$$store.theme[name]]=value;
              } else if (variant === "refresh") {
                computed=this[prop.$$store.init[name]];
              }
            }
          }
        }

        // OLD = NONE

        // reset(), resetRuntime() and resetStyle() are impossible because otherwise there
        // is already an old value
        else
        {
          if (variant === "set" || variant === "setRuntime" || variant === "setThemed" || variant === "init")
          {

            if (variant === "setRuntime")
            {
              computed=this[prop.$$store.runtime[name]]=value;
            }

            else if (variant === "set")
            {
              computed=this[prop.$$store.user[name]]=value;
            }

            else if (variant === "setThemed")
            {
              computed=this[prop.$$store.theme[name]]=value;
            }

            else if (variant === "init")
            {
              if (incomingValue) {
                computed=this[prop.$$store.init[name]]=value;
              } else {
                computed=this[prop.$$store.init[name]];
              }

              this[prop.$$store.useinit[name]]=true;
            }

            // refresh() will work with the undefined value, later
          }
        }
        return computed;
      };
    },


    /**
     * Emit code to store the value of an inheritable property
     *
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     */
    __emitStoreInheritedPropertyValue : function(config, name, variant)
    {
      return function(value, computed)
      {
        if(computed===undefined||computed===inherit){');

        if (variant === "refresh") {
          computed=value;');
        } else {
          var pa=this.getLayoutParent();if(pa)computed=pa.', this.$$store.inherit[name], ';');
        }

        // Fallback to init value if inheritance was unsuccessful
        if((computed===undefined||computed===inherit)&&');
        this.', this.$$store.init[name], '!==undefined&&');
        this.', this.$$store.init[name], '!==inherit){');
          computed=this.', this.$$store.init[name], ';');
          this.', this.$$store.useinit[name], '=true;');
        }else{');
        delete this.', this.$$store.useinit[name], ';}');

        }');

        // Compare old/new computed value
        if(old===computed)return value;');

        // Note: At this point computed can be "inherit" or "undefined".

        // Normalize "inherit" to undefined and delete inherited value
        if(computed===inherit){');
        computed=undefined;delete this.', this.$$store.inherit[name], ';');
        }');

        // Only delete inherited value
        else if(computed===undefined)');
        delete this.', this.$$store.inherit[name], ';');

        // Store inherited value
        else this.', this.$$store.inherit[name], '=computed;');

        // Protect against normalization
        var backup=computed;');

        // After storage finally normalize computed and old value
        if (config.init !== undefined && variant !== "init") {
          if(old===undefined)old=this.', this.$$store.init[name], ";");
        } else {
          if(old===undefined)old=null;');
        }
        if(computed===undefined||computed==inherit)computed=null;');
        return computed;
      };
    },


    /**
     * Emit code to normalize the old and incoming values from undefined to
     * <code>null</code>.
     *
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     * @param variant {String} Method variant.
     */
    __emitNormalizeUndefinedValues : function(code, config, name, variant)
    {
      // Properties which are not inheritable have no possibility to get
      // undefined at this position. (Hint: set(), setRuntime() and setThemed() only allow non undefined values)
      if (variant !== "set" && variant !== "setRuntime" && variant !== "setThemed") {
        code.push('if(computed===undefined)computed=null;');
      }

      // Compare old/new computed value
      code.push('if(old===computed)return value;');

      // Normalize old value
      if (config.init !== undefined && variant !== "init") {
        code.push('if(old===undefined)old=this.', this.$$store.init[name], ";");
      } else {
        code.push('if(old===undefined)old=null;');
      }
    },


    /**
     * Emit code to call the apply method and fire the change event
     *
     * @param code {String[]} String array to append the code to
     * @param config {Object} The property configuration map
     * @param name {String} name of the property
     * @param variant {String} variant of the method e.g. setThemed
     */
    __emitCallCallback : function(code, config, name, variant)
    {
      // Execute user configured setter
      if (config.apply) {
        code.push('this.', config.apply, '(computed, old, "', name, '", "', variant, '");');
      }

      // Fire event
      if (config.event) {
        code.push(
          "var reg=qx.event.Registration;",
          "if(reg.hasListener(this, '", config.event, "')){",
          "reg.fireEvent(this, '", config.event, "', qx.event.type.Data, [computed, old]", ")}"
        );
      }
    },


    /**
     * Emit code to update the inherited values of child objects
     *
     * @param code {String[]} String array to append the code to
     * @param name {String} name of the property
     */
    __emitRefreshChildrenValue : function(code, name)
    {
      code.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
      code.push('if(a[i].', this.$$method.refresh[name], ')a[i].', this.$$method.refresh[name], '(backup);');
      code.push('}');
    }
  }
});
