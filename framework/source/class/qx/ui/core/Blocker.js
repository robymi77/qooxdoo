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
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * This class blocks events and can be included into all widgets.
 *
 * The {@link #block} and {@link #unblock} methods provided by this class can be used
 * to block any event from the widget. When blocked,
 * the blocker widget overlays the widget to block, including the padding area.
 *
 * @ignore(qx.ui.root.Abstract)
 */
qx.Class.define("qx.ui.core.Blocker",
{
  extend : qx.core.Object,


  events :
  {
    /**
     * Fires after {@link #block} executed.
     */
    blocked : "qx.event.type.Event",


    /**
     * Fires after {@link #unblock} executed.
     */
    unblocked : "qx.event.type.Event"
  },


  /**
   * Creates a blocker for the passed widget.
   *
   * @param widget {qx.ui.core.Widget} Widget which should be added the blocker
   */
  construct: function(widget)
  {
    this.base(arguments);
    this._widget = widget;

    widget.addListener("resize", this.__onBoundsChange, this);
    widget.addListener("move", this.__onBoundsChange, this);
    widget.addListener("disappear", this.__onWidgetDisappear, this);

    if (qx.Class.isDefined("qx.ui.root.Abstract") &&
        widget instanceof qx.ui.root.Abstract) {
      this._isRoot = true;
      this.setKeepBlockerActive(true);
    }

    // dynamic theme switch
    if (qx.core.Environment.get("qx.dyntheme")) {
      qx.theme.manager.Color.getInstance().addListener(
        "changeTheme", this._onChangeTheme, this
      );
    }

    this.__activeElements = [];
    this.__focusElements = [];
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /**
     * Color of the blocker
     */
    color  :
    {
      check : "Color",
      init : null,
      nullable: true,
      apply : "_applyColor",
      themeable: true
    },


    /**
     * Opacity of the blocker
     */
    opacity :
    {
      check : "Number",
      init : 1,
      apply : "_applyOpacity",
      themeable: true
    },


    /**
     * If this property is enabled, the blocker created with {@link #block}
     * will always stay activated. This means that the blocker then gets all keyboard
     * events, this is useful to block keyboard input on other widgets.
     * Take care that only one blocker instance will be kept active, otherwise your
     * browser will freeze.
     */
    keepBlockerActive :
    {
      check : "Boolean",
      init : false
    }
  },





  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __blocker : null,
    __blockerCount : 0,

    __activeElements  : null,
    __focusElements   : null,

    __timer : null,

    _widget : null,
    _isRoot : false,

    __appearListener : null,


    /**
     * Adjust html element size on layout resizes.
     *
     * @param e {qx.event.type.Data} event object
     */
    __onBoundsChange : function(e)
    {
      var data = e.getData();

      if (this.isBlocked()) {
        this._updateBlockerBounds(data);
      }
    },


    /**
     * Widget re-appears: Update blocker size/position and attach to (new) parent
     */
    __onWidgetAppear : function()
    {
      this._updateBlockerBounds(this._widget.getBounds());
      if (this._widget.isRootWidget()) {
        this._widget.getContentElement().append(this.getBlockerElement());
      } else {
        this._widget.getLayoutParent().getContentElement().append(this.getBlockerElement());
      }
    },


    /**
     * Remove the blocker if the widget disappears
     */
    __onWidgetDisappear : function()
    {
      if (this.isBlocked()) {
        this.getBlockerElement().remove();
        this._widget.addListenerOnce("appear", this.__onWidgetAppear, this);
      }
    },


    /**
     * set the blocker's size and position
     * @param bounds {Map} Map with the new width, height, left and top values
     */
    _updateBlockerBounds : function(bounds)
    {
      this.getBlockerElement().setStyles({
        width: bounds.width + "px",
        height: bounds.height + "px",
        left: bounds.left + "px",
        top: bounds.top + "px"
      });
    },


    // property apply
    _applyColor : function(value, old)
    {
      var color = qx.theme.manager.Color.getInstance().resolve(value);
      this.getBlockerElement().setStyle("backgroundColor", color);
    },


    // property apply
    _applyOpacity : function(value, old) {
      this.getBlockerElement().setStyle("opacity", value);
    },


    /**
     * Handler for the theme change.
     * @signature function()
     */
    _onChangeTheme : qx.core.Environment.select("qx.dyntheme",
    {
      "true" : function() {
        this._applyColor(this.getColor());
      },
      "false" : null
    }),


    /**
     * Backup the current active and focused widget.
     */
    _backupActiveWidget : function()
    {
      var focusHandler = qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);

      this.__activeElements.push(focusHandler.getActive());
      this.__focusElements.push(focusHandler.getFocus());

      if (this._widget.isFocusable()) {
        this._widget.focus();
      }
    },


    /**
     * Restore the current active and focused widget.
     */
    _restoreActiveWidget : function()
    {
      var activeElementsLength = this.__activeElements.length;
      if (activeElementsLength > 0)
      {
        var widget = this.__activeElements[activeElementsLength - 1];

        if (widget) {
          qx.bom.Element.activate(widget);
        }

        this.__activeElements.pop();
      }

      var focusElementsLength = this.__focusElements.length;

      if (focusElementsLength > 0)
      {
        var widget = this.__focusElements[focusElementsLength - 1];

        if (widget) {
          qx.bom.Element.focus(this.__focusElements[focusElementsLength - 1]);
        }

        this.__focusElements.pop();
      }
    },


    /**
     * Stop the event propagation from the passed event.
     *
     * @param e {qx.event.type.Mouse} mouse event to stop propagation.
     */
    _stopPropagation : function(e) {
      e.stopPropagation();
    },


    /**
     * Refreshes the cursor by setting it to <code>null</code> and then to the
     * old value.
     */
    __refreshCursor : function() {
      var blocker = this.getBlockerElement();
      var currentCursor = blocker.getStyle("cursor");
      blocker.setStyle("cursor", null, true);
      blocker.setStyle("cursor", currentCursor, true);
    },


    /**
     * Creates the blocker element.
     *
     * @return {qx.html.Element} The blocker element
     */
    __createBlockerElement : function() {
      var blocker = qx.module.ui.Widget.create("<div>");

      var styles = {
        position: "absolute"
      };

      // IE needs some extra love here to convince it to block events.
      if ((qx.core.Environment.get("engine.name") == "mshtml"))
      {
        styles.backgroundImage = "url(" + qx.util.ResourceManager.getInstance().toUri("qx/static/blank.gif") + ")";
        styles.backgroundRepeat = "repeat";
      }

      blocker.setStyles(styles);

      blocker.on("mousedown", this._stopPropagation, this);
      blocker.on("mouseup", this._stopPropagation, this);
      blocker.on("click", this._stopPropagation, this);
      blocker.on("dblclick", this._stopPropagation, this);
      blocker.on("mousemove", this._stopPropagation, this);
      blocker.on("mouseover", this._stopPropagation, this);
      blocker.on("mouseout", this._stopPropagation, this);
      blocker.on("mousewheel", this._stopPropagation, this);
      blocker.on("contextmenu", this._stopPropagation, this);
      qx.event.Registration.addListener(blocker[0], "appear", this.__refreshCursor, this);
      qx.event.Registration.addListener(blocker[0], "disappear", this.__refreshCursor, this);

      this._applyColor(this.getColor());
      this._applyOpacity(this.getOpacity());

      return blocker;
    },


    /**
     * Get/create the blocker element
     *
     * @param widget {qx.ui.core.Widget} The blocker will be added to this
     * widget's content element
     * @return {qx.html.Element} The blocker element
     */
    getBlockerElement : function(widget)
    {
      if (!this.__blocker)
      {
        this.__blocker = this.__createBlockerElement();
        this.__blocker.setStyle("zIndex", 15);

        if (!widget) {
          if (this._isRoot) {
            widget = this._widget;
          } else {
            widget = this._widget.getLayoutParent();
          }
        }

        widget.getContentElement().append(this.__blocker);
        this.__blocker.setStyle("display", "none");
      }
      return this.__blocker;
    },


    /**
     * Block all events from this widget by placing a transparent overlay widget,
     * which receives all events, exactly over the widget.
     */
    block : function()
    {
      this._block();
    },


    /**
     * Adds the blocker to the appropriate element and includes it.
     *
     * @param zIndex {Number} All child widgets with a zIndex below this value will be blocked
     * @param blockContent {Boolean} append the blocker to the widget's content if true
     */
    _block : function(zIndex, blockContent) {
      if (!this._isRoot && !this._widget.getLayoutParent()) {
        this.__appearListener = this._widget.addListenerOnce("appear", this._block.bind(this, zIndex));
        return;
      }

      var parent;
      if (this._isRoot || blockContent) {
        parent = this._widget;
      } else {
        parent = this._widget.getLayoutParent();
      }

      var blocker = this.getBlockerElement(parent);
      if (zIndex != null) {
        blocker.setStyle("zIndex", zIndex);
      }

      this.__blockerCount++;
      if (this.__blockerCount < 2)
      {
        this._backupActiveWidget();

        var bounds = this._widget.getBounds();
        // no bounds -> widget not yet rendered -> bounds will be set on resize
        if (bounds) {
          this._updateBlockerBounds(bounds);
        }

        blocker.setStyle("display", "block");
        if (!blockContent) {
          qx.bom.Element.activate(blocker[0]);
        }

        qx.event.Registration.addListener(blocker[0], "deactivate", this.__activateBlockerElement, this);
        blocker.on("keypress", this.__stopTabEvent, this);
        blocker.on("keydown", this.__stopTabEvent, this);
        blocker.on("keyup", this.__stopTabEvent, this);

        this.fireEvent("blocked", qx.event.type.Event);
      }
    },


    /**
     * Returns whether the widget is blocked.
     *
     * @return {Boolean} Whether the widget is blocked.
     */
    isBlocked : function() {
      return this.__blockerCount > 0;
    },


    /**
     * Unblock the widget blocked by {@link #block}, but it takes care of
     * the amount of {@link #block} calls. The blocker is only removed if
     * the numer of {@link #unblock} calls is identical to {@link #block} calls.
     */
    unblock : function()
    {
      if (this.__appearListener) {
        this._widget.removeListenerById(this.__appearListener);
      }

      if (!this.isBlocked()){
        return;
      }

      this.__blockerCount--;
      if (this.__blockerCount < 1) {
        this.__unblock();
        this.__blockerCount = 0;
      }
    },


    /**
     * Unblock the widget blocked by {@link #block}, but it doesn't take care of
     * the amount of {@link #block} calls. The blocker is directly removed.
     */
    forceUnblock : function()
    {
      if (!this.isBlocked()){
        return;
      }

      this.__blockerCount = 0;
      this.__unblock();
    },


    /**
     * Unblock the widget blocked by {@link #block}.
     */
    __unblock : function()
    {
      this._restoreActiveWidget();

      var blocker = this.getBlockerElement();
      qx.event.Registration.removeListener(blocker[0], "deactivate", this.__activateBlockerElement, this);
      blocker.off("keypress", this.__stopTabEvent, this);
      blocker.off("keydown", this.__stopTabEvent, this);
      blocker.off("keyup", this.__stopTabEvent, this);
      blocker.setStyle("display", "none");

      this.fireEvent("unblocked", qx.event.type.Event);
    },


    /**
     * Get/create the content blocker element
     *
     * @return {qx.html.Element} The blocker element
     * @deprecated{3.0}
     */
    getContentBlockerElement : function() {
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.Logger.deprecatedMethodWarning(arguments.callee,
         "Please use 'getBlockerElement' instead.");
      }

      return this.getBlockerElement();
    },


    /**
     * Block direct child widgets with a zIndex below <code>zIndex</code>
     *
     * @param zIndex {Integer} All child widgets with a zIndex below this value
     *     will be blocked
     */
    blockContent : function(zIndex) {
      this._block(zIndex, true);
    },


    /**
     * Whether the content is blocked
     *
     * @return {Boolean} Whether the content is blocked
     * @deprecated{3.0}
     */
    isContentBlocked : function() {
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.Logger.deprecatedMethodWarning(arguments.callee,
         "Please use 'isBlocked' instead.");
      }

      return this.isBlocked();
    },


    /**
     * Unblock the content blocked by {@link #blockContent}, but it takes care of
     * the amount of {@link #blockContent} calls. The blocker is only removed if
     * the numer of {@link #unblockContent} calls is identical to
     * {@link #blockContent} calls.
     * @deprecated{3.0}
     */
    unblockContent : function()
    {
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.Logger.deprecatedMethodWarning(arguments.callee,
         "Please use 'unblock' instead.");
      }

      this.unblock();
    },


    /**
     * Unblock the content blocked by {@link #blockContent}, but it doesn't take
     * care of the amount of {@link #blockContent} calls. The blocker is
     * directly removed.
     * @deprecated{3.0}
     */
    forceUnblockContent : function()
    {
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.Logger.deprecatedMethodWarning(arguments.callee,
         "Please use 'forceUnblock' instead.");
      }

      this.forceUnblock();
    },


    /**
     * Stops the passed "Tab" event.
     *
     * @param e {qx.event.type.KeySequence} event to stop.
     */
    __stopTabEvent : function(e) {
      if (e.getKeyIdentifier() == "Tab") {
        e.stop();
      }
    },


    /**
     * Sets the blocker element to avtive.
     */
    __activateBlockerElement : function() {
      if (this.getKeepBlockerActive()) {
        qx.bom.Element.activate(this.getBlockerElement()[0]);
      }
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    // remove dynamic theme listener
    if (qx.core.Environment.get("qx.dyntheme")) {
      qx.theme.manager.Color.getInstance().removeListener(
        "changeTheme", this._onChangeTheme, this
      );
    }

    this._widget.removeListener("resize", this.__onBoundsChange, this);
    this._widget.removeListener("move", this.__onBoundsChange, this);
    this._widget.removeListener("appear", this.__onWidgetAppear, this);
    this._widget.removeListener("disappear", this.__onWidgetDisappear, this);

    if (this.__appearListener) {
      this._widget.removeListenerById(this.__appearListener);
    }

    this._disposeObjects("__blocker", "__timer");
    this.__activeElements = this.__focusElements =
      this._widget = null;
  }
});
