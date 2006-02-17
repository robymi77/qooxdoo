/* ************************************************************************

   qooxdoo - the new era of web interface development

   Version:
     $Id$

   Copyright:
     (C) 2004-2005 by Schlund + Partner AG, Germany
         All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.oss.schlund.de

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (aecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#package(core)
#require(QxObject)

************************************************************************ */

var QxObjectCounter = 0;
var QxObjectDataBase = [];

QxObject.toHashCode = function(o)
{
  if(o._hashCode != null) {
    return o._hashCode;
  };

  return o._hashCode = QxObjectCounter++;
};

QxObject.dispose = function()
{
  // QxDebug("QxObject", "Disposing Application");
  
  var vStart = (new Date).valueOf();
  var vObject;
  
  for (var i=QxObjectDataBase.length-1; i>=0; i--)
  {
    vObject = QxObjectDataBase[i];
    
    if (vObject != null)
    {
      // QxDebug("QxObject", "Disposing: " + vObject);
      vObject.dispose();
      QxObjectDataBase[i] = null;
    };
  };
  
  // QxDebug("QxObject", "Done in: " + ((new Date).valueOf() - vStart) + "ms");
};

QxObject.addProperty({ name : "enabled", type : QxConst.TYPEOF_BOOLEAN, defaultValue : true, getAlias : "isEnabled" });

QxObject.DEBUG_MSG_BEFORE = "[HASHCODE:";
QxObject.DEBUG_MSG_AFTER = "]";
QxObject.DEBUG_FUNCERRORPRE = "Failed to execute \"";
QxObject.DEBUG_FUNCERRORPOST = "()\": ";
