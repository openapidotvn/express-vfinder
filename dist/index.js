module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dcfinder;\n\nvar _dcfinder = __webpack_require__(/*! lib/dcfinder */ \"./src/lib/dcfinder.js\");\n\nvar _dcfinder2 = _interopRequireDefault(_dcfinder);\n\nvar _base = __webpack_require__(/*! storage/base */ \"./src/storage/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _disk = __webpack_require__(/*! storage/disk */ \"./src/storage/disk.js\");\n\nvar _disk2 = _interopRequireDefault(_disk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction dcfinder(options) {\n  var dcfinder = new _dcfinder2.default(options);\n\n  return dcfinder.handler();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/dcfinder.js":
/*!*****************************!*\
  !*** ./src/lib/dcfinder.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _serveStatic = __webpack_require__(/*! serve-static */ \"serve-static\");\n\nvar _serveStatic2 = _interopRequireDefault(_serveStatic);\n\nvar _disk = __webpack_require__(/*! storage/disk */ \"./src/storage/disk.js\");\n\nvar _disk2 = _interopRequireDefault(_disk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DCFinder = function () {\n  function DCFinder() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, DCFinder);\n\n    this.options = this.getOptions(options);\n\n    if (options.storage) {\n      this.storage = options.storage;\n    } else {\n      this.storage = new _disk2.default(this.options);\n    }\n  }\n\n  _createClass(DCFinder, [{\n    key: 'getOptions',\n    value: function getOptions(options) {\n      return {\n        baseUrl: options.baseUrl,\n        apiPath: options.apiPath || '/dcfinder',\n        staticPath: options.staticPath || '/static',\n        staticFolder: options.staticFolder,\n        bodyParser: options.bodyParser || true,\n        fileFilter: options.fileFilter,\n        accepted: options.bodyParser\n      };\n    }\n  }, {\n    key: 'handleAPI',\n    value: function handleAPI() {\n      var options = this.options;\n\n\n      var router = _express2.default.Router();\n\n      router.use(function (err, req, res, next) {\n        res.status(500).json({ code: 500, message: 'Something broke!' });\n      });\n\n      if (options.bodyParser !== false) {\n        // parse application/x-www-form-urlencoded\n        router.use(_bodyParser2.default.urlencoded({ extended: false }));\n\n        // parse application/json\n        router.use(_bodyParser2.default.json());\n      }\n\n      router.get('/config', this.storage.apiHandler(this.storage.config));\n\n      router.get('/dir', this.storage.apiHandler(this.storage.dir));\n\n      router.get('/search', this.storage.apiHandler(this.storage.search));\n\n      router.get('/info', this.storage.apiHandler(this.storage.info));\n\n      router.post('/upload', this.storage.apiHandler(this.storage.upload));\n\n      return router;\n    }\n  }, {\n    key: 'handleStatic',\n    value: function handleStatic() {\n      var options = this.options;\n\n\n      return (0, _serveStatic2.default)(options.staticFolder);\n    }\n  }, {\n    key: 'initRouter',\n    value: function initRouter() {\n      var options = this.options;\n\n\n      var router = _express2.default.Router();\n\n      //static\n      router.use(options.staticPath, this.handleStatic());\n\n      //api\n      router.use(options.apiPath, this.handleAPI());\n\n      return router;\n    }\n  }, {\n    key: 'handler',\n    value: function handler() {\n      return this.initRouter();\n    }\n  }]);\n\n  return DCFinder;\n}();\n\nexports.default = DCFinder;\n\n//# sourceURL=webpack:///./src/lib/dcfinder.js?");

/***/ }),

/***/ "./src/storage/base.js":
/*!*****************************!*\
  !*** ./src/storage/base.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StorageBase = function () {\n  function StorageBase(options) {\n    _classCallCheck(this, StorageBase);\n\n    this.options = options;\n  }\n\n  _createClass(StorageBase, [{\n    key: 'apiHandler',\n    value: function apiHandler(func) {\n      var _this = this;\n\n      if ('function' !== typeof func) {\n        throw new Error('API must be a function');\n      }\n\n      return function (req, res) {\n        func.call(_this, req, res).then(function (data) {\n          res.json(data);\n        }).catch(function (err) {\n          console.log(err);\n          res.json({ code: err.code, message: err.message });\n        });\n      };\n    }\n  }, {\n    key: 'upload',\n    value: function upload(req, res) {\n      return Promise.resolve({});\n    }\n  }, {\n    key: 'dir',\n    value: function dir(req, res) {\n      return Promise.resolve({});\n    }\n  }, {\n    key: 'info',\n    value: function info(req, res) {\n      return Promise.resolve({});\n    }\n  }, {\n    key: 'config',\n    value: function config(req, res) {\n      var options = this.options;\n\n\n      return Promise.resolve({\n        baseUrl: options.baseUrl,\n        accepted: options.accepted || [],\n        apiPath: options.apiPath\n      });\n    }\n  }, {\n    key: 'search',\n    value: function search(req, res) {\n      return Promise.resolve({});\n    }\n  }]);\n\n  return StorageBase;\n}();\n\nexports.default = StorageBase;\n\n//# sourceURL=webpack:///./src/storage/base.js?");

/***/ }),

/***/ "./src/storage/disk.js":
/*!*****************************!*\
  !*** ./src/storage/disk.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar _bluebird2 = _interopRequireDefault(_bluebird);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _mime = __webpack_require__(/*! mime */ \"mime\");\n\nvar _mime2 = _interopRequireDefault(_mime);\n\nvar _utils = __webpack_require__(/*! utils */ \"./src/utils/index.js\");\n\nvar _base = __webpack_require__(/*! storage/base */ \"./src/storage/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar fs = _bluebird2.default.promisifyAll(__webpack_require__(/*! fs */ \"fs\"));\n\n/* listing */\n\nvar DiskStore = function (_StorageBase) {\n  _inherits(DiskStore, _StorageBase);\n\n  function DiskStore(options) {\n    _classCallCheck(this, DiskStore);\n\n    return _possibleConstructorReturn(this, (DiskStore.__proto__ || Object.getPrototypeOf(DiskStore)).call(this, options));\n  }\n\n  _createClass(DiskStore, [{\n    key: '_getBaseInfo',\n    value: function _getBaseInfo(filePath) {\n      var options = this.options;\n\n      var absolutePath = _path2.default.join(options.staticFolder, filePath);\n\n      return fs.statAsync(absolutePath).then(function (stats) {\n        var isFolder = stats.isDirectory();\n        var isFile = stats.isFile();\n\n        if (isFile || isFolder) {\n          var pathInfo = _path2.default.parse(filePath);\n          var relativeUrl = (0, _utils.normalizePath)(_path2.default.join(options.staticPath, filePath));\n\n          var baseInfo = {\n            createdAt: stats.birthtime,\n            updatedAt: stats.ctime,\n            name: pathInfo.name,\n            pwd: (0, _utils.normalizePath)(pathInfo.dir),\n            path: (0, _utils.normalizePath)(_path2.default.join(pathInfo.dir, pathInfo.base)),\n            isFolder: isFolder,\n            mime: _mime2.default.lookup(pathInfo.ext)\n          };\n\n          if (isFile) {\n            baseInfo = _lodash2.default.merge({}, baseInfo, {\n              relativeUrl: relativeUrl,\n              url: options.baseUrl + relativeUrl,\n              size: stats.size || 0,\n              type: 'file',\n              fileName: pathInfo.base\n            });\n          } else {\n            baseInfo = _lodash2.default.merge({}, baseInfo, { type: 'folder' });\n          }\n          return baseInfo;\n        }\n\n        return null;\n      });\n    }\n  }, {\n    key: '_getInfo',\n    value: function _getInfo(filePath) {\n      return this._getBaseInfo(filePath).then(function (baseInfo) {\n        return baseInfo;\n      }).catch(function (err) {\n        console.log(err);\n        return null;\n      });\n    }\n  }, {\n    key: '_listDir',\n    value: function _listDir(dirPath) {\n      var _this2 = this;\n\n      var options = this.options;\n\n\n      var folderPath = _path2.default.normalize(options.staticFolder + dirPath);\n\n      return _bluebird2.default.resolve().then(function () {\n        //check folder exist\n        return fs.statAsync(folderPath).then(function (stats) {\n          if (stats.isDirectory()) {\n            return stats;\n          }\n          return _bluebird2.default.reject(new Error({ code: 400, message: 'Not found' }));\n        }).catch(function () {\n          return _bluebird2.default.reject(new Error({ code: 400, message: 'Not found' }));\n        });\n      }).then(function () {\n        //read dir\n        return fs.readdirAsync(folderPath);\n      }).then(function (fileNames) {\n        var promises = fileNames.map(function (fileName) {\n          var filePath = _path2.default.join(dirPath, fileName);\n          //get file exist & file info\n          return _this2._getInfo(filePath);\n        });\n        return _bluebird2.default.all(promises);\n      }).then(function (files) {\n        //filter null\n        return files.filter(function (item) {\n          return item !== null;\n        });\n      });\n    }\n  }, {\n    key: 'dir',\n    value: function dir(req, res) {\n      var options = this.options;\n\n\n      return this._listDir(req.query.path || '/');\n    }\n  }]);\n\n  return DiskStore;\n}(_base2.default);\n\nexports.default = DiskStore;\n\n//# sourceURL=webpack:///./src/storage/disk.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeTrailingSeparator = exports.normalizePath = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _normalizePath2 = __webpack_require__(/*! ./normalize-path */ \"./src/utils/normalize-path.js\");\n\nvar _normalizePath3 = _interopRequireDefault(_normalizePath2);\n\nvar _removeTrailingSeparator2 = __webpack_require__(/*! ./remove-trailing-separator */ \"./src/utils/remove-trailing-separator.js\");\n\nvar _removeTrailingSeparator3 = _interopRequireDefault(_removeTrailingSeparator2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.normalizePath = _normalizePath3.default;\nexports.removeTrailingSeparator = _removeTrailingSeparator3.default;\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/normalize-path.js":
/*!*************************************!*\
  !*** ./src/utils/normalize-path.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = normalizePath;\n\nvar _removeTrailingSeparator = __webpack_require__(/*! utils/remove-trailing-separator */ \"./src/utils/remove-trailing-separator.js\");\n\nvar _removeTrailingSeparator2 = _interopRequireDefault(_removeTrailingSeparator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction normalizePath(str, stripTrailing) {\n  if (typeof str !== 'string') {\n    throw new TypeError('expected a string');\n  }\n  str = str.replace(/[\\\\\\/]+/g, '/');\n  if (stripTrailing !== false) {\n    str = (0, _removeTrailingSeparator2.default)(str);\n  }\n  return str;\n};\n\n//# sourceURL=webpack:///./src/utils/normalize-path.js?");

/***/ }),

/***/ "./src/utils/remove-trailing-separator.js":
/*!************************************************!*\
  !*** ./src/utils/remove-trailing-separator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = removeTrailingSeparator;\nvar isWin = process.platform === 'win32';\n\nfunction removeTrailingSeparator(str) {\n  var i = str.length - 1;\n  if (i < 2) {\n    return str;\n  }\n  while (isSeparator(str, i)) {\n    i--;\n  }\n  return str.substr(0, i + 1);\n};\n\nfunction isSeparator(str, i) {\n  var char = str[i];\n  return i > 0 && (char === '/' || isWin && char === '\\\\');\n}\n\n//# sourceURL=webpack:///./src/utils/remove-trailing-separator.js?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mime":
/*!***********************!*\
  !*** external "mime" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mime\");\n\n//# sourceURL=webpack:///external_%22mime%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-static\");\n\n//# sourceURL=webpack:///external_%22serve-static%22?");

/***/ })

/******/ });