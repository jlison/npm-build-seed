/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
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
/******/ ]);