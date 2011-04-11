/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 Derrell Lipman

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Derrell Lipman(derrell)

************************************************************************ */


/**
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * FileReaders allow retrieving the data from a local file, after the file
 * name was selected by an <input type="file"> element.
 *
 * For more information see:
 * http://www.w3.org/TR/FileAPI/
 */
qx.Class.define("qx.bom.FileReader",
{
  extend : qx.core.Object,


  /**
   * Create a new instance.
   */
  construct: function()
  {
    // Call the superclass constructor
    this.base(arguments);
    
    // Get a FileReader object
    this._fileReader = new window.FileReader();
    
    // Bind native handlers to this instance
    this._handleLoadStart = qx.lang.Function.bind(this._handleLoadStart, this);
    this._handleProgress  = qx.lang.Function.bind(this._handleProgress, this);
    this._handleLoad      = qx.lang.Function.bind(this._handleLoad, this);
    this._handleAbort     = qx.lang.Function.bind(this._handleAbort, this);
    this._handleError     = qx.lang.Function.bind(this._handleError, this);
    this._handleLoadEnd   = qx.lang.Function.bind(this._handleLoadEnd, this);

    // Be notified of all events
    qx.bom.Event.addNativeListener(this._fileReader,
                                   "loadstart",
                                   this._handleLoadStart);

    qx.bom.Event.addNativeListener(this._fileReader,
                                   "progress",
                                   this._handleProgress);

    qx.bom.Event.addNativeListener(this._fileReader,
                                   "load",
                                   this._handleLoad);

    qx.bom.Event.addNativeListener(this._fileReader,
                                   "abort",
                                   this._handleAbort);

    qx.bom.Event.addNativeListener(this._fileReader,
                                   "error",
                                   this._handleError);

    qx.bom.Event.addNativeListener(this._fileReader,
                                   "loadend",
                                   this._handleLoadEnd);
  },


  events :
  {
    /** Fired when progress has begun. */
    "loadstart" : "qx.event.type.Data",
    
    /** Fired while making progress, presumably at a minimum of every 50ms */
    "progress"  : "qx.event.type.Data",

    /** Fired when an error occurs */
    "error": "qx.event.type.Data",

    /** 
     * Fired when progression has failed, after the last "progress" has been
     * dispatched, or after "loadstart" has been dispatched, if "progress" has
     * not been dispatched"
     */
    "abort"  : "qx.event.type.Data",
    
    /** Fired when progression is successful */
    "load"  : "qx.event.type.Data",
    
    /** 
     * Fired when progress has stopped, after any of "error", "abort", or
     * "load" have been dispatched.
     */
    "loadend"  : "qx.event.type.Data"
  },


  statics :
  {
    /**
     * Return the number of files selected by the user, from an <input
     * type="file"> element.
     *
     * @param inputElement {Element}
     *   The Element created as a result of an <input type="file"> tag.
     *
     * @return {Integer}
     *   The number of selected files.
     */
    getNumFiles : function(inputElement)
    {
        return inputElement.files.length;
    },

    /**
     * Return the native File object selected from an <input type="file">
     * element.
     *
     * @param inputElement {Element}
     *   The Element created as a result of an <input type="file"> tag.
     *
     * @param index {Integer}
     *   The index of the selected file to return.
     *
     * @return {File}
     *   The File object associated with the selected file name.
     */
    getFile : function(inputElement, index)
    {
        return inputElement.files[index];
    }
  },


  members :
  {
    /** The native FileReader object associated this instance */
    _fileReader : null,

    /**
     * Begin reading from the file referenced by the specified file
     * object. This is an asynchronous request. When the file is fully loaded,
     * the "load" event will be fired.
     *
     * The data will be provided in a binary format where each byte is in the
     * range [0,255].
     *
     * @param fileObj {File}
     *   A File object, as obtained by calling {@link #getFile} with an
     *   element of type <input type="file">.
     */
    readAsBinaryString : function(fileObj)
    {
      this._fileReader.readAsBinaryString(fileObj);
    },

    /**
     * Begin reading from the file referenced by the specified file
     * object. This is an asynchronous request. When the file is fully loaded,
     * the "load" event will be fired.
     *
     * The data will be provided as text, in the specified encoding.
     *
     * @param fileObj {File}
     *   A File object, as obtained by calling {@link #getFile} with an
     *   element of type <input type="file">.
     * 
     * @param encoding {String?"UTF-8"}
     *   The encoding for the resulting string.
     */
    readAsText : function(fileObj, encoding)
    {
      this._fileReader.readAsBinaryString(fileObj, encoding);
    },

    /**
     * Begin reading from the file referenced by the specified file
     * object. This is an asynchronous request. When the file is fully loaded,
     * the "load" event will be fired.
     *
     * The data is returned in a binary format where each byte is in the range
     * [0,255].
     *
     * @param fileObj {File}
     *   A File object, as obtained by calling {@link #getFile} with an
     *   element of type <input type="file">.
     */
    readAsBinaryString : function(fileObj)
    {
      this._fileReader.readAsBinaryString(fileObj);
    },

    /**
     * "loadstart" handler
     * 
     * @param e {Object}
     *   Object which contains a 'progress' object which contains the members:
     *   - lengthComputable {Boolean} True if length is known; false otherwise
     *   - loaded {Number} The number of bytes transferred so far
     *   - total {Number} The length of the entire body being transferred
     */
    _handleLoadStart: function(e) 
    {
      this.fireDataEvent("loadstart", { progress : e.data });
    },

    /**
     * "progress" handler
     * 
     * @param e {Object}
     *   Object which contains a 'progress' object which contains the members:
     *   - lengthComputable {Boolean} True if length is known; false otherwise
     *   - loaded {Number} The number of bytes transferred so far
     *   - total {Number} The length of the entire body being transferred
     */
    _handleProgress: function(e) 
    {
      this.fireDataEvent("progress", { progress : e.data });
    },

    /**
     * "error" handler
     * 
     * @param e {Object}
     *   Object which contains a 'progress' object which contains the members:
     *   - lengthComputable {Boolean} True if length is known; false otherwise
     *   - loaded {Number} The number of bytes transferred so far
     *   - total {Number} The length of the entire body being transferred
     */
    _handleError: function(e) 
    {
      this.fireDataEvent("error", { progress : e.data });
    },

    /**
     * "abort" handler
     * 
     * @param e {Object}
     *   Object which contains a 'progress' object which contains the members:
     *   - lengthComputable {Boolean} True if length is known; false otherwise
     *   - loaded {Number} The number of bytes transferred so far
     *   - total {Number} The length of the entire body being transferred
     */
    _handleAbort: function(e) 
    {
      this.fireDataEvent("abort", { progress : e.data });
    },

    /**
     * "load" handler
     * 
     * @param e {Object}
     *   Object which contains:
     *   - A 'progress' object which contains the members:
     *     - lengthComputable {Boolean} True if length is known; false otherwise
     *     - loaded {Number} The number of bytes transferred so far
     *     - total {Number} The length of the entire body being transferred
     *   - A 'content' member which contains the loaded file content
     */
    _handleLoad: function(e) 
    {
      // Add the result to the event data
      this.fireDataEvent("load",
                         {
                           progress : e.data,
                           content : e.target.result
                         });
    },

    /**
     * "loadend" handler
     * 
     * @param e {Object}
     *   Object wich contains a 'progress' object which contains  the members:
     *   - lengthComputable {Boolean} True if length is known; false otherwise
     *   - loaded {Number} The number of bytes transferred so far
     *   - total {Number} The length of the entire body being transferred
     */
    _handleLoadEnd: function(e) 
    {
      this.fireDataEvent("loadend", { progress : e.data });
    }
  },


  destruct : function()
  {
    // Remove all listeners
    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "loadstart",
                                      this._handleLoadStart);

    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "progress",
                                      this._handleProgress);

    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "load",
                                      this._handleLoad);

    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "abort",
                                      this._handleAbort);

    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "error",
                                      this._handleError);

    qx.bom.Event.removeNativeListener(this._fileReader,
                                      "loadend",
                                      this._handleLoadEnd);

    this._fileReader = null;
  }
});