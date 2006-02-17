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

#package(toolbar)
#post(QxDomDimension)
#post(QxDomLocation)

************************************************************************ */

function QxToolBarMenuButton(vText, vMenu, vIcon, vIconWidth, vIconHeight, vFlash)
{
  QxToolBarButton.call(this, vText, vIcon, vIconWidth, vIconHeight, vFlash);

  if (QxUtil.isValidObject(vMenu)) {
    this.setMenu(vMenu);
  };

  /*
  this._menuButton = new QxImage("widgets/arrows/down_small.gif");
  this._menuButton.setAnonymous(true);
  this.addAtEnd(this._menuButton);
  */
};

QxToolBarMenuButton.extend(QxToolBarButton, "QxToolBarMenuButton");




/*
---------------------------------------------------------------------------
  PROPERTIES
---------------------------------------------------------------------------
*/

QxToolBarMenuButton.addProperty({ name : "menu", type : QxConst.TYPEOF_OBJECT, instance : "QxMenu" });





/*
---------------------------------------------------------------------------
  UTILITIES
---------------------------------------------------------------------------
*/

proto.getParentToolBar = function()
{
  var vParent = this.getParent();

  if (vParent instanceof QxToolBarPart) {
    vParent = vParent.getParent();
  };

  return vParent instanceof QxToolBar ? vParent : null;
};

proto._showMenu = function(vFromKeyEvent)
{
  var vMenu = this.getMenu();

  if (vMenu)
  {
    this.addState(QxConst.STATE_PRESSED);

    var el = this.getElement();

    vMenu.setLeft(QxDom.getComputedPageBoxLeft(el));
    vMenu.setTop(QxDom.getComputedPageBoxTop(el) + QxDom.getComputedBoxHeight(el));

    // If this show is called from a key event occured, we want to highlight
    // the first menubutton inside.
    if (vFromKeyEvent) {
      vMenu.setHoverItem(vMenu.getFirstActiveChild());
    };

    vMenu.show();
  };
};

proto._hideMenu = function()
{
  var vMenu = this.getMenu();

  if (vMenu) {
    vMenu.hide();
  };
};





/*
---------------------------------------------------------------------------
  MODIFIERS
---------------------------------------------------------------------------
*/

proto._modifyMenu = function(propValue, propOldValue, propData)
{
  if (propOldValue)
  {
    propOldValue.setOpener(null);

    propOldValue.removeEventListener(QxConst.EVENT_TYPE_APPEAR, this._onmenuappear, this);
    propOldValue.removeEventListener(QxConst.EVENT_TYPE_DISAPPEAR, this._onmenudisappear, this);
  };

  if (propValue)
  {
    propValue.setOpener(this);

    propValue.addEventListener(QxConst.EVENT_TYPE_APPEAR, this._onmenuappear, this);
    propValue.addEventListener(QxConst.EVENT_TYPE_DISAPPEAR, this._onmenudisappear, this);
  };

  return true;
};






/*
---------------------------------------------------------------------------
  EVENTS: MOUSE
---------------------------------------------------------------------------
*/

proto._onmousedown = function(e)
{
  if (e.getTarget() != this || !e.isLeftButtonPressed()) {
    return;
  };

  this.hasState(QxConst.STATE_PRESSED) ? this._hideMenu() : this._showMenu();
};

proto._onmouseup = function(e) {};

proto._onmouseout = function(e)
{
  if (e.getTarget() != this) {
    return;
  };

  this.removeState(QxConst.STATE_OVER);
};

proto._onmouseover = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (vToolBar)
  {
    var vMenu = this.getMenu();

    switch(vToolBar.getOpenMenu())
    {
      case null:
      case vMenu:
        break;

      default:
        // hide other menus
        QxMenuManager.update();

        // show this menu
        this._showMenu();
    };
  };

  return QxToolBarButton.prototype._onmouseover.call(this, e);
};






/*
---------------------------------------------------------------------------
  EVENTS: MENU
---------------------------------------------------------------------------
*/

proto._onmenuappear = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (!vToolBar) {
    return;
  };

  var vMenu = this.getMenu();

  vToolBar.setOpenMenu(vMenu);
};

proto._onmenudisappear = function(e)
{
  var vToolBar = this.getParentToolBar();

  if (!vToolBar) {
    return;
  };

  var vMenu = this.getMenu();

  if (vToolBar.getOpenMenu() == vMenu) {
    vToolBar.setOpenMenu(null);
  };
};
