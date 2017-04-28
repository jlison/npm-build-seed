exports.ids = [0];
exports.modules = [
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*------------------------------------------------------------------------------
            ___________                   .__          __
            \__    ___/___   _____ ______ |  | _____ _/  |_  ____
              |    |_/ __ \ /     \\____ \|  | \__  \\   __\/ __ \
              |    |\  ___/|  Y Y  \  |_> >  |__/ __ \|  | \  ___/
              |____| \___  >__|_|  /   __/|____(____  /__|  \___  >
                         \/      \/|__|             \/          \/

                              Template module
------------------------------------------------------------------------------*/

/** A template class */
var Template = function () {

  /**
   * @param  {String} param - A template parameter.
   */
  function Template(param) {
    _classCallCheck(this, Template);

    this.param = param;
  }

  /**
   * Check that input is of type string
   * @param  {Any}  input - Variable to check if it is a string
   * @return {Boolean} - True if the type of the variable is a string; false
   * otherwise.
   */


  _createClass(Template, [{
    key: '_log',


    /**
     * Console logs input
     * @private
     * @param {Any} input - Input to send to the console.log
     */
    value: function _log(input) {
      console.log("Message: %j", input);
    }

    /**
     * Start the template
     * @param {String} [msg=false] - Optional message to console log.
     * @return {Bool} True if something was logged out; false otherwise.
     */

  }, {
    key: 'start',
    value: function start() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


      var logged = false;

      if (typeof msg === 'string') {
        console.log("Addional message is: " + msg);
        logged = true;
      }

      if (this.param) {
        this._log(this.param);
        logged = true;
      }

      return logged;
    }
  }], [{
    key: 'isString',
    value: function isString(input) {
      if (typeof input === 'string') return true;
      return false;
    }
  }]);

  return Template;
}();

exports.Template = Template;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*------------------------------------------------------------------------------
                           _____
                          /  _  \ ______ ______
                         /  /_\  \\____ \\____ \
                        /    |    \  |_> >  |_> >
                        \____|__  /   __/|   __/
                                \/|__|   |__|

                              Main file
------------------------------------------------------------------------------*/



var Template = __webpack_require__(0).Template;

/***/ })
];;