/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Schmidt (chris_schmidt)

************************************************************************ */

/* ************************************************************************

#asset(qx/test/UnitTestFlash.swf)

************************************************************************ */

qx.Class.define("qx.test.ui.embed.Flash",
{
  extend : qx.test.ui.LayoutTestCase,

  members :
  {
    __flash : null,
    
    __params : null,
    
    __variables : null,
    
    setUp : function()
    {
      this.__params = {
        wmode : "opaque",
        quality : "best",
        allowScriptAccess : "sameDomain",
        swLiveConnect : "true",
        play : "true",
        loop : "true",
        menu : "true",
        bgcolor: "#FF0000"
      };
      
      this.__variables = {
        flashVar1: "bli bla blub",
        flashVar2: "bulb alb ilb"
      };
      
      var flash = this.__flash = new qx.ui.embed.Flash("qx/test/UnitTestFlash.swf", "flashmovie");
      flash.setVariables(this.__variables);
      flash.setScale("noscale");
      flash.setPlay(true);
      flash.setLoop(true);
      flash.setMenu(true);
      flash.setBackgroundColor("red");
      
      this.getRoot().add(this.__flash, {edge: 10});
      this.flush();
    },
    
    tearDown : function() {
      this.getRoot().removeAll();
      this.__flash.destroy();
      this.__flash = null;
      this.flush();
    },
    
    testCreateFlash : function()
    {
      var that = this;      
      this.wait(2000, function()
      {
        var flash = that.__flash.getFlashElement();
        that.assertNotNull(flash);
        
        that.assertIdentical("object", flash.nodeName.toLowerCase());
        
        // general object attribute tests
        that.assertIdentical("100%", flash.width);
        that.assertIdentical("100%", flash.height);
        that.assertIdentical("flashmovie", flash.id);
        
        // object attribute tests for IE or other browser
        if (qx.core.Variant.isSet("qx.client", "mshtml"))
        {
          that.assertIdentical("clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", flash.classid);
        }
        else 
        {
          var index = flash.data.lastIndexOf("qx/test/UnitTestFlash.swf");
          var substring = flash.data.substring(index, flash.data.length);
          
          that.assertIdentical("qx/test/UnitTestFlash.swf", substring);
          that.assertIdentical("application/x-shockwave-flash", flash.type);
        }
        
        // test parmas and flashvars
        var params = that.__params;
        params.flashvars = "flashVar1=bli bla blub&flashVar2=bulb alb ilb";
        
        var children = flash.childNodes;
        for(var name in params)
        {
          var testSuccessful = false;
          for(var i = 0; i < children.length; i++)
          {
            that.assertIdentical("param", children[i].nodeName.toLowerCase());
           
            if (children[i].name === name) {
              testSuccessful = true;
              that.assertIdentical(params[name], children[i].value);
              break;
            }
          }
          that.assertTrue(testSuccessful, "Param element with name:'" + name + "' not found!");
        }
      });
    },
    
    testExternalInterface : function()
    {
      var result = "";
      
      var that = this;
      this.wait(5000, function()
      {
        var flash = that.__flash.getFlashElement();
        if (flash.echo) {
          result = flash.echo("hello echo!");
        }
        
        that.assertIdentical("hello echo!", result, "This error is expected if" +
          " you run the test from a filesystem and not from a webserver.");
      });
    }    
  }
});
