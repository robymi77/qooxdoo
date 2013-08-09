//000796 Code[setSize]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "size", "set", value);

  if (value === undefined)prop.error(this, 2, "size", "set", value);

  if (value === null)prop.error(this, 4, "size", "set", value);

  var msg = "Invalid incoming value for property 'size' of class 'qx.util.ObjectPool'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "size", "set", value);

  this.$$user_size = value;
  return value;
}

//000798 Code[getSize]:
function(value)
{
  if (this.$$runtime_size !== undefined)return this.$$runtime_size;

  if (this.$$user_size !== undefined)return this.$$user_size;
   else return this.$$init_size;

}

//000803 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Meta'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  return value;
}

//000805 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Color'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTheme')) {
    reg.fireEvent(this, 'changeTheme', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000807 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Decoration'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTheme')) {
    reg.fireEvent(this, 'changeTheme', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000809 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Font'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTheme')) {
    reg.fireEvent(this, 'changeTheme', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000810 Code[setSize]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "size", "set", value);

  if (value === undefined)prop.error(this, 2, "size", "set", value);

  if (this.$$user_size === value)return value;

  var msg = "Invalid incoming value for property 'size' of class 'qx.bom.Font'";
  if (value !== null)if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "size", "set", value);


  var computed, old;
  if (this.$$runtime_size !== undefined)
  {
    old = computed = this.$$runtime_size;
    this.$$user_size = value;
  } else if (this.$$user_size !== undefined)
  {
    old = this.$$user_size;
    computed = this.$$user_size = value;
  } else if (this.$$useinit_size)
  {
    old = this.$$init_size;
    delete this.$$useinit_size;
    computed = this.$$user_size = value;
  } else
  {
    computed = this.$$user_size = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applySize(computed, old, "size", "set");
  return value;
}

//000811 Code[setLineHeight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "lineHeight", "set", value);

  if (value === undefined)prop.error(this, 2, "lineHeight", "set", value);

  if (this.$$user_lineHeight === value)return value;

  var msg = "Invalid incoming value for property 'lineHeight' of class 'qx.bom.Font'";
  if (value !== null)if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "lineHeight", "set", value);


  var computed, old;
  if (this.$$runtime_lineHeight !== undefined)
  {
    old = computed = this.$$runtime_lineHeight;
    this.$$user_lineHeight = value;
  } else if (this.$$user_lineHeight !== undefined)
  {
    old = this.$$user_lineHeight;
    computed = this.$$user_lineHeight = value;
  } else if (this.$$useinit_lineHeight)
  {
    old = this.$$init_lineHeight;
    delete this.$$useinit_lineHeight;
    computed = this.$$user_lineHeight = value;
  } else
  {
    computed = this.$$user_lineHeight = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyLineHeight(computed, old, "lineHeight", "set");
  return value;
}

//000812 Code[setFamily]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "family", "set", value);

  if (value === undefined)prop.error(this, 2, "family", "set", value);

  if (this.$$user_family === value)return value;

  var msg = "Invalid incoming value for property 'family' of class 'qx.bom.Font'";
  if (value !== null)if (!(qx.core.Assert.assertArray(value, msg) || true))prop.error(this, 5, "family", "set", value);


  var computed, old;
  if (this.$$runtime_family !== undefined)
  {
    old = computed = this.$$runtime_family;
    this.$$user_family = value;
  } else if (this.$$user_family !== undefined)
  {
    old = this.$$user_family;
    computed = this.$$user_family = value;
  } else if (this.$$useinit_family)
  {
    old = this.$$init_family;
    delete this.$$useinit_family;
    computed = this.$$user_family = value;
  } else
  {
    computed = this.$$user_family = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyFamily(computed, old, "family", "set");
  return value;
}

//000813 Code[setBold]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "bold", "set", value);

  if (value === undefined)prop.error(this, 2, "bold", "set", value);

  if (this.$$user_bold === value)return value;

  var msg = "Invalid incoming value for property 'bold' of class 'qx.bom.Font'";
  if (value !== null)if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "bold", "set", value);


  var computed, old;
  if (this.$$runtime_bold !== undefined)
  {
    old = computed = this.$$runtime_bold;
    this.$$user_bold = value;
  } else if (this.$$user_bold !== undefined)
  {
    old = this.$$user_bold;
    computed = this.$$user_bold = value;
  } else if (this.$$useinit_bold)
  {
    old = this.$$init_bold;
    delete this.$$useinit_bold;
    computed = this.$$user_bold = value;
  } else
  {
    computed = this.$$user_bold = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBold(computed, old, "bold", "set");
  return value;
}

//000814 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Icon'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTheme')) {
    reg.fireEvent(this, 'changeTheme', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000815 Code[setTheme]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "theme", "set", value);

  if (value === undefined)prop.error(this, 2, "theme", "set", value);

  if (this.$$user_theme === value)return value;

  var msg = "Invalid incoming value for property 'theme' of class 'qx.theme.manager.Appearance'";
  if (value !== null)if (!(value !== null && value.$$type === "Theme"))prop.error(this, 5, "theme", "set", value);


  var computed, old;
  if (this.$$runtime_theme !== undefined)
  {
    old = computed = this.$$runtime_theme;
    this.$$user_theme = value;
  } else if (this.$$user_theme !== undefined)
  {
    old = this.$$user_theme;
    computed = this.$$user_theme = value;
  } else if (this.$$useinit_theme)
  {
    old = this.$$init_theme;
    delete this.$$useinit_theme;
    computed = this.$$user_theme = value;
  } else
  {
    computed = this.$$user_theme = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyTheme(computed, old, "theme", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTheme')) {
    reg.fireEvent(this, 'changeTheme', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000817 Code[setEnabled]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "enabled", "set", value);

  if (value === undefined)prop.error(this, 2, "enabled", "set", value);

  if (this.$$user_enabled === value)return value;

  if (value === null)prop.error(this, 4, "enabled", "set", value);

  var msg = "Invalid incoming value for property 'enabled' of class 'qx.event.Timer'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "enabled", "set", value);

  var computed, old;
  if (this.$$runtime_enabled !== undefined)
  {
    old = computed = this.$$runtime_enabled;
    this.$$user_enabled = value;
  } else if (this.$$user_enabled !== undefined)
  {
    old = this.$$user_enabled;
    computed = this.$$user_enabled = value;
  } else if (this.$$useinit_enabled)
  {
    old = this.$$init_enabled;
    delete this.$$useinit_enabled;
    computed = this.$$user_enabled = value;
  } else
  {
    computed = this.$$user_enabled = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_enabled;

  this._applyEnabled(computed, old, "enabled", "set");
  return value;
}

//000820 Code[initFocusable]:
function(value)
{
  var prop = qx.core.Property;
  if (this.$$initialized)prop.error(this, 0, "focusable", "init", value);

  if (arguments.length !== 0)prop.error(this, 3, "focusable", "init", value);

  var computed, old;
  if (this.$$runtime_focusable !== undefined) {
    old = computed = this.$$runtime_focusable;
  } else if (this.$$user_focusable !== undefined) {
    old = computed = this.$$user_focusable;
  } else if (this.$$useinit_focusable)
  {
    old = this.$$init_focusable;
    computed = this.$$init_focusable;
  } else
  {
    computed = this.$$init_focusable;
    this.$$useinit_focusable = true;
  }


  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyFocusable(computed, old, "focusable", "init");
}

//000821 Code[getTabIndex]:
function(value)
{
  if (this.$$runtime_tabIndex !== undefined)return this.$$runtime_tabIndex;

  if (this.$$user_tabIndex !== undefined)return this.$$user_tabIndex;
   else return null;

}

//000822 Code[initSelectable]:
function(value)
{
  var prop = qx.core.Property;
  if (this.$$initialized)prop.error(this, 0, "selectable", "init", value);

  if (arguments.length !== 0)prop.error(this, 3, "selectable", "init", value);

  var computed, old;
  if (this.$$runtime_selectable !== undefined) {
    old = computed = this.$$runtime_selectable;
  } else if (this.$$user_selectable !== undefined) {
    old = computed = this.$$user_selectable;
  } else if (this.$$useinit_selectable)
  {
    old = this.$$init_selectable;
    computed = this.$$init_selectable;
  } else
  {
    computed = this.$$init_selectable;
    this.$$useinit_selectable = true;
  }


  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applySelectable(computed, old, "selectable", "init");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeSelectable')) {
    reg.fireEvent(this, 'changeSelectable', qx.event.type.Data, [computed, old])
  }
}

//000823 Code[initNativeContextMenu]:
function(value)
{
  var prop = qx.core.Property;
  if (this.$$initialized)prop.error(this, 0, "nativeContextMenu", "init", value);

  if (arguments.length !== 0)prop.error(this, 3, "nativeContextMenu", "init", value);

  var computed, old;
  if (this.$$runtime_nativeContextMenu !== undefined) {
    old = computed = this.$$runtime_nativeContextMenu;
  } else if (this.$$user_nativeContextMenu !== undefined) {
    old = computed = this.$$user_nativeContextMenu;
  } else if (this.$$theme_nativeContextMenu !== undefined)
  {
    old = this.$$theme_nativeContextMenu;
    computed = this.$$theme_nativeContextMenu;
  } else if (this.$$useinit_nativeContextMenu)
  {
    old = this.$$init_nativeContextMenu;
    computed = this.$$init_nativeContextMenu;
  } else
  {
    computed = this.$$init_nativeContextMenu;
    this.$$useinit_nativeContextMenu = true;
  }



  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyNativeContextMenu(computed, old, "nativeContextMenu", "init");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeNativeContextMenu')) {
    reg.fireEvent(this, 'changeNativeContextMenu', qx.event.type.Data, [computed, old])
  }
}

//000825 Code[initNativeHelp]:
function(value)
{
  var prop = qx.core.Property;
  if (this.$$initialized)prop.error(this, 0, "nativeHelp", "init", value);

  if (arguments.length !== 0)prop.error(this, 3, "nativeHelp", "init", value);

  var computed, old;
  if (this.$$runtime_nativeHelp !== undefined) {
    old = computed = this.$$runtime_nativeHelp;
  } else if (this.$$user_nativeHelp !== undefined) {
    old = computed = this.$$user_nativeHelp;
  } else if (this.$$useinit_nativeHelp)
  {
    old = this.$$init_nativeHelp;
    computed = this.$$init_nativeHelp;
  } else
  {
    computed = this.$$init_nativeHelp;
    this.$$useinit_nativeHelp = true;
  }


  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyNativeHelp(computed, old, "nativeHelp", "init");
}

//000826 Code[setKeepBlockerActive]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "keepBlockerActive", "set", value);

  if (value === undefined)prop.error(this, 2, "keepBlockerActive", "set", value);

  if (value === null)prop.error(this, 4, "keepBlockerActive", "set", value);

  var msg = "Invalid incoming value for property 'keepBlockerActive' of class 'qx.ui.core.Blocker'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "keepBlockerActive", "set", value);

  this.$$user_keepBlockerActive = value;
  return value;
}

//000829 Code[setLabel]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "label", "set", value);

  if (value === undefined)prop.error(this, 2, "label", "set", value);

  if (this.$$user_label === value)return value;

  var msg = "Invalid incoming value for property 'label' of class 'qx.ui.basic.Atom'";
  if (value !== null)if (!(qx.core.Assert.assertString(value, msg) || true))prop.error(this, 5, "label", "set", value);


  var computed, old;
  if (this.$$runtime_label !== undefined)
  {
    old = computed = this.$$runtime_label;
    this.$$user_label = value;
  } else if (this.$$user_label !== undefined)
  {
    old = this.$$user_label;
    computed = this.$$user_label = value;
  } else if (this.$$useinit_label)
  {
    old = this.$$init_label;
    delete this.$$useinit_label;
    computed = this.$$user_label = value;
  } else
  {
    computed = this.$$user_label = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyLabel(computed, old, "label", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeLabel')) {
    reg.fireEvent(this, 'changeLabel', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000830 Code[getLabel]:
function(value)
{
  if (this.$$runtime_label !== undefined)return this.$$runtime_label;

  if (this.$$user_label !== undefined)return this.$$user_label;
   else return null;

}

//000831 Code[getShow]:
function(value)
{
  if (this.$$runtime_show !== undefined)return this.$$runtime_show;
   else if (this.$$inherit_show !== undefined)return this.$$inherit_show;
   else if (this.$$user_show !== undefined)return this.$$user_show;
   else if (this.$$theme_show !== undefined)return this.$$theme_show;
   else var init = this.$$init_show;




  return this.$$init_show;
  return init;
}

//000832 Code[getCursor]:
function(value)
{
  if (this.$$runtime_cursor !== undefined)return this.$$runtime_cursor;
   else if (this.$$inherit_cursor !== undefined)return this.$$inherit_cursor;
   else if (this.$$user_cursor !== undefined)return this.$$user_cursor;
   else if (this.$$theme_cursor !== undefined)return this.$$theme_cursor;
   else var init = this.$$init_cursor;




  if (init == qx.core.Property.$$inherit)init = null;

  return init;
}

//000833 Code[getSelectable]:
function(value)
{
  if (this.$$runtime_selectable !== undefined)return this.$$runtime_selectable;

  if (this.$$user_selectable !== undefined)return this.$$user_selectable;
   else return this.$$init_selectable;

}

//000834 Code[setValue]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "value", "set", value);

  if (value === undefined)prop.error(this, 2, "value", "set", value);

  if (this.$$user_value === value)return value;

  var msg = "Invalid incoming value for property 'value' of class 'qx.ui.basic.Label'";
  if (value !== null)if (!(qx.core.Assert.assertString(value, msg) || true))prop.error(this, 5, "value", "set", value);


  var computed, old;
  if (this.$$runtime_value !== undefined)
  {
    old = computed = this.$$runtime_value;
    this.$$user_value = value;
  } else if (this.$$user_value !== undefined)
  {
    old = this.$$user_value;
    computed = this.$$user_value = value;
  } else if (this.$$useinit_value)
  {
    old = this.$$init_value;
    delete this.$$useinit_value;
    computed = this.$$user_value = value;
  } else
  {
    computed = this.$$user_value = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyValue(computed, old, "value", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeValue')) {
    reg.fireEvent(this, 'changeValue', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000835 Code[setLocale]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "locale", "set", value);

  if (value === undefined)prop.error(this, 2, "locale", "set", value);

  if (this.$$user_locale === value)return value;

  var msg = "Invalid incoming value for property 'locale' of class 'qx.locale.Manager'";
  if (value !== null)if (!(qx.core.Assert.assertString(value, msg) || true))prop.error(this, 5, "locale", "set", value);


  var computed, old;
  if (this.$$runtime_locale !== undefined)
  {
    old = computed = this.$$runtime_locale;
    this.$$user_locale = value;
  } else if (this.$$user_locale !== undefined)
  {
    old = this.$$user_locale;
    computed = this.$$user_locale = value;
  } else if (this.$$useinit_locale)
  {
    old = this.$$init_locale;
    delete this.$$useinit_locale;
    computed = this.$$user_locale = value;
  } else
  {
    computed = this.$$user_locale = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyLocale(computed, old, "locale", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeLocale')) {
    reg.fireEvent(this, 'changeLocale', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000837 Code[setAnonymous]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "anonymous", "set", value);

  if (value === undefined)prop.error(this, 2, "anonymous", "set", value);

  if (value === null)prop.error(this, 4, "anonymous", "set", value);

  var msg = "Invalid incoming value for property 'anonymous' of class 'qx.ui.core.Widget'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "anonymous", "set", value);

  this.$$user_anonymous = value;
  return value;
}

//000838 Code[getRich]:
function(value)
{
  if (this.$$runtime_rich !== undefined)return this.$$runtime_rich;

  if (this.$$user_rich !== undefined)return this.$$user_rich;
   else return this.$$init_rich;

}

//000838 Code[setRich]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "rich", "set", value);

  if (value === undefined)prop.error(this, 2, "rich", "set", value);

  if (this.$$user_rich === value)return value;

  if (value === null)prop.error(this, 4, "rich", "set", value);

  var msg = "Invalid incoming value for property 'rich' of class 'qx.ui.basic.Label'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "rich", "set", value);

  var computed, old;
  if (this.$$runtime_rich !== undefined)
  {
    old = computed = this.$$runtime_rich;
    this.$$user_rich = value;
  } else if (this.$$user_rich !== undefined)
  {
    old = this.$$user_rich;
    computed = this.$$user_rich = value;
  } else if (this.$$useinit_rich)
  {
    old = this.$$init_rich;
    delete this.$$useinit_rich;
    computed = this.$$user_rich = value;
  } else
  {
    computed = this.$$user_rich = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_rich;

  this._applyRich(computed, old, "rich", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeRich')) {
    reg.fireEvent(this, 'changeRich', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000840 Code[refreshTextColor]:
function(value)
{
  var prop = qx.core.Property;
  var inherit = prop.$$inherit;
  var computed, old = this.$$inherit_textColor;
  if (this.$$runtime_textColor !== undefined) {
    old = computed = this.$$runtime_textColor;
  } else if (this.$$user_textColor !== undefined) {
    computed = this.$$user_textColor;
  } else if (this.$$theme_textColor !== undefined) {
    computed = this.$$theme_textColor;
  } else if (this.$$useinit_textColor)
  {
    delete this.$$useinit_textColor;
    computed = this.$$init_textColor;
  }



  if (computed === undefined || computed === inherit)
  {
    computed = value;
    if ((computed === undefined || computed === inherit) && this.$$init_textColor !== undefined && this.$$init_textColor !== inherit)
    {
      computed = this.$$init_textColor;
      this.$$useinit_textColor = true;
    } else
    {
      delete this.$$useinit_textColor;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_textColor;
  } else if (computed === undefined)delete this.$$inherit_textColor;
   else this.$$inherit_textColor = computed;


  var backup = computed;
  if (old === undefined)old = null;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyTextColor(computed, old, "textColor", "refresh");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTextColor')) {
    reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshTextColor)a[i].refreshTextColor(backup);

  }

}

//000841 Code[refreshFont]:
function(value)
{
  var prop = qx.core.Property;
  var inherit = prop.$$inherit;
  var computed, old = this.$$inherit_font;
  if (this.$$runtime_font !== undefined) {
    old = computed = this.$$runtime_font;
  } else if (this.$$user_font !== undefined) {
    computed = this.$$user_font;
  } else if (this.$$theme_font !== undefined) {
    computed = this.$$theme_font;
  } else if (this.$$useinit_font)
  {
    delete this.$$useinit_font;
    computed = this.$$init_font;
  }



  if (computed === undefined || computed === inherit)
  {
    computed = value;
    if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit)
    {
      computed = this.$$init_font;
      this.$$useinit_font = true;
    } else
    {
      delete this.$$useinit_font;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_font;
  } else if (computed === undefined)delete this.$$inherit_font;
   else this.$$inherit_font = computed;


  var backup = computed;
  if (old === undefined)old = null;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyFont(computed, old, "font", "refresh");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeFont')) {
    reg.fireEvent(this, 'changeFont', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshFont)a[i].refreshFont(backup);

  }

}

//000842 Code[refreshCursor]:
function(value)
{
  var prop = qx.core.Property;
  var inherit = prop.$$inherit;
  var computed, old = this.$$inherit_cursor;
  if (this.$$runtime_cursor !== undefined) {
    old = computed = this.$$runtime_cursor;
  } else if (this.$$user_cursor !== undefined) {
    computed = this.$$user_cursor;
  } else if (this.$$theme_cursor !== undefined) {
    computed = this.$$theme_cursor;
  } else if (this.$$useinit_cursor)
  {
    delete this.$$useinit_cursor;
    computed = this.$$init_cursor;
  }



  if (computed === undefined || computed === inherit)
  {
    computed = value;
    if ((computed === undefined || computed === inherit) && this.$$init_cursor !== undefined && this.$$init_cursor !== inherit)
    {
      computed = this.$$init_cursor;
      this.$$useinit_cursor = true;
    } else
    {
      delete this.$$useinit_cursor;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_cursor;
  } else if (computed === undefined)delete this.$$inherit_cursor;
   else this.$$inherit_cursor = computed;


  var backup = computed;
  if (old === undefined)old = this.$$init_cursor;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyCursor(computed, old, "cursor", "refresh");
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshCursor)a[i].refreshCursor(backup);

  }

}

//000843 Code[refreshEnabled]:
function(value)
{
  var prop = qx.core.Property;
  var inherit = prop.$$inherit;
  var computed, old = this.$$inherit_enabled;
  if (this.$$runtime_enabled !== undefined) {
    old = computed = this.$$runtime_enabled;
  } else if (this.$$user_enabled !== undefined) {
    computed = this.$$user_enabled;
  } else if (this.$$useinit_enabled)
  {
    delete this.$$useinit_enabled;
    computed = this.$$init_enabled;
  }


  if (computed === undefined || computed === inherit)
  {
    computed = value;
    if ((computed === undefined || computed === inherit) && this.$$init_enabled !== undefined && this.$$init_enabled !== inherit)
    {
      computed = this.$$init_enabled;
      this.$$useinit_enabled = true;
    } else
    {
      delete this.$$useinit_enabled;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_enabled;
  } else if (computed === undefined)delete this.$$inherit_enabled;
   else this.$$inherit_enabled = computed;


  var backup = computed;
  if (old === undefined)old = this.$$init_enabled;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyEnabled(computed, old, "enabled", "refresh");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeEnabled')) {
    reg.fireEvent(this, 'changeEnabled', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshEnabled)a[i].refreshEnabled(backup);

  }

}

//000845 Code[getFocusable]:
function(value)
{
  if (this.$$runtime_focusable !== undefined)return this.$$runtime_focusable;

  if (this.$$user_focusable !== undefined)return this.$$user_focusable;
   else return this.$$init_focusable;

}

//000845 Code[getDraggable]:
function(value)
{
  if (this.$$runtime_draggable !== undefined)return this.$$runtime_draggable;

  if (this.$$user_draggable !== undefined)return this.$$user_draggable;
   else return this.$$init_draggable;

}

//000846 Code[getDroppable]:
function(value)
{
  if (this.$$runtime_droppable !== undefined)return this.$$runtime_droppable;

  if (this.$$user_droppable !== undefined)return this.$$user_droppable;
   else return this.$$init_droppable;

}

//000848 Code[setVisibility]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "visibility", "set", value);

  if (value === undefined)prop.error(this, 2, "visibility", "set", value);

  if (this.$$user_visibility === value)return value;

  if (value === null)prop.error(this, 4, "visibility", "set", value);

  var msg = "Invalid incoming value for property 'visibility' of class 'qx.ui.core.Widget'";
  if (qx.core.Assert.assertInArray(value, qx.ui.core.Widget.$$properties.visibility.check, msg))prop.error(this, 5, "visibility", "set", value);

  var computed, old;
  if (this.$$runtime_visibility !== undefined)
  {
    old = computed = this.$$runtime_visibility;
    this.$$user_visibility = value;
  } else if (this.$$user_visibility !== undefined)
  {
    old = this.$$user_visibility;
    computed = this.$$user_visibility = value;
  } else if (this.$$useinit_visibility)
  {
    old = this.$$init_visibility;
    delete this.$$useinit_visibility;
    computed = this.$$user_visibility = value;
  } else
  {
    computed = this.$$user_visibility = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_visibility;

  this._applyVisibility(computed, old, "visibility", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeVisibility')) {
    reg.fireEvent(this, 'changeVisibility', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000849 Code[setIcon]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "icon", "set", value);

  if (value === undefined)prop.error(this, 2, "icon", "set", value);

  if (this.$$user_icon === value)return value;

  var msg = "Invalid incoming value for property 'icon' of class 'qx.ui.basic.Atom'";
  if (value !== null)if (!(qx.core.Assert.assertString(value, msg) || true))prop.error(this, 5, "icon", "set", value);


  var computed, old;
  if (this.$$runtime_icon !== undefined)
  {
    old = computed = this.$$runtime_icon;
    this.$$user_icon = value;
  } else if (this.$$user_icon !== undefined)
  {
    old = this.$$user_icon;
    computed = this.$$user_icon = value;
  } else if (this.$$theme_icon !== undefined)
  {
    old = this.$$theme_icon;
    computed = this.$$user_icon = value;
  } else if (this.$$useinit_icon)
  {
    old = this.$$init_icon;
    delete this.$$useinit_icon;
    computed = this.$$user_icon = value;
  } else
  {
    computed = this.$$user_icon = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyIcon(computed, old, "icon", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeIcon')) {
    reg.fireEvent(this, 'changeIcon', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000850 Code[getIcon]:
function(value)
{
  if (this.$$runtime_icon !== undefined)return this.$$runtime_icon;

  if (this.$$user_icon !== undefined)return this.$$user_icon;
   else if (this.$$theme_icon !== undefined)return this.$$theme_icon;
   else return null;


}

//000851 Code[getSource]:
function(value)
{
  if (this.$$runtime_source !== undefined)return this.$$runtime_source;

  if (this.$$user_source !== undefined)return this.$$user_source;
   else if (this.$$theme_source !== undefined)return this.$$theme_source;
   else return this.$$init_source;


}

//000851 Code[getScale]:
function(value)
{
  if (this.$$runtime_scale !== undefined)return this.$$runtime_scale;

  if (this.$$user_scale !== undefined)return this.$$user_scale;
   else if (this.$$theme_scale !== undefined)return this.$$theme_scale;
   else return this.$$init_scale;


}

//000853 Code[setSource]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "source", "set", value);

  if (value === undefined)prop.error(this, 2, "source", "set", value);

  if (this.$$user_source === value)return value;

  var msg = "Invalid incoming value for property 'source' of class 'qx.ui.basic.Image'";
  if (value !== null)if (!(qx.core.Assert.assertString(value, msg) || true))prop.error(this, 5, "source", "set", value);


  var computed, old;
  if (this.$$runtime_source !== undefined)
  {
    old = computed = this.$$runtime_source;
    this.$$user_source = value;
  } else if (this.$$user_source !== undefined)
  {
    old = this.$$user_source;
    computed = this.$$user_source = value;
  } else if (this.$$theme_source !== undefined)
  {
    old = this.$$theme_source;
    computed = this.$$user_source = value;
  } else if (this.$$useinit_source)
  {
    old = this.$$init_source;
    delete this.$$useinit_source;
    computed = this.$$user_source = value;
  } else
  {
    computed = this.$$user_source = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_source;

  this._applySource(computed, old, "source", "set");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeSource')) {
    reg.fireEvent(this, 'changeSource', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000855 Code[getEnabled]:
function(value)
{
  if (this.$$runtime_enabled !== undefined)return this.$$runtime_enabled;
   else if (this.$$inherit_enabled !== undefined)return this.$$inherit_enabled;
   else if (this.$$user_enabled !== undefined)return this.$$user_enabled;
   else var init = this.$$init_enabled;



  return this.$$init_enabled;
  return init;
}

//000856 Code[getDecorator]:
function(value)
{
  if (this.$$runtime_decorator !== undefined)return this.$$runtime_decorator;

  if (this.$$user_decorator !== undefined)return this.$$user_decorator;
   else if (this.$$theme_decorator !== undefined)return this.$$theme_decorator;
   else return this.$$init_decorator;


}

//000859 Code[getVisibility]:
function(value)
{
  if (this.$$runtime_visibility !== undefined)return this.$$runtime_visibility;

  if (this.$$user_visibility !== undefined)return this.$$user_visibility;
   else return this.$$init_visibility;

}

//000861 Code[getAppearance]:
function(value)
{
  if (this.$$runtime_appearance !== undefined)return this.$$runtime_appearance;

  if (this.$$user_appearance !== undefined)return this.$$user_appearance;
   else return this.$$init_appearance;

}

//000862 Code[getTheme]:
function(value)
{
  if (this.$$runtime_theme !== undefined)return this.$$runtime_theme;

  if (this.$$user_theme !== undefined)return this.$$user_theme;
   else return null;

}

//000863 Code[setThemedBackgroundColor]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "backgroundColor", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "backgroundColor", "setThemed", value);

  if (this.$$theme_backgroundColor === value)return value;

  var msg = "Invalid incoming value for property 'backgroundColor' of class 'qx.ui.core.Widget'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "backgroundColor", "setThemed", value);


  var computed, old;
  if (this.$$runtime_backgroundColor !== undefined)
  {
    old = computed = this.$$runtime_backgroundColor;
    this.$$theme_backgroundColor = value;
  } else if (this.$$user_backgroundColor !== undefined)
  {
    old = computed = this.$$user_backgroundColor;
    this.$$theme_backgroundColor = value;
  } else if (this.$$theme_backgroundColor !== undefined)
  {
    old = this.$$theme_backgroundColor;
    computed = this.$$theme_backgroundColor = value;
  } else if (this.$$useinit_backgroundColor)
  {
    old = this.$$init_backgroundColor;
    delete this.$$useinit_backgroundColor;
    computed = this.$$theme_backgroundColor = value;
  } else
  {
    computed = this.$$theme_backgroundColor = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBackgroundColor(computed, old, "backgroundColor", "setThemed");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeBackgroundColor')) {
    reg.fireEvent(this, 'changeBackgroundColor', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000864 Code[getBackgroundColor]:
function(value)
{
  if (this.$$runtime_backgroundColor !== undefined)return this.$$runtime_backgroundColor;

  if (this.$$user_backgroundColor !== undefined)return this.$$user_backgroundColor;
   else if (this.$$theme_backgroundColor !== undefined)return this.$$theme_backgroundColor;
   else return null;


}

//000864 Code[setThemedTextColor]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "textColor", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "textColor", "setThemed", value);

  if (this.$$theme_textColor === value)return value;

  var inherit = prop.$$inherit;
  var msg = "Invalid incoming value for property 'textColor' of class 'qx.ui.core.Widget'";
  if (value !== null)if (value !== inherit)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "textColor", "setThemed", value);



  var computed, old = this.$$inherit_textColor;
  if (this.$$runtime_textColor !== undefined)
  {
    old = computed = this.$$runtime_textColor;
    this.$$theme_textColor = value;
  } else if (this.$$user_textColor !== undefined)
  {
    computed = this.$$user_textColor;
    this.$$theme_textColor = value;
  } else if (this.$$theme_textColor !== undefined) {
    computed = this.$$theme_textColor = value;
  } else if (this.$$useinit_textColor)
  {
    delete this.$$useinit_textColor;
    computed = this.$$theme_textColor = value;
  } else
  {
    computed = this.$$theme_textColor = value;
  }



  if (computed === undefined || computed === inherit)
  {
    var pa = this.getLayoutParent();
    if (pa)computed = pa.$$inherit_textColor;

    if ((computed === undefined || computed === inherit) && this.$$init_textColor !== undefined && this.$$init_textColor !== inherit)
    {
      computed = this.$$init_textColor;
      this.$$useinit_textColor = true;
    } else
    {
      delete this.$$useinit_textColor;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_textColor;
  } else if (computed === undefined)delete this.$$inherit_textColor;
   else this.$$inherit_textColor = computed;


  var backup = computed;
  if (old === undefined)old = null;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyTextColor(computed, old, "textColor", "setThemed");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTextColor')) {
    reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshTextColor)a[i].refreshTextColor(backup);

  }

  return value;
}

//000866 Code[setThemedFont]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "font", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "font", "setThemed", value);

  if (this.$$theme_font === value)return value;

  var inherit = prop.$$inherit;
  var msg = "Invalid incoming value for property 'font' of class 'qx.ui.core.Widget'";
  if (value !== null)if (value !== inherit)if (!(value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)))prop.error(this, 5, "font", "setThemed", value);



  var computed, old = this.$$inherit_font;
  if (this.$$runtime_font !== undefined)
  {
    old = computed = this.$$runtime_font;
    this.$$theme_font = value;
  } else if (this.$$user_font !== undefined)
  {
    computed = this.$$user_font;
    this.$$theme_font = value;
  } else if (this.$$theme_font !== undefined) {
    computed = this.$$theme_font = value;
  } else if (this.$$useinit_font)
  {
    delete this.$$useinit_font;
    computed = this.$$theme_font = value;
  } else
  {
    computed = this.$$theme_font = value;
  }



  if (computed === undefined || computed === inherit)
  {
    var pa = this.getLayoutParent();
    if (pa)computed = pa.$$inherit_font;

    if ((computed === undefined || computed === inherit) && this.$$init_font !== undefined && this.$$init_font !== inherit)
    {
      computed = this.$$init_font;
      this.$$useinit_font = true;
    } else
    {
      delete this.$$useinit_font;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_font;
  } else if (computed === undefined)delete this.$$inherit_font;
   else this.$$inherit_font = computed;


  var backup = computed;
  if (old === undefined)old = null;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyFont(computed, old, "font", "setThemed");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeFont')) {
    reg.fireEvent(this, 'changeFont', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshFont)a[i].refreshFont(backup);

  }

  return value;
}

//000867 Code[getTextColor]:
function(value) {
  if (this.$$runtime_textColor !== undefined)return this.$$runtime_textColor;
   else if (this.$$inherit_textColor !== undefined)return this.$$inherit_textColor;
   else if (this.$$user_textColor !== undefined)return this.$$user_textColor;
   else if (this.$$theme_textColor !== undefined)return this.$$theme_textColor;
   else return null;




}

//000868 Code[resetThemedTextColor]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 0)prop.error(this, 3, "textColor", "resetThemed", value);

  if (this.$$theme_textColor === undefined)return;

  var inherit = prop.$$inherit;
  var computed, old = this.$$inherit_textColor;
  if (this.$$runtime_textColor !== undefined)
  {
    old = computed = this.$$runtime_textColor;
    delete this.$$theme_textColor;
  } else if (this.$$user_textColor !== undefined)
  {
    computed = this.$$user_textColor;
    delete this.$$theme_textColor;
  } else if (this.$$theme_textColor !== undefined)
  {
    delete this.$$theme_textColor;
    if (this.$$init_textColor !== undefined)
    {
      computed = this.$$init_textColor;
      this.$$useinit_textColor = true;
    }
  } else if (this.$$useinit_textColor) {
  }



  if (computed === undefined || computed === inherit)
  {
    var pa = this.getLayoutParent();
    if (pa)computed = pa.$$inherit_textColor;

    if ((computed === undefined || computed === inherit) && this.$$init_textColor !== undefined && this.$$init_textColor !== inherit)
    {
      computed = this.$$init_textColor;
      this.$$useinit_textColor = true;
    } else
    {
      delete this.$$useinit_textColor;
    }
  }
  if (old === computed)return value;

  if (computed === inherit)
  {
    computed = undefined;
    delete this.$$inherit_textColor;
  } else if (computed === undefined)delete this.$$inherit_textColor;
   else this.$$inherit_textColor = computed;


  var backup = computed;
  if (old === undefined)old = null;

  if (computed === undefined || computed == inherit)computed = null;

  this._applyTextColor(computed, old, "textColor", "resetThemed");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeTextColor')) {
    reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])
  }
  var a = this._getChildren();
  if (a)for (var i = 0, l = a.length; i < l; i++) {
    if (a[i].refreshTextColor)a[i].refreshTextColor(backup);

  }

}

//000869 Code[setThemedOpacity]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "opacity", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "opacity", "setThemed", value);

  if (this.$$theme_opacity === value)return value;

  var msg = "Invalid incoming value for property 'opacity' of class 'qx.ui.core.Widget'";
  if (value !== null)if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "opacity", "setThemed", value);


  var computed, old;
  if (this.$$runtime_opacity !== undefined)
  {
    old = computed = this.$$runtime_opacity;
    this.$$theme_opacity = value;
  } else if (this.$$user_opacity !== undefined)
  {
    old = computed = this.$$user_opacity;
    this.$$theme_opacity = value;
  } else if (this.$$theme_opacity !== undefined)
  {
    old = this.$$theme_opacity;
    computed = this.$$theme_opacity = value;
  } else if (this.$$useinit_opacity)
  {
    old = this.$$init_opacity;
    delete this.$$useinit_opacity;
    computed = this.$$theme_opacity = value;
  } else
  {
    computed = this.$$theme_opacity = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_opacity;

  this._applyOpacity(computed, old, "opacity", "setThemed");
  return value;
}

//000871 Code[setThemedDecorator]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "decorator", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "decorator", "setThemed", value);

  if (this.$$theme_decorator === value)return value;

  var msg = "Invalid incoming value for property 'decorator' of class 'qx.ui.core.Widget'";
  if (value !== null)if (!(value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)))prop.error(this, 5, "decorator", "setThemed", value);


  var computed, old;
  if (this.$$runtime_decorator !== undefined)
  {
    old = computed = this.$$runtime_decorator;
    this.$$theme_decorator = value;
  } else if (this.$$user_decorator !== undefined)
  {
    old = computed = this.$$user_decorator;
    this.$$theme_decorator = value;
  } else if (this.$$theme_decorator !== undefined)
  {
    old = this.$$theme_decorator;
    computed = this.$$theme_decorator = value;
  } else if (this.$$useinit_decorator)
  {
    old = this.$$init_decorator;
    delete this.$$useinit_decorator;
    computed = this.$$theme_decorator = value;
  } else
  {
    computed = this.$$theme_decorator = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_decorator;

  this._applyDecorator(computed, old, "decorator", "setThemed");
  var reg = qx.event.Registration;
  if (reg.hasListener(this, 'changeDecorator')) {
    reg.fireEvent(this, 'changeDecorator', qx.event.type.Data, [computed, old])
  }
  return value;
}

//000872 Code[getTheme]:
function(value)
{
  if (this.$$runtime_theme !== undefined)return this.$$runtime_theme;

  if (this.$$user_theme !== undefined)return this.$$user_theme;
   else return null;

}

//000873 Code[setRadiusTopLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "radiusTopLeft", "set", value);

  if (value === undefined)prop.error(this, 2, "radiusTopLeft", "set", value);

  if (this.$$user_radiusTopLeft === value)return value;

  var msg = "Invalid incoming value for property 'radiusTopLeft' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "radiusTopLeft", "set", value);


  var computed, old;
  if (this.$$runtime_radiusTopLeft !== undefined)
  {
    old = computed = this.$$runtime_radiusTopLeft;
    this.$$user_radiusTopLeft = value;
  } else if (this.$$user_radiusTopLeft !== undefined)
  {
    old = this.$$user_radiusTopLeft;
    computed = this.$$user_radiusTopLeft = value;
  } else if (this.$$useinit_radiusTopLeft)
  {
    old = this.$$init_radiusTopLeft;
    delete this.$$useinit_radiusTopLeft;
    computed = this.$$user_radiusTopLeft = value;
  } else
  {
    computed = this.$$user_radiusTopLeft = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBorderRadius(computed, old, "radiusTopLeft", "set");
  return value;
}

//000874 Code[setRadiusTopRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "radiusTopRight", "set", value);

  if (value === undefined)prop.error(this, 2, "radiusTopRight", "set", value);

  if (this.$$user_radiusTopRight === value)return value;

  var msg = "Invalid incoming value for property 'radiusTopRight' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "radiusTopRight", "set", value);


  var computed, old;
  if (this.$$runtime_radiusTopRight !== undefined)
  {
    old = computed = this.$$runtime_radiusTopRight;
    this.$$user_radiusTopRight = value;
  } else if (this.$$user_radiusTopRight !== undefined)
  {
    old = this.$$user_radiusTopRight;
    computed = this.$$user_radiusTopRight = value;
  } else if (this.$$useinit_radiusTopRight)
  {
    old = this.$$init_radiusTopRight;
    delete this.$$useinit_radiusTopRight;
    computed = this.$$user_radiusTopRight = value;
  } else
  {
    computed = this.$$user_radiusTopRight = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBorderRadius(computed, old, "radiusTopRight", "set");
  return value;
}

//000875 Code[setRadiusBottomRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "radiusBottomRight", "set", value);

  if (value === undefined)prop.error(this, 2, "radiusBottomRight", "set", value);

  if (this.$$user_radiusBottomRight === value)return value;

  var msg = "Invalid incoming value for property 'radiusBottomRight' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "radiusBottomRight", "set", value);


  var computed, old;
  if (this.$$runtime_radiusBottomRight !== undefined)
  {
    old = computed = this.$$runtime_radiusBottomRight;
    this.$$user_radiusBottomRight = value;
  } else if (this.$$user_radiusBottomRight !== undefined)
  {
    old = this.$$user_radiusBottomRight;
    computed = this.$$user_radiusBottomRight = value;
  } else if (this.$$useinit_radiusBottomRight)
  {
    old = this.$$init_radiusBottomRight;
    delete this.$$useinit_radiusBottomRight;
    computed = this.$$user_radiusBottomRight = value;
  } else
  {
    computed = this.$$user_radiusBottomRight = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBorderRadius(computed, old, "radiusBottomRight", "set");
  return value;
}

//000876 Code[setRadiusBottomLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "radiusBottomLeft", "set", value);

  if (value === undefined)prop.error(this, 2, "radiusBottomLeft", "set", value);

  if (this.$$user_radiusBottomLeft === value)return value;

  var msg = "Invalid incoming value for property 'radiusBottomLeft' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "radiusBottomLeft", "set", value);


  var computed, old;
  if (this.$$runtime_radiusBottomLeft !== undefined)
  {
    old = computed = this.$$runtime_radiusBottomLeft;
    this.$$user_radiusBottomLeft = value;
  } else if (this.$$user_radiusBottomLeft !== undefined)
  {
    old = this.$$user_radiusBottomLeft;
    computed = this.$$user_radiusBottomLeft = value;
  } else if (this.$$useinit_radiusBottomLeft)
  {
    old = this.$$init_radiusBottomLeft;
    delete this.$$useinit_radiusBottomLeft;
    computed = this.$$user_radiusBottomLeft = value;
  } else
  {
    computed = this.$$user_radiusBottomLeft = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyBorderRadius(computed, old, "radiusBottomLeft", "set");
  return value;
}

//000877 Code[setColorTop]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "colorTop", "set", value);

  if (value === undefined)prop.error(this, 2, "colorTop", "set", value);

  if (this.$$user_colorTop === value)return value;

  var msg = "Invalid incoming value for property 'colorTop' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "colorTop", "set", value);


  var computed, old;
  if (this.$$runtime_colorTop !== undefined)
  {
    old = computed = this.$$runtime_colorTop;
    this.$$user_colorTop = value;
  } else if (this.$$user_colorTop !== undefined)
  {
    old = this.$$user_colorTop;
    computed = this.$$user_colorTop = value;
  } else if (this.$$useinit_colorTop)
  {
    old = this.$$init_colorTop;
    delete this.$$useinit_colorTop;
    computed = this.$$user_colorTop = value;
  } else
  {
    computed = this.$$user_colorTop = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyStyle(computed, old, "colorTop", "set");
  return value;
}

//000878 Code[setColorRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "colorRight", "set", value);

  if (value === undefined)prop.error(this, 2, "colorRight", "set", value);

  if (this.$$user_colorRight === value)return value;

  var msg = "Invalid incoming value for property 'colorRight' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "colorRight", "set", value);


  var computed, old;
  if (this.$$runtime_colorRight !== undefined)
  {
    old = computed = this.$$runtime_colorRight;
    this.$$user_colorRight = value;
  } else if (this.$$user_colorRight !== undefined)
  {
    old = this.$$user_colorRight;
    computed = this.$$user_colorRight = value;
  } else if (this.$$useinit_colorRight)
  {
    old = this.$$init_colorRight;
    delete this.$$useinit_colorRight;
    computed = this.$$user_colorRight = value;
  } else
  {
    computed = this.$$user_colorRight = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyStyle(computed, old, "colorRight", "set");
  return value;
}

//000879 Code[setColorBottom]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "colorBottom", "set", value);

  if (value === undefined)prop.error(this, 2, "colorBottom", "set", value);

  if (this.$$user_colorBottom === value)return value;

  var msg = "Invalid incoming value for property 'colorBottom' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "colorBottom", "set", value);


  var computed, old;
  if (this.$$runtime_colorBottom !== undefined)
  {
    old = computed = this.$$runtime_colorBottom;
    this.$$user_colorBottom = value;
  } else if (this.$$user_colorBottom !== undefined)
  {
    old = this.$$user_colorBottom;
    computed = this.$$user_colorBottom = value;
  } else if (this.$$useinit_colorBottom)
  {
    old = this.$$init_colorBottom;
    delete this.$$useinit_colorBottom;
    computed = this.$$user_colorBottom = value;
  } else
  {
    computed = this.$$user_colorBottom = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyStyle(computed, old, "colorBottom", "set");
  return value;
}

//000880 Code[setColorLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "colorLeft", "set", value);

  if (value === undefined)prop.error(this, 2, "colorLeft", "set", value);

  if (this.$$user_colorLeft === value)return value;

  var msg = "Invalid incoming value for property 'colorLeft' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "colorLeft", "set", value);


  var computed, old;
  if (this.$$runtime_colorLeft !== undefined)
  {
    old = computed = this.$$runtime_colorLeft;
    this.$$user_colorLeft = value;
  } else if (this.$$user_colorLeft !== undefined)
  {
    old = this.$$user_colorLeft;
    computed = this.$$user_colorLeft = value;
  } else if (this.$$useinit_colorLeft)
  {
    old = this.$$init_colorLeft;
    delete this.$$useinit_colorLeft;
    computed = this.$$user_colorLeft = value;
  } else
  {
    computed = this.$$user_colorLeft = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyStyle(computed, old, "colorLeft", "set");
  return value;
}

//000881 Code[setWidthTop]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "widthTop", "set", value);

  if (value === undefined)prop.error(this, 2, "widthTop", "set", value);

  if (this.$$user_widthTop === value)return value;

  if (value === null)prop.error(this, 4, "widthTop", "set", value);

  var msg = "Invalid incoming value for property 'widthTop' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "widthTop", "set", value);

  var computed, old;
  if (this.$$runtime_widthTop !== undefined)
  {
    old = computed = this.$$runtime_widthTop;
    this.$$user_widthTop = value;
  } else if (this.$$user_widthTop !== undefined)
  {
    old = this.$$user_widthTop;
    computed = this.$$user_widthTop = value;
  } else if (this.$$useinit_widthTop)
  {
    old = this.$$init_widthTop;
    delete this.$$useinit_widthTop;
    computed = this.$$user_widthTop = value;
  } else
  {
    computed = this.$$user_widthTop = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_widthTop;

  this._applyWidth(computed, old, "widthTop", "set");
  return value;
}

//000882 Code[setWidthRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "widthRight", "set", value);

  if (value === undefined)prop.error(this, 2, "widthRight", "set", value);

  if (this.$$user_widthRight === value)return value;

  if (value === null)prop.error(this, 4, "widthRight", "set", value);

  var msg = "Invalid incoming value for property 'widthRight' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "widthRight", "set", value);

  var computed, old;
  if (this.$$runtime_widthRight !== undefined)
  {
    old = computed = this.$$runtime_widthRight;
    this.$$user_widthRight = value;
  } else if (this.$$user_widthRight !== undefined)
  {
    old = this.$$user_widthRight;
    computed = this.$$user_widthRight = value;
  } else if (this.$$useinit_widthRight)
  {
    old = this.$$init_widthRight;
    delete this.$$useinit_widthRight;
    computed = this.$$user_widthRight = value;
  } else
  {
    computed = this.$$user_widthRight = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_widthRight;

  this._applyWidth(computed, old, "widthRight", "set");
  return value;
}

//000883 Code[setWidthBottom]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "widthBottom", "set", value);

  if (value === undefined)prop.error(this, 2, "widthBottom", "set", value);

  if (this.$$user_widthBottom === value)return value;

  if (value === null)prop.error(this, 4, "widthBottom", "set", value);

  var msg = "Invalid incoming value for property 'widthBottom' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "widthBottom", "set", value);

  var computed, old;
  if (this.$$runtime_widthBottom !== undefined)
  {
    old = computed = this.$$runtime_widthBottom;
    this.$$user_widthBottom = value;
  } else if (this.$$user_widthBottom !== undefined)
  {
    old = this.$$user_widthBottom;
    computed = this.$$user_widthBottom = value;
  } else if (this.$$useinit_widthBottom)
  {
    old = this.$$init_widthBottom;
    delete this.$$useinit_widthBottom;
    computed = this.$$user_widthBottom = value;
  } else
  {
    computed = this.$$user_widthBottom = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_widthBottom;

  this._applyWidth(computed, old, "widthBottom", "set");
  return value;
}

//000884 Code[setWidthLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "widthLeft", "set", value);

  if (value === undefined)prop.error(this, 2, "widthLeft", "set", value);

  if (this.$$user_widthLeft === value)return value;

  if (value === null)prop.error(this, 4, "widthLeft", "set", value);

  var msg = "Invalid incoming value for property 'widthLeft' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "widthLeft", "set", value);

  var computed, old;
  if (this.$$runtime_widthLeft !== undefined)
  {
    old = computed = this.$$runtime_widthLeft;
    this.$$user_widthLeft = value;
  } else if (this.$$user_widthLeft !== undefined)
  {
    old = this.$$user_widthLeft;
    computed = this.$$user_widthLeft = value;
  } else if (this.$$useinit_widthLeft)
  {
    old = this.$$init_widthLeft;
    delete this.$$useinit_widthLeft;
    computed = this.$$user_widthLeft = value;
  } else
  {
    computed = this.$$user_widthLeft = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_widthLeft;

  this._applyWidth(computed, old, "widthLeft", "set");
  return value;
}

//000884 Code[setStartColor]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "startColor", "set", value);

  if (value === undefined)prop.error(this, 2, "startColor", "set", value);

  if (this.$$user_startColor === value)return value;

  var msg = "Invalid incoming value for property 'startColor' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "startColor", "set", value);


  var computed, old;
  if (this.$$runtime_startColor !== undefined)
  {
    old = computed = this.$$runtime_startColor;
    this.$$user_startColor = value;
  } else if (this.$$user_startColor !== undefined)
  {
    old = this.$$user_startColor;
    computed = this.$$user_startColor = value;
  } else if (this.$$useinit_startColor)
  {
    old = this.$$init_startColor;
    delete this.$$useinit_startColor;
    computed = this.$$user_startColor = value;
  } else
  {
    computed = this.$$user_startColor = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyLinearBackgroundGradient(computed, old, "startColor", "set");
  return value;
}

//000885 Code[setEndColor]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "endColor", "set", value);

  if (value === undefined)prop.error(this, 2, "endColor", "set", value);

  if (this.$$user_endColor === value)return value;

  var msg = "Invalid incoming value for property 'endColor' of class 'qx.ui.decoration.Decorator'";
  if (value !== null)if (!(qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)))prop.error(this, 5, "endColor", "set", value);


  var computed, old;
  if (this.$$runtime_endColor !== undefined)
  {
    old = computed = this.$$runtime_endColor;
    this.$$user_endColor = value;
  } else if (this.$$user_endColor !== undefined)
  {
    old = this.$$user_endColor;
    computed = this.$$user_endColor = value;
  } else if (this.$$useinit_endColor)
  {
    old = this.$$init_endColor;
    delete this.$$useinit_endColor;
    computed = this.$$user_endColor = value;
  } else
  {
    computed = this.$$user_endColor = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyLinearBackgroundGradient(computed, old, "endColor", "set");
  return value;
}

//000886 Code[setStartColorPosition]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "startColorPosition", "set", value);

  if (value === undefined)prop.error(this, 2, "startColorPosition", "set", value);

  if (this.$$user_startColorPosition === value)return value;

  if (value === null)prop.error(this, 4, "startColorPosition", "set", value);

  var msg = "Invalid incoming value for property 'startColorPosition' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "startColorPosition", "set", value);

  var computed, old;
  if (this.$$runtime_startColorPosition !== undefined)
  {
    old = computed = this.$$runtime_startColorPosition;
    this.$$user_startColorPosition = value;
  } else if (this.$$user_startColorPosition !== undefined)
  {
    old = this.$$user_startColorPosition;
    computed = this.$$user_startColorPosition = value;
  } else if (this.$$useinit_startColorPosition)
  {
    old = this.$$init_startColorPosition;
    delete this.$$useinit_startColorPosition;
    computed = this.$$user_startColorPosition = value;
  } else
  {
    computed = this.$$user_startColorPosition = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_startColorPosition;

  this._applyLinearBackgroundGradient(computed, old, "startColorPosition", "set");
  return value;
}

//000887 Code[setEndColorPosition]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "endColorPosition", "set", value);

  if (value === undefined)prop.error(this, 2, "endColorPosition", "set", value);

  if (this.$$user_endColorPosition === value)return value;

  if (value === null)prop.error(this, 4, "endColorPosition", "set", value);

  var msg = "Invalid incoming value for property 'endColorPosition' of class 'qx.ui.decoration.Decorator'";
  if (!(qx.core.Assert.assertNumber(value, msg) || true))prop.error(this, 5, "endColorPosition", "set", value);

  var computed, old;
  if (this.$$runtime_endColorPosition !== undefined)
  {
    old = computed = this.$$runtime_endColorPosition;
    this.$$user_endColorPosition = value;
  } else if (this.$$user_endColorPosition !== undefined)
  {
    old = this.$$user_endColorPosition;
    computed = this.$$user_endColorPosition = value;
  } else if (this.$$useinit_endColorPosition)
  {
    old = this.$$init_endColorPosition;
    delete this.$$useinit_endColorPosition;
    computed = this.$$user_endColorPosition = value;
  } else
  {
    computed = this.$$user_endColorPosition = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_endColorPosition;

  this._applyLinearBackgroundGradient(computed, old, "endColorPosition", "set");
  return value;
}

//000889 Code[getColorTop]:
function(value)
{
  if (this.$$runtime_colorTop !== undefined)return this.$$runtime_colorTop;

  if (this.$$user_colorTop !== undefined)return this.$$user_colorTop;
   else return null;

}

//000890 Code[getColorRight]:
function(value)
{
  if (this.$$runtime_colorRight !== undefined)return this.$$runtime_colorRight;

  if (this.$$user_colorRight !== undefined)return this.$$user_colorRight;
   else return null;

}

//000891 Code[getColorBottom]:
function(value)
{
  if (this.$$runtime_colorBottom !== undefined)return this.$$runtime_colorBottom;

  if (this.$$user_colorBottom !== undefined)return this.$$user_colorBottom;
   else return null;

}

//000891 Code[getColorLeft]:
function(value)
{
  if (this.$$runtime_colorLeft !== undefined)return this.$$runtime_colorLeft;

  if (this.$$user_colorLeft !== undefined)return this.$$user_colorLeft;
   else return null;

}

//000892 Code[getInnerColorTop]:
function(value)
{
  if (this.$$runtime_innerColorTop !== undefined)return this.$$runtime_innerColorTop;

  if (this.$$user_innerColorTop !== undefined)return this.$$user_innerColorTop;
   else return null;

}

//000893 Code[getTheme]:
function(value)
{
  if (this.$$runtime_theme !== undefined)return this.$$runtime_theme;

  if (this.$$user_theme !== undefined)return this.$$user_theme;
   else return null;

}

//000894 Code[getInnerColorRight]:
function(value)
{
  if (this.$$runtime_innerColorRight !== undefined)return this.$$runtime_innerColorRight;

  if (this.$$user_innerColorRight !== undefined)return this.$$user_innerColorRight;
   else return null;

}

//000894 Code[getInnerColorBottom]:
function(value)
{
  if (this.$$runtime_innerColorBottom !== undefined)return this.$$runtime_innerColorBottom;

  if (this.$$user_innerColorBottom !== undefined)return this.$$user_innerColorBottom;
   else return null;

}

//000896 Code[getInnerColorLeft]:
function(value)
{
  if (this.$$runtime_innerColorLeft !== undefined)return this.$$runtime_innerColorLeft;

  if (this.$$user_innerColorLeft !== undefined)return this.$$user_innerColorLeft;
   else return null;

}

//000897 Code[getInnerWidthTop]:
function(value)
{
  if (this.$$runtime_innerWidthTop !== undefined)return this.$$runtime_innerWidthTop;

  if (this.$$user_innerWidthTop !== undefined)return this.$$user_innerWidthTop;
   else return this.$$init_innerWidthTop;

}

//000897 Code[getInnerWidthRight]:
function(value)
{
  if (this.$$runtime_innerWidthRight !== undefined)return this.$$runtime_innerWidthRight;

  if (this.$$user_innerWidthRight !== undefined)return this.$$user_innerWidthRight;
   else return this.$$init_innerWidthRight;

}

//000898 Code[getInnerWidthBottom]:
function(value)
{
  if (this.$$runtime_innerWidthBottom !== undefined)return this.$$runtime_innerWidthBottom;

  if (this.$$user_innerWidthBottom !== undefined)return this.$$user_innerWidthBottom;
   else return this.$$init_innerWidthBottom;

}

//000899 Code[getInnerWidthLeft]:
function(value)
{
  if (this.$$runtime_innerWidthLeft !== undefined)return this.$$runtime_innerWidthLeft;

  if (this.$$user_innerWidthLeft !== undefined)return this.$$user_innerWidthLeft;
   else return this.$$init_innerWidthLeft;

}

//000900 Code[getWidthTop]:
function(value)
{
  if (this.$$runtime_widthTop !== undefined)return this.$$runtime_widthTop;

  if (this.$$user_widthTop !== undefined)return this.$$user_widthTop;
   else return this.$$init_widthTop;

}

//000900 Code[getStyleTop]:
function(value)
{
  if (this.$$runtime_styleTop !== undefined)return this.$$runtime_styleTop;

  if (this.$$user_styleTop !== undefined)return this.$$user_styleTop;
   else return this.$$init_styleTop;

}

//000901 Code[getWidthRight]:
function(value)
{
  if (this.$$runtime_widthRight !== undefined)return this.$$runtime_widthRight;

  if (this.$$user_widthRight !== undefined)return this.$$user_widthRight;
   else return this.$$init_widthRight;

}

//000902 Code[getStyleRight]:
function(value)
{
  if (this.$$runtime_styleRight !== undefined)return this.$$runtime_styleRight;

  if (this.$$user_styleRight !== undefined)return this.$$user_styleRight;
   else return this.$$init_styleRight;

}

//000903 Code[getWidthBottom]:
function(value)
{
  if (this.$$runtime_widthBottom !== undefined)return this.$$runtime_widthBottom;

  if (this.$$user_widthBottom !== undefined)return this.$$user_widthBottom;
   else return this.$$init_widthBottom;

}

//000903 Code[getStyleBottom]:
function(value)
{
  if (this.$$runtime_styleBottom !== undefined)return this.$$runtime_styleBottom;

  if (this.$$user_styleBottom !== undefined)return this.$$user_styleBottom;
   else return this.$$init_styleBottom;

}

//000904 Code[getWidthLeft]:
function(value)
{
  if (this.$$runtime_widthLeft !== undefined)return this.$$runtime_widthLeft;

  if (this.$$user_widthLeft !== undefined)return this.$$user_widthLeft;
   else return this.$$init_widthLeft;

}

//000905 Code[getStyleLeft]:
function(value)
{
  if (this.$$runtime_styleLeft !== undefined)return this.$$runtime_styleLeft;

  if (this.$$user_styleLeft !== undefined)return this.$$user_styleLeft;
   else return this.$$init_styleLeft;

}

//000906 Code[getInnerOpacity]:
function(value)
{
  if (this.$$runtime_innerOpacity !== undefined)return this.$$runtime_innerOpacity;

  if (this.$$user_innerOpacity !== undefined)return this.$$user_innerOpacity;
   else return this.$$init_innerOpacity;

}

//000906 Code[getBackgroundColor]:
function(value)
{
  if (this.$$runtime_backgroundColor !== undefined)return this.$$runtime_backgroundColor;

  if (this.$$user_backgroundColor !== undefined)return this.$$user_backgroundColor;
   else return null;

}

//000907 Code[getRadiusTopLeft]:
function(value)
{
  if (this.$$runtime_radiusTopLeft !== undefined)return this.$$runtime_radiusTopLeft;

  if (this.$$user_radiusTopLeft !== undefined)return this.$$user_radiusTopLeft;
   else return null;

}

//000908 Code[getRadiusTopRight]:
function(value)
{
  if (this.$$runtime_radiusTopRight !== undefined)return this.$$runtime_radiusTopRight;

  if (this.$$user_radiusTopRight !== undefined)return this.$$user_radiusTopRight;
   else return null;

}

//000909 Code[getRadiusBottomLeft]:
function(value)
{
  if (this.$$runtime_radiusBottomLeft !== undefined)return this.$$runtime_radiusBottomLeft;

  if (this.$$user_radiusBottomLeft !== undefined)return this.$$user_radiusBottomLeft;
   else return null;

}

//000909 Code[getRadiusBottomRight]:
function(value)
{
  if (this.$$runtime_radiusBottomRight !== undefined)return this.$$runtime_radiusBottomRight;

  if (this.$$user_radiusBottomRight !== undefined)return this.$$user_radiusBottomRight;
   else return null;

}

//000910 Code[getShadowVerticalLength]:
function(value)
{
  if (this.$$runtime_shadowVerticalLength !== undefined)return this.$$runtime_shadowVerticalLength;

  if (this.$$user_shadowVerticalLength !== undefined)return this.$$user_shadowVerticalLength;
   else return null;

}

//000911 Code[getShadowHorizontalLength]:
function(value)
{
  if (this.$$runtime_shadowHorizontalLength !== undefined)return this.$$runtime_shadowHorizontalLength;

  if (this.$$user_shadowHorizontalLength !== undefined)return this.$$user_shadowHorizontalLength;
   else return null;

}

//000912 Code[getBackgroundImage]:
function(value)
{
  if (this.$$runtime_backgroundImage !== undefined)return this.$$runtime_backgroundImage;

  if (this.$$user_backgroundImage !== undefined)return this.$$user_backgroundImage;
   else return null;

}

//000913 Code[getStartColor]:
function(value)
{
  if (this.$$runtime_startColor !== undefined)return this.$$runtime_startColor;

  if (this.$$user_startColor !== undefined)return this.$$user_startColor;
   else return null;

}

//000914 Code[getEndColor]:
function(value)
{
  if (this.$$runtime_endColor !== undefined)return this.$$runtime_endColor;

  if (this.$$user_endColor !== undefined)return this.$$user_endColor;
   else return null;

}

//000914 Code[getColorPositionUnit]:
function(value)
{
  if (this.$$runtime_colorPositionUnit !== undefined)return this.$$runtime_colorPositionUnit;

  if (this.$$user_colorPositionUnit !== undefined)return this.$$user_colorPositionUnit;
   else return this.$$init_colorPositionUnit;

}

//000916 Code[getOrientation]:
function(value)
{
  if (this.$$runtime_orientation !== undefined)return this.$$runtime_orientation;

  if (this.$$user_orientation !== undefined)return this.$$user_orientation;
   else return this.$$init_orientation;

}

//000917 Code[getStartColorPosition]:
function(value)
{
  if (this.$$runtime_startColorPosition !== undefined)return this.$$runtime_startColorPosition;

  if (this.$$user_startColorPosition !== undefined)return this.$$user_startColorPosition;
   else return this.$$init_startColorPosition;

}

//000917 Code[getEndColorPosition]:
function(value)
{
  if (this.$$runtime_endColorPosition !== undefined)return this.$$runtime_endColorPosition;

  if (this.$$user_endColorPosition !== undefined)return this.$$user_endColorPosition;
   else return this.$$init_endColorPosition;

}

//000918 Code[getBorderImage]:
function(value)
{
  if (this.$$runtime_borderImage !== undefined)return this.$$runtime_borderImage;

  if (this.$$user_borderImage !== undefined)return this.$$user_borderImage;
   else return null;

}

//000920 Code[setThemedPaddingTop]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "paddingTop", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "paddingTop", "setThemed", value);

  if (this.$$theme_paddingTop === value)return value;

  if (value === null)prop.error(this, 4, "paddingTop", "setThemed", value);

  var msg = "Invalid incoming value for property 'paddingTop' of class 'qx.ui.core.Widget'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "paddingTop", "setThemed", value);

  var computed, old;
  if (this.$$runtime_paddingTop !== undefined)
  {
    old = computed = this.$$runtime_paddingTop;
    this.$$theme_paddingTop = value;
  } else if (this.$$user_paddingTop !== undefined)
  {
    old = computed = this.$$user_paddingTop;
    this.$$theme_paddingTop = value;
  } else if (this.$$theme_paddingTop !== undefined)
  {
    old = this.$$theme_paddingTop;
    computed = this.$$theme_paddingTop = value;
  } else if (this.$$useinit_paddingTop)
  {
    old = this.$$init_paddingTop;
    delete this.$$useinit_paddingTop;
    computed = this.$$theme_paddingTop = value;
  } else
  {
    computed = this.$$theme_paddingTop = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_paddingTop;

  this._applyPadding(computed, old, "paddingTop", "setThemed");
  return value;
}

//000921 Code[getInset]:
function(value)
{
  if (this.$$runtime_inset !== undefined)return this.$$runtime_inset;

  if (this.$$user_inset !== undefined)return this.$$user_inset;
   else return this.$$init_inset;

}

//000922 Code[setThemedPaddingRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "paddingRight", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "paddingRight", "setThemed", value);

  if (this.$$theme_paddingRight === value)return value;

  if (value === null)prop.error(this, 4, "paddingRight", "setThemed", value);

  var msg = "Invalid incoming value for property 'paddingRight' of class 'qx.ui.core.Widget'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "paddingRight", "setThemed", value);

  var computed, old;
  if (this.$$runtime_paddingRight !== undefined)
  {
    old = computed = this.$$runtime_paddingRight;
    this.$$theme_paddingRight = value;
  } else if (this.$$user_paddingRight !== undefined)
  {
    old = computed = this.$$user_paddingRight;
    this.$$theme_paddingRight = value;
  } else if (this.$$theme_paddingRight !== undefined)
  {
    old = this.$$theme_paddingRight;
    computed = this.$$theme_paddingRight = value;
  } else if (this.$$useinit_paddingRight)
  {
    old = this.$$init_paddingRight;
    delete this.$$useinit_paddingRight;
    computed = this.$$theme_paddingRight = value;
  } else
  {
    computed = this.$$theme_paddingRight = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_paddingRight;

  this._applyPadding(computed, old, "paddingRight", "setThemed");
  return value;
}

//000923 Code[setThemedPaddingBottom]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "paddingBottom", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "paddingBottom", "setThemed", value);

  if (this.$$theme_paddingBottom === value)return value;

  if (value === null)prop.error(this, 4, "paddingBottom", "setThemed", value);

  var msg = "Invalid incoming value for property 'paddingBottom' of class 'qx.ui.core.Widget'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "paddingBottom", "setThemed", value);

  var computed, old;
  if (this.$$runtime_paddingBottom !== undefined)
  {
    old = computed = this.$$runtime_paddingBottom;
    this.$$theme_paddingBottom = value;
  } else if (this.$$user_paddingBottom !== undefined)
  {
    old = computed = this.$$user_paddingBottom;
    this.$$theme_paddingBottom = value;
  } else if (this.$$theme_paddingBottom !== undefined)
  {
    old = this.$$theme_paddingBottom;
    computed = this.$$theme_paddingBottom = value;
  } else if (this.$$useinit_paddingBottom)
  {
    old = this.$$init_paddingBottom;
    delete this.$$useinit_paddingBottom;
    computed = this.$$theme_paddingBottom = value;
  } else
  {
    computed = this.$$theme_paddingBottom = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_paddingBottom;

  this._applyPadding(computed, old, "paddingBottom", "setThemed");
  return value;
}

//000924 Code[setThemedPaddingLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "paddingLeft", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "paddingLeft", "setThemed", value);

  if (this.$$theme_paddingLeft === value)return value;

  if (value === null)prop.error(this, 4, "paddingLeft", "setThemed", value);

  var msg = "Invalid incoming value for property 'paddingLeft' of class 'qx.ui.core.Widget'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "paddingLeft", "setThemed", value);

  var computed, old;
  if (this.$$runtime_paddingLeft !== undefined)
  {
    old = computed = this.$$runtime_paddingLeft;
    this.$$theme_paddingLeft = value;
  } else if (this.$$user_paddingLeft !== undefined)
  {
    old = computed = this.$$user_paddingLeft;
    this.$$theme_paddingLeft = value;
  } else if (this.$$theme_paddingLeft !== undefined)
  {
    old = this.$$theme_paddingLeft;
    computed = this.$$theme_paddingLeft = value;
  } else if (this.$$useinit_paddingLeft)
  {
    old = this.$$init_paddingLeft;
    delete this.$$useinit_paddingLeft;
    computed = this.$$theme_paddingLeft = value;
  } else
  {
    computed = this.$$theme_paddingLeft = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_paddingLeft;

  this._applyPadding(computed, old, "paddingLeft", "setThemed");
  return value;
}

//000924 Code[setThemedMarginTop]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "marginTop", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "marginTop", "setThemed", value);

  if (this.$$theme_marginTop === value)return value;

  if (value === null)prop.error(this, 4, "marginTop", "setThemed", value);

  var msg = "Invalid incoming value for property 'marginTop' of class 'qx.ui.core.LayoutItem'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "marginTop", "setThemed", value);

  var computed, old;
  if (this.$$runtime_marginTop !== undefined)
  {
    old = computed = this.$$runtime_marginTop;
    this.$$theme_marginTop = value;
  } else if (this.$$user_marginTop !== undefined)
  {
    old = computed = this.$$user_marginTop;
    this.$$theme_marginTop = value;
  } else if (this.$$theme_marginTop !== undefined)
  {
    old = this.$$theme_marginTop;
    computed = this.$$theme_marginTop = value;
  } else if (this.$$useinit_marginTop)
  {
    old = this.$$init_marginTop;
    delete this.$$useinit_marginTop;
    computed = this.$$theme_marginTop = value;
  } else
  {
    computed = this.$$theme_marginTop = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_marginTop;

  this._applyMargin(computed, old, "marginTop", "setThemed");
  return value;
}

//000925 Code[setThemedMarginRight]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "marginRight", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "marginRight", "setThemed", value);

  if (this.$$theme_marginRight === value)return value;

  if (value === null)prop.error(this, 4, "marginRight", "setThemed", value);

  var msg = "Invalid incoming value for property 'marginRight' of class 'qx.ui.core.LayoutItem'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "marginRight", "setThemed", value);

  var computed, old;
  if (this.$$runtime_marginRight !== undefined)
  {
    old = computed = this.$$runtime_marginRight;
    this.$$theme_marginRight = value;
  } else if (this.$$user_marginRight !== undefined)
  {
    old = computed = this.$$user_marginRight;
    this.$$theme_marginRight = value;
  } else if (this.$$theme_marginRight !== undefined)
  {
    old = this.$$theme_marginRight;
    computed = this.$$theme_marginRight = value;
  } else if (this.$$useinit_marginRight)
  {
    old = this.$$init_marginRight;
    delete this.$$useinit_marginRight;
    computed = this.$$theme_marginRight = value;
  } else
  {
    computed = this.$$theme_marginRight = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_marginRight;

  this._applyMargin(computed, old, "marginRight", "setThemed");
  return value;
}

//000926 Code[setThemedMarginBottom]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "marginBottom", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "marginBottom", "setThemed", value);

  if (this.$$theme_marginBottom === value)return value;

  if (value === null)prop.error(this, 4, "marginBottom", "setThemed", value);

  var msg = "Invalid incoming value for property 'marginBottom' of class 'qx.ui.core.LayoutItem'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "marginBottom", "setThemed", value);

  var computed, old;
  if (this.$$runtime_marginBottom !== undefined)
  {
    old = computed = this.$$runtime_marginBottom;
    this.$$theme_marginBottom = value;
  } else if (this.$$user_marginBottom !== undefined)
  {
    old = computed = this.$$user_marginBottom;
    this.$$theme_marginBottom = value;
  } else if (this.$$theme_marginBottom !== undefined)
  {
    old = this.$$theme_marginBottom;
    computed = this.$$theme_marginBottom = value;
  } else if (this.$$useinit_marginBottom)
  {
    old = this.$$init_marginBottom;
    delete this.$$useinit_marginBottom;
    computed = this.$$theme_marginBottom = value;
  } else
  {
    computed = this.$$theme_marginBottom = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_marginBottom;

  this._applyMargin(computed, old, "marginBottom", "setThemed");
  return value;
}

//000927 Code[setThemedMarginLeft]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "marginLeft", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "marginLeft", "setThemed", value);

  if (this.$$theme_marginLeft === value)return value;

  if (value === null)prop.error(this, 4, "marginLeft", "setThemed", value);

  var msg = "Invalid incoming value for property 'marginLeft' of class 'qx.ui.core.LayoutItem'";
  if (!(qx.core.Assert.assertInteger(value, msg) || true))prop.error(this, 5, "marginLeft", "setThemed", value);

  var computed, old;
  if (this.$$runtime_marginLeft !== undefined)
  {
    old = computed = this.$$runtime_marginLeft;
    this.$$theme_marginLeft = value;
  } else if (this.$$user_marginLeft !== undefined)
  {
    old = computed = this.$$user_marginLeft;
    this.$$theme_marginLeft = value;
  } else if (this.$$theme_marginLeft !== undefined)
  {
    old = this.$$theme_marginLeft;
    computed = this.$$theme_marginLeft = value;
  } else if (this.$$useinit_marginLeft)
  {
    old = this.$$init_marginLeft;
    delete this.$$useinit_marginLeft;
    computed = this.$$theme_marginLeft = value;
  } else
  {
    computed = this.$$theme_marginLeft = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_marginLeft;

  this._applyMargin(computed, old, "marginLeft", "setThemed");
  return value;
}

//000929 Code[setThemedCenter]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "center", "setThemed", value);

  if (value === undefined)prop.error(this, 2, "center", "setThemed", value);

  if (this.$$theme_center === value)return value;

  if (value === null)prop.error(this, 4, "center", "setThemed", value);

  var msg = "Invalid incoming value for property 'center' of class 'qx.ui.basic.Atom'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "center", "setThemed", value);

  var computed, old;
  if (this.$$runtime_center !== undefined)
  {
    old = computed = this.$$runtime_center;
    this.$$theme_center = value;
  } else if (this.$$user_center !== undefined)
  {
    old = computed = this.$$user_center;
    this.$$theme_center = value;
  } else if (this.$$theme_center !== undefined)
  {
    old = this.$$theme_center;
    computed = this.$$theme_center = value;
  } else if (this.$$useinit_center)
  {
    old = this.$$init_center;
    delete this.$$useinit_center;
    computed = this.$$theme_center = value;
  } else
  {
    computed = this.$$theme_center = value;
  }



  if (old === computed)return value;

  if (old === undefined)old = this.$$init_center;

  this._applyCenter(computed, old, "center", "setThemed");
  return value;
}

//000930 Code[setCenter]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 1)prop.error(this, 1, "center", "set", value);

  if (value === undefined)prop.error(this, 2, "center", "set", value);

  if (this.$$user_center === value)return value;

  if (value === null)prop.error(this, 4, "center", "set", value);

  var msg = "Invalid incoming value for property 'center' of class 'qx.ui.layout.Atom'";
  if (!(qx.core.Assert.assertBoolean(value, msg) || true))prop.error(this, 5, "center", "set", value);

  var computed, old;
  if (this.$$runtime_center !== undefined)
  {
    old = computed = this.$$runtime_center;
    this.$$user_center = value;
  } else if (this.$$user_center !== undefined)
  {
    old = this.$$user_center;
    computed = this.$$user_center = value;
  } else if (this.$$useinit_center)
  {
    old = this.$$init_center;
    delete this.$$useinit_center;
    computed = this.$$user_center = value;
  } else
  {
    computed = this.$$user_center = value;
  }


  if (old === computed)return value;

  if (old === undefined)old = this.$$init_center;

  this._applyLayoutChange(computed, old, "center", "set");
  return value;
}

//000932 Code[getAllowGrowX]:
function(value)
{
  if (this.$$runtime_allowGrowX !== undefined)return this.$$runtime_allowGrowX;

  if (this.$$user_allowGrowX !== undefined)return this.$$user_allowGrowX;
   else if (this.$$theme_allowGrowX !== undefined)return this.$$theme_allowGrowX;
   else return this.$$init_allowGrowX;


}

//000932 Code[getAllowShrinkX]:
function(value)
{
  if (this.$$runtime_allowShrinkX !== undefined)return this.$$runtime_allowShrinkX;

  if (this.$$user_allowShrinkX !== undefined)return this.$$user_allowShrinkX;
   else if (this.$$theme_allowShrinkX !== undefined)return this.$$theme_allowShrinkX;
   else return this.$$init_allowShrinkX;


}

//000933 Code[getAllowGrowY]:
function(value)
{
  if (this.$$runtime_allowGrowY !== undefined)return this.$$runtime_allowGrowY;

  if (this.$$user_allowGrowY !== undefined)return this.$$user_allowGrowY;
   else if (this.$$theme_allowGrowY !== undefined)return this.$$theme_allowGrowY;
   else return this.$$init_allowGrowY;


}

//000934 Code[getAllowShrinkY]:
function(value)
{
  if (this.$$runtime_allowShrinkY !== undefined)return this.$$runtime_allowShrinkY;

  if (this.$$user_allowShrinkY !== undefined)return this.$$user_allowShrinkY;
   else if (this.$$theme_allowShrinkY !== undefined)return this.$$theme_allowShrinkY;
   else return this.$$init_allowShrinkY;


}

//000935 Code[getHeight]:
function(value)
{
  if (this.$$runtime_height !== undefined)return this.$$runtime_height;

  if (this.$$user_height !== undefined)return this.$$user_height;
   else if (this.$$theme_height !== undefined)return this.$$theme_height;
   else return this.$$init_height;


}

//000936 Code[getPaddingTop]:
function(value)
{
  if (this.$$runtime_paddingTop !== undefined)return this.$$runtime_paddingTop;

  if (this.$$user_paddingTop !== undefined)return this.$$user_paddingTop;
   else if (this.$$theme_paddingTop !== undefined)return this.$$theme_paddingTop;
   else return this.$$init_paddingTop;


}

//000936 Code[getPaddingRight]:
function(value)
{
  if (this.$$runtime_paddingRight !== undefined)return this.$$runtime_paddingRight;

  if (this.$$user_paddingRight !== undefined)return this.$$user_paddingRight;
   else if (this.$$theme_paddingRight !== undefined)return this.$$theme_paddingRight;
   else return this.$$init_paddingRight;


}

//000937 Code[getPaddingBottom]:
function(value)
{
  if (this.$$runtime_paddingBottom !== undefined)return this.$$runtime_paddingBottom;

  if (this.$$user_paddingBottom !== undefined)return this.$$user_paddingBottom;
   else if (this.$$theme_paddingBottom !== undefined)return this.$$theme_paddingBottom;
   else return this.$$init_paddingBottom;


}

//000938 Code[getPaddingLeft]:
function(value)
{
  if (this.$$runtime_paddingLeft !== undefined)return this.$$runtime_paddingLeft;

  if (this.$$user_paddingLeft !== undefined)return this.$$user_paddingLeft;
   else if (this.$$theme_paddingLeft !== undefined)return this.$$theme_paddingLeft;
   else return this.$$init_paddingLeft;


}

//000939 Code[getWidth]:
function(value)
{
  if (this.$$runtime_width !== undefined)return this.$$runtime_width;

  if (this.$$user_width !== undefined)return this.$$user_width;
   else if (this.$$theme_width !== undefined)return this.$$theme_width;
   else return this.$$init_width;


}

//000940 Code[getMinWidth]:
function(value)
{
  if (this.$$runtime_minWidth !== undefined)return this.$$runtime_minWidth;

  if (this.$$user_minWidth !== undefined)return this.$$user_minWidth;
   else if (this.$$theme_minWidth !== undefined)return this.$$theme_minWidth;
   else return this.$$init_minWidth;


}

//000940 Code[getMaxWidth]:
function(value)
{
  if (this.$$runtime_maxWidth !== undefined)return this.$$runtime_maxWidth;

  if (this.$$user_maxWidth !== undefined)return this.$$user_maxWidth;
   else if (this.$$theme_maxWidth !== undefined)return this.$$theme_maxWidth;
   else return this.$$init_maxWidth;


}

//000941 Code[getMinHeight]:
function(value)
{
  if (this.$$runtime_minHeight !== undefined)return this.$$runtime_minHeight;

  if (this.$$user_minHeight !== undefined)return this.$$user_minHeight;
   else if (this.$$theme_minHeight !== undefined)return this.$$theme_minHeight;
   else return this.$$init_minHeight;


}

//000942 Code[getMaxHeight]:
function(value)
{
  if (this.$$runtime_maxHeight !== undefined)return this.$$runtime_maxHeight;

  if (this.$$user_maxHeight !== undefined)return this.$$user_maxHeight;
   else if (this.$$theme_maxHeight !== undefined)return this.$$theme_maxHeight;
   else return this.$$init_maxHeight;


}

//000943 Code[getIconPosition]:
function(value)
{
  if (this.$$runtime_iconPosition !== undefined)return this.$$runtime_iconPosition;

  if (this.$$user_iconPosition !== undefined)return this.$$user_iconPosition;
   else return this.$$init_iconPosition;

}

//000943 Code[getGap]:
function(value)
{
  if (this.$$runtime_gap !== undefined)return this.$$runtime_gap;

  if (this.$$user_gap !== undefined)return this.$$user_gap;
   else return this.$$init_gap;

}

//000944 Code[getFont]:
function(value) {
  if (this.$$runtime_font !== undefined)return this.$$runtime_font;
   else if (this.$$inherit_font !== undefined)return this.$$inherit_font;
   else if (this.$$user_font !== undefined)return this.$$user_font;
   else if (this.$$theme_font !== undefined)return this.$$theme_font;
   else return null;




}

//000945 Code[getValue]:
function(value)
{
  if (this.$$runtime_value !== undefined)return this.$$runtime_value;

  if (this.$$user_value !== undefined)return this.$$user_value;
   else return null;

}

//000946 Code[getRich]:
function(value)
{
  if (this.$$runtime_rich !== undefined)return this.$$runtime_rich;

  if (this.$$user_rich !== undefined)return this.$$user_rich;
   else return this.$$init_rich;

}

//000963 Code[getMarginTop]:
function(value)
{
  if (this.$$runtime_marginTop !== undefined)return this.$$runtime_marginTop;

  if (this.$$user_marginTop !== undefined)return this.$$user_marginTop;
   else if (this.$$theme_marginTop !== undefined)return this.$$theme_marginTop;
   else return this.$$init_marginTop;


}

//000963 Code[getMarginRight]:
function(value)
{
  if (this.$$runtime_marginRight !== undefined)return this.$$runtime_marginRight;

  if (this.$$user_marginRight !== undefined)return this.$$user_marginRight;
   else if (this.$$theme_marginRight !== undefined)return this.$$theme_marginRight;
   else return this.$$init_marginRight;


}

//000964 Code[getMarginBottom]:
function(value)
{
  if (this.$$runtime_marginBottom !== undefined)return this.$$runtime_marginBottom;

  if (this.$$user_marginBottom !== undefined)return this.$$user_marginBottom;
   else if (this.$$theme_marginBottom !== undefined)return this.$$theme_marginBottom;
   else return this.$$init_marginBottom;


}

//000964 Code[getMarginLeft]:
function(value)
{
  if (this.$$runtime_marginLeft !== undefined)return this.$$runtime_marginLeft;

  if (this.$$user_marginLeft !== undefined)return this.$$user_marginLeft;
   else if (this.$$theme_marginLeft !== undefined)return this.$$theme_marginLeft;
   else return this.$$init_marginLeft;


}

//000966 Code[getCenter]:
function(value)
{
  if (this.$$runtime_center !== undefined)return this.$$runtime_center;

  if (this.$$user_center !== undefined)return this.$$user_center;
   else return this.$$init_center;

}

//000968 Code[getFocus]:
function(value)
{
  if (this.$$runtime_focus !== undefined)return this.$$runtime_focus;

  if (this.$$user_focus !== undefined)return this.$$user_focus;
   else return null;

}

//000969 Code[getActive]:
function(value)
{
  if (this.$$runtime_active !== undefined)return this.$$runtime_active;

  if (this.$$user_active !== undefined)return this.$$user_active;
   else return null;

}

//003115 Code[getToolTip]:
function(value)
{
  if (this.$$runtime_toolTip !== undefined)return this.$$runtime_toolTip;

  if (this.$$user_toolTip !== undefined)return this.$$user_toolTip;
   else return null;

}

//003115 Code[getToolTipText]:
function(value)
{
  if (this.$$runtime_toolTipText !== undefined)return this.$$runtime_toolTipText;

  if (this.$$user_toolTipText !== undefined)return this.$$user_toolTipText;
   else return null;

}

//003116 Code[getToolTipIcon]:
function(value)
{
  if (this.$$runtime_toolTipIcon !== undefined)return this.$$runtime_toolTipIcon;

  if (this.$$user_toolTipIcon !== undefined)return this.$$user_toolTipIcon;
   else return null;

}

//006099 Code[resetActive]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 0)prop.error(this, 3, "active", "reset", value);

  if (this.$$user_active === undefined)return;

  var computed, old;
  if (this.$$runtime_active !== undefined)
  {
    old = computed = this.$$runtime_active;
    delete this.$$user_active;
  } else if (this.$$user_active !== undefined)
  {
    old = this.$$user_active;
    delete this.$$user_active;
    if (this.$$runtime_active !== undefined)computed = this.$$runtime_active;

    if (this.$$theme_active !== undefined)computed = this.$$theme_active;
     else if (this.$$init_active !== undefined)
    {
      computed = this.$$init_active;
      this.$$useinit_active = true;
    }

  } else if (this.$$useinit_active) {
    old = this.$$init_active;
  }


  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyActive(computed, old, "active", "reset");
}

//006101 Code[resetFocus]:
function(value)
{
  var prop = qx.core.Property;
  if (arguments.length !== 0)prop.error(this, 3, "focus", "reset", value);

  if (this.$$user_focus === undefined)return;

  var computed, old;
  if (this.$$runtime_focus !== undefined)
  {
    old = computed = this.$$runtime_focus;
    delete this.$$user_focus;
  } else if (this.$$user_focus !== undefined)
  {
    old = this.$$user_focus;
    delete this.$$user_focus;
    if (this.$$runtime_focus !== undefined)computed = this.$$runtime_focus;

    if (this.$$theme_focus !== undefined)computed = this.$$theme_focus;
     else if (this.$$init_focus !== undefined)
    {
      computed = this.$$init_focus;
      this.$$useinit_focus = true;
    }

  } else if (this.$$useinit_focus) {
    old = this.$$init_focus;
  }


  if (computed === undefined)computed = null;

  if (old === computed)return value;

  if (old === undefined)old = null;

  this._applyFocus(computed, old, "focus", "reset");
}

