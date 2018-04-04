(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Scintilla"] = factory();
	else
		root["Scintilla"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Scintilla.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./Define.js":
/*!*******************!*\
  !*** ./Define.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var Version = {

    MAJOR: 0,
    MINOR: 0,
    REVISION: 1,
    VERSION: '0.0.1'

};

exports.default = Version;

/***/ }),

/***/ "./Scintilla.js":
/*!**********************!*\
  !*** ./Scintilla.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _Define = __webpack_require__(/*! ./Define */ "./Define.js");

var _Define2 = _interopRequireDefault(_Define);

var _ObjectExtend = __webpack_require__(/*! ./utils/object/ObjectExtend */ "./utils/object/ObjectExtend.js");

var _ObjectExtend2 = _interopRequireDefault(_ObjectExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @namespace scintilla
*/
/**
* @author       Tobias Beise Ulrich
* @license      MIT
*
* @overview
*
* --- Scintilla ---
*
* v0.0.1
*
* tobiasbu.github.io
*
* Scintilla is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
*/

var scintilla = scintilla || {

  Core: __webpack_require__(/*! ./core */ "./core/index.js"),

  // DATA STRUCTURES
  Structures: __webpack_require__(/*! ./structures */ "./structures/index.js"),
  // RENDER
  Render: __webpack_require__(/*! ./render */ "./render/index.js"),
  Color: __webpack_require__(/*! ./render/color/Color */ "./render/color/Color.js"),
  Transition: __webpack_require__(/*! ./render/transition */ "./render/transition/index.js"),
  // INPUT
  KeyCode: __webpack_require__(/*! ./input/keyboard/KeyCode */ "./input/keyboard/KeyCode.js"),
  MouseButton: __webpack_require__(/*! ./input/mouse/MouseButton */ "./input/mouse/MouseButton.js"),
  Input: __webpack_require__(/*! ./input */ "./input/index.js"),
  // MATH
  Math: __webpack_require__(/*! ./math/MathUtils */ "./math/MathUtils.js"),
  Matrix: __webpack_require__(/*! ./math/Matrix */ "./math/Matrix.js"),
  Ease: __webpack_require__(/*! ./math/easing/Ease */ "./math/easing/Ease.js"),
  EasingType: __webpack_require__(/*! ./math/easing/EasingType */ "./math/easing/EasingType.js"),
  // ENTITIES
  SceneManager: __webpack_require__(/*! ./scene/SceneManager */ "./scene/SceneManager.js"),
  Camera: __webpack_require__(/*! ./camera/Camera */ "./camera/Camera.js"),
  Module: __webpack_require__(/*! ./modules */ "./modules/index.js"),
  Entity: __webpack_require__(/*! ./entities */ "./entities/index.js"),
  // EVENTS
  Event: __webpack_require__(/*! ./event */ "./event/index.js"),
  // CORE
  Resources: __webpack_require__(/*! ./resources */ "./resources/index.js"),
  Cache: __webpack_require__(/*! ./cache/CacheManager */ "./cache/CacheManager.js"),
  Loader: __webpack_require__(/*! ./loader */ "./loader/index.js"),
  Game: __webpack_require__(/*! ./core/Game */ "./core/Game.js"),
  // UTILITIES
  Path: __webpack_require__(/*! ./utils/Path */ "./utils/Path.js")
};

(0, _ObjectExtend2.default)(_Define2.default, scintilla);

/*
scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}*/

module.exports = scintilla;

global.scintilla = scintilla;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./cache/Cache.js":
/*!************************!*\
  !*** ./cache/Cache.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache(wrapperFunction) {
        _classCallCheck(this, Cache);

        this.resources = new _Map2.default();
        this.adderWrapper = wrapperFunction || undefined;
    }

    _createClass(Cache, [{
        key: "add",
        value: function add(tag, asset) {

            var resource = asset;

            if (this.adderWrapper !== undefined) resource = this.adderWrapper(tag, asset);

            this.resources.set(tag, resource);
        }
    }, {
        key: "has",
        value: function has(tag) {
            return this.resources.has(tag);
        }
    }, {
        key: "get",
        value: function get(tag) {
            return this.resources.get(tag);
        }
    }, {
        key: "erase",
        value: function erase(tag) {
            this.resources.delete(tag);
            return this;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.resources.clear();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.resources.clear();
            this.resources = null;
        }
    }]);

    return Cache;
}();

exports.default = Cache;

/***/ }),

/***/ "./cache/CacheManager.js":
/*!*******************************!*\
  !*** ./cache/CacheManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _ImageResource = __webpack_require__(/*! ../resources/ImageResource */ "./resources/ImageResource.js");

var _ImageResource2 = _interopRequireDefault(_ImageResource);

var _TilemapResource = __webpack_require__(/*! ../resources/tilemap/TilemapResource */ "./resources/tilemap/TilemapResource.js");

var _TilemapResource2 = _interopRequireDefault(_TilemapResource);

var _Cache = __webpack_require__(/*! ./Cache */ "./cache/Cache.js");

var _Cache2 = _interopRequireDefault(_Cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheTypes = ['image', 'json', 'audio', 'text', 'tilemap'];

/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/

var CacheManager = function () {
  function CacheManager(game) {
    _classCallCheck(this, CacheManager);

    this.game = game;

    var self = this;

    this.image = new _Cache2.default(function (tag, data) {
      return new _ImageResource2.default(tag, data);
    });

    this.tilemap = new _Cache2.default(function (tag, data) {
      return new _TilemapResource2.default(tag, data, self);
    });

    this.json = new _Cache2.default();
    this.text = new _Cache2.default();
  }

  /*addTilemap(tag, dataFormat) {
    this._cache.tilemap[tag] = new TilemapResource(dataFormat, tag, this);
  }
    addJSON(tag, dataFormat) {
    this._cache.json[tag] = dataFormat;
  }
    addImage(tag, url, data) {
      if (this.tagExists('images',tag))
      this.removeTagAt('images',tag);
      
    var img = new ImageResource(data,tag)
      this._cache.images[tag] = img;
    }
    addSound(tag, url,data,webAudio) {
      var decoded = false;
      if (!webAudio)
    {
        decoded = true;
    }
      var audio = {
            tag: tag,
            url: url,
            data: data,
            usingWebAudio: webAudio,
            decoded: decoded,
            isDecoding: false
    };
      this._cache.sounds[tag] = audio;
    }
    soundDecoded(tag, data) {
      var sound = this.getAssetInfo("sounds",tag);
      sound.data = data;
    sound.decoded = true;
    sound.isDecoding = false;
    }*/

  _createClass(CacheManager, [{
    key: "hasCache",
    value: function hasCache(cacheType) {
      return _typeof(CacheTypes[cacheType]) !== undefined;
    }
  }, {
    key: "getAsset",
    value: function getAsset(cacheType, tag) {
      // return the cache container

      if (!this.hasCache(cacheType)) return null;

      return this[cacheType].get(tag);
    }
  }, {
    key: "clear",
    value: function clear() {

      for (var i = 0; i < CacheTypes.length; i++) {
        this[props[i]].clear();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {

      for (var i = 0; i < CacheTypes.length; i++) {
        this[props[i]].destroy();
        this[props[i]] = null;
      }

      this.game = null;
    }

    // SOUND STUFF

  }]);

  return CacheManager;
}();

exports.default = CacheManager;


_System2.default.register('Cache', CacheManager, 'cache');

/***/ }),

/***/ "./camera/Camera.js":
/*!**************************!*\
  !*** ./camera/Camera.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _Color = __webpack_require__(/*! ../render/color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _ResizeCamera = __webpack_require__(/*! ./ResizeCamera */ "./camera/ResizeCamera.js");

var _ResizeCamera2 = _interopRequireDefault(_ResizeCamera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(game) {
    _classCallCheck(this, Camera);

    this.game = game;
    this.canvas = null;

    this.width = game.config.camera.width;
    this.height = game.config.camera.height;

    this.bounds = new _BoundingBox2.default(); // render bounds
    this.viewBounds = new _BoundingBox2.default(0, 0, this.width, this.height); // global bounds
    this.transform = new _Transform2.default();

    //this.transform.origin.set(0.5,0.5)
    //this.centerView();
    // this._resolution = 1;
    this._pixelUnit = { x: 1, y: 1 };
    this._aspectRatio = 1;

    this._backgroundColor = new _Color2.default(); //.rgbToHex(0,0,0);
    this._roundPixels = game.config.roundPixels;
  }

  _createClass(Camera, [{
    key: 'centerView',
    value: function centerView() {
      this.x = this.width * 0.5;
      this.y = this.height * 0.5;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'centerToEntity',
    value: function centerToEntity(entity) {
      this.x = entity.position.x;
      this.y = entity.position.y;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(r, g, b, a) {
      if (r === undefined) {
        g = 0;
      }
      if (g === undefined) {
        g = 0;
      }
      if (b === undefined) {
        b = 0;
      }
      if (a === undefined) {
        a = 1;
      }
      this._backgroundColor = _Color2.default.rgba(r, g, b, a);
      return this;
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      (0, _ResizeCamera2.default)(this, this.canvas, width, height);
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'setView',
    value: function setView(x, y, width, height) {
      this.transform.position.x = x;
      this.transform.position.y = y;
      (0, _ResizeCamera2.default)(width, height);
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.transform.reset();
    }
  }, {
    key: 'position',
    get: function get() {
      return {
        x: this.transform.position.x,
        y: this.transform.position.y
      };
    },
    set: function set(value) {
      this.transform.position.x = value.x;
      this.transform.position.y = value.y;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.transform.position.x;
    },
    set: function set(value) {
      this.transform.position.x = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.transform.position.y;
    },
    set: function set(value) {
      this.transform.position.y = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'scale',
    get: function get() {
      return this.transform.scale.x;
    },
    set: function set(value) {
      this.transform.scale.x = value;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this.transform.angle;
    },
    set: function set(value) {
      this.transform.angle = value;
      this.transform.rotation = value * _MathUtils2.default.degToRad;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'origin',
    get: function get() {
      return this.transform.origin;
    },
    set: function set(value) {
      this.transform.x = value.x;
      this.transform.y = value.y;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'rotation',
    get: function get() {
      return this.transform.rotation;
    }
  }, {
    key: 'backgroundColor',
    set: function set(color) {
      if (color === undefined) {
        color = 'rgba(0,0,0,0)';
      }
      this._backgroundColor = color;
      return this;
    },
    get: function get() {
      return this._backgroundColor = color;
    }
  }, {
    key: 'roundPixels',
    set: function set(flag) {
      this._roundPixels = flag;
      this.transform._isDirty = true;
      return this;
    }
  }, {
    key: 'size',
    get: function get() {
      return { x: this.width, y: this.height };
    }
  }]);

  return Camera;
}();

exports.default = Camera;


_System2.default.register('Camera', Camera, 'camera', function () {
  this.canvas = this.game.system.render.canvas;
  (0, _ResizeCamera2.default)(this, this.canvas, this.width, this.height);
});

/***/ }),

/***/ "./camera/ResizeCamera.js":
/*!********************************!*\
  !*** ./camera/ResizeCamera.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ResizeCamera;
function ResizeCamera(camera, canvas, width, height) {

    camera.width = width;
    camera.height = height;
    camera._aspectRatio = width / height;
    camera._pixelUnit.x = canvas.width / camera.width;
    camera._pixelUnit.y = canvas.height / camera.height;
}

/***/ }),

/***/ "./camera/UpdateCamera.js":
/*!********************************!*\
  !*** ./camera/UpdateCamera.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateCamera;

var _UpdateBounds = __webpack_require__(/*! ../transform/UpdateBounds */ "./transform/UpdateBounds.js");

var _UpdateBounds2 = _interopRequireDefault(_UpdateBounds);

var _ComputeDelimiterPoint = __webpack_require__(/*! ../transform/ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

var _ComputeBounds = __webpack_require__(/*! ../transform/ComputeBounds */ "./transform/ComputeBounds.js");

var _ComputeBounds2 = _interopRequireDefault(_ComputeBounds);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateCamera(camera, canvas) {

  if (!camera.transform._isDirty) return;

  var t = camera.transform;

  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  var origin = {
    x: camera.width * t.origin.x,
    y: camera.height * t.origin.y
  };

  var pos = { x: t.position.x + origin.x,
    y: t.position.y + origin.y };

  if (camera._roundPixels) {
    pos.x = _MathUtils2.default.round(pos.x);
    pos.y = _MathUtils2.default.round(pos.y);
  }

  // update camera view
  camera.viewBounds.setMin(pos.x, pos.y).setMax(pos.x + camera.width, pos.y + camera.height);

  pos.x = -pos.x;
  pos.y = -pos.y;

  // compute the basic rotation
  t.matrix.setIdentity().scale(camera._pixelUnit.x, camera._pixelUnit.y) // resolution
  .translate(pos.x, pos.y).scale(t.scale.x, t.scale.x);

  // bounds should not be rotated
  (0, _ComputeBounds2.default)(camera.bounds, camera.transform, camera.width, camera.height, pos);

  t.matrix.radianRotate(t._cosSin.x, t._cosSin.y).translate(-origin.x, -origin.y);
}

/***/ }),

/***/ "./core/Config.js":
/*!************************!*\
  !*** ./core/Config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config(config) {
        _classCallCheck(this, Config);

        if (config === undefined) config = {};

        var callback = _ObjectGet2.default.value;
        var callback_2 = _ObjectGet2.default.propertyValue;

        // view and canvas
        this.width = callback(config, 'width', 640);
        this.height = callback(config, 'height', 480);
        this.parent = callback(config, 'parent', null);
        this.debug = callback(config, 'debug', false);

        this.roundPixels = callback(config, 'roundPixels', false);
        this.floorTiles = callback(config, 'floorTiles', false),

        // loader
        this.loader = {
                baseURL: callback_2(config, 'loader.baseURL', ''),
                path: callback_2(config, 'loader.path', ''),
                responseType: callback_2(config, 'loader.responseType', ''),
                async: callback_2(config, 'loader.async', true)
        };

        this.fps = callback(config, 'fps', 60);

        this.time = {
                timeoutMode: callback_2(config, 'time.timeOutMode', false)

        };

        this.camera = {
                width: callback_2(config, 'camera.width', this.width),
                height: callback_2(config, 'camera.height', this.height)
        };

        this.pixelated = callback(config, 'pixelated', false);
        /* this.loaderEnableParallel = GetValue(config, 'loader.enableParallel', true);
            this.loaderMaxParallelDownloads = GetValue(config, 'loader.maxParallelDownloads', 4);
            this.loaderCrossOrigin = GetValue(config, 'loader.crossOrigin', undefined);
            
            this.loaderUser = GetValue(config, 'loader.user', '');
            this.loaderPassword = GetValue(config, 'loader.password', '');
        this.loaderTimeout = GetValue(config, 'loader.timeout', 0);*/
};

exports.default = Config;

/***/ }),

/***/ "./core/Game.js":
/*!**********************!*\
  !*** ./core/Game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(/*! ./Config */ "./core/Config.js");

var _Config2 = _interopRequireDefault(_Config);

var _GameInitialize = __webpack_require__(/*! ./GameInitialize */ "./core/GameInitialize.js");

var _GameInitialize2 = _interopRequireDefault(_GameInitialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
var Game = function () {

    /**
    * @property {string|HTMLElement} parent - The Games DOM parent.
    * @default
    */
    function Game() {
        _classCallCheck(this, Game);

        this.parent = 'body';
        this.width = 800;
        this.height = 600;

        // object
        this.config = new _Config2.default(config);

        // boolean
        this.systemInited = false;
        this.isRunning = false;
        this.debugMode = false;

        // float
        this.timeMode = false;

        //objects
        this.debug = null;
        //this.scene = null;
        this.sound = null;
        this.input = null;
        this.pool = null;
        this.systems = null;
        this.context = null;
        this.time = null;
        this.events = null;

        this.parseConfiguration(this.config);

        (0, _GameInitialize2.default)(this);
    }

    _createClass(Game, [{
        key: 'parseConfiguration',
        value: function parseConfiguration(config) {

            //this.config = config;

            if (config['debug']) {
                this.debugMode = config['debug'];
            }

            if (config['width']) {
                this.width = config['width'];
            }

            if (config['height']) {
                this.height = config['height'];
            }

            if (config['parent']) {
                this.parent = config['parent'];
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            this.physics.destroy();
            this.sound.destroy();
            this.input.destroy();

            this.debug = null;
            this.cache = null;
            this.load = null;
            this.canvas = null;
            this.scene = null;
            this.sound = null;
            this.draw = null;
            this.universe = null;
            this.world = null;
            this.input = null;
            this.time = null;
            this.render = null;
            this.component = null;
            this.instance = null;
            this.animationCache = null;
            this.updateGameMethod = null;
        }
    }]);

    return Game;
}();

//scintilla.Game.prototype.constructor = scintilla.Game;


exports.default = Game;
module.exports = Game;

/***/ }),

/***/ "./core/GameInitialize.js":
/*!********************************!*\
  !*** ./core/GameInitialize.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GameInitialize;

var _physics = __webpack_require__(/*! ../physics/physics */ "./physics/physics.js");

var _physics2 = _interopRequireDefault(_physics);

var _Input = __webpack_require__(/*! ../input/Input */ "./input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _GameTime = __webpack_require__(/*! ../time/GameTime */ "./time/GameTime.js");

var _GameTime2 = _interopRequireDefault(_GameTime);

var _InitializeSystems = __webpack_require__(/*! ./system/components/InitializeSystems */ "./core/system/components/InitializeSystems.js");

var _InitializeSystems2 = _interopRequireDefault(_InitializeSystems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * Initialize engine
  *
  * @method Game#init()
  * @protected
  */
function GameInitialize(game) {

    if (game.systemInited) return;

    game.physics = new _physics2.default(game);
    game.input = new _Input2.default(game);
    //this.scene = new SceneManager(this);
    //new GameSystemManager(this);
    game.time = new _GameTime2.default(game);

    (0, _InitializeSystems2.default)(game);

    game.input.init();
    game.time.init(game.system.loop);
    game.systemInited = true;
    game.isRunning = true;

    Object.seal(game);

    console.log("scintilla started!");
}

/***/ }),

/***/ "./core/GameLoop.js":
/*!**************************!*\
  !*** ./core/GameLoop.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ./system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _UpdateStep = __webpack_require__(/*! ../time/UpdateStep */ "./time/UpdateStep.js");

var _UpdateStep2 = _interopRequireDefault(_UpdateStep);

var _UpdateCamera = __webpack_require__(/*! ../camera/UpdateCamera */ "./camera/UpdateCamera.js");

var _UpdateCamera2 = _interopRequireDefault(_UpdateCamera);

var _BeginDrawRender = __webpack_require__(/*! ../render/components/BeginDrawRender */ "./render/components/BeginDrawRender.js");

var _BeginDrawRender2 = _interopRequireDefault(_BeginDrawRender);

var _DrawRender = __webpack_require__(/*! ../render/components/DrawRender */ "./render/components/DrawRender.js");

var _DrawRender2 = _interopRequireDefault(_DrawRender);

var _EndDrawRender = __webpack_require__(/*! ../render/components/EndDrawRender */ "./render/components/EndDrawRender.js");

var _EndDrawRender2 = _interopRequireDefault(_EndDrawRender);

var _PreUpdateScene = __webpack_require__(/*! ../scene/components/PreUpdateScene */ "./scene/components/PreUpdateScene.js");

var _PreUpdateScene2 = _interopRequireDefault(_PreUpdateScene);

var _UpdateScene = __webpack_require__(/*! ../scene/components/UpdateScene */ "./scene/components/UpdateScene.js");

var _UpdateScene2 = _interopRequireDefault(_UpdateScene);

var _DrawUI = __webpack_require__(/*! ../render/ui/DrawUI */ "./render/ui/DrawUI.js");

var _DrawUI2 = _interopRequireDefault(_DrawUI);

var _DrawTransition = __webpack_require__(/*! ../render/transition/DrawTransition */ "./render/transition/DrawTransition.js");

var _DrawTransition2 = _interopRequireDefault(_DrawTransition);

var _UpdateTransition = __webpack_require__(/*! ../render/transition/UpdateTransition */ "./render/transition/UpdateTransition.js");

var _UpdateTransition2 = _interopRequireDefault(_UpdateTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* core game loop system
*
* @class GameLoop
* @protected
*/
var GameLoop = function () {
        function GameLoop(game, system) {
                _classCallCheck(this, GameLoop);

                this.game = game;
                this.system = system;
                this.updateStep = new _UpdateStep2.default(game, game.config);
                this.entityUpdateList = null;
                this.currentScene = null;
                this.camera = null;
                this.canvas = null;
        }

        _createClass(GameLoop, [{
                key: "loop",
                value: function loop(deltaTime) {

                        // Core Managers

                        this.game.input.update();

                        (0, _UpdateTransition2.default)(this.game.system.transition, deltaTime);

                        // Entities and Scene Update

                        this.currentScene = this.game.scene.currentScene;

                        var shouldUpdate = this.currentScene != null && this.currentScene !== undefined;
                        //let changeScene = (this.game.scene._changeScene != null || this.game.scene._changeScene !== undefined)


                        //if (changeScene)
                        (0, _PreUpdateScene2.default)(this.game.scene);
                        //this.game.scene.preUpdate();


                        if (shouldUpdate) {

                                (0, _UpdateScene2.default)(this.game.scene, deltaTime);
                                /*if (this.game.scene._setup)
                                {
                                    // global scene update
                                    if (this.currentScene.update !== undefined)
                                        this.currentScene.update(deltaTime);
                                } else {
                                    if (this.currentScene.loading !== undefined)
                                        this.currentScene.loading(deltaTime);
                                }*/

                                (0, _UpdateCamera2.default)(this.camera, this.canvas);

                                this.entityUpdateList.update(deltaTime);

                                this.entityUpdateList.lateUpdate(deltaTime);

                                if (this.camera.transform._isDirty) this.camera.transform._isDirty = false;
                        }
                }
        }, {
                key: "render",
                value: function render(deltaTime) {

                        if (this.currentScene !== null || this.currentScene !== undefined) {

                                // Scenes
                                (0, _BeginDrawRender2.default)(this.system.render);

                                (0, _DrawRender2.default)(this.system.render, this.camera, deltaTime);

                                // User Interface

                                (0, _DrawUI2.default)(this.system.ui, this.game.scene);

                                (0, _EndDrawRender2.default)(this.system.render);
                        }

                        // Transition and Debug

                        this.system.render.context.setTransform(1, 0, 0, 1, 0, 0);

                        (0, _DrawTransition2.default)(this.system.transition, this.system.render.canvas, this.system.render.context);

                        if (this.system.debug !== undefined) {

                                this.system.debug.test();
                        }
                }
        }]);

        return GameLoop;
}();

exports.default = GameLoop;


_System2.default.register('GameLoop', GameLoop, 'loop', function () {
        this.updateStep.init(this);
        this.entityUpdateList = this.game.system.entityList;
        this.camera = this.system.camera;
        this.canvas = this.system.render.canvas;
});

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Config: __webpack_require__(/*! ./Config */ "./core/Config.js"),
    System: __webpack_require__(/*! ./system/System */ "./core/system/System.js"),
    SceneSystem: __webpack_require__(/*! ./system/SceneSystem */ "./core/system/SceneSystem.js"),
    GameLoop: __webpack_require__(/*! ./GameLoop */ "./core/GameLoop.js")
};

/***/ }),

/***/ "./core/system/SceneSystem.js":
/*!************************************!*\
  !*** ./core/system/SceneSystem.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var SceneSystem = ['Cache',
//'Draw',
'Loader', 'EntityFactory', 'Camera', 'SceneManager', 'UserInterface', 'Transition'];

exports.default = SceneSystem;

/***/ }),

/***/ "./core/system/System.js":
/*!*******************************!*\
  !*** ./core/system/System.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameSystems = undefined;

var _SceneSystem = __webpack_require__(/*! ./SceneSystem */ "./core/system/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameSystems = exports.GameSystems = {};

var System = {

    /** @inner 
     * Register a game system.
     * 
     * @param {String} key Long description of system
     * @param {Class} system The system class
     * @param {String} systemName The short description name of the system
     * @param {Function} [initFunc] [optional] Initialize function for the system.
     */
    register: function register(key, system, systemName, initFunc) {
        GameSystems[key] = {
            name: systemName,
            system: system,
            init: initFunc
        };
    }
};

exports.default = System;

/***/ }),

/***/ "./core/system/components/InitializeSystems.js":
/*!*****************************************************!*\
  !*** ./core/system/components/InitializeSystems.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

function InitializeSystems(game) {

    var systems = {};

    // register all game systems
    for (var property in _System.GameSystems) {

        var registered = _System.GameSystems[property];
        systems[registered.name] = new registered.system(game, systems);
    }

    // set core system to game class
    game.system = systems;
    game.scene = systems['scene'];

    // initialize systems
    for (var _property in _System.GameSystems) {

        var _registered = _System.GameSystems[_property];
        var InitializeSystemFunction = _registered.init; //this[GameSystems[property].name];

        if (InitializeSystemFunction === undefined) continue;

        InitializeSystemFunction.call(systems[_registered.name]);
        //sys.init();
    }

    return systems;
}

/***/ }),

/***/ "./core/system/components/InjectSystems.js":
/*!*************************************************!*\
  !*** ./core/system/components/InjectSystems.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InjectSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

var _SceneSystem = __webpack_require__(/*! ../SceneSystem */ "./core/system/SceneSystem.js");

var _SceneSystem2 = _interopRequireDefault(_SceneSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InjectSystems(game, scene) {

    scene.game = game;

    for (var property in _SceneSystem2.default) {

        var sys = _System.GameSystems[_SceneSystem2.default[property]];

        if (sys !== undefined) scene[sys.name] = game.system[sys.name];
    }

    // Special injections, input and sound:

    scene['key'] = game.input.keyboard;
    scene['mouse'] = game.input.mouse;

    /*for (let property in gameSystems) {
          let sys = gameSystems[property];
        scene[sys.name] = property[sys.system];
    }*/
}

/***/ }),

/***/ "./core/system/components/UnjectSystems.js":
/*!*************************************************!*\
  !*** ./core/system/components/UnjectSystems.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UnjectSystems;

var _System = __webpack_require__(/*! ../System */ "./core/system/System.js");

function UnjectSystems(scene) {

    for (var property in _System.GameSystems) {

        if (scene[sys.name] !== undefined) {
            delete scene[sys.name]; // = undefined;
        }
    }
}

/***/ }),

/***/ "./dom/RequestAnimationFrame.js":
/*!**************************************!*\
  !*** ./dom/RequestAnimationFrame.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestAnimationFrame = function () {
        function RequestAnimationFrame(timeoutMode) {
                _classCallCheck(this, RequestAnimationFrame);

                if (timeoutMode === undefined) {
                        timeoutMode = false;
                }

                this.isRunning = false;
                this._isTimeOutMode = timeoutMode;

                this.thick = 0;
                this.lastTime = 0;

                //callbacks

                // game loop
                this.loopCallback = null;

                // timeout/animation callback 
                this.timeOutIdentifier = null;

                /*let vendors = [
                    'ms',
                    'moz',
                    'webkit',
                    'o'
                ];
                  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
                {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'];
                }*/

                var self = this;

                this.updateRequestAnimationFrame = function (timeStamp) {

                        self.lastTime = self.thick;
                        self.thick = timeStamp;
                        //this.game.update(time);
                        self.loopCallback(timeStamp);

                        self.timeOutIdentifier = window.requestAnimationFrame(self.updateRequestAnimationFrame);
                };

                this.updateTimeout = function () {

                        var dateTime = Date.now();
                        var delay = Math.max(16 + self.lastTime - dateTime, 0);
                        self.lastTime = self.thick;
                        self.thick = delay;
                        self.loopCallback(delay);
                        //this.game.update(Date.now());
                        self.timeOutIdentifier = window.setTimeout(self.updateTimeout, delay);
                };
        }

        _createClass(RequestAnimationFrame, [{
                key: "start",
                value: function start(loopCallback) {

                        if (this.isRunning) return;

                        this.isRunning = true;

                        this.loopCallback = loopCallback;

                        if (!window.requestAnimationFrame || this._isTimeOutMode) {
                                this._isTimeOutMode = true;
                                this.timeOutIdentifier = window.setTimeout(this.updateTimeout, 0);
                        } else {
                                this._isTimeOutMode = false;
                                this.timeOutIdentifier = window.requestAnimationFrame(this.updateRequestAnimationFrame);
                        }
                }
        }, {
                key: "stop",
                value: function stop() {

                        if (this._isTimeOutMode) {
                                clearTimeout(this.timeOutIdentifier);
                        } else {
                                window.cancelAnimationFrame(this.timeOutIdentifier);
                        }

                        this.isRunning = false;
                }
        }, {
                key: "destroy",
                value: function destroy() {
                        this.stop();
                        this.loopingCallback = null;
                }
        }]);

        return RequestAnimationFrame;
}();

exports.default = RequestAnimationFrame;

/***/ }),

/***/ "./entities/Entity.js":
/*!****************************!*\
  !*** ./entities/Entity.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* Base class for Entities
*
*/
var Entity = function () {
    function Entity(name, game) {
        _classCallCheck(this, Entity);

        this._name = name || 'New Entity';
        this._active = true;
        this.game = game || undefined;
    }

    _createClass(Entity, [{
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'active',
        get: function get() {
            return this._active;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._active) this._active = value;

            return this._active;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._name) this._name = value;

            return this._name;
        }
    }]);

    return Entity;
}();

exports.default = Entity;
;

/***/ }),

/***/ "./entities/EntityFactory.js":
/*!***********************************!*\
  !*** ./entities/EntityFactory.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _SceneEntity = __webpack_require__(/*! ./SceneEntity */ "./entities/SceneEntity.js");

var _SceneEntity2 = _interopRequireDefault(_SceneEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityFactory = function () {
    function EntityFactory(game) {
        _classCallCheck(this, EntityFactory);

        this.game = game;
        this.scene = null;
        this.entityList = null;
    }

    _createClass(EntityFactory, [{
        key: "entity",
        value: function entity(entityName) {
            entityName = entityName || 'Scene Entity ' + this.entityList.length;
            return new _SceneEntity2.default(entityName, this.game);
        }
    }, {
        key: "sprite",
        value: function sprite(tag, entityName) {

            var entity = this.entity(entityName);
            entity.modules.attach.sprite(tag);

            if (this.scene.current_scene !== null) {
                this.entityList.add(entity);
            }

            return entity;
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag, entityName) {
            var entity = this.entity(entityName);
            entity.modules.attach.tilemap(tag);

            if (this.scene.current_scene !== null) {
                this.entityList.add(entity);
            }

            return entity;
        }
    }]);

    return EntityFactory;
}();

exports.default = EntityFactory;


_System2.default.register('EntityFactory', EntityFactory, 'create', function () {
    this.entityList = this.game.system.entityList;
    this.scene = this.game.scene;
});

/***/ }),

/***/ "./entities/EntityUpdateList.js":
/*!**************************************!*\
  !*** ./entities/EntityUpdateList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _UpdateTransform = __webpack_require__(/*! ../transform/UpdateTransform */ "./transform/UpdateTransform.js");

var _UpdateTransform2 = _interopRequireDefault(_UpdateTransform);

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _ModulesUpdater = __webpack_require__(/*! ../modules/components/ModulesUpdater */ "./modules/components/ModulesUpdater.js");

var _ModulesUpdater2 = _interopRequireDefault(_ModulesUpdater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityUpdateList = function () {
    function EntityUpdateList(game) {
        _classCallCheck(this, EntityUpdateList);

        this.game = game;
        this._instances = null;
        this._destroyInstances = null;
        this._pendingInstances = null;
        this._camera = null;
    }

    _createClass(EntityUpdateList, [{
        key: "add",
        value: function add(instance) {
            if (this._instances.indexOf(instance) === -1 && this._pendingInstances.indexOf(instance) === -1) {
                this._pendingInstances.push(instance);
            }

            return instance;
        }
    }, {
        key: "remove",
        value: function remove(instance) {}
    }, {
        key: "update",
        value: function update(dt) {

            for (var i = 0; i < this._instances.size; i++) {

                var element = this._instances.at(i);

                if (element.active) {

                    if (element.update !== undefined) element.update.call(element, dt); //update(dt);

                    (0, _UpdateTransform2.default)(element.transform, this._camera.transform);

                    (0, _ModulesUpdater2.default)(element.modules, this.game);

                    if (element.transform._isDirty) element.transform._isDirty = false;
                }
            }
        }
    }, {
        key: "lateUpdate",
        value: function lateUpdate() {
            var removeSize = this._destroyInstances.size;
            var insertSize = this._pendingInstances.size;

            if (insertSize === 0 && removeSize === 0) return;

            if (removeSize > 0) this._instances.eraseList(this._destroyInstances, removeSize);

            /*this._pendingInstances.each(instance => {
                  this.initializeModules(instance);
                  this._instances.push(instance);
            })
              this._pendingInstances.clear();*/

            this._instances.concat(this._pendingInstances, true);

            this._pendingInstances.childs.length = 0;
            this._destroyInstances.childs.length = 0;
        }
    }, {
        key: "length",
        get: function get() {
            return this._instances.size;
        }
    }]);

    return EntityUpdateList;
}();

exports.default = EntityUpdateList;


_System2.default.register('EntityUpdateList', EntityUpdateList, 'entityList', function () {
    this._instances = new _List2.default();
    this._destroyInstances = new _List2.default();
    this._pendingInstances = new _List2.default();
    this._camera = this.game.system.camera;
});

/***/ }),

/***/ "./entities/SceneEntity.js":
/*!*********************************!*\
  !*** ./entities/SceneEntity.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Transform = __webpack_require__(/*! ../transform/Transform */ "./transform/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _ModuleManager = __webpack_require__(/*! ../modules/ModuleManager */ "./modules/ModuleManager.js");

var _ModuleManager2 = _interopRequireDefault(_ModuleManager);

var _Entity2 = __webpack_require__(/*! ./Entity */ "./entities/Entity.js");

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import EntityHierarchy from './EntityHierarchy'


var SceneEntity = function (_Entity) {
    _inherits(SceneEntity, _Entity);

    function SceneEntity(name, game) {
        _classCallCheck(this, SceneEntity);

        name = name || 'New SceneEntity';

        var _this = _possibleConstructorReturn(this, (SceneEntity.__proto__ || Object.getPrototypeOf(SceneEntity)).call(this, name, game || null));

        _this.transform = new _Transform2.default();
        _this.type = null;
        _this.pool = null;
        _this.modules = new _ModuleManager2.default(_this);
        //this.bounds = new BoundingBox();
        //this._transformDirty = false;
        //this._currentScene = null;


        return _this;
    }

    _createClass(SceneEntity, [{
        key: 'x',
        set: function set(value) {
            this.transform.position.x = value;
            this.transform.markDirty();
        },
        get: function get() {
            return this.transform.position.y;
        }
    }, {
        key: 'y',
        set: function set(value) {
            this.transform.position.y = value;
            this.transform.markDirty();
        },
        get: function get() {
            return this.transform.position.y;
        }
    }, {
        key: 'position',
        get: function get() {
            return this.transform.position;
        },
        set: function set(value) {
            this.transform.position = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin',
        get: function get() {
            return this.transform.origin;
        },
        set: function set(value) {
            this.transform.origin = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin.x',
        set: function set(value) {
            this.transform.origin.x = value;this.transform._isDirty = true;
        }
    }, {
        key: 'origin.y',
        set: function set(value) {
            this.transform.origin.y = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale',
        get: function get() {
            return this.transform.scale;
        },
        set: function set(value) {
            this.transform.scale = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale.x',
        set: function set(value) {
            this.transform.scale.x = value;this.transform._isDirty = true;
        }
    }, {
        key: 'scale.y',
        set: function set(value) {
            this.transform.scale.y = value;this.transform._isDirty = true;
        }
    }, {
        key: 'angle',
        get: function get() {
            return this.transform.angle;
        },
        set: function set(value) {
            this.transform.angle = value;this.transform._isDirty = true;
        }
    }]);

    return SceneEntity;
}(_Entity3.default //Hierarchy
);

exports.default = SceneEntity;

/***/ }),

/***/ "./entities/index.js":
/*!***************************!*\
  !*** ./entities/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Entity: __webpack_require__(/*! ./Entity */ "./entities/Entity.js"),
    SceneEntity: __webpack_require__(/*! ./SceneEntity */ "./entities/SceneEntity.js"),
    EntityUpdateList: __webpack_require__(/*! ./EntityUpdateList */ "./entities/EntityUpdateList.js"),
    EntityFactory: __webpack_require__(/*! ./EntityFactory */ "./entities/EntityFactory.js")
};

/***/ }),

/***/ "./event/EventManager.js":
/*!*******************************!*\
  !*** ./event/EventManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Signal = __webpack_require__(/*! ./Signal */ "./event/Signal.js");

var _Signal2 = _interopRequireDefault(_Signal);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = function () {
        function EventManager() {
                _classCallCheck(this, EventManager);

                this._signalsMap = new _Map2.default();
        }

        _createClass(EventManager, [{
                key: 'create',
                value: function create(eventName) {

                        var has = this._signalsMap.get(eventName);

                        if (has !== undefined && has != null) return has;

                        var signal = new _Signal2.default();

                        this._signalsMap.set(eventName, signal);

                        return signal;
                }
        }, {
                key: 'subscribe',
                value: function subscribe(eventName, func) {

                        var has = this._signalsMap.get(eventName);

                        if (has === undefined || has === null) {
                                console.warn("EventManager.subscribe: There is no registered event called \'" + eventName + '\'.');
                                return this;
                        }

                        if (!_Validate2.default.isFunction(func)) {
                                console.warn("EventManager.subscribe: The variable is not a function.");
                                return this;
                        }

                        has.subscribe(func);

                        return this;
                }

                /**
                * Dispatch to subscribed Signal
                * @param {String} eventName The subscribed Signal name.
                * @param {...*} [params] Parameters that should be passed to each handler.
                */

        }, {
                key: 'dispatch',
                value: function dispatch(eventName) {

                        var has = this._signalsMap.get(eventName);

                        if (has === undefined || has === null) return this;

                        var args = arguments.length > 1 ? [arguments[1]] : Array.apply(null, arguments);

                        has.dispatch(args);

                        return this;
                }
        }]);

        return EventManager;
}();

exports.default = EventManager;

/***/ }),

/***/ "./event/Signal.js":
/*!*************************!*\
  !*** ./event/Signal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * JS Signals <http://millermedeiros.github.com/js-signals/>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Released under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Miller Medeiros
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Version: ::VERSION_NUMBER:: - Build: ::BUILD_NUMBER:: (::BUILD_DATE::)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _SignalBinding = __webpack_require__(/*! ./SignalBinding */ "./event/SignalBinding.js");

var _SignalBinding2 = _interopRequireDefault(_SignalBinding);

var _IndexOfListener = __webpack_require__(/*! ./components/IndexOfListener */ "./event/components/IndexOfListener.js");

var _IndexOfListener2 = _interopRequireDefault(_IndexOfListener);

var _ValidateListener = __webpack_require__(/*! ./components/ValidateListener */ "./event/components/ValidateListener.js");

var _ValidateListener2 = _interopRequireDefault(_ValidateListener);

var _RegisterListener = __webpack_require__(/*! ./components/RegisterListener */ "./event/components/RegisterListener.js");

var _RegisterListener2 = _interopRequireDefault(_RegisterListener);

var _Validate = __webpack_require__(/*! ../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on https://github.com/millermedeiros/js-signals
/**
* Custom event broadcaster
* Inspired by Robert Penner's AS3 Signals.
* @name Signal
* @author Miller Medeiros
* @class
*/
var Signal = function () {

    /**
     * @constructor
     */
    function Signal() {
        _classCallCheck(this, Signal);

        this._bindings = new _List2.default();
        this.active = true;
        this._shouldPropagate = true;
    }

    _createClass(Signal, [{
        key: 'has',


        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener The listener
         * @param {Object} [context] Context
         * @return {boolean} if Signal has the specified listener.
         */
        value: function has(listener, context) {
            return (0, _IndexOfListener2.default)(this, listener, context) !== -1;
        }

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {Signal} return this signal.
         */

    }, {
        key: 'subscribe',
        value: function subscribe(listener, context, priority) {
            (0, _ValidateListener2.default)(listener, 'subscribe');
            (0, _RegisterListener2.default)(this, listener, context, priority);
            return this;
        }

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(listener, context) {
            (0, _ValidateListener2.default)(listener, 'unsubscribe');

            var i = (0, _IndexOfListener2.default)(this, listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy();
                this._bindings.eraseAt(i);
            }

            return listener;
        }
    }, {
        key: 'unsubscribeAll',
        value: function unsubscribeAll() {}

        /**
        * Dispatch/Broadcast Signal to all listeners added to the queue.
        * @param {...*} [params] Parameters that should be passed to each handler.
        */

    }, {
        key: 'dispatch',
        value: function dispatch(params) {
            if (!this.active) return;

            var size = this._bindings.length;

            if (!size) return;

            var paramsSize = arguments.length;

            if (paramsSize > 1) {
                params = Array.prototype.slice.call(arguments);
            }

            var binds = this._bindings.childs.slice();

            do {
                size--;
            } while (binds[size] && this._shouldPropagate && binds[size].execute(params) !== false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.unsubscribeAll();
            delete this._bindings;
        }
    }, {
        key: 'propagate',
        set: function set(value) {
            this._shouldPropagate = value;
        },
        get: function get() {
            return this._shouldPropagate;
        }
    }, {
        key: 'count',
        get: function get() {
            return this._bindings.size;
        }
    }]);

    return Signal;
}();

exports.default = Signal;

/***/ }),

/***/ "./event/SignalBinding.js":
/*!********************************!*\
  !*** ./event/SignalBinding.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignalBinding = function () {
    function SignalBinding(signal, listener, listenerContext, priority) {
        _classCallCheck(this, SignalBinding);

        this._signal = signal;
        this._listener = listener;
        this.context = listenerContext;
        this._priority = priority || 0;
        this.active = true;
        this.args = undefined;
        this._isOnce = false;
    }

    _createClass(SignalBinding, [{
        key: "execute",
        value: function execute(argsArray) {
            var handlerReturn = void 0,
                params = void 0;

            if (this.active && !!this._listener) {

                params = this.args ? this.args.concat(argsArray) : argsArray;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        }
    }, {
        key: "detach",
        value: function detach() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
        }

        /**
            * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
            */

    }, {
        key: "isBound",
        value: function isBound() {
            return !!this._signal && !!this._listener;
        }

        /**
            * Delete instance properties
            * @private
            */

    }, {
        key: "_destroy",
        value: function _destroy() {
            delete this._signal;
            delete this._listener;
            delete this.context;
        }
    }, {
        key: "listener",
        get: function get() {
            return this._listener;
        }
    }, {
        key: "signal",
        get: function get() {
            return this._signal;
        }
    }]);

    return SignalBinding;
}();

exports.default = SignalBinding;

/***/ }),

/***/ "./event/components/AddBinding.js":
/*!****************************************!*\
  !*** ./event/components/AddBinding.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = AddBinding;
function AddBinding(signal, binding) {

        var n = signal._bindings.length;

        do {
                --n;
        } while (signal._bindings.at(n) && binding._priority <= signal._bindings.at(n)._priority);

        signal._bindings.insert(binding, n);
}

/***/ }),

/***/ "./event/components/IndexOfListener.js":
/*!*********************************************!*\
  !*** ./event/components/IndexOfListener.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = IndexOfListener;
function IndexOfListener(signal, listener, context) {

    var r = signal._bindings.each(function (element, index) {
        if (element._listener === listener && element._context === context) {
            return index;
        }
    });

    return r || -1;
}

/***/ }),

/***/ "./event/components/RegisterListener.js":
/*!**********************************************!*\
  !*** ./event/components/RegisterListener.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RegisterListener;

var _SignalBinding = __webpack_require__(/*! ../SignalBinding */ "./event/SignalBinding.js");

var _SignalBinding2 = _interopRequireDefault(_SignalBinding);

var _IndexOfListener = __webpack_require__(/*! ./IndexOfListener */ "./event/components/IndexOfListener.js");

var _IndexOfListener2 = _interopRequireDefault(_IndexOfListener);

var _AddBinding = __webpack_require__(/*! ./AddBinding */ "./event/components/AddBinding.js");

var _AddBinding2 = _interopRequireDefault(_AddBinding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterListener(signal, listener, listenerContext, priority) {

    var binding = null;
    var index = (0, _IndexOfListener2.default)(signal, listener, listenerContext);

    if (index !== -1) {
        binding = signal._bindings[index];
    } else {

        binding = new _SignalBinding2.default(signal, listener, listenerContext, priority);
        (0, _AddBinding2.default)(signal, binding);
    }

    return binding;
}

/***/ }),

/***/ "./event/components/ValidateListener.js":
/*!**********************************************!*\
  !*** ./event/components/ValidateListener.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ValidateListener;
function ValidateListener(listener, func) {
    if (typeof listener !== 'function') throw new Error('Signal.{fn}: Listener should be a function.'.replace('{fn}', func));
}

/***/ }),

/***/ "./event/index.js":
/*!************************!*\
  !*** ./event/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Signal: __webpack_require__(/*! ./Signal */ "./event/Signal.js"),
    EventManager: __webpack_require__(/*! ./EventManager */ "./event/EventManager.js")
};

/***/ }),

/***/ "./input/Input.js":
/*!************************!*\
  !*** ./input/Input.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keyboard = __webpack_require__(/*! ./keyboard/Keyboard */ "./input/keyboard/Keyboard.js");

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Mouse = __webpack_require__(/*! ./mouse/Mouse */ "./input/mouse/Mouse.js");

var _Mouse2 = _interopRequireDefault(_Mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(game) {
    _classCallCheck(this, Input);

    this.game = game;
    this.mouse = null;
    this.keyboard = null;
  }

  _createClass(Input, [{
    key: "init",
    value: function init() {

      //this.mouse = new tobiJS.Mouse(this.game);
      this.keyboard = new _Keyboard2.default(this.game);
      this.mouse = new _Mouse2.default(this.game);
      this.keyboard.init();
      this.mouse.init();
    }
  }, {
    key: "update",
    value: function update() {

      this.keyboard.update();
      this.mouse.update();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.keyboard.reset();
      this.mouse.reset();
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),

/***/ "./input/index.js":
/*!************************!*\
  !*** ./input/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    Key: __webpack_require__(/*! ./keyboard/Key */ "./input/keyboard/Key.js"),
    Keyboard: __webpack_require__(/*! ./keyboard/Keyboard */ "./input/keyboard/Keyboard.js"),
    Mouse: __webpack_require__(/*! ./mouse/Mouse */ "./input/mouse/Mouse.js"),
    Input: __webpack_require__(/*! ./Input */ "./input/Input.js")

};

/***/ }),

/***/ "./input/keyboard/Key.js":
/*!*******************************!*\
  !*** ./input/keyboard/Key.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyEvent = __webpack_require__(/*! ./KeyEvent */ "./input/keyboard/KeyEvent.js");

var _KeyEvent2 = _interopRequireDefault(_KeyEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Key = function () {
    function Key(keycode, game) {
        _classCallCheck(this, Key);

        this.game = game;
        this.keyCode = keycode;

        this._enabled = true;
        this.status = false;
        this.press = false;
        this.release = false;

        this.preventDefault = true;

        this._event = _KeyEvent2.default.NONE;

        this.pressTime = 0;
        this.pressDuration = -2500;
        this.releaseTime = 0;
        this.releaseDuration = -2500;
    }

    _createClass(Key, [{
        key: 'isPressing',


        /*update() {
            if (!this._enabled)
                return;
              if (this.press) {
                this.pressDuration = this.game.time.time - this.pressTime;
                
            } else {
                this.releaseDuration = this.game.time.time - this.releaseTime;
            }
                if (this.press) {
                if (this.pressDuration == 0) {
                    this._event = KeyEvent.PRESSED;
                }
              } else {
                  if (this.releaseDuration == 0) {
                    this._event = KeyEvent.RELEASED;
                } else {
                    this._event = KeyEvent.IDLE;
                }
              }
          }*/

        value: function isPressing() {
            return this.status;
        }
    }, {
        key: 'isPressed',
        value: function isPressed() {
            return this.press && this.pressDuration === 0;
        }
    }, {
        key: 'isReleased',
        value: function isReleased() {
            return !this.press && this.releaseDuration === 0;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.status = false;
            this._event = _KeyEvent2.default.NONE;
            this.press = false;
            this.release = false;

            this.pressTime = 0;
            this.pressDuration = -2500;
            this.releaseTime = 0;
            this.releaseDuration = -2500;
        }
    }, {
        key: 'event',
        get: function get() {
            return this._event;
        }
    }, {
        key: 'enabled',
        get: function get() {
            return this._enabled;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                if (!value) this.reset();

                this._enabled = value;
            }
        }
    }]);

    return Key;
}();

exports.default = Key;
;

/***/ }),

/***/ "./input/keyboard/KeyCode.js":
/*!***********************************!*\
  !*** ./input/keyboard/KeyCode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KeyCode = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Insert: 45,
    Delete: 46,
    Num0: 48,
    Num1: 49,
    Num2: 50,
    Num3: 51,
    Num4: 52,
    Num5: 53,
    Num6: 54,
    Num7: 55,
    Num8: 56,
    Num9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LSystem: 91,
    RSystem: 92,
    SelectK: 93,
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    Multiply: 106,
    Add: 107,
    Subtract: 109,
    DecimalPoint: 110,
    Divide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NumLock: 144,
    ScrollLock: 145,
    SemiColon: 186,
    Equal: 187,
    Comma: 188,
    Dash: 189,
    Period: 190,
    Slash: 191,
    LBraket: 219,
    BackSlash: 220,
    RBracket: 221,
    Quote: 222
};

module.exports = KeyCode;

/***/ }),

/***/ "./input/keyboard/KeyEvent.js":
/*!************************************!*\
  !*** ./input/keyboard/KeyEvent.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var KeyEvent = {
    NONE: -1,
    IDLE: 0,
    PRESSED: 1,
    RELEASED: 2
};

exports.default = KeyEvent;

/***/ }),

/***/ "./input/keyboard/Keyboard.js":
/*!************************************!*\
  !*** ./input/keyboard/Keyboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _List = __webpack_require__(/*! ../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Key = __webpack_require__(/*! ./Key */ "./input/keyboard/Key.js");

var _Key2 = _interopRequireDefault(_Key);

var _KeyCode = __webpack_require__(/*! ./KeyCode */ "./input/keyboard/KeyCode.js");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _KeyEvent = __webpack_require__(/*! ./KeyEvent */ "./input/keyboard/KeyEvent.js");

var _KeyEvent2 = _interopRequireDefault(_KeyEvent);

var _ProcessKeyPress = __webpack_require__(/*! ./components/ProcessKeyPress */ "./input/keyboard/components/ProcessKeyPress.js");

var _ProcessKeyPress2 = _interopRequireDefault(_ProcessKeyPress);

var _ProcessKeyRelease = __webpack_require__(/*! ./components/ProcessKeyRelease */ "./input/keyboard/components/ProcessKeyRelease.js");

var _ProcessKeyRelease2 = _interopRequireDefault(_ProcessKeyRelease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(game) {
    _classCallCheck(this, Keyboard);

    this.game = game;
    this._enabled = true;
    this.eventTarget = null;
    this.eventHandler = null;
    this._eventQueue = new _List2.default();
    this._keyMapping = new _Map2.default();
    //this._keyWatch = new DataMap();
    //this._keyGarbage = [];
    this.lastKey = null;
  }

  _createClass(Keyboard, [{
    key: 'reset',
    value: function reset() {

      this._keyMapping.clear();
      for (var prop in _KeyCode2.default) {

        if (_KeyCode2.default.hasOwnProperty(prop)) {
          var value = _KeyCode2.default[prop];
          this._keyMapping.set(value, new _Key2.default(value, this.game));
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {

      this.reset();

      // window;
      this.eventTarget = document; //this.game.system.render.canvas;

      var self = this;

      // key event handler
      var handler = function handler(event) {

        if (event.defaultPrevented) {
          return;
        }

        self._eventQueue.push(event);

        //event.preventDefault();
      };

      this.eventHandler = handler;

      this.eventTarget.addEventListener('keydown', handler, false);
      this.eventTarget.addEventListener('keyup', handler, false);
    }
  }, {
    key: 'stop',
    value: function stop() {

      this.eventTarget.removeEventListener('keydown', this.eventHandler);
      this.eventTarget.removeEventListener('keyup', this.eventHandler);
      this._onKeyDown = null;
      this._onKeyUp = null;
      this._onKeyPress = null;

      this._keyMapping.clear();
    }
  }, {
    key: 'update',
    value: function update() {

      var eventSize = this._eventQueue.size;

      if (!this._enabled || eventSize === 0) return;

      // clear and copy queue
      var queue = this._eventQueue.splice(0, eventSize);

      // process key events
      for (var i = 0; i < eventSize; i++) {
        var event = queue[i];
        var keycode = event.keyCode;

        // check if is valid scintilla key
        var key = this._keyMapping.get(keycode);

        if (key !== undefined || key !== null) {

          if (event.type === 'keydown') {

            // /*&& (this._keyMapping.at(keycode) === undefined || this._keyMapping[keycode].press === false)*/
            (0, _ProcessKeyPress2.default)(event, key);
          } else {
            // if (event.type === 'keyup') {
            (0, _ProcessKeyRelease2.default)(event, key);
          }
        }
      }
    }
  }, {
    key: 'pressed',
    value: function pressed(keycode) {
      return this._keyMapping.get(keycode).isPressed();
    }
  }, {
    key: 'release',
    value: function release(keycode) {
      return this._keyMapping.get(keycode).isReleased();
    }
  }, {
    key: 'press',
    value: function press(keycode) {
      return this._keyMapping.get(keycode).status;
    }
  }, {
    key: 'enabled',
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      value = !!value;

      if (value !== this._enabled) {
        if (!value) this.reset();

        this._enabled = value;
      }
    }
  }]);

  return Keyboard;
}();

/* this._keyWatch.each(function (key, value) {
     //var value = this._keyWatch.get(key);
     value.update();
       //console.log(value);
       if (value.event == KeyEvent.IDLE)
     {
         self._keyGarbage.push(key);
     }
 });
     if (this._keyGarbage.length > 0)
   {
     this._keyWatch.deleteByIndexedArray(this._keyGarbage);
     this._keyGarbage.splice(0, this._keyGarbage.length)
   }*/


exports.default = Keyboard;

/***/ }),

/***/ "./input/keyboard/components/ProcessKeyPress.js":
/*!******************************************************!*\
  !*** ./input/keyboard/components/ProcessKeyPress.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessKeyPress;
function ProcessKeyPress(event, key) {

    if (key.preventDefault) event.preventDefault();

    if (!key._enabled) return;

    if (key.press === false) {

        // set key properties
        key.status = true;
        key.press = true;
        key.release = false;
        // set press time duration
        key.pressTime = event.timeStamp; //this.game.time.time;
        key.pressDuration = 0;
        key.releaseDuration = key.pressTime - key.releaseTime;
    }

    //this.lastKey = key;


    /*var keyObj = this._keyMapping.get(key);
    keyObj.onKeyDown();
      if (!this._keyWatch.has(key))
    {
      this._keyWatch.set(key, keyObj);
    }*/

    //_keyMapping[]
    //this._keys[key] = true;
    /* if (this._keyLockPressed[key] != scintilla.KeyEvent.PRESSED && this._keyLockPressed[key] != scintilla.KeyEvent.PRESS) {
      this._keyLockPressed[key] = scintilla.KeyEvent.PRESSED;
      this._keyDownDuration[key] = 1;
    }
      this._keyLock[key] = scintilla.KeyEvent.PRESS;
    this._keys[key] = true;
    */
}

/***/ }),

/***/ "./input/keyboard/components/ProcessKeyRelease.js":
/*!********************************************************!*\
  !*** ./input/keyboard/components/ProcessKeyRelease.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProcessKeyRelease;
function ProcessKeyRelease(event, key) {

  if (key.preventDefault) event.preventDefault();

  if (!key._enabled) return;

  // set key properties
  key.status = false;
  key.press = false;
  key.release = true;

  // set press time duration
  key.releaseTime = event.timeStamp;
  key.pressDuration = key.releaseTime - key.pressTime;
  key.releaseDuration = 0;
}

/***/ }),

/***/ "./input/mouse/Mouse.js":
/*!******************************!*\
  !*** ./input/mouse/Mouse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MouseEvent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MouseButton = __webpack_require__(/*! ./MouseButton */ "./input/mouse/MouseButton.js");

var _MouseButton2 = _interopRequireDefault(_MouseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MouseEvent = exports.MouseEvent = {
    NONE: 0,
    PRESS: 1,
    PRESSED: 2,
    RELEASE: 3
};

var Mouse = function () {
    function Mouse(game) {
        _classCallCheck(this, Mouse);

        this.x = 0;
        this.y = 0;
        this.game = game;
        this.canvas = game.system.render.canvas;
        this.button = 0;
        this.wheelDelta = 0;
        this.active = true;

        this._mouseButtons = [];
        this._mouseButtonsLocks = [];
        this._mouseButtonsLocksPressed = [];
        this._mouseDownDuration = [];

        //callbacks
        this._onMouseDown = null;
        this._onMouseMove = null;

        this.reset();
    }

    _createClass(Mouse, [{
        key: 'reset',
        value: function reset() {

            for (var i = 0; i < 3; i++) {

                this._mouseButtons[i] = false;
                this._mouseButtonsLocks[i] = MouseEvent.NONE;
                this._mouseButtonsLocksPressed[i] = MouseEvent.NONE;
                this._mouseDownDuration[i] = 0;
            }
        }
    }, {
        key: 'init',
        value: function init() {

            var self = this;

            this._onMouseDown = function (event) {
                return self.onMouseDown(event);
            };

            this._onMouseUp = function (event) {
                return self.onMouseUp(event);
            };

            this._onMouseMove = function (event) {
                return self.onMouseMove(event);
            };

            this.canvas.addEventListener('mousedown', this._onMouseDown, true);
            this.canvas.addEventListener('mousemove', this._onMouseMove, true);
            this.canvas.addEventListener('mouseup', this._onMouseUp, true);
            this.canvas.addEventListener('mouseover', this._onMouseOver, true);
            this.canvas.addEventListener('mouseout', this._onMouseOut, true);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {

            if (!this.active) return;

            var rect = this.canvas.getBoundingClientRect();

            this.x = Math.floor((event.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width);
            this.y = Math.floor((event.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height);
            //this.x = event.clientX - rect.left;
            //this.y = event.clientY - rect.top;
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {

            if (!this.active) return;

            var value = event.button;

            if (this._mouseButtonsLocksPressed[value] != MouseEvent.PRESSED && this._mouseButtonsLocksPressed[value] != MouseEvent.PRESS) {
                this._mouseButtonsLocksPressed[value] = MouseEvent.PRESSED;
                this._mouseDownDuration[value] = 1;
            }

            this._mouseButtons[value] = true;
            this._mouseButtonsLocks[value] = MouseEvent.PRESS;

            event.preventDefault();
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp(event) {

            if (!this.active) return;

            var value = event.button;

            this._mouseButtons[value] = false;
            this._mouseButtonsLocks[value] = MouseEvent.RELEASE;
            this._mouseButtonsLocksPressed[value] = MouseEvent.NONE;

            event.preventDefault();
        }
    }, {
        key: 'pressed',
        value: function pressed(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocksPressed[button] == MouseEvent.PRESSED) {
                buttonLock = true;
                this._mouseButtonsLocksPressed[button] = MouseEvent.PRESS;
            }

            var hit = this._mouseButtons[button] && buttonLock;

            return hit;
        }
    }, {
        key: 'release',
        value: function release(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocks[button] == MouseEvent.PRESSED || this._mouseButtonsLocks[button] == MouseEvent.PRESS || this._mouseButtonsLocks[button] == MouseEvent.NONE) buttonLock = false;else buttonLock = true;

            var hit = !this._mouseButtons[button] && buttonLock;

            this._mouseButtonsLocks[button] = MouseEvent.NONE;

            return hit;
        }
    }, {
        key: 'press',
        value: function press(button) {

            var buttonLock = false;

            if (this._mouseButtonsLocks[button] == MouseEvent.RELEASE || this._mouseButtonsLocks[button] == MouseEvent.NONE) buttonLock = false;else buttonLock = true;

            var hit = this._mouseButtons[button] && buttonLock;

            return hit;
        }
    }, {
        key: 'update',
        value: function update() {

            for (var i = 0; i < this._mouseButtons.length; i++) {

                if (this._mouseButtonsLocksPressed[i] == MouseEvent.PRESSED) {
                    if (this._mouseDownDuration[i] > 0) this._mouseDownDuration[i]--;else this._mouseButtonsLocksPressed[i] = MouseEvent.PRESS;
                } else continue;
            }
        }
    }, {
        key: 'posRelativeTo',
        value: function posRelativeTo(object) {

            var vec2 = { x: 0, y: 0 };

            vec2.x = this.x - object.x;
            vec2.y = this.y - object.y;

            return vec2;
        }
    }]);

    return Mouse;
}();

exports.default = Mouse;

/***/ }),

/***/ "./input/mouse/MouseButton.js":
/*!************************************!*\
  !*** ./input/mouse/MouseButton.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MouseButton = exports.MouseButton = {
    Left: 0,
    Middle: 1,
    Right: 2,
    WheelUp: 3,
    WheelDown: 4
};

/***/ }),

/***/ "./loader/AssetsType.js":
/*!******************************!*\
  !*** ./loader/AssetsType.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var AssetsType = {
    'none': 0,
    'image': 1,
    'audio': 2,
    'text': 3,
    'script': 4,
    'json': 5,
    'webFont': 6,
    'tilemapJSON': 7
};

exports.default = AssetsType;

/***/ }),

/***/ "./loader/File.js":
/*!************************!*\
  !*** ./loader/File.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _NextAsset = __webpack_require__(/*! ./components/NextAsset */ "./loader/components/NextAsset.js");

var _NextAsset2 = _interopRequireDefault(_NextAsset);

var _Path = __webpack_require__(/*! ../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = function () {
    function File(config) {
        _classCallCheck(this, File);

        this.type = _ObjectGet2.default.value(config, 'type', null);
        this.tag = _ObjectGet2.default.value(config, 'tag', null);
        this.useExternal = _ObjectGet2.default.value(config, 'useExternal', false);

        if (this.type == null || this.tag == null) {
            throw new Error('Loader.File: Invalid tag \"' + tag + "\".");
        }

        this.url = _ObjectGet2.default.value(config, 'url', undefined);

        if (this.url === undefined) this.url = _ObjectGet2.default.value(config, 'path', '') + this.tag + '.' + _ObjectGet2.default.value(config, 'ext', '');else if (typeof this.url !== 'function') {
            if (!this.useExternal || this.useExternal !== undefined) this.url = _ObjectGet2.default.value(config, 'path', '').concat(this.url);
        }

        // Web fonts is managed by WebFontLoader provided by google
        // There is no need to create XHR settings and request
        if (this.type !== _AssetsType2.default.webFont) {

            this.xhrSettings = _XHR2.default.createSettings(_ObjectGet2.default.value(config, 'responseType', undefined));

            if (_ObjectGet2.default.value(config, 'xhrSettings', false)) this.xhrSettings = _XHR2.default.merge(this.xhrSettings, _ObjectGet2.default.value(config, 'xhrSettings', {}));
        }

        this.loader = null;
        this.state = _LoaderState2.default.PENDING;
        this.totalBytes = 0;
        this.loadedBytes = 0;
        this.progress = 0;
        this.data = undefined;
        this.source = null;
        this.xhrRequest = null;
        this.config = _ObjectGet2.default.value(config, 'config', {});
        this.crossOrigin = undefined;

        this.onComplete = undefined;
    }

    _createClass(File, [{
        key: 'load',
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _LoaderState2.default.FINISHED) {
                this.onDone();

                _NextAsset2.default.call(this.loader, this);
                //this.loader.next(this);
            } else {

                this.source = _Path2.default.getURL(this.url, gameLoader.baseURL);

                if (this.source.indexOf('data:') === 0 || this.source == null) {
                    console.warn("Loader.File.load: unsupported URI.");
                } else {
                    this.xhrRequest = _XHR2.default.createFileRequest(this, gameLoader.xhr);
                }
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(event) {

            this.XHRreset();

            if (event.target && event.target.status !== 200) {
                //this.loader.next(this, true);
                _NextAsset2.default.call(this.loader, this);
            } else {

                if (this.onPostLoad !== undefined) this.onPostLoad(this.loader, this.xhrRequest);

                //this.loader.next(this, false);
                _NextAsset2.default.call(this.loader, this);
            }
        }
    }, {
        key: 'onError',
        value: function onError(event) {
            console.error("Loader.File: Error on load file: " + this.url + ".");

            this.XHRreset();

            //this.loader.next(this, true);
            _NextAsset2.default.call(this.loader, this);
        }
    }, {
        key: 'onProgress',
        value: function onProgress(event) {
            if (event.lengthComputable) {
                this.loadedBytes = event.loaded;
                this.totalBytes = event.total;

                this.progress = Math.min(this.loadedBytes / this.totalBytes, 1);
            }
        }
    }, {
        key: 'onDone',
        value: function onDone() {
            this.state = _LoaderState2.default.DONE;

            this.loader.event.dispatch('oncomplete_' + this.tag);
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;

            this.onDone();

            processingCallback(this);
        }
    }, {
        key: 'XHRreset',
        value: function XHRreset() {
            if (this.xhrRequest) {
                this.xhrRequest.onload = undefined;
                this.xhrRequest.onerror = undefined;
                this.xhrRequest.onprogress = undefined;
                //this.xhrRequest.onreadystatechange = undefined;
            }
        }
    }]);

    return File;
}();

exports.default = File;

/***/ }),

/***/ "./loader/ListInjector.js":
/*!********************************!*\
  !*** ./loader/ListInjector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListInjector = function () {
    function ListInjector() {
        _classCallCheck(this, ListInjector);

        this.list = {};
    }

    _createClass(ListInjector, [{
        key: "inject",
        value: function inject(toObj) {
            for (var key in this.list) {
                toObj[key] = this.list[key];
            }
        }
    }, {
        key: "register",
        value: function register(key, func) {
            this.list[key] = func;
        }
    }, {
        key: "destroyfunction",
        value: function destroyfunction() {
            this.list = {};
        }
    }]);

    return ListInjector;
}();

exports.default = ListInjector;
;

/***/ }),

/***/ "./loader/LoaderManager.js":
/*!*********************************!*\
  !*** ./loader/LoaderManager.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _XHR = __webpack_require__(/*! ./XHR */ "./loader/XHR.js");

var _XHR2 = _interopRequireDefault(_XHR);

var _AssetTypeHandler = __webpack_require__(/*! ./assets/AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _LoaderState = __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _InitializeLoader = __webpack_require__(/*! ./components/InitializeLoader */ "./loader/components/InitializeLoader.js");

var _InitializeLoader2 = _interopRequireDefault(_InitializeLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class LoaderManager
var LoadManager = function () {
  function LoadManager(game) {
    _classCallCheck(this, LoadManager);

    this.game = game;
    this.cache = null;

    this._filesQueue = null;
    this._filesLoading = null;
    this._successFiles = null;
    this._failedFiles = null;
    this._processedFiles = null;

    this._filesQueueCount = null;
    this._loadedFilesCount = null;

    this.isDownloading = false;
    this._totalFiles = 0;

    this.progress = null;
    this.path = null;
    this.baseURL = null;
    this.state = null;
    this.webFontLoader = undefined;
    this.event = null;
    this.crossOrigin = undefined;

    var gameConfig = game.config.loader;

    this.xhr = _XHR2.default.createSettings(_ObjectGet2.default.value(config, 'responseType', gameConfig.responseType), _ObjectGet2.default.value(config, 'async', gameConfig.async),
    //scintilla.ObjectGet.propertyValue(config, 'user', gameConfig.loaderUser),
    //scintilla.ObjectGet.propertyValue(config, 'password', gameConfig.loaderPassword),
    _ObjectGet2.default.value(config, 'timeout', gameConfig.timeout));

    _AssetTypeHandler2.default.inject(this);
  }

  _createClass(LoadManager, [{
    key: 'setPath',
    value: function setPath(path) {
      if (path !== '' && path.substr(-1) !== '/') path = path.concat('/');

      this.path = path;

      return this;
    }
  }, {
    key: 'setBaseURL',
    value: function setBaseURL(baseUrl) {
      if (baseUrl !== '' && baseUrl.substr(-1) !== '/') {
        baseUrl = baseUrl.concat('/');
      }

      this.baseURL = baseUrl || '';

      return this;
    }
  }, {
    key: 'setCrossOrigin',
    value: function setCrossOrigin(crossOrigin) {
      this.crossOrigin = crossOrigin;
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {

      this.isDownloading = false;
      this._filesQueue.clear();
      this._successFiles.clear();
      this._failedFiles.clear();
      this._processedFiles.clear();

      this._filesQueueCount = 0;
      this._loadedFilesCount = 0;

      this.progress = 0;
      this.state = _LoaderState2.default.IDLE;
    }

    /*end : function() {
        if (this.state === LoaderState.PROCESSING)
          return;
    
      this.progress = 1;
      this.isDownloading = false;
      this.state = LoaderState.PROCESSING;
        
      this._filesQueue.clear();
      this._failedFiles.length = 0;
      
      this.processFiles();
        this._successFiles.clear();
        this.state = LoaderState.DONE;
      //this.game.scene.preloadComplete();
      },*/

  }, {
    key: 'loadAsset',
    value: function loadAsset(file) {

      if (!file.crossOrigin) {
        file.crossOrigin = this.crossOrigin;
      }

      file.load(this);
    }
  }, {
    key: 'isLoading',
    value: function isLoading() {
      return this.state === _LoaderState2.default.LOADING || this.state === _LoaderState2.default.PROCESSING;
    }
  }, {
    key: 'isOK',
    value: function isOK() {
      return this.state === _LoaderState2.default.IDLE || this.state === _LoaderState2.default.DONE || this.state === _LoaderState2.default.ERROR;
    }
  }, {
    key: 'downloadIsDone',
    value: function downloadIsDone() {
      return this._filesQueue.length == this._successCount + this._fileErrorCount;
    }
  }, {
    key: 'totalQueuedFiles',
    get: function get() {
      return this._filesQueueCount - this._loadedFilesCount;
    }
  }]);

  return LoadManager;
}();

exports.default = LoadManager;
;

_System2.default.register('Loader', LoadManager, 'load', _InitializeLoader2.default);

/***/ }),

/***/ "./loader/LoaderState.js":
/*!*******************************!*\
  !*** ./loader/LoaderState.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var LoaderState = {
    NONE: 0,
    IDLE: 1,
    PENDING: 2,
    LOADING: 3,
    PROCESSING: 4,
    ERROR: 5,
    FINISHED: 6,
    DONE: 7
};

exports.default = LoaderState;

/***/ }),

/***/ "./loader/URLObject.js":
/*!*****************************!*\
  !*** ./loader/URLObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URLObject = {

    createFromResponse: function createFromResponse(asset, response, type) {

        if (typeof URL === 'function') {
            asset.src = URL.createObjectURL(response);
        } else {
            var reader = new FileReader();

            reader.onload = function () {
                asset.removeAttribute('crossOrigin');
                asset.src = 'data:' + (response.type || type) + ';base64,' + reader.result.split(',')[1];
            };

            reader.onerror = asset.onerror;

            reader.readAsDataURL(response);
        }
    },

    revoke: function revoke(data) {
        if (typeof URL === 'function') {
            URL.revokeObjectURL(data.src);
        }
    }
};

module.exports = URLObject;

/***/ }),

/***/ "./loader/XHR.js":
/*!***********************!*\
  !*** ./loader/XHR.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var XHR = {
    createFileRequest: function createFileRequest(file, settings) {
        var xhrSettings = XHR.merge(settings, file.xhrSettings);

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", file.source, xhrSettings.async);

        if (file.xhrSettings.responseType !== undefined) xmlHttpRequest.responseType = file.xhrSettings.responseType;

        xmlHttpRequest.timeout = xhrSettings.timeout;

        xmlHttpRequest.onload = file.onLoad.bind(file);
        xmlHttpRequest.onerror = file.onError.bind(file);
        xmlHttpRequest.onprogress = file.onProgress.bind(file);

        if (file.onReadyStateChange !== undefined) xmlHttpRequest.onreadystatechange = file.onReadyStateChange.bind(file);

        xmlHttpRequest.send();

        return xmlHttpRequest;
    },
    createSettings: function createSettings(type, doAsync, timeout) {
        if (type === undefined) type = '';

        if (doAsync === undefined) doAsync = true;

        if (timeout === undefined) timeout = 0;

        var settings = {
            responseType: type,
            timeout: timeout,
            async: doAsync
        };

        return settings;
    },
    merge: function merge(a, b) {
        var out = {};

        if (a === undefined) out = XHR.createSettings(); // : Extend(global);
        // else
        // do something cool

        if (b) {
            for (var setting in b) {
                if (b[setting] !== undefined) out[setting] = b[setting];
            }
        }

        return out;
    }
};

exports.default = XHR;

/***/ }),

/***/ "./loader/assets/AssetTypeHandler.js":
/*!*******************************************!*\
  !*** ./loader/assets/AssetTypeHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListInjector = __webpack_require__(/*! ../ListInjector */ "./loader/ListInjector.js");

var _ListInjector2 = _interopRequireDefault(_ListInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetTypeHandler = new _ListInjector2.default();

exports.default = AssetTypeHandler;

/***/ }),

/***/ "./loader/assets/ImageFile.js":
/*!************************************!*\
  !*** ./loader/assets/ImageFile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _URLObject = __webpack_require__(/*! ../URLObject */ "./loader/URLObject.js");

var _URLObject2 = _interopRequireDefault(_URLObject);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageFile = function (_File) {
    _inherits(ImageFile, _File);

    function ImageFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, ImageFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _ObjectGet2.default.value(tag, 'tag', '');
        }

        var fileConfig = {
            type: _AssetsType2.default.image,
            tag: assetTag,
            ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            responseType: 'blob',
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings),
            config: _ObjectGet2.default.value(tag, 'config', config)
        };

        return _possibleConstructorReturn(this, (ImageFile.__proto__ || Object.getPrototypeOf(ImageFile)).call(this, fileConfig));
    }

    _createClass(ImageFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            this.data = new Image();
            this.data.crossOrigin = this.crossOrigin;

            var self = this;

            this.data.onload = function () {

                _URLObject2.default.revoke(self.data);

                self.onDone();

                processingCallback(self);
            };

            this.data.onerror = function () {

                _URLObject2.default.revoke(self.data);

                console.warn("Loader.ImageFile: Error on load file: " + self.url + ".");

                self.state = _LoaderState2.default.ERROR;

                processingCallback(self);
            };

            _URLObject2.default.createFromResponse(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
        }
    }]);

    return ImageFile;
}(_File3.default);

exports.default = ImageFile;


_AssetTypeHandler2.default.register('image', function (tag, url, path, xhrSettings, force) {

    _AddAsset2.default.call(this, new ImageFile(tag, url, this.path, xhrSettings), force);

    return this;
});

module.exports = ImageFile;

/***/ }),

/***/ "./loader/assets/JSONFile.js":
/*!***********************************!*\
  !*** ./loader/assets/JSONFile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONFile = function (_File) {
    _inherits(JSONFile, _File);

    function JSONFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, JSONFile);

        var assetConfig = {
            type: _AssetsType2.default.json,
            ext: _ObjectGet2.default.value(tag, 'ext', 'json'),
            responseType: 'text',
            tag: tag,
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings)
        };

        var _this = _possibleConstructorReturn(this, (JSONFile.__proto__ || Object.getPrototypeOf(JSONFile)).call(this, assetConfig));

        if (_typeof(assetConfig.url) === 'object') {
            _this.data = assetConfig.url;
            _this.state = _LoaderState2.default.DONE;
        }

        return _this;
    }

    _createClass(JSONFile, [{
        key: "onProcessing",
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            this.data = JSON.parse(this.xhrRequest.responseText);
            this.onDone();
            processingCallback(this);
        }
    }]);

    return JSONFile;
}(_File3.default);

exports.default = JSONFile;


_AssetTypeHandler2.default.register('json', function (tag, url, path, xhrSettings) {
    //this.addAsset(new JSONFile(tag, url, this.path, xhrSettings));
    _AddAsset2.default.call(this, new JSONFile(tag, url, this.path, xhrSettings));
    return this;
});

/***/ }),

/***/ "./loader/assets/ScriptFile.js":
/*!*************************************!*\
  !*** ./loader/assets/ScriptFile.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScriptFile = function (_File) {
        _inherits(ScriptFile, _File);

        function ScriptFile(tag, url, path, xhrSettings, config) {
                _classCallCheck(this, ScriptFile);

                var tagFile = typeof tag === 'string' ? tag : _ObjectGet2.default.value(tag, 'key', '');

                var assetConfig = {
                        type: _AssetsType2.default.script,
                        ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url) || 'js'),
                        responseType: 'text',
                        tag: tagFile,
                        url: _ObjectGet2.default.value(tag, 'file', url),
                        path: path,
                        xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings)
                };

                return _possibleConstructorReturn(this, (ScriptFile.__proto__ || Object.getPrototypeOf(ScriptFile)).call(this, assetConfig));
        }

        _createClass(ScriptFile, [{
                key: "onPostLoad",
                value: function onPostLoad(loader, xhrLoader) {
                        this.state = _LoaderState2.default.PROCESSING;

                        // create the element
                        this.data = document.createElement('script');
                        this.data.language = 'javascript';
                        this.data.type = 'text/javascript';
                        this.data.defer = false;
                        this.data.text = this.xhrRequest.responseText;

                        // append to html document
                        document.head.appendChild(this.data);

                        this.loader.event.dispatch('onpostload_' + this.tag);

                        //this.onDone();

                        //processingCallback(this);
                }
        }]);

        return ScriptFile;
}(_File3.default);

exports.default = ScriptFile;


_AssetTypeHandler2.default.register('script', function (tag, url, path, xhrSettings) {
        //this.addAsset(new ScriptFile(tag, url, this.path, xhrSettings));
        _AddAsset2.default.call(this, new ScriptFile(tag, url, this.path, xhrSettings));
        return this;
});

/***/ }),

/***/ "./loader/assets/TextFile.js":
/*!***********************************!*\
  !*** ./loader/assets/TextFile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _ObjectGet = __webpack_require__(/*! ../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFile = function (_File) {
    _inherits(TextFile, _File);

    function TextFile(tag, url, path, xhrSettings, config) {
        _classCallCheck(this, TextFile);

        var assetTag = null;

        if (typeof tag === 'string') {
            assetTag = tag;
        } else {
            assetTag = _ObjectGet2.default.value(tag, 'tag', '');
        }

        var useExternal = false;

        if (path !== undefined) {
            if (typeof path === "boolean") useExternal = path;
        }

        var assetConfig = {
            type: _AssetsType2.default.text,
            tag: assetTag,
            ext: _ObjectGet2.default.value(tag, 'ext', _Path2.default.getExtension(url)),
            url: _ObjectGet2.default.value(tag, 'file', url),
            path: path,
            responseType: '',
            xhrSettings: _ObjectGet2.default.value(tag, 'xhr', xhrSettings),
            config: _ObjectGet2.default.value(tag, 'config', config),
            useExternal: useExternal
        };

        return _possibleConstructorReturn(this, (TextFile.__proto__ || Object.getPrototypeOf(TextFile)).call(this, assetConfig));
    }

    //onLoad(event) {}

    /*onReadyStateChange(event)
    {
          console.log(event.target);
        if (this.xhrRequest.status == 200)
        {
            if (this.xhrRequest.readyState == 4)
            {
                this.state = LoaderState.PROCESSING;
                //this.data = window.URL.createObjectURL(this.xhrRequest.response);
                this.data = this.xhrRequest.responseText;
                
                //console.log(this.data);
                this.onDone();
                  //processingCallback(this);
                super.onLoad(event);
            }  
        } else {
            super.onLoad(event);
        }
    }*/

    _createClass(TextFile, [{
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.state = _LoaderState2.default.PROCESSING;
            //this.data = window.URL.createObjectURL(this.xhrRequest.response);
            this.data = this.xhrRequest.responseText;
            /*var style = document.createElement('style');
            style.innerHTML = this.data;
            document.head.appendChild(style)*/
            // console.log("data:" + this.data);
            this.onDone();

            processingCallback(this);
        }
    }]);

    return TextFile;
}(_File3.default);

exports.default = TextFile;


_AssetTypeHandler2.default.register('text', function (tag, url, path, xhrSettings) {
    var endPointPath = this.path;

    if (path !== undefined) {

        if (typeof path === "boolean") // external link
            endPointPath = path;
    }

    _AddAsset2.default.call(this, new TextFile(tag, url, endPointPath, xhrSettings));
    //this.addAsset(new TextFile(tag, url, endPointPath, xhrSettings));

    return this;
});

module.exports = TextFile;

/***/ }),

/***/ "./loader/assets/TilemapJSON.js":
/*!**************************************!*\
  !*** ./loader/assets/TilemapJSON.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File2 = _interopRequireDefault(_File);

var _JSONFile2 = __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js");

var _JSONFile3 = _interopRequireDefault(_JSONFile2);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _Path = __webpack_require__(/*! ../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CheckImagesSources(loader, source, fullPath) {

    if (source === undefined) return;

    var size = source.length;

    if (size <= 0) return;

    for (var i = 0; i < size; i++) {

        var tileset = source[i];

        if (tileset.image) {
            var name = _Path2.default.getFilenameWithoutExtension(tileset.image) || tileset.name;
            var path = _Path2.default.getPathWithoutRoot(fullPath).concat(_Path2.default.getFilename(tileset.image));
            loader.image(name, path, undefined, undefined, false);
        }
    }
}

var TilemapFileJSON = function (_JSONFile) {
    _inherits(TilemapFileJSON, _JSONFile);

    function TilemapFileJSON(tag, url, path, xhrSettings) {
        _classCallCheck(this, TilemapFileJSON);

        var _this = _possibleConstructorReturn(this, (TilemapFileJSON.__proto__ || Object.getPrototypeOf(TilemapFileJSON)).call(this, tag, url, path, xhrSettings));

        _this.type = _AssetsType2.default.tilemapJSON;

        return _this;
    }

    _createClass(TilemapFileJSON, [{
        key: 'onPostLoad',
        value: function onPostLoad(loader, xhrLoader) {

            this.state = _LoaderState2.default.PROCESSING;
            this.data = JSON.parse(xhrLoader.responseText);

            // check tileset images and pipe to the loader
            CheckImagesSources(loader, this.data.tilesets, this.url);
        }
    }, {
        key: 'onProcessing',
        value: function onProcessing(processingCallback) {
            this.onDone();
            processingCallback(this);
        }
    }]);

    return TilemapFileJSON;
}(_JSONFile3.default);

exports.default = TilemapFileJSON;


_AssetTypeHandler2.default.register('tilemapJSON', function (tag, url, path, xhrSettings) {
    //this.addAsset(new TilemapFileJSON(tag, url, this.path, xhrSettings));
    _AddAsset2.default.call(this, new TilemapFileJSON(tag, url, this.path, xhrSettings));
    return this;
});

/***/ }),

/***/ "./loader/assets/WebFontFile.js":
/*!**************************************!*\
  !*** ./loader/assets/WebFontFile.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _File2 = __webpack_require__(/*! ../File */ "./loader/File.js");

var _File3 = _interopRequireDefault(_File2);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

var _AddAsset = __webpack_require__(/*! ../components/AddAsset */ "./loader/components/AddAsset.js");

var _AddAsset2 = _interopRequireDefault(_AddAsset);

var _AssetTypeHandler = __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js");

var _AssetTypeHandler2 = _interopRequireDefault(_AssetTypeHandler);

var _NextAsset = __webpack_require__(/*! ../components/NextAsset */ "./loader/components/NextAsset.js");

var _NextAsset2 = _interopRequireDefault(_NextAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebFontFile = function (_File) {
    _inherits(WebFontFile, _File);

    function WebFontFile(tag, provider, fontFamily, timeout) {
        _classCallCheck(this, WebFontFile);

        var assetConfig = {
            type: _AssetsType2.default.webFont,
            tag: tag,
            config: {
                provider: provider || 'google',
                families: fontFamily,
                timeout: timeout || 3000
            }
        };

        return _possibleConstructorReturn(this, (WebFontFile.__proto__ || Object.getPrototypeOf(WebFontFile)).call(this, assetConfig));
    }

    _createClass(WebFontFile, [{
        key: "load",
        value: function load(gameLoader) {
            this.loader = gameLoader;

            if (this.state === _LoaderState2.default.FINISHED) {
                this.onDone();

                _NextAsset2.default.call(this.loader, this);
            } else if (this.loader.webFontLoader !== undefined && this.loader.webFontLoader.state === _LoaderState2.default.DONE) {
                if (this.fontLoad !== undefined) this.fontLoad();
            }

            // Do nothing, wait for signal
        }
    }, {
        key: "fontLoad",
        value: function fontLoad() {

            if (WebFont !== undefined) {

                this.state = _LoaderState2.default.PROCESSING;

                var provider = this.config['provider'];

                if (!_Validate2.default.isArray(this.config.families)) {
                    var families = [];
                    families.push(this.config.families);
                    this.config.families = families;
                }

                var WebFontProvider = {
                    families: this.config.families
                };

                var WebFontConfig = {
                    timeout: this.config.timeout,
                    inactive: this.onError.bind(this),
                    fontactive: this.onLoad.bind(this),
                    classes: true
                };

                WebFontConfig[provider] = WebFontProvider;

                WebFont.load(WebFontConfig);
            }
        }
    }, {
        key: "onLoad",
        value: function onLoad(familyName, fvd) {

            this.data = {
                family: familyName,
                fvd: fvd

                //this.loader.next(this, true);
            };_NextAsset2.default.call(this.loader, this);
        }
    }]);

    return WebFontFile;
}(_File3.default);

exports.default = WebFontFile;


_AssetTypeHandler2.default.register('webFont', function (tag, provider, fontFamily, timeout) {
    //this.addAsset(new WebFontFile(tag, provider, fontFamily, timeout));
    _AddAsset2.default.call(this, new WebFontFile(tag, provider, fontFamily, timeout));
    return this;
});

/***/ }),

/***/ "./loader/assets/index.js":
/*!********************************!*\
  !*** ./loader/assets/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    AssetsTypeHandler: __webpack_require__(/*! ./AssetTypeHandler */ "./loader/assets/AssetTypeHandler.js"),
    ImageFile: __webpack_require__(/*! ./ImageFile */ "./loader/assets/ImageFile.js"),
    TextFile: __webpack_require__(/*! ./TextFile */ "./loader/assets/TextFile.js"),
    ScriptFile: __webpack_require__(/*! ./ScriptFile */ "./loader/assets/ScriptFile.js"),
    JSONFile: __webpack_require__(/*! ./JSONFile */ "./loader/assets/JSONFile.js"),
    TilemapJSON: __webpack_require__(/*! ./TilemapJSON */ "./loader/assets/TilemapJSON.js"),
    WebFontFile: __webpack_require__(/*! ./WebFontFile */ "./loader/assets/WebFontFile.js")
};

/***/ }),

/***/ "./loader/components/AddAsset.js":
/*!***************************************!*\
  !*** ./loader/components/AddAsset.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AddAsset;

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

var _ScriptFile = __webpack_require__(/*! ../assets/ScriptFile */ "./loader/assets/ScriptFile.js");

var _ScriptFile2 = _interopRequireDefault(_ScriptFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddAsset(asset, check) {

    if (check === undefined) check = true;

    if (!this.isOK() && check) return -1;

    // is if web font, we should load the WebFontLoader
    if (asset.type === _AssetsType2.default.webFont && this.webFontLoader === undefined) {

        this.webFontLoader = new _ScriptFile2.default('webFontLoader', "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
        this._filesQueue.set(this.webFontLoader);
        this._filesQueueCount++;

        this.event.create('onpostload_webFontLoader').subscribe(function () {
            asset.fontLoad();
        });
    }

    asset.path = this.path;
    this._filesQueue.set(asset);
    this._filesQueueCount++;
    return asset;
}

/***/ }),

/***/ "./loader/components/AssetProcessingUpdate.js":
/*!****************************************************!*\
  !*** ./loader/components/AssetProcessingUpdate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AssetProcessingUpdate;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _DeleteSucceedQueuedAsset = __webpack_require__(/*! ./DeleteSucceedQueuedAsset */ "./loader/components/DeleteSucceedQueuedAsset.js");

var _DeleteSucceedQueuedAsset2 = _interopRequireDefault(_DeleteSucceedQueuedAsset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AssetProcessingUpdate(file) {

    if (file.state === _LoaderState2.default.ERROR) {
        this._failedFiles.set(file);

        /*if (file.linkFile)
        {
            this.queue.delete(file.linkFile);
        }*/

        //return this.deleteFromSuccessQueue(file);
        return _DeleteSucceedQueuedAsset2.default.call(this, file);
    }

    this._processedFiles.set(file);

    return _DeleteSucceedQueuedAsset2.default.call(this, file); //this.deleteFromSuccessQueue(file);
}

/***/ }),

/***/ "./loader/components/DeleteSucceedQueuedAsset.js":
/*!*******************************************************!*\
  !*** ./loader/components/DeleteSucceedQueuedAsset.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DeleteSucceedQueuedAsset;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _ProcessDoneAssets = __webpack_require__(/*! ./ProcessDoneAssets */ "./loader/components/ProcessDoneAssets.js");

var _ProcessDoneAssets2 = _interopRequireDefault(_ProcessDoneAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DeleteSucceedQueuedAsset(file) {

    this._successFiles.delete(file);

    if (this._successFiles.size === 0 && this.state === _LoaderState2.default.PROCESSING) _ProcessDoneAssets2.default.call(this);
}

/***/ }),

/***/ "./loader/components/InitializeLoader.js":
/*!***********************************************!*\
  !*** ./loader/components/InitializeLoader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeLoader;

var _Set = __webpack_require__(/*! ../../structures/Set */ "./structures/Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _EventManager = __webpack_require__(/*! ../../event/EventManager */ "./event/EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InitializeLoader() {

    this.cache = this.game.system.cache;

    this._filesQueue = new _Set2.default();
    this._filesLoading = new _Set2.default();
    this._successFiles = new _Set2.default();
    this._failedFiles = new _Set2.default();
    this._processedFiles = new _Set2.default();
    this.event = new _EventManager2.default();

    this._filesQueueCount = 0;
    this._loadedFilesCount = 0;

    this.progress = 0;
    this.path = '';
    this.baseURL = '';
    this.state = _LoaderState2.default.IDLE;
}

/***/ }),

/***/ "./loader/components/LoaderFinished.js":
/*!*********************************************!*\
  !*** ./loader/components/LoaderFinished.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LoaderFinished;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _ProcessDoneAssets = __webpack_require__(/*! ./ProcessDoneAssets */ "./loader/components/ProcessDoneAssets.js");

var _ProcessDoneAssets2 = _interopRequireDefault(_ProcessDoneAssets);

var _AssetProcessingUpdate = __webpack_require__(/*! ./AssetProcessingUpdate */ "./loader/components/AssetProcessingUpdate.js");

var _AssetProcessingUpdate2 = _interopRequireDefault(_AssetProcessingUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoaderFinished() {

    if (this.state === _LoaderState2.default.PROCESSING) return;

    this.progress = 1;
    this.isDownloading = false;
    this.state = _LoaderState2.default.PROCESSING;

    this._processedFiles.clear();

    if (this._successFiles.size === 0) {
        _ProcessDoneAssets2.default.call(this); // this.processingDone();
    } else {

        this._successFiles.each(function (file) {
            file.onProcessing(_AssetProcessingUpdate2.default.bind(this));
        }, this);
    }
}

/***/ }),

/***/ "./loader/components/NextAsset.js":
/*!****************************************!*\
  !*** ./loader/components/NextAsset.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NextAsset;

var _ProcessAssetsQueue = __webpack_require__(/*! ./ProcessAssetsQueue */ "./loader/components/ProcessAssetsQueue.js");

var _ProcessAssetsQueue2 = _interopRequireDefault(_ProcessAssetsQueue);

var _LoaderFinished = __webpack_require__(/*! ./LoaderFinished */ "./loader/components/LoaderFinished.js");

var _LoaderFinished2 = _interopRequireDefault(_LoaderFinished);

var _UpdateProgress = __webpack_require__(/*! ./UpdateProgress */ "./loader/components/UpdateProgress.js");

var _UpdateProgress2 = _interopRequireDefault(_UpdateProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NextAsset(concludedFile, hasError) {

    if (hasError) this._failedFiles.set(concludedFile);else this._successFiles.set(concludedFile);

    this._filesLoading.delete(concludedFile);
    this._loadedFilesCount++;

    //this.updateProgress();
    _UpdateProgress2.default.call(this);

    if (this._filesQueue.size > 0) //(this._loadedFilesCount < this._filesQueueCount)
        {
            //this.processFileQueue();
            _ProcessAssetsQueue2.default.call(this);
        } else if (this._filesLoading.size === 0) {

        //this.loadFinished();
        _LoaderFinished2.default.call(this);
    }
}

/***/ }),

/***/ "./loader/components/ProcessAssetsQueue.js":
/*!*************************************************!*\
  !*** ./loader/components/ProcessAssetsQueue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ProcessAssetsQueue;

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProcessAssetsQueue() {

    var self = this;

    this._filesQueue.each(function (file) {

        if (file.state === _LoaderState2.default.FINISHED || file.state === _LoaderState2.default.PENDING) //  && this.inflight.size < this.maxParallelDownloads))
            {

                self._filesLoading.set(file);

                self._filesQueue.delete(file);

                self.loadAsset(file);
            }
    });
}

/***/ }),

/***/ "./loader/components/ProcessDoneAssets.js":
/*!************************************************!*\
  !*** ./loader/components/ProcessDoneAssets.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProcessDoneAssets;

var _PreloadSceneComplete = __webpack_require__(/*! ../../scene/components/PreloadSceneComplete */ "./scene/components/PreloadSceneComplete.js");

var _PreloadSceneComplete2 = _interopRequireDefault(_PreloadSceneComplete);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

var _AssetsType = __webpack_require__(/*! ../AssetsType */ "./loader/AssetsType.js");

var _AssetsType2 = _interopRequireDefault(_AssetsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProcessDoneAssets() {

  this._successFiles.clear();
  this._filesQueue.clear();

  var cache = this.cache;

  if (this._processedFiles.size > 0) {

    // sort the assets by type priority 
    this._processedFiles.sort(function (a, b) {
      return a.type > b.type;
    });

    // add assets to cache
    this._processedFiles.each(function (file) {

      switch (file.type) {
        default:
          break;

        case _AssetsType2.default.image:
          {
            cache.image.add(file.tag, file.data);
            break;
          }
        case _AssetsType2.default.audio:
          {

            file.data = requestXHR.response;

            cache.addSound(file.tag, file.url, file.data, true);

            if (file.autoDecode) {
              this.game.sound.decode(file.tag);
            }

            break;
          }
        case _AssetsType2.default.json:
          {
            cache.json.add(file.tag, file.data);
            break;
          }

        case _AssetsType2.default.tilemapJSON:
          {
            cache.tilemap.add(file.tag, file.data);
            break;
          }
      }
    });

    this._processedFiles.clear();
  }

  this.state = _LoaderState2.default.DONE;

  //this.game.scene.preloadComplete();
  _PreloadSceneComplete2.default.call(this.game.scene);
}

/***/ }),

/***/ "./loader/components/StartLoadAssets.js":
/*!**********************************************!*\
  !*** ./loader/components/StartLoadAssets.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StartLoadAssets;

var _LoaderFinished = __webpack_require__(/*! ./LoaderFinished */ "./loader/components/LoaderFinished.js");

var _LoaderFinished2 = _interopRequireDefault(_LoaderFinished);

var _ProcessAssetsQueue = __webpack_require__(/*! ./ProcessAssetsQueue */ "./loader/components/ProcessAssetsQueue.js");

var _ProcessAssetsQueue2 = _interopRequireDefault(_ProcessAssetsQueue);

var _LoaderState = __webpack_require__(/*! ../LoaderState */ "./loader/LoaderState.js");

var _LoaderState2 = _interopRequireDefault(_LoaderState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartLoadAssets() {

    if (!this.isOK()) {
        return -1;
    }

    this.progress = 0;
    this._loadedFilesCount = 0;
    this.state = _LoaderState2.default.LOADING;
    this._filesQueueCount = this._filesQueue.size;

    if (this._filesQueue.size === 0) {
        //console.log(0);
        //this.loadFinished();
        _LoaderFinished2.default.call(this);
    } else {
        this.isDownloading = true;
        this._successFiles.clear();
        this._failedFiles.clear();
        this._filesLoading.clear();

        //this.processFileQueue();
        _ProcessAssetsQueue2.default.call(this);
    }
}

/***/ }),

/***/ "./loader/components/UpdateProgress.js":
/*!*********************************************!*\
  !*** ./loader/components/UpdateProgress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateProgress;
function UpdateProgress() {

    //var progress = 0;

    if (this._filesQueueCount != 0) {
        this.progress = 1 - this._loadedFilesCount / this._filesQueueCount;
    }
    //progress = parseFloat(this._successCount) / parseFloat(this._filesQueueCount);

    //this.progress = progress;
}

/***/ }),

/***/ "./loader/index.js":
/*!*************************!*\
  !*** ./loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    LoaderState: __webpack_require__(/*! ./LoaderState */ "./loader/LoaderState.js"),
    File: __webpack_require__(/*! ./File */ "./loader/File.js"),
    XHR: __webpack_require__(/*! ./XHR */ "./loader/XHR.js"),
    URLObject: __webpack_require__(/*! ./URLObject */ "./loader/URLObject.js"),
    AssetsType: __webpack_require__(/*! ./AssetsType */ "./loader/AssetsType.js"),
    Assets: __webpack_require__(/*! ./assets */ "./loader/assets/index.js"),
    LoaderManager: __webpack_require__(/*! ./LoaderManager */ "./loader/LoaderManager.js")

};

/***/ }),

/***/ "./math/BoundingBox.js":
/*!*****************************!*\
  !*** ./math/BoundingBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ./Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Rect = __webpack_require__(/*! ./Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundingBox = function () {
  function BoundingBox(x, y, width, height) {
    _classCallCheck(this, BoundingBox);

    x = x || Infinity;
    y = y || Infinity;
    width = width || -Infinity;
    height = height || -Infinity;
    this.min = new _Vector2.default(x, y);
    this.max = new _Vector2.default(x + width, y + height);
    //this.box = new Rect(xx,yy,w,h);
  }

  _createClass(BoundingBox, [{
    key: 'set',
    value: function set(minX, minY, maxX, maxY) {

      this.min.set(minX, minY);
      this.max.set(maxX, maxY);
      //this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);
      return this;
    }
  }, {
    key: 'setMin',
    value: function setMin(minX, minY) {
      this.min.x = minX;
      this.min.y = minY;
      return this;
    }
  }, {
    key: 'setMax',
    value: function setMax(maxX, maxY) {
      this.max.x = maxX;
      this.max.y = maxY;
      return this;
    }
  }, {
    key: 'move',
    value: function move(x, y) {
      this.min.x += x;
      this.min.y += y;
      this.max.x += x;
      this.max.y += y;
    }
  }, {
    key: 'intersects',
    value: function intersects(bounds) {
      return this.max.x >= bounds.min.x && this.max.y >= bounds.min.y && this.min.x <= bounds.max.x && this.min.y <= bounds.max.y || this.min.x >= bounds.max.x && this.min.y >= bounds.max.y && this.max.x <= bounds.min.x && this.max.y <= bounds.min.y;
    }
  }, {
    key: 'contains',
    value: function contains(x, y) {
      return x > this.min.x && y > this.min.y && x < this.max.x && y < this.max.y;
    }
  }, {
    key: 'expand',
    value: function expand(xRadius, yRadius) {

      yRadius = yRadius || xRadius;

      if (this.max.x > this.min.x) {
        this.min.x -= xRadius;
        this.max.x += xRadius;
      } else {
        this.min.x += xRadius;
        this.max.x -= xRadius;
      }

      if (this.max.y > this.min.y) {
        this.min.y -= yRadius;
        this.max.y += yRadius;
      } else {
        this.min.y += yRadius;
        this.max.y -= yRadius;
      }
    }
  }, {
    key: 'merge',
    value: function merge(value) {

      // merge with another bounds
      if (value instanceof BoundingBox) {
        this.min.x = Math.min(this.min.x, value.min.x);
        this.min.y = Math.min(this.min.y, value.min.y);
        this.max.x = Math.max(this.max.x, value.max.x);
        this.max.y = Math.max(this.max.y, value.max.y);
        return this;
      } else if (value instanceof _Vector2.default) {
        return this.mergeWithPoint(value.x, value.y);
      } else {
        this.min.x = Math.min(this.min.x, value);
        this.min.y = Math.min(this.min.y, value);
        this.max.x = Math.max(this.max.x, value);
        this.max.y = Math.max(this.max.y, value);
        return this;
      }
    }
  }, {
    key: 'mergeWithPoint',
    value: function mergeWithPoint(x, y) {
      this.min.x = Math.min(this.min.x, x);
      this.min.y = Math.min(this.min.y, y);
      this.max.x = Math.max(this.max.x, x);
      this.max.y = Math.max(this.max.y, y);
      return this;
    }
  }, {
    key: 'extend',
    value: function extend(bounds) {
      // min merge
      if (bounds.min.x < this.min.x) this.min.x = bounds.min.x;

      if (bounds.min.y < this.min.y) this.min.y = bounds.min.y;

      // max merge
      if (bounds.max.x > this.max.x) this.max.x = bounds.max.x;

      if (bounds.max.y > this.max.y) this.max.y = bounds.max.y;

      return this;
    }
  }, {
    key: 'extendByPoint',
    value: function extendByPoint(x, y) {
      if (x < this.min.x) this.min.x = x;
      if (y < this.min.y) this.min.y = y;
      if (x > this.max.x) this.max.x = x;
      if (y > this.max.y) this.max.y = y;

      return this;
    }
  }, {
    key: 'limit',
    value: function limit(xmin, ymin, xmax, ymax) {
      if (this.min.x < xmin) this.min.x = xmin;

      if (this.min.y < ymin) this.min.y = ymin;

      if (this.max.x > xmax) this.max.x = xmax;

      if (this.max.y > ymax) this.max.y = ymax;
    }
  }, {
    key: 'offset',
    value: function offset(x, y) {
      var o = { x: x, y: y };
      o.x -= this.min.x;
      o.y -= this.min.y;

      if (this.max.x > this.min.x) o.x /= this.max.x - this.min.x;

      if (this.max.y > this.min.y) o.y /= this.max.y - this.min.y;

      return o;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return "{ min: " + this.min.toString() + ", max: " + this.max.toString() + " }";
    }
  }, {
    key: 'center',
    get: function get() {
      return new _Vector2.default((this.max.x - this.min.x) / 2, (this.max.y - this.min.y) / 2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _Vector2.default(this.max.x - this.min.x, this.max.y - this.min.y);
    }
  }]);

  return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),

/***/ "./math/MathUtils.js":
/*!***************************!*\
  !*** ./math/MathUtils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MathUtils = {

  degToRad: Math.PI / 180,
  radToDeg: 180 / Math.PI,
  TAU: Math.PI * 2,
  //HALFPI : Math.PI / 2,
  EPSILON: Math.pow(2, -52),
  HALFPI: 1.5707963267948966,

  floor: function floor(value) {
    return value >> 0;
  },

  round: function round(value) {

    // With a bitwise or.
    //let rounded = (0.5 + value) | 0;

    // FASTEST - A double bitwise not.
    return ~~(0.5 + value);

    // Finally, a left bitwise shift.
    //rounded = (0.5 + value) << 0;
  },

  clamp: function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
  },

  randomRange: function randomRange(min, max) {

    return Math.random() * (max - min) + min;
  },

  irandomRange: function irandomRange(min, max) {

    return MathUtils.floor(Math.random() * (max - min + 1)) + min;
  },

  lerp: function lerp(fromValue, toValue, t) {

    return (1.0 - t) * fromValue + t * toValue;
  },

  lerpAngle: function lerpAngle(fromValue, toValue, t) {

    /*var shortest_angle = ((((toValue - fromValue) % 360) + 540) % 360) - 180;
    return shortest_angle * t;*/

    var end = toValue;
    var start = fromValue;

    var difference = Math.abs(end - start);
    if (difference > 180) {
      // We need to add on to one of the values.
      if (end > start) {
        // We'll add it on to start...
        start += 360;
      } else {
        // Add it on to end.
        end += 360;
      }
    }

    // Interpolate it.
    var value = start + (end - start) * t;

    // Wrap it..
    var rangeZero = 360;

    if (value >= 0 && value <= 360) return value;

    return value % rangeZero;
  },

  distance: function distance(x0, y0, x1, y1) {

    return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);
  },

  angleBetween: function angleBetween(x0, y0, x1, y1) {

    var angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

    if (angle < 0 && angle >= -180) angle = 360 + angle;

    return angle;
  },

  toDegree: function toDegree(radians) {

    return radians * MathUtils.radToDeg;
  },

  toRadian: function toRadian(degrees) {

    return degrees * MathUtils.degToRad;
  }

};

Object.freeze(MathUtils);

module.exports = MathUtils;

//export default MathUtils;

/***/ }),

/***/ "./math/Matrix.js":
/*!************************!*\
  !*** ./math/Matrix.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*


* | a | b | x | * | 0 | 2 | 4 |
* | c | d | y | * | 1 | 3 | 5 |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | c | x |
* | 1 | 4 | 7 | * | b | d | y |
* | 2 | 5 | 8 | * | 0 | 0 | 1 |

a = scale_x
b = cos
x = x translate

c = scale_y
d = sin
y = y translate

HTML5/CSS3 uses matrices in column-major order based.

*/

var Matrix = function () {

  /*
  * Constructor is identity only
  */
  function Matrix(a, b) {
    _classCallCheck(this, Matrix);

    /*a = a || i;
    b = b || 0;
    x = x || 0;
      c = c || 0;   
    d = d || i;   
    y = y || 0;*/

    a = a || 0;
    b = b || 0;

    this.a = [];

    // first column
    this.a[0] = a;
    this.a[1] = b;
    this.a[2] = b;
    // second column
    this.a[3] = b;
    this.a[4] = a;
    this.a[5] = b;
    // third column
    this.a[6] = b;
    this.a[7] = b;
    this.a[8] = a;
    //this.at = null;
  }

  _createClass(Matrix, [{
    key: "at",
    value: function at(i, j) {
      return this.a[i + j * 3];
    }
  }, {
    key: "set",
    value: function set(i, j, value) {
      this.a[i + j * 3] = value;
      return this;
    }
  }, {
    key: "setIdentity",
    value: function setIdentity() {
      return this.setTransform(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
  }, {
    key: "setTransform",
    value: function setTransform(a, b, c, d, e, f, g, h, i) {

      this.a[0] = a;
      this.a[1] = b;
      this.a[2] = c; // 0

      this.a[3] = d;
      this.a[4] = e;
      this.a[5] = f; // 0

      this.a[6] = g; // x
      this.a[7] = h; // y
      this.a[8] = i;

      return this;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {

      /* | a | b | x | * | 0 | 2 | 4 |
      *  | c | d | y | * | 1 | 3 | 5 |
        * | 0 | 3 | 6 | * | a | c | x |
      * | 1 | 4 | 7 | * | b | d | y |
      * | 2 | 5 | 8 |
      */
      // 4 = 0 * x * 2 * y + 4
      // 5 = 1 * x * 3 * y + 5

      // 6 = 1 * x + 3 * y + 5
      // 7 = 1 * x + 4 * y + 7
      this.a[6] = this.a[0] * x + this.a[3] * y + this.a[6];
      this.a[7] = this.a[1] * x + this.a[4] * y + this.a[7];
      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {

      this.a[0] *= x; // a
      this.a[1] *= x; // b

      this.a[3] *= y; // c
      this.a[4] *= y; // d

      this.a[6] *= x; // x
      this.a[7] *= y; // y
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(radianAngle) {
      var cos = Math.cos(radianAngle);
      var sin = Math.sin(radianAngle);

      return this.radianRotate(cos, sin);
    }
  }, {
    key: "radianRotate",
    value: function radianRotate(cos, sin) {
      return this.transform(cos, sin, -sin, cos, 0, 0);
    }
  }, {
    key: "transform",
    value: function transform(a, b, c, d, x, y) {
      var a00 = this.a[0]; // a
      var a01 = this.a[1]; // b

      var a10 = this.a[3]; // c
      var a11 = this.a[4]; // d

      var a20 = this.a[6]; // x
      var a21 = this.a[7]; // y

      this.a[0] = a * a00 + b * a10; // a * a0 + b * c0;
      this.a[1] = a * a01 + b * a11; // a * b0 + b * d0;

      this.a[3] = c * a00 + d * a10; // c * a0 + d * c0;
      this.a[4] = c * a01 + d * a11; // c * b0 + d * d0;

      this.a[6] = x * a00 + y * a10 + a20; // x * a0 + y * c0 + x0;
      this.a[7] = x * a01 + y * a11 + a21; // x * b0 + y * d0 + y0;

      return this;
    }
  }, {
    key: "setModelMatrix",
    value: function setModelMatrix(position, scale, rotation, origin) {
      this.a[0] = rotation.x * scale.x; // a
      this.a[1] = rotation.y * scale.x; // b
      this.a[3] = -rotation.y * scale.y; // c
      this.a[4] = rotation.x * scale.y; // d
      this.a[6] = position.x; // x
      this.a[7] = position.y; // y

      /*if (origin !== undefined) {
        this.a[6] -= origin.x * this.a[0] + origin.y * this.a[3];
        this.a[7] -= origin.y * this.a[1] + origin.y * this.a[4];
      }*/

      return this;
      /*
      a  =  transform._cosSin.x * transform.scale.x;
      b  = transform._cosSin.y * transform.scale.x;
      c  = -transform._cosSin.y * transform.scale.y;
      d  =  transform._cosSin.x * transform.scale.y;
      x =  transform.position.x;
      y =  transform.position.y;
        x -= transform.origin.x * a + transform.origin.y * c;
      y -= transform.origin.y * b + transform.origin.y * d;
      */
    }
  }, {
    key: "multiply",
    value: function multiply(other) {

      // faster way
      var a00 = this.a[0]; // a - 0
      var a01 = this.a[1]; // b - 1
      var a10 = this.a[3]; // c - 3
      var a11 = this.a[4]; // d - 4
      var a20 = this.a[6]; // x - 6
      var a21 = this.a[7]; // y - 7

      this.a[0] = other.a[0] * a00 + other.a[1] * a10; // a1 * a0 + b1 * c0;
      this.a[1] = other.a[0] * a01 + other.a[1] * a11; // a1 * b0 + b1 * d0;

      this.a[3] = other.a[3] * a00 + other.a[4] * a10; // c1 * a0 + d1 * c0;
      this.a[4] = other.a[3] * a01 + other.a[4] * a11; // c1 * b0 + d1 * d0;

      this.a[6] = other.a[6] * a00 + other.a[7] * a10 + a20; // x1 * a0 + y1 * c0 + x0;
      this.a[7] = other.a[6] * a01 + other.a[7] * a11 + a21; // x1 * b0 + y1 * d0 + y0;

      return this;
    }
  }, {
    key: "concat",
    value: function concat(other) {

      var a = this.a[0]; // a - 0
      var b = this.a[1]; // b - 1
      var c = this.a[3]; // c - 3
      var d = this.a[4]; // d - 4
      var x = this.a[6]; // x - 6
      var y = this.a[7]; // y - 7

      this.a[0] = a * other.a[0] + b * other.a[3]; // a * pt.a + b * pt.c;
      this.a[1] = a * other.a[1] + b * other.a[4]; // a * pt.b + b * pt.d;

      this.a[3] = c * other.a[0] + d * other.a[3]; // c * pt.a + d * pt.c;
      this.a[4] = c * other.a[1] + d * other.a[4]; // c * pt.b + d * pt.d;

      this.a[6] = x * other.a[0] + y * other.a[3] + other.a[6]; // x * pt.a + y * pt.c + pt.x;
      this.a[7] = x * other.a[1] + y * other.a[4] + other.a[7]; // x * pt.b + y * pt.d + pt.y;

      return this;
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(x, y) {

      var point = { x: 0, y: 0 };

      point.x = x * this.a[0] + y * this.a[3] + this.a[6];
      point.y = x * this.a[1] + y * this.a[4] + this.a[7];

      return point;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return this.setAll(mat.a[0], mat.a[3], mat.a[6], mat.a[1], mat.a[4], mat.a[7], mat.a[2], mat.a[5], mat.a[8]);
    }
  }, {
    key: "toString",
    value: function toString() {
      var str = "";
      for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 3; x++) {
          var val = this.at(x, y);
          //str += val.toString() + " ";
          //console.log("---- " + (x + y * 3).toString());
          str += val + " ";
        }
        str += "\n";
      }

      return str;
    }
  }], [{
    key: "identity",
    value: function identity() {
      return new Matrix(1);
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Matrix(0);
    }
  }, {
    key: "transpose",
    value: function transpose(mat) {
      var copy = Matrix.zero;
      return copy.setAll(mat.a[0], mat.a[3], mat.a[6], mat.a[1], mat.a[4], mat.a[7], mat.a[2], mat.a[5], mat.a[8]);
    }
  }, {
    key: "multiplySlow",
    value: function multiplySlow(a, b) {
      var mat = Matrix.zero(); // zeroes
      var val = void 0;

      for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
          for (var k = 0; k < 3; ++k) {
            val = mat.at(i, k);
            val += a.at(i, j) * b.at(j, k);
            mat.set(i, k, val);
          }
        }
      }

      return mat;
    }
  }]);

  return Matrix;
}();

module.exports = Matrix;

/***/ }),

/***/ "./math/Rect.js":
/*!**********************!*\
  !*** ./math/Rect.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/

var Rect = function () {
  function Rect(x, y, width, height) {
    _classCallCheck(this, Rect);

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }

  _createClass(Rect, [{
    key: "set",
    value: function set(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "setPostion",
    value: function setPostion(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(rect) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
      return this;
    }
  }, {
    key: "intersects",
    value: function intersects(rect) {
      return Rect.intersects(this, rect);
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return Rect.contains(this, x, y);
    }
  }, {
    key: "center",
    get: function get() {
      var vec = {};
      vec.x = this.x + this.width / 2;
      vec.y = this.y + this.height / 2;
      return vec;
    }
  }], [{
    key: "intersects",
    value: function intersects(rect1, rect2) {

      if (rect1.width <= 0 || rect1.height <= 0 || rect2.width <= 0 || rect2.height <= 0) return false;

      return !(rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y);
    }
  }, {
    key: "contains",
    value: function contains(rect, x, y) {

      if (rect.width <= 0 && rect.height <= 0) return false;

      return x > rect.x && x < rect.x + rect.width && y >= rect.y && y < rect.y + rect.height;
    }
  }, {
    key: "intersectionArea",
    value: function intersectionArea(rect1, rect2) {

      var out = new scintilla.Rect();

      if (scintilla.Rect.intersects(rect1, rect2)) {

        out.y = Math.max(a.y, b.y);
        out.x = Math.max(a.x, b.x);
        out.width = Math.min(a.x + a.width, b.x + b.width) - out.x;
        out.height = Math.min(a.y + a.height, b.y + b.height) - out.y;
      }

      return out;
    }
  }]);

  return Rect;
}();

exports.default = Rect;

/***/ }),

/***/ "./math/Vector.js":
/*!************************!*\
  !*** ./math/Vector.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ./MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
var Vector = function () {
  function Vector(x, y, managed) {
    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
    this.managed = managed || undefined;
  }

  /*
  set x(value) {
    this.x = value;
    return this.x;
  }
  get x() {return this.x;}
  set y(value) {
    this.y = value;
    return this.y;
  }
  get y() {return this.y;}*/

  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {

      this.x = x;
      this.y = y || x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "move",
    value: function move(x, y) {

      this.x += x;
      this.y += y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {

      this.x *= x;
      this.y *= y || x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(radians) {

      var x = this.x;
      var y = this.y;
      this.x = x * Math.cos(radians) - y * Math.sin(radians);
      this.y = x * Math.sin(radians) + y * Math.cos(radians);

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "rotateAround",
    value: function rotateAround(radians, other) {

      /*var x = this.x;
      var y = this.y;*/
      var dx = this.x - other.x;
      var dy = this.y - other.y;

      var c = Math.cos(radians);
      var s = Math.sin(radians);

      /*this.x = c * (x-other.x) - s * (y-other.y) + other.x;
      this.y = s * (x-other.x) + c * (y-other.y) + other.y;*/

      this.x = other.x + (c * dx - s * dy);
      this.y = other.y + (s * dx + c * dy);

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "copy",
    value: function copy(otherVector) {

      this.x = otherVector.x;
      this.y = otherVector.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {

      var mag = this.length();
      if (mag > 0) {
        this.x = this.x / mag;
        this.y = this.y / mag;
      }

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "round",
    value: function round() {
      this.x = _MathUtils2.default.round(this.x);
      this.y = _MathUtils2.default.round(this.y);
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.x = -this.x;
      this.y = -this.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "perp",
    value: function perp() {

      var x = this.x;
      this.x = this.y;
      this.y = -x;

      if (this.managed !== undefined) this.managed.markDirty();

      return this;
    }
  }, {
    key: "dot",
    value: function dot(other) {
      return Vector.dot(this, other);
    }
  }, {
    key: "project",
    value: function project(other) {
      return Vector.project(this, other);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.squaredLenght());
    }
  }, {
    key: "toString",
    value: function toString() {
      return "{ x: " + this.x + ", y: " + this.y + " }";
    }
  }, {
    key: "squaredLenght",
    value: function squaredLenght() {
      return Vector.dot(this, this);
    }
  }, {
    key: "magnitude",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "normal",
    get: function get() {
      var mag = this.magnitude;
      var vec = new tobiJS.Vector(this.x / mag, this.y / mag);
      return vec;
    }
  }], [{
    key: "abs",
    value: function abs(vector) {
      return new Vector(Math.abs(vector.x), Math.abs(vector.y));
    }
  }, {
    key: "scalar",
    value: function scalar(a, b) {
      return a.x * b.y - a.y * b.x;
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      return _MathUtils2.default.distance(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "angleBetween",
    value: function angleBetween(a, b) {
      return _MathUtils2.default.angleBetween(a.x, a.y, b.x, b.y);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }
  }, {
    key: "project",
    value: function project(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / (b.x * b.x + b.y * b.y) * b.x, dp / (b.x * b.x + b.y * b.y) * b.y);
      return proj;
    }
  }, {
    key: "projectNormal",


    // project for unit vector
    value: function projectNormal(a, b) {
      var dp = Vector.dot(a, b);
      var proj = new Vector(dp / b.x, dp / b.y);
      return proj;
    }
  }, {
    key: "reflect",
    value: function reflect(vec, axis) {

      var r = Vector.project(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "reflectNormal",
    value: function reflectNormal(vec, axis) {

      var r = Vector.projectNormal(vec, axis);
      r.scale(2);
      r.sub(vec);
      return r;
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      var vec = new Vector(_MathUtils2.default.lerp(a.x, b.x, t), _MathUtils2.default.lerp(a.y, b.y, t));
      return vec;
    }
  }]);

  return Vector;
}();

exports.default = Vector;


module.exports = Vector;

/***/ }),

/***/ "./math/easing/Ease.js":
/*!*****************************!*\
  !*** ./math/easing/Ease.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EaseIn = __webpack_require__(/*! ./EaseIn */ "./math/easing/EaseIn.js");

var _EaseIn2 = _interopRequireDefault(_EaseIn);

var _EaseOut = __webpack_require__(/*! ./EaseOut */ "./math/easing/EaseOut.js");

var _EaseOut2 = _interopRequireDefault(_EaseOut);

var _EaseInOut = __webpack_require__(/*! ./EaseInOut */ "./math/easing/EaseInOut.js");

var _EaseInOut2 = _interopRequireDefault(_EaseInOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Easing functions
 */
var Ease = {

  /**
   * Ease-in functions
   */
  in: _EaseIn2.default,

  /**
   * Ease-out functions
   */
  out: _EaseOut2.default,

  /**
   * Ease-in-out functions
   */
  inout: _EaseInOut2.default

};

Object.freeze(Ease);

module.exports = Ease;

exports.default = Ease;

/***/ }),

/***/ "./math/easing/EaseIn.js":
/*!*******************************!*\
  !*** ./math/easing/EaseIn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ../MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EaseInFunctions = function () {
    function EaseInFunctions() {
        _classCallCheck(this, EaseInFunctions);
    }

    _createClass(EaseInFunctions, [{
        key: "linear",


        /**
         * 
         * @param {Number} from 
         * @param {Number} to 
         * @param {Number} t 
         * @param {Number} [duration]
         */
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: "stepped",
        value: function stepped(from, to, t) {
            return to * (t < 0.5 ? 0 : 1) + from;
        }
    }, {
        key: "cut",
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: "sine",
        value: function sine(from, to, t) {
            return to * (Math.sin(t * _MathUtils2.default.HALFPI - _MathUtils2.default.HALFPI) + 1) + from;
        }
    }, {
        key: "power",
        value: function power(from, to, t, _power) {
            return to * Math.pow(t, _power) + from;
        }
    }, {
        key: "quadratic",
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: "cubic",
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: "quartic",
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: "quintic",
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: "exponential",
        value: function exponential(from, to, t) {
            return t == 0 ? from : to * Math.pow(2, 10 * (t - 1)) + from;
        }
    }, {
        key: "circ",
        value: function circ(from, to, t) {
            return -to * (Math.sqrt(1 - t * t) - 1) + from;
        }
    }, {
        key: "elastic",
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;
            if ((t /= duration) == 1) return from + to;

            var p = duration * 0.3;
            var s = p / 4;
            // this is a fix, again, with post-increment operators
            var postFix = to * Math.pow(2, 10 * (t -= 1));
            return -(postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
        }
    }, {
        key: "back",
        value: function back(from, to, t) {
            return to * t * t * ((_EasingType.EASE_BACK_CONST + 1) * t - _EasingType.EASE_BACK_CONST) + from;
        }

        /**
         * Ease-in by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: "by",
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 1;

            switch (type) {

                case _EasingType2.default.NONE:
                    return t;
                case _EasingType2.default.CUT:
                    return this.cut(from, to, t, arg);
                case _EasingType2.default.LINEAR:
                    return this.linear(from, to, t);
                case _EasingType2.default.SINE:
                    return this.sine(from, to, t);
                case _EasingType2.default.QUADRATIC:
                    return this.power(from, to, t, 2);
                case _EasingType2.default.CUBIC:
                    return this.power(from, to, t, 3);
                case _EasingType2.default.QUARTIC:
                    return this.power(from, to, t, 4);
                case _EasingType2.default.QUINTIC:
                    return this.power(from, to, t, 5);
                case _EasingType2.default.POWER:
                    return this.power(from, to, t, arg);
                case _EasingType2.default.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case _EasingType2.default.CIRC:
                    return this.circ(from, to, t);
                case _EasingType2.default.BACK:
                    return this.back(from, to, t);
                case _EasingType2.default.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);

    return EaseInFunctions;
}();

;

var EaseIn = new EaseInFunctions();

Object.freeze(EaseIn);

exports.default = EaseIn;

/***/ }),

/***/ "./math/easing/EaseInOut.js":
/*!**********************************!*\
  !*** ./math/easing/EaseInOut.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ../MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EaseIn = __webpack_require__(/*! ./EaseIn */ "./math/easing/EaseIn.js");

var _EaseIn2 = _interopRequireDefault(_EaseIn);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EaseInOutFunctions = function () {
    function EaseInOutFunctions() {
        _classCallCheck(this, EaseInOutFunctions);
    }

    _createClass(EaseInOutFunctions, [{
        key: "linear",
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: "stepped",
        value: function stepped(from, to, t) {
            return to * (t < 0.5 ? 0 : 1) + from;
        }
    }, {
        key: "cut",
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: "sine",
        value: function sine(from, to, t) {
            return to * ((Math.sin(t * Math.PI - _MathUtils2.default.HALFPI) + 1) / 2) + from;
        }
    }, {
        key: "power",
        value: function power(from, to, t, _power) {

            t *= 2;
            if (t < 1) return _EaseIn2.default.power(from, to, t, _power) / 2;

            var sign = _power % 2 == 0 ? -1 : 1;
            return to * (sign / 2.0 * (Math.pow(s - 2, _power) + sign * 2)) + from;
        }
    }, {
        key: "quadratic",
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: "cubic",
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: "quartic",
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: "quintic",
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: "exponential",
        value: function exponential(from, to, t) {

            if (t == 0.0 || t == 1.0) return to * t + from;

            if (t < 0.5) {
                return to * 0.5 * Math.pow(2, 20 * t - 10) + from;
            } else {
                return to * -0.5 * Math.pow(2, -20 * t + 10) + 1 + from;
            }
        }
    }, {
        key: "circ",
        value: function circ(from, to, t) {

            if (t / 2 < 1) return -to / 2 * (Math.sqrt(1 - t * t) - 1) + from;

            return to / 2 * (Math.sqrt(1 - t * (t -= 2)) + 1) + from;
        }
    }, {
        key: "elastic",
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;

            if ((t /= duration / 2) == 2) return from + to;

            var p = duration * (0.3 * 1.5);

            var s = p / 4;
            var postFix = 0;

            if (to >= Math.abs(to)) {
                s = p / (2 * Math.PI) * Math.asin(to / to);
            }

            if (t < 1) {
                postFix = to * Math.pow(2, 10 * (t -= 1));
                return -0.5 * (postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p)) + from;
            }

            // postIncrement is evil
            postFix = to * Math.pow(2, -10 * (t -= 1));
            return postFix * Math.sin((t * duration - s) * (2 * Math.PI) / p) * 0.5 + to + from;
        }
    }, {
        key: "back",
        value: function back(from, to, t) {

            if (t == 0) return from;

            if ((t /= 0.5) == 2) return from + to;

            var p = .3 * 1.5;
            var s = _EasingType.EASE_BACK_CONST;

            if (t < 1) return to / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + from;

            return to / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + from;
        }

        /**
         * Ease-in and ease out by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: "by",
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 1;

            switch (type) {

                case EasingType.NONE:
                    return t;
                case EasingType.CUT:
                    return this.cut(from, to, t, arg);
                case EasingType.LINEAR:
                    return this.linear(from, to, t);
                case EasingType.SINE:
                    return this.sine(from, to, t);
                case EasingType.QUADRATIC:
                    return this.power(from, to, t, 2);
                case EasingType.CUBIC:
                    return this.power(from, to, t, 3);
                case EasingType.QUARTIC:
                    return this.power(from, to, t, 4);
                case EasingType.QUINTIC:
                    return this.power(from, to, t, 5);
                case EasingType.POWER:
                    return this.power(from, to, t, arg);
                case EasingType.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case EasingType.CIRC:
                    return this.circ(from, to, t);
                case EasingType.BACK:
                    return this.back(from, to, t);
                case EasingType.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);

    return EaseInOutFunctions;
}();

var EaseInOut = new EaseInOutFunctions();

Object.freeze(EaseInOut);

exports.default = EaseInOut;

/***/ }),

/***/ "./math/easing/EaseOut.js":
/*!********************************!*\
  !*** ./math/easing/EaseOut.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _EasingType = __webpack_require__(/*! ./EasingType */ "./math/easing/EasingType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EaseOutFunction = function () {
    function EaseOutFunction() {
        _classCallCheck(this, EaseOutFunction);
    }

    _createClass(EaseOutFunction, [{
        key: 'linear',
        value: function linear(from, to, t) {
            return _MathUtils2.default.lerp(from, to, t);
        }
    }, {
        key: 'stepped',
        value: function stepped(from, to, t) {
            return to * (t < 0.5 ? 0 : 1) + from;
        }
    }, {
        key: 'cut',
        value: function cut(from, to, t, levels) {
            if (levels === undefined) levels = 2;
            return _MathUtils2.default.lerp(from, to, _MathUtils2.default.floor(t * levels) / levels);
        }
    }, {
        key: 'sine',
        value: function sine(from, to, t) {
            return -from * (Math.sin(t * _MathUtils2.default.HALFPI) + 1) + from + to;
        }
    }, {
        key: 'power',
        value: function power(from, to, t, _power) {
            var sign = _power % 2 == 0 ? -1 : 1;
            return to * (sign * Math.pow(t - 1, _power) + sign) + from;
        }
    }, {
        key: 'quadratic',
        value: function quadratic(from, to, t) {
            return this.power(from, to, t, 2);
        }
    }, {
        key: 'cubic',
        value: function cubic(from, to, t) {
            return this.power(from, to, t, 3);
        }
    }, {
        key: 'quartic',
        value: function quartic(from, to, t) {
            return this.power(from, to, t, 4);
        }
    }, {
        key: 'quintic',
        value: function quintic(from, to, t) {
            return this.power(from, to, t, 5);
        }
    }, {
        key: 'exponential',
        value: function exponential(from, to, t) {
            return t == 1 ? from : to * (1 - Math.pow(2, 10 * t)) + from;
        }
    }, {
        key: 'circ',
        value: function circ(from, to, t) {
            return to * Math.sqrt(1 - (t - 1) * t) + from;
        }
    }, {
        key: 'elastic',
        value: function elastic(from, to, t, duration) {
            if (duration === undefined) duration = 1;

            if (t == 0) return from;
            if ((t /= duration) == 1) return from + to;

            var p = duration * 0.3;
            var s = p / 4;
            return to * Mathf.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1 + from;
        }
    }, {
        key: 'back',
        value: function back(from, to, t) {
            //let f = (1 - t);
            //return to * (1 - (f * f * f - f * Mathf.Sin(f * Math.PI))) + from;
            return to * ((t - 1) * t * ((_EasingType.EASE_BACK_CONST + 1) * t + _EasingType.EASE_BACK_CONST) + 1) + from;
        }

        /**
         * Ease-out by specific EasingType.
         * 
         * @param {EasingType} type The type of easing
         * @param {Number} from Start point
         * @param {Number} to End point
         * @param {Number} t Normalized time
         * @param {Number} [arg] Additional argument for specific types:
         * 
         * @constant EasingType.CUT: The cell levels of the interpolation
         * @constant EasintType.ELASTIC: The duration of the easing.
         * @constant EasintType.POWER: The pow product.
         */

    }, {
        key: 'by',
        value: function by(type, from, to, t, arg) {

            if (arg === undefined) arg = 1;

            switch (type) {

                case EasingType.NONE:
                    return t;
                case EasingType.CUT:
                    return this.cut(from, to, t, arg);
                case EasingType.LINEAR:
                    return this.linear(from, to, t);
                case EasingType.SINE:
                    return this.sine(from, to, t);
                case EasingType.QUADRATIC:
                    return this.power(from, to, t, 2);
                case EasingType.CUBIC:
                    return this.power(from, to, t, 3);
                case EasingType.QUARTIC:
                    return this.power(from, to, t, 4);
                case EasingType.QUINTIC:
                    return this.power(from, to, t, 5);
                case EasingType.POWER:
                    return this.power(from, to, t, arg);
                case EasingType.EXPONENTIAL:
                    return this.exponential(from, to, t);
                case EasingType.CIRC:
                    return this.circ(from, to, t);
                case EasingType.BACK:
                    return this.back(from, to, t);
                case EasingType.ELASTIC:
                    return this.elastic(from, to, t, arg);
            }

            return t;
        }
    }]);

    return EaseOutFunction;
}();

var EaseOut = new EaseOutFunction();

Object.freeze(EaseOut);

exports.default = EaseOut;


module.exports = EaseOut;

/***/ }),

/***/ "./math/easing/EasingType.js":
/*!***********************************!*\
  !*** ./math/easing/EasingType.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var EasingType = {
    NONE: -1,
    STEPPED: 0,
    LINEAR: 1,
    SINE: 2,
    QUADRATIC: 3,
    CUBIC: 4,
    QUARTIC: 5,
    QUINTIC: 6,
    EXPONENTIAL: 7,
    CIRC: 8,
    BACK: 9,
    ELASTIC: 10,
    BOUNCE: 11,
    CUT: 12,
    POWER: 13
};

var EASE_BACK_CONST = exports.EASE_BACK_CONST = 1.70158;

exports.default = EasingType;

//module.exports = EasingType;

/***/ }),

/***/ "./modules/Module.js":
/*!***************************!*\
  !*** ./modules/Module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
    function Module(moduleType, moduleName, moduleManager) {
        _classCallCheck(this, Module);

        this._moduleType = moduleType || "none";
        this._moduleName = moduleName || "noName";
        this._enabled = true;
        this.entity = null;
        this.moduleManager = moduleManager || undefined;

        if (moduleManager !== undefined) {
            this.entity = moduleManager.entity;
        }
        //this.game = moduleManager.game || null;
    }

    _createClass(Module, [{
        key: "type",
        get: function get() {
            return this._moduleType;
        }
    }, {
        key: "name",
        get: function get() {
            return this._moduleName;
        }
    }, {
        key: "enabled",
        get: function get() {
            return this._enabled;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                this._enabled = value;
            }
        }
    }]);

    return Module;
}();

//module.exports = Module;


exports.default = Module;

/***/ }),

/***/ "./modules/ModuleAttacher.js":
/*!***********************************!*\
  !*** ./modules/ModuleAttacher.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ModuleProvider = __webpack_require__(/*! ./ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleAttacher = function () {
    function ModuleAttacher(moduleManager) {
        _classCallCheck(this, ModuleAttacher);

        this.moduleManager = moduleManager;
    }

    _createClass(ModuleAttacher, [{
        key: "sprite",
        value: function sprite(tag) {
            return _ModuleProvider2.default.attach(this.moduleManager, 'sprite', tag);
        }
    }, {
        key: "tilemap",
        value: function tilemap(tag) {

            if (tag === undefined || tag == null) throw new Error("ModuleAttacher.tilemap: Can not create Tilemap module without a proper tag name.");

            return _ModuleProvider2.default.attach(this.moduleManager, 'tilemap', tag);
        }
    }]);

    return ModuleAttacher;
}();

exports.default = ModuleAttacher;

/***/ }),

/***/ "./modules/ModuleManager.js":
/*!**********************************!*\
  !*** ./modules/ModuleManager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ModuleAttacher = __webpack_require__(/*! ./ModuleAttacher */ "./modules/ModuleAttacher.js");

var _ModuleAttacher2 = _interopRequireDefault(_ModuleAttacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleManager = function () {
    function ModuleManager(entity) {
        _classCallCheck(this, ModuleManager);

        this.entity = entity || null;
        this.attached = new _Map2.default();
        this._pendingModulesInitialization = new _List2.default();
        this.attach = new _ModuleAttacher2.default(this);
    }

    _createClass(ModuleManager, [{
        key: 'detach',
        value: function detach(moduleName, index) {}
    }, {
        key: 'has',
        value: function has(moduleName) {
            return this.attached.has(moduleName);
        }
    }, {
        key: 'get',
        value: function get(moduleName) {
            return this.attached.get(moduleName);
        }
    }]);

    return ModuleManager;
}();

exports.default = ModuleManager;

/***/ }),

/***/ "./modules/ModuleProvider.js":
/*!***********************************!*\
  !*** ./modules/ModuleProvider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _InitializeModuleBase = __webpack_require__(/*! ./components/InitializeModuleBase */ "./modules/components/InitializeModuleBase.js");

var _InitializeModuleBase2 = _interopRequireDefault(_InitializeModuleBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleProviderManager = function () {
    function ModuleProviderManager() {
        _classCallCheck(this, ModuleProviderManager);

        this.proxyModules = new _Map2.default();
    }

    _createClass(ModuleProviderManager, [{
        key: 'attach',
        value: function attach(modulesManager, moduleName, args) {
            var attached = modulesManager.attached;

            if (attached.has(moduleName)) throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

            if (!this.proxyModules.has(moduleName)) throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

            // create a new module
            var newModule = this.proxyModules.get(moduleName)(modulesManager, args);

            // initialize entity module
            (0, _InitializeModuleBase2.default)(newModule, modulesManager.entity);

            // attach the new module to manager
            attached.set(newModule.type, newModule);

            // add to pending initialization list
            modulesManager._pendingModulesInitialization.push(newModule);

            return newModule;
        }
    }, {
        key: 'register',
        value: function register(moduleName, func) {
            if (!ModuleProvider.proxyModules.has(moduleName)) ModuleProvider.proxyModules.set(moduleName, func); // { type: moduleType, func: func }
        }
    }]);

    return ModuleProviderManager;
}();

var ModuleProvider = new ModuleProviderManager();

exports.default = ModuleProvider;

/***/ }),

/***/ "./modules/components/AttachModuleInGame.js":
/*!**************************************************!*\
  !*** ./modules/components/AttachModuleInGame.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AttachModuleInGame;

var _Renderable = __webpack_require__(/*! ../renderables/Renderable */ "./modules/renderables/Renderable.js");

var _Renderable2 = _interopRequireDefault(_Renderable);

var _Tilemap = __webpack_require__(/*! ../renderables/tilemap/Tilemap */ "./modules/renderables/tilemap/Tilemap.js");

var _Tilemap2 = _interopRequireDefault(_Tilemap);

var _Sprite = __webpack_require__(/*! ../renderables/Sprite */ "./modules/renderables/Sprite.js");

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AttachModuleInGame(entityModule, modulesManager, game) {

    // RENDERABLES
    if (entityModule instanceof _Sprite2.default) {
        game.system.render.layer.renderLayers.at(0).add(entityModule);
    } else if (entityModule instanceof _Tilemap2.default) {
        for (var i = 0; i < entityModule.layers.length; i++) {
            game.system.render.layer.renderLayers.at(0).add(entityModule.layers[i]);
        }
    }
}

/***/ }),

/***/ "./modules/components/InitializeModuleBase.js":
/*!****************************************************!*\
  !*** ./modules/components/InitializeModuleBase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeModuleBase;
function InitializeModuleBase(entityModule, instace) {

    entityModule.entity = instace;
    entityModule.moduleManager = instace.modules;
}

/***/ }),

/***/ "./modules/components/ModulesUpdater.js":
/*!**********************************************!*\
  !*** ./modules/components/ModulesUpdater.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ModulesUpdater;

var _InitializeModuleBase = __webpack_require__(/*! ./InitializeModuleBase */ "./modules/components/InitializeModuleBase.js");

var _InitializeModuleBase2 = _interopRequireDefault(_InitializeModuleBase);

var _RenderableUpdate = __webpack_require__(/*! ../renderables/components/RenderableUpdate */ "./modules/renderables/components/RenderableUpdate.js");

var _RenderableUpdate2 = _interopRequireDefault(_RenderableUpdate);

var _AttachModuleInGame = __webpack_require__(/*! ./AttachModuleInGame */ "./modules/components/AttachModuleInGame.js");

var _AttachModuleInGame2 = _interopRequireDefault(_AttachModuleInGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModulesUpdater(modulesManager, game) {
    var size = modulesManager._pendingModulesInitialization.size;
    var entity = modulesManager.entity;

    if (size > 0) {
        // add pending modules
        modulesManager._pendingModulesInitialization.each(function (mod) {
            (0, _AttachModuleInGame2.default)(mod, modulesManager, game);
        });

        modulesManager._pendingModulesInitialization.clear();
    }

    var render = modulesManager.attached.get('render');
    if (render !== undefined || render != null) {
        (0, _RenderableUpdate2.default)(entity, render, game.system.camera, game.system.loop.updateStep);
    }
}

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Module: __webpack_require__(/*! ./Module */ "./modules/Module.js"),
    ModuleProvider: __webpack_require__(/*! ./ModuleProvider */ "./modules/ModuleProvider.js"),
    ModuleAttacher: __webpack_require__(/*! ./ModuleAttacher */ "./modules/ModuleAttacher.js"),
    Renderables: __webpack_require__(/*! ./renderables */ "./modules/renderables/index.js")
};

/***/ }),

/***/ "./modules/renderables/Renderable.js":
/*!*******************************************!*\
  !*** ./modules/renderables/Renderable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundingBox = __webpack_require__(/*! ../../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

var _Vector = __webpack_require__(/*! ../../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Module2 = __webpack_require__(/*! ../Module */ "./modules/Module.js");

var _Module3 = _interopRequireDefault(_Module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderable = function (_Module) {
    _inherits(Renderable, _Module);

    function Renderable(moduleName, moduleManager) {
        _classCallCheck(this, Renderable);

        var _this = _possibleConstructorReturn(this, (Renderable.__proto__ || Object.getPrototypeOf(Renderable)).call(this, 'render', moduleName || 'renderable', moduleManager));

        _this._layerID = 0;
        _this._depth = 0;
        _this._alpha = 1;
        _this._depthDirty = true;
        _this._bounds = new _BoundingBox2.default();
        _this._originInPixels = { x: 0, y: 0 };
        _this._originIsDirty = true;
        return _this;
    }

    _createClass(Renderable, [{
        key: 'bounds',
        get: function get() {
            return this._bounds;
        }
    }, {
        key: 'depth',
        get: function get() {
            return this._depthSorting;
        },
        set: function set(value) {
            if (value != this._depthSorting) {
                this._depthSorting = value;
                this._depthDirty = true;
            }
            return this;
        }
    }, {
        key: 'layerName',
        get: function get() {}
    }, {
        key: 'layer',
        get: function get() {
            return this._layerID;
        },
        set: function set(value) {
            if (this.game != null) {
                if (value === 'number') {
                    //this.game.render.get
                }
            }
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = alpha;
            return this;
        }
    }]);

    return Renderable;
}(_Module3.default);

exports.default = Renderable;

/***/ }),

/***/ "./modules/renderables/Sprite.js":
/*!***************************************!*\
  !*** ./modules/renderables/Sprite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _DrawImage = __webpack_require__(/*! ./components/DrawImage */ "./modules/renderables/components/DrawImage.js");

var _DrawImage2 = _interopRequireDefault(_DrawImage);

var _ModuleProvider = __webpack_require__(/*! ../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _UpdateTransformBounds = __webpack_require__(/*! ../../transform/UpdateTransformBounds */ "./transform/UpdateTransformBounds.js");

var _UpdateTransformBounds2 = _interopRequireDefault(_UpdateTransformBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sprite = function (_Renderable) {
    _inherits(Sprite, _Renderable);

    function Sprite(moduleManager) {
        _classCallCheck(this, Sprite);

        //this._type = "sprite";
        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, 'sprite', moduleManager));

        _this.source = null;
        _this.frame = new _Rect2.default();

        return _this;
    }

    _createClass(Sprite, [{
        key: "setFrame",
        value: function setFrame(x, y, width, height) {
            this.frame.set(x, y, width, height);
        }
    }, {
        key: "setFrameRect",
        value: function setFrameRect(rect) {
            this.frame.set(x, y, width, height);
        }
    }, {
        key: "setSprite",
        value: function setSprite(tag) {

            if (this.entity != null || this.entity !== undefined) {
                var sprite = this.entity.game.system.cache.image.get(tag);

                if (sprite != null) {
                    this.setSource(sprite.data, true);
                }
            } else {
                throw new Error("Sprite.setSprite: Can not set Sprite. The entity is not in the game");
            }
        }
    }, {
        key: "setSource",
        value: function setSource(image, changeFrame) {

            if (changeFrame === undefined) changeFrame = false;

            if (this.source != image) this.source = image;

            if (changeFrame) this.setFrame(0, 0, this.source.width, this.source.height);
        }
    }, {
        key: "render",
        value: function render(context) {
            if (!this._enabled) return false;

            (0, _DrawImage2.default)(context, this.source, this.frame, this.entity.transform, this._originInPixels);

            return true;
        }
    }, {
        key: "width",
        get: function get() {
            return this.frame.width;
        }
    }, {
        key: "height",
        get: function get() {
            return this.frame.height;
        }
    }]);

    return Sprite;
}(_Renderable3.default);

exports.default = Sprite;


_ModuleProvider2.default.register('sprite', function (moduleManager, tag) {

    var spr = new Sprite(moduleManager);

    if (tag !== undefined) {
        spr.setSprite(tag);
    }

    return spr;
});

/***/ }),

/***/ "./modules/renderables/components/AnimateTilemap.js":
/*!**********************************************************!*\
  !*** ./modules/renderables/components/AnimateTilemap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AnimateTilemap;
function AnimateTilemap(tilemap, time) {

    var animator = tilemap.animator;

    if (animator === undefined) return;

    //console.log(time.hiDeltaTime);

    var len = animator.animatedTiles.size;

    if (len === 0) return;

    var delta = time.hiDeltaTime;

    for (var i = 0; i < len; i++) {

        var animatedTile = animator.animatedTiles.at(i);

        animatedTile.t += delta;

        var GID = animatedTile.tileGID;
        var currentKeyFrame = GID.keyFrames[animatedTile.frame];

        if (animatedTile.t >= currentKeyFrame.duration) {

            animatedTile.t = 0;

            if (animatedTile.frame + 1 < GID.keyFrames.length) animatedTile.frame++;else animatedTile.frame = 0;

            var nextGID = GID.keyFrames[animatedTile.frame].tileID; //GID.tileset.getTile(GID.keyFrames[animatedTile.frame].tileID).id;

            GID.currentFrame = nextGID;
        }
    }
}

/***/ }),

/***/ "./modules/renderables/components/CullTiles.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/components/CullTiles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CullTiles;

var _MathUtils = __webpack_require__(/*! ../../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _CullingMethod = __webpack_require__(/*! ./CullingMethod */ "./modules/renderables/components/CullingMethod.js");

var _CullingMethod2 = _interopRequireDefault(_CullingMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LimitCulling(culling, tilemap) {

    // limit culling

    if (culling.start.x < 0) culling.start.x = 0;

    if (culling.start.y < 0) culling.start.y = 0;

    if (culling.end.x > tilemap.width) culling.end.x = tilemap.width;

    if (culling.end.y > tilemap.height) culling.end.y = tilemap.height;
}

function CullTiles(tilemap, camera) {

    var t = tilemap.entity.transform;
    var rot = camera.transform.rotation + t.rotation;

    // 90 DEGREE ROTATION
    // We will use the linear culling that is faster


    if (rot % _MathUtils2.default.HALFPI === 0) {

        var tx = t.position.x - tilemap._originInPixels.x;
        var ty = t.position.y - tilemap._originInPixels.y;

        tilemap.culling.method = _CullingMethod2.default.LINEAR;

        tilemap.culling.start.x = Math.floor((camera.viewBounds.min.x - tx) / tilemap.tileWidth);
        tilemap.culling.start.y = Math.floor((camera.viewBounds.min.y - ty) / tilemap.tileHeight);
        tilemap.culling.end.x = Math.ceil((camera.viewBounds.max.x - tx) / tilemap.tileWidth);
        tilemap.culling.end.y = Math.ceil((camera.viewBounds.max.y - ty) / tilemap.tileHeight);

        LimitCulling(tilemap.culling, tilemap);

        // TODO FOR 90 Deg TILES

    } else {

        tilemap.culling.method = 1;

        // TODO ROTATED TILES
    }
}

/***/ }),

/***/ "./modules/renderables/components/CullingMethod.js":
/*!*********************************************************!*\
  !*** ./modules/renderables/components/CullingMethod.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var CullingMethod = {
    LINEAR: 0,
    LINEAR90DEG: 1
};

exports.default = CullingMethod;

/***/ }),

/***/ "./modules/renderables/components/DrawImage.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/components/DrawImage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


function DrawImage(context, source, frame, transform, destination) {

    if (context === undefined) return false;

    if (source === undefined || source == null) return false;

    var matrix = transform.matrix;

    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    matrix.a[6], matrix.a[7]);

    //context.globalAlpha = this.alpha;

    context.drawImage(source, // image
    frame.x, // sx - pos crop x
    frame.y, // sy - pos crop y
    frame.width, // sWidth - crop width
    frame.height, // sHeight - crop height
    -destination.x, // destination x
    -destination.y, // destination y
    frame.width, frame.height);

    return true;
}

exports.default = DrawImage;

/***/ }),

/***/ "./modules/renderables/components/DrawTilemapLayer.js":
/*!************************************************************!*\
  !*** ./modules/renderables/components/DrawTilemapLayer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawTilemapLayer;

var _MathUtils = __webpack_require__(/*! ../../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _CullingMethod = __webpack_require__(/*! ./CullingMethod */ "./modules/renderables/components/CullingMethod.js");

var _CullingMethod2 = _interopRequireDefault(_CullingMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawTilemapLayer(context, tilemap, layer, transform) {

    var draws = 0;
    var matrix = transform.matrix;
    var x = matrix.a[6];
    var y = matrix.a[7];

    if (tilemap.floorTiles) {
        x = _MathUtils2.default.round(x);
        y = _MathUtils2.default.round(y);
    }
    context.setTransform(matrix.a[0], matrix.a[1], // 2
    matrix.a[3], matrix.a[4], // 5
    x, y);

    if (tilemap.culling.method <= 1) {

        var idx = 0;

        for (var j = tilemap.culling.start.y; j < tilemap.culling.end.y; j++) {
            for (var i = tilemap.culling.start.x; i < tilemap.culling.end.x; i++) {

                //if (tilemap.culling.method == CullingMethod.LINEAR)
                idx = i + j * tilemap.width;
                //else if (tilemap.culling.method == CullingMethod.LINEAR90DEG)
                //    idx = j + i * tilemap.width;

                var tile = layer.tiles[idx];

                if (tile == null || tile === undefined) continue;

                var frame = void 0;

                if (tile.data.isAnimated === false || tile.data.isAnimated === undefined) frame = tile.data.st;else frame = tile.data.tileset.getTile(tile.data.currentFrame).st;

                context.drawImage(tile.data.tileset.image.data, // image
                frame.x, // sx - pos crop x
                frame.y, // sy - pos crop y
                frame.width, // sWidth - crop width
                frame.height, // sHeight - crop height
                tile.x - tilemap._originInPixels.x, // destination x
                tile.y - tilemap._originInPixels.y, // destination y
                frame.width, frame.height);

                draws++;
            }
        }
    }

    //for (let i = 0; i < layer.culledTiles.lenght; i++) {
    /*for (let i = 0; i < layer.tiles.length; i++) {
          let tile = layer.tiles[i];
          if (tile == null || tile === undefined) continue;
          context.drawImage(
            tile.data.tileset.image.data, // image
            tile.frame.x, // sx - pos crop x
            tile.frame.y, // sy - pos crop y
            tile.frame.width, // sWidth - crop width
            tile.frame.height, // sHeight - crop height
            tile.x, // destination x
            tile.y,  // destination y
            tile.frame.width,
            tile.frame.height
                );
          draws++;
      }*/

    return draws;
}

/***/ }),

/***/ "./modules/renderables/components/RenderableBoundsUpdate.js":
/*!******************************************************************!*\
  !*** ./modules/renderables/components/RenderableBoundsUpdate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderableBoundsUpdate;

var _ComputeBounds = __webpack_require__(/*! ../../../transform/ComputeBounds */ "./transform/ComputeBounds.js");

var _ComputeBounds2 = _interopRequireDefault(_ComputeBounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderableBoundsUpdate(renderable, entity, camera) {

    if (!entity.transform._isDirty && !camera.transform._isDirty) return;

    if (renderable._originIsDirty) {
        // destination
        renderable._originInPixels.x = entity.transform.origin.x * renderable.width;
        renderable._originInPixels.y = entity.transform.origin.y * renderable.height;
        // renderable._originIsDirty = false;
    }

    (0, _ComputeBounds2.default)(renderable._bounds, entity.transform, renderable.width, renderable.height, renderable._originInPixels);
}

/***/ }),

/***/ "./modules/renderables/components/RenderableUpdate.js":
/*!************************************************************!*\
  !*** ./modules/renderables/components/RenderableUpdate.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderableUpdate;

var _CullTiles = __webpack_require__(/*! ./CullTiles */ "./modules/renderables/components/CullTiles.js");

var _CullTiles2 = _interopRequireDefault(_CullTiles);

var _AnimateTilemap = __webpack_require__(/*! ./AnimateTilemap */ "./modules/renderables/components/AnimateTilemap.js");

var _AnimateTilemap2 = _interopRequireDefault(_AnimateTilemap);

var _RenderableBoundsUpdate = __webpack_require__(/*! ./RenderableBoundsUpdate */ "./modules/renderables/components/RenderableBoundsUpdate.js");

var _RenderableBoundsUpdate2 = _interopRequireDefault(_RenderableBoundsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderableUpdate(entity, renderable, camera, gameTime) {

    if (renderable.name == 'tilemap') {

        if (renderable._originIsDirty) {
            // destination
            renderable._originInPixels.x = entity.transform.origin.x * renderable.pixelsWidth;
            renderable._originInPixels.y = entity.transform.origin.y * renderable.pixelsHeight;
        }

        (0, _AnimateTilemap2.default)(renderable, gameTime);

        if (!entity.transform._isDirty && !camera.transform._isDirty) return;

        (0, _CullTiles2.default)(renderable, camera);

        for (var i = 0; i < renderable.layers.length; i++) {
            (0, _RenderableBoundsUpdate2.default)(renderable, entity, camera);
        }
    } else {

        (0, _RenderableBoundsUpdate2.default)(renderable, entity, camera);
    }
}

/***/ }),

/***/ "./modules/renderables/index.js":
/*!**************************************!*\
  !*** ./modules/renderables/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Renderable: __webpack_require__(/*! ./Renderable */ "./modules/renderables/Renderable.js"),
    Sprite: __webpack_require__(/*! ./Sprite */ "./modules/renderables/Sprite.js"),
    Tilemap: __webpack_require__(/*! ./tilemap/Tilemap */ "./modules/renderables/tilemap/Tilemap.js")
};

/***/ }),

/***/ "./modules/renderables/tilemap/Tilemap.js":
/*!************************************************!*\
  !*** ./modules/renderables/tilemap/Tilemap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Renderable2 = __webpack_require__(/*! ../Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _ModuleProvider = __webpack_require__(/*! ../../ModuleProvider */ "./modules/ModuleProvider.js");

var _ModuleProvider2 = _interopRequireDefault(_ModuleProvider);

var _TilemapLayer = __webpack_require__(/*! ./TilemapLayer */ "./modules/renderables/tilemap/TilemapLayer.js");

var _TilemapLayer2 = _interopRequireDefault(_TilemapLayer);

var _TilemapAnimator = __webpack_require__(/*! ./TilemapAnimator */ "./modules/renderables/tilemap/TilemapAnimator.js");

var _TilemapAnimator2 = _interopRequireDefault(_TilemapAnimator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilemap = function (_Renderable) {
    _inherits(Tilemap, _Renderable);

    function Tilemap(moduleManager, resource) {
        _classCallCheck(this, Tilemap);

        //this._type = "tilemap";
        var _this = _possibleConstructorReturn(this, (Tilemap.__proto__ || Object.getPrototypeOf(Tilemap)).call(this, 'tilemap', moduleManager));

        _this.resource = resource;
        _this.tileWidth = resource.metaData.tileWidth;
        _this.tileHeight = resource.metaData.tileHeight;
        _this.width = resource.metaData.width;
        _this.height = resource.metaData.height;
        _this.orientation = resource.metaData.orientation;
        _this.pixelsWidth = resource.metaData.pixelsWidth;
        _this.pixelsHeight = resource.metaData.pixelsHeight;
        _this.animator = undefined;

        _this.culling = {
            method: 0,
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 }
        };

        _this.floorTiles = false;
        _this.tilesets = resource.tilesets;
        _this.layers = [];

        var animations = false;

        for (var i = 0; i < resource.layers.length; i++) {
            var layer = resource.layers.at(i);

            if (layer.hasAnimatedTiles) animations = true;

            _this.layers.push(new _TilemapLayer2.default(_this, layer));
        }

        if (animations === true) {
            _this.animator = new _TilemapAnimator2.default(_this, _this.layers);
        }

        return _this;
    }

    return Tilemap;
}(_Renderable3.default);

exports.default = Tilemap;


_ModuleProvider2.default.register('tilemap', function (moduleManager, tag) {

    var res = null;
    var cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined) res = cache.tilemap.get(tag);

    var tilemap = new Tilemap(moduleManager, res);
    tilemap.floorTiles = moduleManager.entity.game.config.floorTiles || false;

    return tilemap;
});

/***/ }),

/***/ "./modules/renderables/tilemap/TilemapAnimator.js":
/*!********************************************************!*\
  !*** ./modules/renderables/tilemap/TilemapAnimator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilemapAnimator = function () {
    function TilemapAnimator(tilemap, layers) {
        var _this = this;

        _classCallCheck(this, TilemapAnimator);

        this.tilemap = tilemap;
        this.animatedTiles = new _List2.default();

        for (var i = 0; i < layers.length; i++) {

            if (!layers[i].layerData.hasAnimatedTiles) continue;

            var animatedSet = layers[i].layerData.animatedTiles;

            var _loop = function _loop(j) {

                var animID = animatedSet.at(j);

                var tileGID = tilemap.resource.getTileGID(animID);

                var hasGid = _this.animatedTiles.find(function (a) {
                    return a.tileGID.gid === tileGID.gid;
                });

                if (hasGid !== null) return "continue";

                _this.animatedTiles.push({
                    t: 0, // frameTime
                    frame: 0,
                    tileGID: tileGID
                });
            };

            for (var j = 0; j < animatedSet.size; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
            }
        }
    }

    _createClass(TilemapAnimator, [{
        key: "update",
        value: function update() {}
    }]);

    return TilemapAnimator;
}();

exports.default = TilemapAnimator;

/***/ }),

/***/ "./modules/renderables/tilemap/TilemapLayer.js":
/*!*****************************************************!*\
  !*** ./modules/renderables/tilemap/TilemapLayer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = __webpack_require__(/*! ../Renderable */ "./modules/renderables/Renderable.js");

var _Renderable3 = _interopRequireDefault(_Renderable2);

var _DrawTilemapLayer = __webpack_require__(/*! ../components/DrawTilemapLayer */ "./modules/renderables/components/DrawTilemapLayer.js");

var _DrawTilemapLayer2 = _interopRequireDefault(_DrawTilemapLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TilemapLayer = function (_Renderable) {
    _inherits(TilemapLayer, _Renderable);

    function TilemapLayer(tilemap, layerData) {
        _classCallCheck(this, TilemapLayer);

        var _this = _possibleConstructorReturn(this, (TilemapLayer.__proto__ || Object.getPrototypeOf(TilemapLayer)).call(this, 'tilemapLayer', tilemap.moduleManager));

        _this.tilemap = tilemap;
        _this.layerData = layerData;
        return _this;
    }

    _createClass(TilemapLayer, [{
        key: "render",
        value: function render(context) {

            if (!this._enabled && !this.tilemap._enabled) return false;

            return (0, _DrawTilemapLayer2.default)(context, this.tilemap, this.layerData, this.tilemap.moduleManager.entity.transform);
        }
    }, {
        key: "width",
        get: function get() {
            return this.layerData.width * this.tilemap.tileWidth;
        }
    }, {
        key: "height",
        get: function get() {
            return this.layerData.height * this.tilemap.tileHeight;
        }
    }]);

    return TilemapLayer;
}(_Renderable3.default);

exports.default = TilemapLayer;

/***/ }),

/***/ "./physics/physics.js":
/*!****************************!*\
  !*** ./physics/physics.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SAT = __webpack_require__(/*! ./xat/SAT */ "./physics/xat/SAT.js");

var _SAT2 = _interopRequireDefault(_SAT);

var _SATResponse = __webpack_require__(/*! ./xat/SATResponse */ "./physics/xat/SATResponse.js");

var _SATResponse2 = _interopRequireDefault(_SATResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Physics = function () {
  function Physics(game) {
    _classCallCheck(this, Physics);

    this.game = null;
    this.sat = null;
    this.response = null;

    this.game = game;
    this.colliadables = [];
  }

  _createClass(Physics, [{
    key: 'init',
    value: function init() {

      this.sat = new _SAT2.default();
      this.response = new _SATResponse2.default();
    }
  }, {
    key: 'getColliadables',
    value: function getColliadables() {
      return this.colliadables;
    }
  }, {
    key: 'addColliderObj',
    value: function addColliderObj(obj) {
      this.colliadables.push(obj);
    }
  }, {
    key: 'removeColliderObj',
    value: function removeColliderObj(obj) {

      var i = this.colliadables.indexOf(obj);

      if (i != -1) {
        this.colliadables.splice(i, 1);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {

      this.colliadables = [];
      this.colliadables.length = 0;
    }
  }, {
    key: 'update',
    value: function update(time) {

      var size = this.colliadables.length;

      // CHECK COLLISION
      if (size < 2) // at least we must have 2 objects
        return;

      //var collision = 0;

      for (var i = 0; i < size; i++) {

        var objA = this.colliadables[i];
        var shapeA = objA.shape;

        if (objA._gameObject._selfDestroy || !objA._gameObject.active) continue;

        var jit = i + 1;

        if (jit >= size) break;

        for (var j = jit; j < size; j++) {

          var objB = this.colliadables[j];
          var shapeB = objB.shape;

          if (objB._gameObject._selfDestroy || !objB._gameObject.active) continue;

          // AABB check of the shapes
          if (objB.bounds.box.intersects(objA.bounds.box)) {

            // check SAT
            if (this.sat["test" + shapeA.getType() + shapeB.getType()].call(this, objA, objB, this.response.clear()) === true) {

              if (objA._gameObject['onCollision']) if (objA._gameObject.onCollision(objB._gameObject, this.response) !== false) {}

              if (objB._gameObject['onCollision']) if (objB._gameObject.onCollision(objA._gameObject, this.response) !== false) {}
            } else continue;
          } else continue;
        }
      }
    }
  }, {
    key: 'length',
    get: function get() {
      return this.colliadables.length;
    }
  }]);

  return Physics;
}();

exports.default = Physics;

/***/ }),

/***/ "./physics/xat/SAT.js":
/*!****************************!*\
  !*** ./physics/xat/SAT.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ../../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAT = function () {
    function SAT() {
        _classCallCheck(this, SAT);

        this.VECTORS = [];
        for (var v = 0; v < 10; v++) {
            VECTORS.push(new _Vector2.default());
        }

        this.ARRAYS = [];
        for (var a = 0; a < 5; a++) {
            ARRAYS.push([]);
        }
    }

    _createClass(SAT, [{
        key: 'flattenPointsOn',
        value: function flattenPointsOn(points, normal, result) {
            var min = Number.MAX_VALUE;
            var max = -Number.MAX_VALUE;
            var len = points.length;
            for (var i = 0; i < len; i++) {
                // The magnitude of the projection of the point onto the normal
                var dot = points[i].dot(normal);
                if (dot < min) {
                    min = dot;
                }
                if (dot > max) {
                    max = dot;
                }
            }
            result[0] = min;
            result[1] = max;
        }
    }, {
        key: 'isSeparatingAxis',
        value: function isSeparatingAxis(posA, posB, pointsA, pointsB, axis, response) {

            var rangeA = ARRAYS.pop();
            var rangeB = ARRAYS.pop();

            // magnitude between the two polygons
            var offsetV = VECTORS.pop().copy(posB).sub(posA);
            var projectedOffset = offsetV.dot(axis);

            // Project the polygons onto the axis.
            flattenPointsOn(pointsA, axis, rangeA);
            flattenPointsOn(pointsB, axis, rangeB);

            // Move B's range to its position relative to A.
            rangeB[0] += projectedOffset;
            rangeB[1] += projectedOffset;

            // Check if there is a gap. If there is, this is a separating axis and we can stop
            if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
                VECTORS.push(offsetV);
                ARRAYS.push(rangeA);
                ARRAYS.push(rangeB);
                return true;
            }

            if (response) {
                var overlap = 0;
                // A starts further left than B
                if (rangeA[0] < rangeB[0]) {

                    response.aInB = false;

                    // A ends before B does. We have to pull A out of B
                    if (rangeA[1] < rangeB[1]) {

                        overlap = rangeA[1] - rangeB[0];
                        response.bInA = false;

                        // B is fully inside A.  Pick the shortest way out.
                    } else {

                        var option1 = rangeA[1] - rangeB[0];
                        var option2 = rangeB[1] - rangeA[0];
                        overlap = option1 < option2 ? option1 : -option2;
                    }
                    // B starts further left than A
                } else {

                    response.bInA = false;

                    // B ends before A ends. We have to push A out of B
                    if (rangeA[1] > rangeB[1]) {

                        overlap = rangeA[0] - rangeB[1];
                        response.aInB = false;

                        // A is fully inside B.  Pick the shortest way out.
                    } else {

                        var option1 = rangeA[1] - rangeB[0];
                        var option2 = rangeB[1] - rangeA[0];
                        overlap = option1 < option2 ? option1 : -option2;
                    }
                }
                // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
                var absOverlap = Math.abs(overlap);

                if (absOverlap < response.overlap) {

                    response.overlap = absOverlap;
                    response.overlapN.copy(axis);

                    if (overlap < 0) response.overlapN.reverse();
                }
            }

            VECTORS.push(offsetV);
            ARRAYS.push(rangeA);
            ARRAYS.push(rangeB);

            return false;
        }
    }, {
        key: 'testPolygonPolygon',
        value: function testPolygonPolygon(a, b, response) {

            // collider a

            var pointsA = a.shape.getPoints();
            var normalsA = a.shape.getNormals();
            var normalsALen = normalsA.length;

            // collider b

            var pointsB = b.shape.getPoints();
            var normalsB = b.shape.getNormals();
            var normalsBLen = normalsB.length;

            // If any of the edge normals of A is a separating axis, no intersection.
            while (normalsALen--) {
                if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsA[normalsALen], response)) {
                    return false;
                }
            }

            // If any of the edge normals of B is a separating axis, no intersection.
            while (normalsBLen--) {
                if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsB[normalsBLen], response)) {
                    return false;
                }
            }

            // Since none of the edge normals of A or B are a separating axis, there is an intersection
            // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
            // final overlap vector.
            if (response) {
                response.a = a;
                response.b = b;
                response.overlapV.copy(response.overlapN).scale(response.overlap);
            }
            return true;
        }
    }]);

    return SAT;
}();

exports.default = SAT;

/***/ }),

/***/ "./physics/xat/SATResponse.js":
/*!************************************!*\
  !*** ./physics/xat/SATResponse.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SATResponse = function () {
    function SATResponse() {
        _classCallCheck(this, SATResponse);

        this.a = null;
        this.b = null;
        this.overlapN = new Vector();
        this.overlapV = new Vector();
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        this.indexShapeA = -1;
        this.indexShapeB = -1;
        this.clear();
    }

    _createClass(SATResponse, [{
        key: "clear",
        value: function clear() {
            this.aInB = true;
            this.bInA = true;
            this.overlap = Number.MAX_VALUE;
            this.indexShapeA = -1;
            this.indexShapeB = -1;
            return this;
        }
    }]);

    return SATResponse;
}();

exports.default = SATResponse;

/***/ }),

/***/ "./render/Define.js":
/*!**************************!*\
  !*** ./render/Define.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var RenderingType = exports.RenderingType = {
    NEAREST: 0,
    LINEAR: 1
};

/***/ }),

/***/ "./render/Render.js":
/*!**************************!*\
  !*** ./render/Render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _RenderLayer = __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js");

var _RenderLayer2 = _interopRequireDefault(_RenderLayer);

var _RenderLayersManagement = __webpack_require__(/*! ./RenderLayersManagement */ "./render/RenderLayersManagement.js");

var _RenderLayersManagement2 = _interopRequireDefault(_RenderLayersManagement);

var _Canvas = __webpack_require__(/*! ./canvas/Canvas */ "./render/canvas/Canvas.js");

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Define = __webpack_require__(/*! ./Define */ "./render/Define.js");

var _Smoothing = __webpack_require__(/*! ./canvas/Smoothing */ "./render/canvas/Smoothing.js");

var _Smoothing2 = _interopRequireDefault(_Smoothing);

var _DrawRenderLayer = __webpack_require__(/*! ./components/DrawRenderLayer */ "./render/components/DrawRenderLayer.js");

var _DrawRenderLayer2 = _interopRequireDefault(_DrawRenderLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
    function Render(game) {
        _classCallCheck(this, Render);

        this.game = game;
        this.layer = new _RenderLayersManagement2.default(this.game);
        this.canvas = _Canvas2.default.create(this.game.parent, this.game.width, this.game.height);
        this.context = this.canvas.getContext("2d", { alpha: false });
        this.imageRendering = game.config.pixelated ? _Define.RenderingType.NEAREST : _Define.RenderingType.LINEAR;
        this.smooth = new _Smoothing2.default(this.context);
        this.smooth.set(this.imageRendering);

        this._backgroundColor = '#000';
        this._alpha = 1;
        this._enable = true;
        this.clear = true;
        this.drawCalls = 0;
    }

    _createClass(Render, [{
        key: 'backgroundColor',
        get: function get() {
            return this._backgroundColor;
        },
        set: function set(value) {
            this._backgroundColor = value;
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {

            if (this._alpha !== value) {
                this.currentContext.globalAlpha = value;
                this._alpha = value;
            }

            return this._alpha;
        }
    }]);

    return Render;
}();

exports.default = Render;


_System2.default.register('Render', Render, 'render');

/***/ }),

/***/ "./render/RenderLayer.js":
/*!*******************************!*\
  !*** ./render/RenderLayer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayer = function () {
    function RenderLayer(game, layerName) {
        _classCallCheck(this, RenderLayer);

        this._name = layerName;
        this.game = game;
        this.renderList = new _List2.default(true);
        this.__drawCalls = 0;
        this.__enable = true;
        this.__isDirty = false;
    }

    _createClass(RenderLayer, [{
        key: 'add',


        // Add renderable components
        value: function add(renderer) {

            if (renderer === undefined) return;

            this.renderList.push(renderer);
            // this.renderer.__renderLayer = this;
            this.__isDirty = true;
        }
    }, {
        key: 'remove',
        value: function remove(renderer) {
            return this.renderList.remove(renderer);
        }
    }, {
        key: 'removeAt',
        value: function removeAt(index) {}
    }, {
        key: 'at',
        value: function at(index) {
            if (index < 0 || index >= this.__renderers.size) {
                throw new Error('RenderLayer.at: Renderer at ' + index + ' does not exist in the render layer list: \"' + name + "\".");
            }
            return this.renderList.at(index);
        }
    }, {
        key: 'sortDepth',
        value: function sortDepth(a, b) {
            // sort ascending

            return a._depthSorting - b._depthSorting;

            /*this.__renderers.sort(
                function(a, b) {
                        if (a.depth > b.depth) {
                          return 1;
                        } else if (a.depth < b.depth) {
                          return -1;
                        } else {
                          if (a.z > b.z) {
                    return 1;
                  } else {
                    return -1;
                  }
                  
                }
              });*/
        }
    }, {
        key: 'drawCalls',
        get: function get() {
            return this.__drawCalls;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.__renderers.length;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'enable',
        get: function get() {
            return this.__enable;
        },
        set: function set(value) {
            value = !!value;

            if (value !== this._enabled) {
                //if (!value)
                //    this.reset();

                this._enabled = value;
            }
        }
    }]);

    return RenderLayer;
}();

exports.default = RenderLayer;

/***/ }),

/***/ "./render/RenderLayersManagement.js":
/*!******************************************!*\
  !*** ./render/RenderLayersManagement.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _RenderLayer = __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js");

var _RenderLayer2 = _interopRequireDefault(_RenderLayer);

var _List = __webpack_require__(/*! ../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderLayersManagement = function () {
    function RenderLayersManagement(game) {
        _classCallCheck(this, RenderLayersManagement);

        this.game = game;
        this.renderLayers = new _List2.default();
        //this.__renderLayersMap = new DataMap();
        this.add('default');
    }

    _createClass(RenderLayersManagement, [{
        key: 'add',
        value: function add(name) {

            if (this.contains(name)) {
                throw new Error("Render.add: There is already a RenderLayer called: \"" + name + "\".");
            }

            //this.__renderLayersMap.set(name, this.__renderLayers.length);
            this.renderLayers.push(new _RenderLayer2.default(this.game, name));
        }
    }, {
        key: 'remove',
        value: function remove(name) {
            if (typeof name !== 'string') throw new Error("Render.remove: The value name is not a string.");

            if (name === "default") throw new Error("Render.remove: You can not remove the \"default\" layer.");

            if (!this.__renderLayersMap.has(name)) throw new Error("Render.remove: Could not remove layer. There is no layer named \"" + name + "\".");

            var index = this.__renderLayersMap.get(name);

            this.renderLayers.erase(name);
        }
    }, {
        key: 'contains',
        value: function contains(layerName) {
            if (typeof layerName !== 'string') throw new Error("Render.contains: The value name is not a string.");

            var val = this.renderLayers.each(function (layer) {

                if (layer.name == layerName) {
                    return true;
                }
            });

            return val || false;
        }
    }]);

    return RenderLayersManagement;
}();

exports.default = RenderLayersManagement;

/***/ }),

/***/ "./render/canvas/Canvas.js":
/*!*********************************!*\
  !*** ./render/canvas/Canvas.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create a Canvas object.
 * @class Canvas
 */
exports.default = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);
    }

    _createClass(Canvas, null, [{
        key: "create",
        value: function create(parent, width, height) {

            // default definition
            var defaultDef = {
                tabindex: '1',
                width: width,
                height: height,
                id: Math.random().toString(36).substr(2, 9),
                class: "",
                container: "body",
                style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
            };

            //var CO = Object.assign(defaultDef, options);
            var CO = defaultDef;
            var canvas = void 0;

            canvas = document.createElement('canvas');
            //canvas.parent = parent;
            canvas.setAttribute("id", CO.id);
            canvas.setAttribute("width", CO.width);
            canvas.setAttribute("height", CO.height);
            canvas.setAttribute("style", CO.style);
            //canvas.style.position = 'absolute';


            Canvas.appendDOM(canvas, parent);
            //document.body.appendChild(canvas);

            return canvas;
        }
    }, {
        key: "appendDOM",
        value: function appendDOM(canvas, parent) {

            var appendTo = void 0;
            var overflowHidden = true;
            var target = null;

            //if (overflowHidden === undefined) { overflowHidden = true; }

            if (parent) {
                if (typeof parent === 'string') {
                    // hopefully an element ID
                    target = document.getElementById(parent);
                } else if ((typeof parent === "undefined" ? "undefined" : _typeof(parent)) === 'object' && parent.nodeType === 1) {
                    // quick test for a HTMLelement
                    target = parent;
                }
            }

            // Fallback, covers an invalid ID and a non HTMLelement object
            if (!target) {
                target = document.body;
            }

            /*if (overflowHidden && target.style)
            {
                target.style.overflow = 'hidden';
            }*/

            target.appendChild(canvas);

            return canvas;
        }
    }]);

    return Canvas;
}();

/***/ }),

/***/ "./render/canvas/Smoothing.js":
/*!************************************!*\
  !*** ./render/canvas/Smoothing.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Define = __webpack_require__(/*! ../Define */ "./render/Define.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasSmoothing = function () {
    function CanvasSmoothing(context) {
        _classCallCheck(this, CanvasSmoothing);

        this.context = context;
        this.prefix = this.getPrefix(context);
    }

    _createClass(CanvasSmoothing, [{
        key: 'getPrefix',
        value: function getPrefix(context) {

            var vendors = ['i', 'webkitI', 'msI', 'mozI', 'oI'];
            for (var i = 0; i < vendors.length; i++) {
                var s = vendors[i] + 'mageSmoothingEnabled';

                if (s in context) return s;
            }

            return null;
        }
    }, {
        key: 'setEnable',
        value: function setEnable(flag) {

            if (flag === 'undefined') flag = true;

            if (this.prefix === '' || this.prefix === undefined) this.prefix = this.getPrefix(this.context);

            if (this.prefix) this.context[this.prefix] = flag;

            return this.context;
        }
    }, {
        key: 'set',
        value: function set(renderType) {
            if (renderType == _Define.RenderingType.NEAREST) this.setEnable(false);else this.setEnable(true);
        }
    }]);

    return CanvasSmoothing;
}();

exports.default = CanvasSmoothing;

/***/ }),

/***/ "./render/color/Color.js":
/*!*******************************!*\
  !*** ./render/color/Color.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _ParseColor = __webpack_require__(/*! ./components/ParseColor */ "./render/color/components/ParseColor.js");

var _ParseColor2 = _interopRequireDefault(_ParseColor);

var _Ease = __webpack_require__(/*! ../../math/easing/Ease */ "./math/easing/Ease.js");

var _Ease2 = _interopRequireDefault(_Ease);

var _EasingType = __webpack_require__(/*! ../../math/easing/EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

var _MakeImmutable = __webpack_require__(/*! ../../utils/object/MakeImmutable */ "./utils/object/MakeImmutable.js");

var _MakeImmutable2 = _interopRequireDefault(_MakeImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ColorNormUpdate(color) {
    color._css = 'rgba(' + _MathUtils2.default.floor(color.r * 255) + ',' + _MathUtils2.default.floor(color.g * 255) + ',' + _MathUtils2.default.floor(color.b * 255) + ',' + color.a + ')';
}

function ColorUpdate(color) {
    color._css = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
}

var Color = function () {
    function Color(r, g, b, a) {
        _classCallCheck(this, Color);

        this.r = r || 0;
        this.g = g || r || 0;
        this.b = b || r || 0;
        this.a = a || 1;
        this._css = null;

        ColorUpdate(this);
    }

    _createClass(Color, [{
        key: 'set',
        value: function set(r, g, b, a) {

            if (r === undefined) return this;

            this.r = r;
            this.b = b || r;
            this.g = g || r;

            if (a !== undefined) this.a = a;

            ColorUpdate(this);

            return this;
        }
    }, {
        key: 'setRGBA',
        value: function setRGBA(r, g, b, a) {
            if (r === undefined) return;

            this.r = Math.round(r / 255.0);
            this.g = Math.round(g / 255.0);
            this.b = Math.round(b / 255.0);

            if (a !== undefined) this.a = Math.round(a / 255.0);

            ColorUpdate(this);

            return this;
        }
    }, {
        key: 'setColor',
        value: function setColor(color) {
            this.r = color.r;
            this.g = color.g;
            this.b = color.b;
            this.a = color.a;
            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'parse',
        value: function parse(value) {
            var parsedValue = (0, _ParseColor2.default)(value);
            this.r = parsedValue.r;
            this.g = parsedValue.g;
            this.b = parsedValue.b;
            this.a = parsedValue.a;
            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'lerp',
        value: function lerp(toColor, t) {

            this.r = _MathUtils2.default.lerp(this.r, toColor.r);
            this.g = _MathUtils2.default.lerp(this.g, toColor.g);
            this.b = _MathUtils2.default.lerp(this.b, toColor.b);
            this.a = _MathUtils2.default.lerp(this.a, toColor.a);
            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'ease',
        value: function ease(to, t, easingType, easingMode, easingArg) {
            if (easingType === undefined) easingType = _EasingType2.default.LINEAR;
            if (easingMode === undefined) easingMode = 0;
            if (easingArg === undefined) easingArg = 1;

            var easer = _Ease2.default.in;

            switch (easingMode) {
                case 1:
                    {
                        easer = _Ease2.default.out;
                        break;
                    }
                case 2:
                    {
                        easer = _Ease2.default.inout;
                        break;
                    }
            }

            this.r = easer.by(easingType, this.r, to.r, t, easingArg);
            this.g = easer.by(easingType, this.g, to.g, t, easingArg);
            this.b = easer.by(easingType, this.b, to.b, t, easingArg);
            this.a = easer.by(easingType, this.a, to.a, t, easingArg);

            ColorUpdate(this);
            return this;
        }
    }, {
        key: 'to32',
        value: function to32() {
            /// TODO
        }
    }, {
        key: 'toCSS',
        value: function toCSS() {
            /// TODO
        }
    }, {
        key: 'toInt',
        value: function toInt() {
            /// TODO
        }
    }, {
        key: 'toHex',
        value: function toHex() {}
        /// TODO


        // static functions
        /*static red = new Color(255, 0, 0);
        static green = new Color(0, 255, 0);
        static blue = new Color(0, 0, 255);
        static cyan = new Color(0, 255, 255);
        static magenta = new Color(255, 0, 255);
        static yellow = new Color(255, 255, 0);
        static black = new Color(0);
        static white = new Color(255);
        static gray = new Color(255/2.0);
        static transparent = new Color(0, 0, 0, 0);*/

    }, {
        key: 'rgba',
        get: function get() {
            return this._css;
        }
    }, {
        key: 'alpha',
        set: function set(value) {
            this.a = value;
            ColorUpdate(this);
        }
    }]);

    return Color;
}();

Color.red = new Color(255, 0, 0);
Color.green = new Color(0, 255, 0);
Color.blue = new Color(0, 0, 255);
Color.cyan = new Color(0, 255, 255);
Color.magenta = new Color(255, 0, 255);
Color.yellow = new Color(255, 255, 0);
Color.black = new Color(0);
Color.white = new Color(255);
Color.gray = new Color(255 / 2.0);
Color.transparent = new Color(0, 0, 0, 0);

/*
MakeImmutable([
Color.red = new Color(255, 0, 0),
Color.green = new Color(0, 255, 0),
Color.blue = new Color(0, 0, 255),
Color.cyan = new Color(0, 255, 255),
Color.magenta = new Color(255, 0, 255),
Color.yellow = new Color(255, 255, 0),
Color.black = new Color(0),
Color.white = new Color(255),
Color.gray = new Color(255/2.0),
Color.transparent = new Color(0, 0, 0, 0),], true);*/

exports.default = Color;

/***/ }),

/***/ "./render/color/components/CSSToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/CSSToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CSSToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_REGEX_PATTERN = /^(?:\w*|rgba?)\(?\s*(\d+)\s*\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+)\s*)?\,?(?:\s*(\d+(?:\.\d+)?))?\s*\)?$/;

function CSSToColor(value) {

    var color = new _Color2.default();

    var regex = CSS_REGEX_PATTERN.exec(value.toLowerCase());

    if (regex) {
        var r = parseInt(regex[0], 10) || 0;
        var g = parseInt(regex[1], 10) || 0;
        var b = parseInt(regex[3], 10) || 0;
        var a = 1;

        if (regex[4] !== undefined) a = parseFloat(regex[4], 10) || 1;

        color.set(r, g, b, a);
    }

    return color;
}

/***/ }),

/***/ "./render/color/components/HexToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/HexToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HexToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEX_SHORTHAND_REGEX_PATTERN = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var HEX_REGEX_PATTERN = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function HexToColor(value) {

    var color = new _Color2.default();

    // Hexadecimal can contains alpha in short '#f00e' or full '#F00eaecd'
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    hex = hex.replace(HEX_SHORTHAND_REGEX_PATTERN, function (m, r, g, b, a) {

        if (a !== undefined) a = 'F';

        return r + r + g + g + b + b + a + a;
    });

    var result = HEX_REGEX_PATTERN.exec(hex);

    if (result) {
        color.set(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), result[4] === undefined ? 255 : parseInt(result[4], 16));
    }

    return color;
}

/***/ }),

/***/ "./render/color/components/IntToColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/IntToColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = IntToColor;

var _Color = __webpack_require__(/*! ../Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntToColor(value) {

    var color = new _Color2.default();
    var r = void 0,
        g = void 0,
        b = void 0,
        a = void 0;

    if (value >= 16777216) // 256 ^ 3
        a = color >>> 24;else a = 1;

    r = color >> 16 & 0xFF;
    g = color >> 8 & 0xFF;
    b = color & 0xFF;

    color.set(r, g, b, a);

    return color;
}

/***/ }),

/***/ "./render/color/components/ObjectToColor.js":
/*!**************************************************!*\
  !*** ./render/color/components/ObjectToColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ObjectToColor;
function ObjectToColor(value) {

    return new Color(value.r, value.g, value.b, value.a);
}

/***/ }),

/***/ "./render/color/components/ParseColor.js":
/*!***********************************************!*\
  !*** ./render/color/components/ParseColor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = ParseColor;

var _IntToColor = __webpack_require__(/*! ./IntToColor */ "./render/color/components/IntToColor.js");

var _IntToColor2 = _interopRequireDefault(_IntToColor);

var _CSSToColor = __webpack_require__(/*! ./CSSToColor */ "./render/color/components/CSSToColor.js");

var _CSSToColor2 = _interopRequireDefault(_CSSToColor);

var _HexToColor = __webpack_require__(/*! ./HexToColor */ "./render/color/components/HexToColor.js");

var _HexToColor2 = _interopRequireDefault(_HexToColor);

var _ObjectToColor = __webpack_require__(/*! ./ObjectToColor */ "./render/color/components/ObjectToColor.js");

var _ObjectToColor2 = _interopRequireDefault(_ObjectToColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseColor(value) {

  var type = typeof value === "undefined" ? "undefined" : _typeof(value);

  if (type === 'number') {

    return (0, _IntToColor2.default)(value);
  } else if (type === 'string') {

    if (value.substr(0, 3).toLowerCase() === 'rgb') {
      return (0, _CSSToColor2.default)(value);
    } else {
      return (0, _HexToColor2.default)(value);
    }
  } else if (type === 'object') {

    return (0, _ObjectToColor2.default)(value);
  }
}

/***/ }),

/***/ "./render/components/BeginDrawRender.js":
/*!**********************************************!*\
  !*** ./render/components/BeginDrawRender.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BeginDrawRender;
function BeginDrawRender(render) {

    if (render.clear) {
        render.context.clearRect(0, 0, render.canvas.width, render.canvas.height);
    }

    render.context.fillStyle = render._backgroundColor;
    render.context.fillRect(0, 0, render.canvas.width, render.canvas.height);

    render.drawCalls = 0;
}

/***/ }),

/***/ "./render/components/DrawRender.js":
/*!*****************************************!*\
  !*** ./render/components/DrawRender.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawRender;

var _DrawRenderLayer = __webpack_require__(/*! ./DrawRenderLayer */ "./render/components/DrawRenderLayer.js");

var _DrawRenderLayer2 = _interopRequireDefault(_DrawRenderLayer);

var _RenderScene = __webpack_require__(/*! ../../scene/components/RenderScene */ "./scene/components/RenderScene.js");

var _RenderScene2 = _interopRequireDefault(_RenderScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawRender(render, camera, delta) {

    if (!render._enable) return;

    /* let clip = (camera.x !== 0 ||
          camera.y !== 0 ||
          camera.width !== render.context.canvas.width ||
          camera.height !== render.context.canvas.height);*/

    // alpha
    if (render._alpha !== 1) {
        render.context.globalAlpha = 1;
        render._alpha = 1;
    }

    // blend
    render.context.globalCompositeOperation = 'source-over';

    if (render.game.scene._setup === true) {

        for (var i = 0; i < render.layer.renderLayers.length; i++) {
            var layer = render.layer.renderLayers.at(i);

            if (!layer.enable) continue;

            var drawCalls = 0;
            drawCalls += (0, _DrawRenderLayer2.default)(layer, camera, render.context);

            render.drawCalls += drawCalls;
        }

        //camera.game.system.draw.bounds(camera.bounds);
    }
}

/***/ }),

/***/ "./render/components/DrawRenderLayer.js":
/*!**********************************************!*\
  !*** ./render/components/DrawRenderLayer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = DrawRenderLayer;
function DrawRenderLayer(layer, camera, context) {

        if (!layer.__enable) return 0;

        var drawCalls = 0;

        if (layer.__isDirty) {
                layer.renderList.sort(layer.sortDepth);

                layer.__isDirty = false;
        }

        var self = this;
        var size = layer.renderList.size;

        for (var i = 0; i < size; i++) {
                var element = layer.renderList.at(i);

                if (camera.bounds.intersects(element.bounds)) {
                        drawCalls += element.render(context);

                        //camera.game.system.draw.bounds(element.bounds);
                }
        }

        return drawCalls;
}

/***/ }),

/***/ "./render/components/EndDrawRender.js":
/*!********************************************!*\
  !*** ./render/components/EndDrawRender.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = EndDrawRender;
function EndDrawRender(render) {

    render.context.globalAlpha = 1;
    render.context.globalCompositeOperation = 'source-over';
}

/***/ }),

/***/ "./render/index.js":
/*!*************************!*\
  !*** ./render/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    RenderLayer: __webpack_require__(/*! ./RenderLayer */ "./render/RenderLayer.js"),
    RenderLayerManagement: __webpack_require__(/*! ./RenderLayersManagement */ "./render/RenderLayersManagement.js"),
    Render: __webpack_require__(/*! ./Render */ "./render/Render.js"),
    UI: __webpack_require__(/*! ./ui/UI */ "./render/ui/UI.js"),
    Transition: __webpack_require__(/*! ./transition/Transition */ "./render/transition/Transition.js")
};

/***/ }),

/***/ "./render/transition/DrawTransition.js":
/*!*********************************************!*\
  !*** ./render/transition/DrawTransition.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawTransition;

var _TransitionStyle = __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js");

var _TransitionStyle2 = _interopRequireDefault(_TransitionStyle);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawTransition(transition, canvas, context) {

    if (transition._state === _TransitionState2.default.IDLE) return;

    var settings = transition.settings;

    switch (settings.style) {
        case _TransitionStyle2.default.NONE:
            return;
        case _TransitionStyle2.default.FILL:
            {

                //let color = transition._color.rgba;
                context.fillStyle = transition._color.rgba;
                context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

                break;
            }
    }
}

/***/ }),

/***/ "./render/transition/Transition.js":
/*!*****************************************!*\
  !*** ./render/transition/Transition.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TransitionSettings = __webpack_require__(/*! ./TransitionSettings */ "./render/transition/TransitionSettings.js");

var _TransitionSettings2 = _interopRequireDefault(_TransitionSettings);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

var _Color = __webpack_require__(/*! ../color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _TranstionBehavior = __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = function () {
    function Transition(game) {
        _classCallCheck(this, Transition);

        this.game = game;

        this.settings = new _TransitionSettings2.default(this);
        this._behaviour = _TranstionBehavior2.default.NONE;
        this._state = _TransitionState2.default.IDLE;
        this._alpha = 0;
        this._color = new _Color2.default();
        this._toColor = undefined;
        this._t = 0;
    }

    _createClass(Transition, [{
        key: "in",
        value: function _in() {

            var old = this._behaviour;

            if (old === _TransitionState2.default.IDLE || old === _TransitionState2.default.WAIT) {}

            this._alpha = 0;
            this._t = 0;
            this._color.alpha = 0;
            this.settings.inColor.a = 1;
            //this._toColor = this.settings.inColor;
            this._behaviour = _TranstionBehavior2.default.IN;
            this._state = _TransitionState2.default.IN;
        }
    }, {
        key: "out",
        value: function out() {}
    }, {
        key: "inout",
        value: function inout() {}
    }]);

    return Transition;
}();

exports.default = Transition;


_System2.default.register('Transition', Transition, 'transition');

/***/ }),

/***/ "./render/transition/TransitionSettings.js":
/*!*************************************************!*\
  !*** ./render/transition/TransitionSettings.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(/*! ../color/Color */ "./render/color/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _EasingType = __webpack_require__(/*! ../../math/easing/EasingType */ "./math/easing/EasingType.js");

var _EasingType2 = _interopRequireDefault(_EasingType);

var _TransitionStyle = __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js");

var _TransitionStyle2 = _interopRequireDefault(_TransitionStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransitionSettings = function () {
    function TransitionSettings(parent) {
        _classCallCheck(this, TransitionSettings);

        this.transition = parent;

        this.fromAlpha = 0;
        this.toAlpha = 0;

        this.inColor = _Color2.default.black;
        this.outColor = _Color2.default.black;

        this.inDuration = 1;
        this.outDuration = 0.5;

        this.pauseDuration = 0;
        this.style = _TransitionStyle2.default.FILL;

        this.timingInMethod = _EasingType2.default.LINEAR;
        this.timingOutMethod = _EasingType2.default.LINEAR;
        this.timingInArgument = 3; // step
        this.timingOutArgument = 3;
    }

    _createClass(TransitionSettings, [{
        key: "setInColor",
        value: function setInColor(color) {
            this.fromColor.parse(color);
            return this;
        }
    }, {
        key: "setOutColor",
        value: function setOutColor(color) {
            this.outColor.parse(color);
            return this;
        }
    }, {
        key: "setDuration",
        value: function setDuration(duration) {
            this.setInDuration(duration);
            this.setOutDuration(duration);
            return this;
        }
    }, {
        key: "setInDuration",
        value: function setInDuration(duration) {
            this.inDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setOutDuration",
        value: function setOutDuration(duration) {
            this.outDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setPauseDuration",
        value: function setPauseDuration(duration) {
            this.pauseDuration = Math.abs(duration);
            return this;
        }
    }, {
        key: "setTiming",
        value: function setTiming(easingType, parameter) {
            this.setInTiming(easingType, parameter);
            this.setOutTiming(easingType, parameter);
            return this;
        }
    }, {
        key: "setInTiming",
        value: function setInTiming(easingType, parameter) {
            this.timingInMethod = easingType;
            this.timingInArgument = parameter || 1;
            return this;
        }
    }, {
        key: "setOutTiming",
        value: function setOutTiming(easingType, parameter) {
            this.timingOutMethod = easingType;
            this.timingOutArgument = parameter || 1;
            return this;
        }
    }]);

    return TransitionSettings;
}();

exports.default = TransitionSettings;

/***/ }),

/***/ "./render/transition/TransitionState.js":
/*!**********************************************!*\
  !*** ./render/transition/TransitionState.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var TransitionState = {
    IDLE: -1,
    IN: 0,
    OUT: 1,
    WAIT: 2
};

Object.freeze(TransitionState);

exports.default = TransitionState;

/***/ }),

/***/ "./render/transition/TransitionStyle.js":
/*!**********************************************!*\
  !*** ./render/transition/TransitionStyle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var TranstionStyle = {
    NONE: 0,
    FILL: 1
};

Object.freeze(TranstionStyle);

exports.default = TranstionStyle;

/***/ }),

/***/ "./render/transition/TranstionBehavior.js":
/*!************************************************!*\
  !*** ./render/transition/TranstionBehavior.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var TransitionBehavior = {
    NONE: -1,
    IN: 0,
    OUT: 1,
    INOUT: 2
};

Object.freeze(TransitionBehavior);

exports.default = TransitionBehavior;

/***/ }),

/***/ "./render/transition/UpdateTransition.js":
/*!***********************************************!*\
  !*** ./render/transition/UpdateTransition.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransition;

var _TranstionBehavior = __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js");

var _TranstionBehavior2 = _interopRequireDefault(_TranstionBehavior);

var _TransitionState = __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js");

var _TransitionState2 = _interopRequireDefault(_TransitionState);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Ease = __webpack_require__(/*! ../../math/easing/Ease */ "./math/easing/Ease.js");

var _Ease2 = _interopRequireDefault(_Ease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransition(transition, deltaTime) {

    if (transition._behaviour === _TranstionBehavior2.default.NONE) return;

    var setg = transition.settings;
    var changeState = void 0;

    // UPDATE STATE
    switch (transition._state) {

        case _TransitionState2.default.IN:
            {
                transition._t += deltaTime / setg.inDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }

                // ease(to, t, easingType, easingMode, easingArg)
                transition._color.ease(setg.outColor, transition._t, setg.timingInMethod, 0, setg.timingInArgument);

                console.log(transition._color.rgba);
                break;
            }

        case _TransitionState2.default.WAIT:
            {
                transition._t += deltaTime / setg.pauseDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }
                break;
            }

        case _TransitionState2.default.OUT:
            {
                transition._t += deltaTime / setg.outDuration;

                if (transition._t >= 1) {
                    transition._t = 1;
                    changeState = true;
                }

                transition._color.alpha = _Ease2.default.out.by(setg.timingOutMethod, setg.outColor.a, 0, transition._t, setg.timingOutArgument);
                break;
            }
    }

    if (changeState === undefined) return;

    transition._t = 0;

    /// CHANGE TRANSITION STATE

    switch (transition._behaviour) {
        case _TranstionBehavior2.default.IN:
        case _TranstionBehavior2.default.OUT:
            // just fade in or out
            {
                transition._behaviour = _TranstionBehavior2.default.NONE;
                transition._state = _TransitionState2.default.IDLE;
                break;
            }
        case _TranstionBehavior2.default.INOUT:
            // fade in and out
            {
                if (transition._state === _TransitionState2.default.IN) {
                    // end fade in
                    transition._color.setColor(setg.outColor);
                    if (setg.pauseDuration > 0) {
                        transition._state = _TransitionState2.default.WAIT;
                    } else {
                        transition._state = _TransitionState2.default.OUT;
                    }
                } else if (transition._state === _TransitionState2.default.WAIT) {
                    // end pause beteween
                    transition._state = _TransitionState2.default.OUT;
                } else if (transition._state === _TransitionState2.default.OUT) {
                    // end fade out
                    transition._state = _TransitionState2.default.IDLE;
                    transition._behaviour = _TranstionBehavior2.default.NONE;
                }
            }
    }
}

/***/ }),

/***/ "./render/transition/index.js":
/*!************************************!*\
  !*** ./render/transition/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    State: __webpack_require__(/*! ./TransitionState */ "./render/transition/TransitionState.js"),
    Style: __webpack_require__(/*! ./TransitionStyle */ "./render/transition/TransitionStyle.js"),
    Behavior: __webpack_require__(/*! ./TranstionBehavior */ "./render/transition/TranstionBehavior.js")
};

/***/ }),

/***/ "./render/ui/AspectRatio.js":
/*!**********************************!*\
  !*** ./render/ui/AspectRatio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var AspectRatio = {
    Square: 0,
    Pillarbox: 1,
    Letterbox: 2,

    computeViewPort: function computeViewPort(currentAspectRatio, desiredAspect) {

        var ratioBox = {
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            style: 0
        };

        // If the current aspect ratio is already approximately equal to the desired aspect ratio,
        // use a full-screen Rect (in case it was set to something else previously)
        if (Math.round(currentAspectRatio * 100) / 100 == Math.round(desiredAspect * 100) / 100) {
            return ratioBox;
        }

        // Pillarbox
        if (currentAspectRatio > desiredAspect) {
            var inset = 1.0 - desiredAspect / currentAspectRatio;
            ratioBox.x = inset / 2;
            ratioBox.y = 0;
            ratioBox.w = 1.0 - inset;
            ratioBox.h = 1.0;
            ratioBox.style = AspectRatio.Pillarbox;
        } else // Letterbox
            {
                var _inset = 1.0 - currentAspectRatio / desiredAspect;

                ratioBox.x = 0;
                ratioBox.y = _inset / 2;
                ratioBox.w = 1.0;
                ratioBox.h = 1.0 - _inset;
                ratioBox.style = AspectRatio.Letterbox;
            }

        return ratioBox;
    }
};

exports.default = AspectRatio;

/***/ }),

/***/ "./render/ui/Debug.js":
/*!****************************!*\
  !*** ./render/ui/Debug.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debug = function () {
  function Debug(game) {
    _classCallCheck(this, Debug);

    this.game = game;
    this.draw = game.system.draw;
    this.context = game.system.render.context;
    this.x = 8;
    this.y = 12;
    this.lineHeight = 14;
    this.column = 100;
    this.font = "10px Verdana";
    this.textColor = 'white';
    this.bgcolor = 'black';
    this.textShadow = 'black';
  }

  _createClass(Debug, [{
    key: 'test',
    value: function test() {

      //this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.strokeStyle = this.bgcolor;
      this.context.font = this.font;
      this.draw.alpha(0.5);
      this.draw.rect(0, 0, this.game.width, 14 * 4 + 16, this.bgcolor);
      this.draw.alpha(1);
      this.drawLine("FPS: " + Math.round(this.game.time.fps) + " / " + this.game.time.desiredFps);
      //this.drawLine("Instances in view: " + this.game.camera.instancesInView);
      this.drawLine("Instances: " + this.game.system.entityList.length);
      this.drawLine("Draw Calls: " + this.game.system.render.drawCalls); /*this.game.physics.length);*/
      this.x += this.game.width / 2;
      this.y = 12 + 8;
      //this.drawLine("Sounds count " + this.game.sound.length);
      this.x = 8;
      this.y = 12 + 8;
    }
  }, {
    key: 'drawLine',
    value: function drawLine(textLine) {

      var xx = this.x;

      this.context.fillStyle = this.textShadow;
      this.context.fillText(textLine, xx + 1, this.y + 1);
      this.context.fillStyle = this.textColor;

      this.context.fillText(textLine, xx, this.y);

      this.y += this.lineHeight;
    }
  }]);

  return Debug;
}();

exports.default = Debug;

/***/ }),

/***/ "./render/ui/DrawUI.js":
/*!*****************************!*\
  !*** ./render/ui/DrawUI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DrawUI;

var _UpdateUIMatrix = __webpack_require__(/*! ./UpdateUIMatrix */ "./render/ui/UpdateUIMatrix.js");

var _UpdateUIMatrix2 = _interopRequireDefault(_UpdateUIMatrix);

var _RenderScene = __webpack_require__(/*! ../../scene/components/RenderScene */ "./scene/components/RenderScene.js");

var _RenderScene2 = _interopRequireDefault(_RenderScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DrawUI(gui, sceneManager) {

    (0, _UpdateUIMatrix2.default)(gui);

    // blend
    //gui.context.globalCompositeOperation = 'source-over';

    var clip = gui.viewport.x !== 0 || gui.viewport.x !== 0 || gui.viewport.width !== gui.canvas.clientWidth || gui.viewport.height !== gui.canvas.clientHeight;

    if (clip) {

        gui.context.save();
        gui.context.beginPath();
        gui.context.rect(0, 0, gui.viewport.width, gui.viewport.height);
        gui.context.clip();
    }

    gui.context.setTransform(gui.matrix.a[0], gui.matrix.a[1], gui.matrix.a[3], gui.matrix.a[4], gui.matrix.a[6], gui.matrix.a[7]);

    if (gui.backgroundAlpha > 0) {
        gui.context.globalAlpha = gui.backgroundAlpha;
        gui.context.fillStyle = gui.backgroundColor;
        gui.context.fillRect(0, 0, gui.width, gui.height);
    }

    // alpha
    if (gui._alpha !== 1) {
        gui.context.globalAlpha = 1;
        gui._alpha = 1;
    }

    (0, _RenderScene2.default)(sceneManager, gui.draw);

    if (clip) gui.context.restore();
}

/***/ }),

/***/ "./render/ui/InitializeUI.js":
/*!***********************************!*\
  !*** ./render/ui/InitializeUI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InitializeUI;
function InitializeUI() {
    this.canvas = this.game.system.render.canvas;
    this.context = this.game.system.render.context;
    this.draw.init();

    if (this.game.config.debug) this.debug = new Debug(this.game);
}

/***/ }),

/***/ "./render/ui/UI.js":
/*!*************************!*\
  !*** ./render/ui/UI.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Rect = __webpack_require__(/*! ../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

var _AspectRatio = __webpack_require__(/*! ./AspectRatio */ "./render/ui/AspectRatio.js");

var _AspectRatio2 = _interopRequireDefault(_AspectRatio);

var _Matrix = __webpack_require__(/*! ../../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _UIResize = __webpack_require__(/*! ./UIResize */ "./render/ui/UIResize.js");

var _UIResize2 = _interopRequireDefault(_UIResize);

var _Debug = __webpack_require__(/*! ./Debug */ "./render/ui/Debug.js");

var _Debug2 = _interopRequireDefault(_Debug);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _UIDrawer = __webpack_require__(/*! ./UIDrawer */ "./render/ui/UIDrawer.js");

var _UIDrawer2 = _interopRequireDefault(_UIDrawer);

var _InitializeUI = __webpack_require__(/*! ./InitializeUI */ "./render/ui/InitializeUI.js");

var _InitializeUI2 = _interopRequireDefault(_InitializeUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
    function UI(game) {
        _classCallCheck(this, UI);

        this.game = game;
        this.canvas = null;
        this.width = this.game.width;
        this.height = this.game.height;
        this.viewport = new _Rect2.default(0, 0, this.width, this.height);
        this.ratiobox = null;
        this.aspectRatio = this.width / this.height;
        this.pixelUnit = { x: 1, y: 1 };
        this._isDirty = true;
        this.matrix = new _Matrix2.default(1);
        this.context = null;
        this._alpha = 1;
        this.backgroundColor = '#000';
        this.backgroundAlpha = 0;
        this.debug = null;
        this.draw = new _UIDrawer2.default(game, this);
    }

    _createClass(UI, [{
        key: 'setSize',
        value: function setSize(width, height) {
            (0, _UIResize2.default)(this, width, height);
            return this;
        }
    }, {
        key: 'setViewport',
        value: function setViewport(x0, y0, x1, y1) {
            this.viewport.x = x0;
            this.viewport.y = y0;
            this.viewport.width = x1;
            this.viewport.height = y1;
            this._isDirty = true;
            return this;
        }
    }, {
        key: 'setViewportByAspectRatio',
        value: function setViewportByAspectRatio(aspectRatio) {

            // TODO: IMPROVE THAT

            this.ratiobox = _AspectRatio2.default.computeViewPort(this.game.system.render.canvas.clientWidth / this.game.system.render.canvas.clientHeight, aspectRatio);
            var borderX = 0;
            var borderY = 0; //rect.y * this.canvas.clientHeight;

            if (this.ratiobox.style === _AspectRatio2.default.Square) {
                this.viewport.set(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

                return this;
            } else {

                if (this.ratiobox.style === _AspectRatio2.default.Pillarbox) borderX = this.ratiobox.x * this.width; //this.canvas.clientWidth;
                else if (this.ratiobox.style === _AspectRatio2.default.Letterbox) borderY = this.ratiobox.y * this.height; //this.canvas.clientHeight;

                this.viewport.set(borderX, borderY, this.width * (this.canvas.clientWidth / this.width) - borderX * 2, this.height * (this.canvas.clientHeight / this.height) - borderY * 2);
            }

            var canvasRatioX = this.canvas.clientWidth * (this.ratiobox.x * 2);
            var canvasRatioY = this.canvas.clientHeight * (this.ratiobox.y * 2);
            var areaRatio = (this.canvas.clientWidth - canvasRatioX) / this.canvas.clientHeight;
            var orthoSize = this.height / 2;
            var pixelUnit = this.canvas.clientHeight / (orthoSize * 2) * areaRatio;

            this.pixelUnit.x = pixelUnit; //(this.canvas.clientWidth - canvasRatioX) / this.width;
            this.pixelUnit.y = pixelUnit; //(this.canvas.clientHeight - canvasRatioY) / this.height;

            this._isDirty = true;
            return this;
        }
    }, {
        key: 'setSizeByCanvas',
        value: function setSizeByCanvas() {
            (0, _UIResize2.default)(this, this.game.system.render.canvas.width, this.game.system.render.canvas.height);
            return this;
        }
    }, {
        key: 'setSizeByCamera',
        value: function setSizeByCamera() {
            (0, _UIResize2.default)(this, this.game.system.camera.width, this.game.system.camera.height);
            return this;
        }
    }, {
        key: 'setSizeByAspectRatio',
        value: function setSizeByAspectRatio(aspectRatio) {
            (0, _UIResize2.default)(this, this.game.system.render.canvas.width * aspectRatio, this.game.system.render.canvas.height * aspectRatio);
            return this;
        }
    }, {
        key: 'alpha',
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = value;
        }
    }]);

    return UI;
}();

exports.default = UI;


_System2.default.register('UserInterface', UI, 'ui', _InitializeUI2.default);

/***/ }),

/***/ "./render/ui/UIDrawer.js":
/*!*******************************!*\
  !*** ./render/ui/UIDrawer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import GameSystemManager from "../core/GameSystemManager";


var _Validate = __webpack_require__(/*! ../../utils/Validate */ "./utils/Validate.js");

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIDrawer = function () {
  function UIDrawer(game, ui) {
    _classCallCheck(this, UIDrawer);

    this.game = game;
    this.cache = null;
    this.context = null;
    this.ui = ui;
    this.lastAlpha = 1;
    this.lastColor = '#000';
    this.currentColor = '#FFF';
    this.currentTextAlign = 'center';
  }

  _createClass(UIDrawer, [{
    key: 'init',
    value: function init() {

      this.cache = this.game.system.cache;
      this.context = this.game.system.render.context;

      return this;
    }
  }, {
    key: 'transformPosition',
    value: function transformPosition(x, y, w, h) {
      return {
        x: x - this.ui.viewport.x,
        y: y - this.ui.viewport.y,
        w: w - this.ui.viewport.x || 0,
        h: h - this.ui.viewport.y || 0
      };
    }
  }, {
    key: 'font',
    value: function font(fontname, size, style) {

      if (_Validate2.default.isNumber(size)) size = size.toString() + 'px';

      if (style === undefined) style = "normal";

      this.context.font = style + " " + size + " \'" + fontname + "\'";
    }
  }, {
    key: 'text',
    value: function text(_text, x, y, color, align) {

      if (color === undefined) color = this.currentColor;
      if (align === undefined) align = this.currentTextAlign;

      var pos = this.transformPosition(x, y);
      this.context.fillStyle = color;
      this.context.textAlign = align;
      this.context.fillText(_text, pos.x, pos.y);
    }
  }, {
    key: 'image',
    value: function image(source, x, y) {

      if (source === undefined || source === null) return;

      //this.context.save();

      //this.context.translate(x, y);

      var pos = this.transformPosition(x, y);

      this.context.drawImage(source, 0, 0, source.width, source.height, pos.x, pos.y, source.width, source.height);
      //this.context.restore();
    }
  }, {
    key: 'sprite',
    value: function sprite(tag, x, y, anchor) {

      var img = this.cache.getAsset('images', tag);

      if (img != null) {

        if (anchor === undefined) {
          anchor[0] = 0;
          anchor[1] = 0;
        }

        var ctx = this.context;

        ctx.save();

        ctx.translate(x - img.width * anchor[0], y - img.height * anchor[1]);

        ctx.drawImage(img, 0, 0, img.width, img.height);

        ctx.restore();
      }
    }
  }, {
    key: 'spriteTransformed',
    value: function spriteTransformed(tag, x, y, xscale, yscale, angle) {}
  }, {
    key: 'rect',
    value: function rect(x, y, width, height, color) {

      this.context.fillStyle = color || this.currentColor;
      var pos = this.transformPosition(x, y, width, height);
      this.context.fillRect(pos.x, pos.y, pos.w, pos.h);
    }
  }, {
    key: 'outlineRect',
    value: function outlineRect(x, y, width, height, outlineWidth, color) {

      color = color || this.currentColor;
      this.context.lineWidth = outlineWidth || 1;
      var pos = this.transformPosition(x, y, width, height);
      //this.context.setLineDash([6]);
      this.context.strokeStyle = color;
      this.context.strokeRect(pos.x, pos.y, pos.w, pos.h);
      //this.context.rect(x,y,width,height);
      //this.context.stroke();
    }
  }, {
    key: 'color',
    value: function color(_color) {

      this.context.fillStyle = _color;
    }
  }, {
    key: 'bounds',
    value: function bounds(bb, color) {

      if (color === undefined) color = 'red';
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.outlineRectangle(bb.min.x, bb.min.y, bb.max.x - bb.min.x, bb.max.y - bb.min.y, color, 1);
    }
  }, {
    key: 'color',
    set: function set(value) {
      this.lastColor = this.context.fillStyle;
      this.context.fillStyle = value;
      this.currentColor = this.context.fillStyle;
    }
  }, {
    key: 'alpha',
    set: function set(value) {
      this.lastAlpha = this.context.globalAlpha;
      this.context.globalAlpha = value;
    }
  }, {
    key: 'align',
    set: function set(value) {
      this.context.textAlign = value;
      this.currentTextAlign = this.context.textAlign;
    }
  }]);

  return UIDrawer;
}();

//GameSystemManager.register('UIDrawer',UIDraw,'draw');


exports.default = UIDrawer;

/***/ }),

/***/ "./render/ui/UIResize.js":
/*!*******************************!*\
  !*** ./render/ui/UIResize.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UIResize;
function UIResize(gui, w, h) {
    gui.width = w;
    gui.height = h;
    gui.aspectRatio = w / h;
    gui.pixelUnit.x = gui.canvas.width / w;
    gui.pixelUnit.y = gui.canvas.height / h;
    gui._isDirty = true;
}

/***/ }),

/***/ "./render/ui/UpdateUIMatrix.js":
/*!*************************************!*\
  !*** ./render/ui/UpdateUIMatrix.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateUIMatrix;
function UpdateUIMatrix(gui) {

    if (!gui._isDirty) return;

    gui.matrix.setIdentity().scale(gui.pixelUnit.x, gui.pixelUnit.y).translate(gui.viewport.x, gui.viewport.y);

    gui._isDirty = false;

    console.log(gui.matrix);
}

/***/ }),

/***/ "./resources/ImageResource.js":
/*!************************************!*\
  !*** ./resources/ImageResource.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _Resource2 = __webpack_require__(/*! ./Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Image that holds image data.
* @class Image
* @constructor
*/
var ImageResource = function (_Resource) {
      _inherits(ImageResource, _Resource);

      function ImageResource(name, data) {
            _classCallCheck(this, ImageResource);

            var _this = _possibleConstructorReturn(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).call(this, name));

            _this.data = data;
            _this.width = 0;
            _this.height = 0;
            _this.imageUrl = null;
            _this.type = _ResourceType2.default.Image;

            if ((_this.data.complete || _this.data.getContext) && _this.data.width && _this.data.height) {

                  _this.width = _this.data.naturalWidth || _this.data.width;
                  _this.height = _this.data.naturalHeight || _this.data.height;
            }
            return _this;
      }

      return ImageResource;
}(_Resource3.default);

exports.default = ImageResource;

/***/ }),

/***/ "./resources/Resource.js":
/*!*******************************!*\
  !*** ./resources/Resource.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ResourceType = __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource(name, data) {
    _classCallCheck(this, Resource);

    //this.data = data || undefined;
    this.name = name || 'Resource';
    this.type = _ResourceType2.default.None;
};

exports.default = Resource;

/***/ }),

/***/ "./resources/ResourceType.js":
/*!***********************************!*\
  !*** ./resources/ResourceType.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var ResourceType = {
    None: -1,
    Image: 0,
    Tilemap: 1
};

exports.default = ResourceType;

/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    ResourceType: __webpack_require__(/*! ./ResourceType */ "./resources/ResourceType.js"),
    ImageResource: __webpack_require__(/*! ./ImageResource */ "./resources/ImageResource.js"),
    TilemapResource: __webpack_require__(/*! ./tilemap/TilemapResource */ "./resources/tilemap/TilemapResource.js")
};

/***/ }),

/***/ "./resources/tilemap/TilemapResource.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/TilemapResource.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Resource2 = __webpack_require__(/*! ../Resource */ "./resources/Resource.js");

var _Resource3 = _interopRequireDefault(_Resource2);

var _TilemapMetadata = __webpack_require__(/*! ./data/TilemapMetadata */ "./resources/tilemap/data/TilemapMetadata.js");

var _TilemapMetadata2 = _interopRequireDefault(_TilemapMetadata);

var _ParseTileset = __webpack_require__(/*! ./parser/ParseTileset */ "./resources/tilemap/parser/ParseTileset.js");

var _ParseTileset2 = _interopRequireDefault(_ParseTileset);

var _ParseLayers = __webpack_require__(/*! ./parser/ParseLayers */ "./resources/tilemap/parser/ParseLayers.js");

var _ParseLayers2 = _interopRequireDefault(_ParseLayers);

var _ResourceType = __webpack_require__(/*! ../ResourceType */ "./resources/ResourceType.js");

var _ResourceType2 = _interopRequireDefault(_ResourceType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TilemapResource = function (_Resource) {
    _inherits(TilemapResource, _Resource);

    function TilemapResource(name, source, cache) {
        _classCallCheck(this, TilemapResource);

        var _this = _possibleConstructorReturn(this, (TilemapResource.__proto__ || Object.getPrototypeOf(TilemapResource)).call(this, name));

        _this.metaData = new _TilemapMetadata2.default({
            name: source.name,
            width: source.width,
            height: source.height,
            tileWidth: source.tilewidth,
            tileHeight: source.tileheight,
            orietation: source.orietation
        });

        _this.name = name;
        _this.tilesets = (0, _ParseTileset2.default)(source, cache);
        _this.layers = (0, _ParseLayers2.default)(source, _this);
        _this.type = _ResourceType2.default.Tilemap;

        return _this;
    }

    _createClass(TilemapResource, [{
        key: "getTilesetByGID",
        value: function getTilesetByGID(gid) {

            return this.tilesets.each(function (set) {
                if (set.hasGID(gid)) {
                    return set;
                }
            }) || null;
        }
    }, {
        key: "getTileGID",
        value: function getTileGID(gid) {
            return this.tilesets.each(function (set) {

                var tileGID = set.getTileGID(gid);

                if (tileGID !== undefined) {
                    return tileGID;
                }
            }) || null;
        }
    }]);

    return TilemapResource;
}(_Resource3.default);

exports.default = TilemapResource;

/***/ }),

/***/ "./resources/tilemap/data/Tile.js":
/*!****************************************!*\
  !*** ./resources/tilemap/data/Tile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function Tile(layer, tileData, tileX, tileY, id) {
    _classCallCheck(this, Tile);

    this.layer = layer;
    this.data = tileData;
    this.tileX = tileX;
    this.tileY = tileY;
    this.id = id;
    this.frame = tileData.st;
    // pixels positions
    this.x = Math.round(tileX * tileData.st.width);
    this.y = Math.round(tileY * tileData.st.height);
};

exports.default = Tile;

/***/ }),

/***/ "./resources/tilemap/data/TileGID.js":
/*!*******************************************!*\
  !*** ./resources/tilemap/data/TileGID.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rect = __webpack_require__(/*! ../../../math/Rect */ "./math/Rect.js");

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TileGID = function TileGID(tileset, gid, tileID, u, v, umax, vmax) {
    _classCallCheck(this, TileGID);

    this.id = tileID;
    this.gid = gid;
    this.tileset = tileset || null;
    this.st = new _Rect2.default(u, v, umax, vmax); // tex coords
    this.keyFrames = undefined;
    this.isAnimated = false;
    this.currentFrame = 0;
};

exports.default = TileGID;

/***/ }),

/***/ "./resources/tilemap/data/TilemapLayerData.js":
/*!****************************************************!*\
  !*** ./resources/tilemap/data/TilemapLayerData.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilemapLayerData = function TilemapLayerData(config) {
    _classCallCheck(this, TilemapLayerData);

    this.width = _ObjectGet2.default.value(config, 'width', 0);
    this.height = _ObjectGet2.default.value(config, 'height', 0);
    this.x = _ObjectGet2.default.value(config, 'x', 0);
    this.y = _ObjectGet2.default.value(config, 'y', 0);
    this.name = _ObjectGet2.default.value(config, 'name', 'tilemaplayer');
    this.alpha = _ObjectGet2.default.value(config, 'alpha', 1);
    //this.type ="tilelayer";
    this.visible = _ObjectGet2.default.value(config, 'visible', true);
    this.tiles = _ObjectGet2.default.value(config, 'tiles', []);
    this.hasAnimatedTiles = false;
};

exports.default = TilemapLayerData;

/***/ }),

/***/ "./resources/tilemap/data/TilemapMetadata.js":
/*!***************************************************!*\
  !*** ./resources/tilemap/data/TilemapMetadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilemapMetadata = function TilemapMetadata(config) {
    _classCallCheck(this, TilemapMetadata);

    this.name = _ObjectGet2.default.value(config, 'name', 'tilemap');
    this.width = _ObjectGet2.default.value(config, 'width', 0);
    this.height = _ObjectGet2.default.value(config, 'height', 0);
    this.tileWidth = _ObjectGet2.default.value(config, 'tileWidth', 16);
    this.tileHeight = _ObjectGet2.default.value(config, 'tileHeight', 16);
    this.pixelsWidth = _ObjectGet2.default.value(config, 'pixelsWidth', this.width * this.tileWidth);
    this.pixelsHeight = _ObjectGet2.default.value(config, 'pixelsHeight', this.height * this.tileHeight);
    this.orientation = _ObjectGet2.default.value(config, 'orientation', 'orthogonal');
};

exports.default = TilemapMetadata;

/***/ }),

/***/ "./resources/tilemap/data/Tileset.js":
/*!*******************************************!*\
  !*** ./resources/tilemap/data/Tileset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _TileGID = __webpack_require__(/*! ./TileGID */ "./resources/tilemap/data/TileGID.js");

var _TileGID2 = _interopRequireDefault(_TileGID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tileset = function () {
    function Tileset(name, firstgid, tileWidth, tileHeight, margin, spacing) {
        _classCallCheck(this, Tileset);

        this.name = name;
        this.firstgid = firstgid || 1;
        this.tileWidth = tileWidth || 16;
        this.tileHeight = tileHeight || 16;
        this.margin = margin || 0;
        this.spacing = spacing || 0;
        this.image = null;
        this.data = new _List2.default();
        this.rows = 0;
        this.collumns = 0;
        this.gidCount = 0;
    }

    _createClass(Tileset, [{
        key: 'getTileGID',
        value: function getTileGID(gid) {

            if (gid === 'string') gid = parseInt(gid);

            if (gid < this.firstgid && gid >= this.firstgid + this.gidCount) return null;

            return this.data.at(gid - this.firstgid);
        }
    }, {
        key: 'getTile',
        value: function getTile(index) {

            if (index === 'string') index = parseInt(index);

            return this.data.at(index);
        }
    }, {
        key: 'hasGID',
        value: function hasGID(gid) {
            return gid >= this.firstgid && gid < this.firstgid + this.gidCount;
        }
    }, {
        key: 'updateData',
        value: function updateData(imageWidth, imageHeight) {

            if (this.image !== undefined || this.image != null) {
                imageWidth = this.image.width;
                imageHeight = this.image.height;
            }

            //slice into tiles
            var columns = (imageHeight - this.margin * 2 + this.spacing) / (this.tileHeight + this.spacing);
            var rows = (imageWidth - this.margin * 2 + this.spacing) / (this.tileWidth + this.spacing);

            this.rows = Math.floor(rows);
            this.collumns = Math.floor(columns);
            this.gidCount = rows * columns;

            var u = this.margin;
            var v = this.margin;
            var x = 0;

            this.data.clear();

            for (var i = 0; i < this.gidCount; i++) {

                this.data.push(new _TileGID2.default(this, this.firstgid + i, i, u, v, this.tileWidth, this.tileHeight));

                u += this.tileWidth + this.spacing;
                x++;

                if (x >= rows) {
                    x = 0;
                    u = this.margin;
                    v += this.tileHeight + this.spacing;
                }
            }
        }
    }]);

    return Tileset;
}();

exports.default = Tileset;

/***/ }),

/***/ "./resources/tilemap/parser/ParseGID.js":
/*!**********************************************!*\
  !*** ./resources/tilemap/parser/ParseGID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseGID;

// Bits on the far end of the 32-bit global tile ID are used for tile flags
var FLIPPED_HORIZONTALLY_FLAG = 0x80000000;
var FLIPPED_VERTICALLY_FLAG = 0x40000000;
var FLIPPED_DIAGONALLY_FLAG = 0x20000000;

function ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally) {

    var flip = false;
    var rot = 0;

    return { flipped: flip, rotation: rot };
}

// http://docs.mapeditor.org/en/latest/reference/tmx-map-format/
function ParseGID(global_tile_id) {

    // The global_tile_id is alredy parsed on Base64.decodeToUint32() phase.

    /* unsigned global_tile_id = data[tile_index] |
                              data[tile_index + 1] << 8 |
                              data[tile_index + 2] << 16 |
                              data[tile_index + 3] << 24;*/

    // Read out the flags
    var flipped_horizontally = Boolean(global_tile_id & FLIPPED_HORIZONTALLY_FLAG);
    var flipped_vertically = Boolean(global_tile_id & FLIPPED_VERTICALLY_FLAG);
    var flipped_diagonally = Boolean(global_tile_id & FLIPPED_DIAGONALLY_FLAG);

    // Clear the flags
    global_tile_id = global_tile_id & ~(FLIPPED_HORIZONTALLY_FLAG | FLIPPED_VERTICALLY_FLAG | FLIPPED_DIAGONALLY_FLAG);

    var flags = ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally);

    return {
        gid: global_tile_id,
        flipHorizontal: flipped_horizontally,
        flipVertical: flipped_vertically,
        flipDiagonal: flipped_diagonally,
        flipped: flags.flipped,
        rotation: flags.rotation
    };
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseLayers.js":
/*!*************************************************!*\
  !*** ./resources/tilemap/parser/ParseLayers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseLayers;

var _ObjectGet = __webpack_require__(/*! ../../../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _Base64Utils = __webpack_require__(/*! ../../../utils/Base64Utils */ "./utils/Base64Utils.js");

var _Base64Utils2 = _interopRequireDefault(_Base64Utils);

var _Set = __webpack_require__(/*! ../../../structures/Set */ "./structures/Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _ParseGID = __webpack_require__(/*! ./ParseGID */ "./resources/tilemap/parser/ParseGID.js");

var _ParseGID2 = _interopRequireDefault(_ParseGID);

var _TilemapLayerData = __webpack_require__(/*! ../data/TilemapLayerData */ "./resources/tilemap/data/TilemapLayerData.js");

var _TilemapLayerData2 = _interopRequireDefault(_TilemapLayerData);

var _Tile = __webpack_require__(/*! ../data/Tile */ "./resources/tilemap/data/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseLayers(json, map) {

    var size = json.layers.length;
    var tileLayers = new _List2.default();

    if (size <= 0) return tileLayers;

    for (var i = size - 1; i >= 0; i--) {

        var jsonLayer = json.layers[i];

        if (jsonLayer.type !== "tilelayer") continue;

        if (jsonLayer.enconding) {
            if (jsonLayer.enconding === 'base64') {
                //  should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.
                jsonLayer.data = _Base64Utils2.default.decodeToUint32(jsonLayer.data);
                delete jsonLayer.enconding;
            }
        }

        var newLayer = new _TilemapLayerData2.default({
            name: jsonLayer.name,
            x: _ObjectGet2.default.value(jsonLayer, 'offsetx', 0) + jsonLayer.x,
            y: _ObjectGet2.default.value(jsonLayer, 'offsety', 0) + jsonLayer.y,
            width: jsonLayer.width,
            height: jsonLayer.height,
            tileWidth: jsonLayer.tilewidth,
            tileHeight: jsonLayer.tileheight,
            alpha: jsonLayer.opacity,
            visible: jsonLayer.visible
            //properties: GetFastValue(layer, 'properties', {})
        });

        var tiles = [];
        var x = 0;
        var y = 0;
        var hasAnimatedTiles = false;
        var animatedTilesGID = new _Set2.default();

        for (var j = 0; j < jsonLayer.data.length; j++) {

            var gidProp = (0, _ParseGID2.default)(jsonLayer.data[j]);
            var id = x + y * newLayer.width;
            var tile = null;

            // The first tileset always has a firstgid value of 1. 
            if (gidProp.gid > 0) {
                var gid = gidProp.gid;
                var tileset = map.getTilesetByGID(gid);
                var tileData = tileset.getTileGID(gid);

                if (tileData.isAnimated) {
                    animatedTilesGID.set(gid);
                    hasAnimatedTiles = true;
                }

                tile = new _Tile2.default(newLayer, tileData, x, y, id);
            }

            tiles.push(tile);

            x++;

            if (x >= newLayer.width) {
                x = 0;
                y++;
            }
        }

        newLayer.tiles = tiles;
        newLayer.hasAnimatedTiles = hasAnimatedTiles;
        newLayer.animatedTiles = animatedTilesGID.size > 0 ? animatedTilesGID : undefined;

        tileLayers.push(newLayer);
    }

    return tileLayers;
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTilesProperties.js":
/*!**********************************************************!*\
  !*** ./resources/tilemap/parser/ParseTilesProperties.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTilesProperties;
function ParseTilesProperties(tileset, tilesetTilesProperties) {

    for (var tileIndex in tilesetTilesProperties) {

        var tileData = tileset.getTile(tileIndex);

        if (tileData === null || tileData === undefined) continue;

        var tileProperties = tilesetTilesProperties[tileIndex];

        // check properties
        for (var property in tileProperties) {

            var propertyContent = tileProperties[property];

            if (property == 'animation') {

                var animationSize = propertyContent.length;

                if (animationSize > 1) {
                    tileData.isAnimated = true;

                    var keyFrames = [];

                    for (var i = 0; i < animationSize; i++) {
                        var anim = propertyContent[i];
                        keyFrames.push({
                            duration: anim.duration,
                            tileID: anim.tileid
                        });
                    }

                    tileData.keyFrames = keyFrames;
                }
            }
        }
    }
}

/***/ }),

/***/ "./resources/tilemap/parser/ParseTileset.js":
/*!**************************************************!*\
  !*** ./resources/tilemap/parser/ParseTileset.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ParseTilesets;

var _Tileset = __webpack_require__(/*! ../data/Tileset */ "./resources/tilemap/data/Tileset.js");

var _Tileset2 = _interopRequireDefault(_Tileset);

var _List = __webpack_require__(/*! ../../../structures/List */ "./structures/List.js");

var _List2 = _interopRequireDefault(_List);

var _Path = __webpack_require__(/*! ../../../utils/Path */ "./utils/Path.js");

var _Path2 = _interopRequireDefault(_Path);

var _ParseTilesProperties = __webpack_require__(/*! ./ParseTilesProperties */ "./resources/tilemap/parser/ParseTilesProperties.js");

var _ParseTilesProperties2 = _interopRequireDefault(_ParseTilesProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParseTilesets(json, cache) {

    var size = json.tilesets.length || 0;

    var tileSets = new _List2.default();

    for (var i = 0; i < size; i++) {

        var jsonTileset = json.tilesets[i];

        if (jsonTileset.image) {

            var newTileSet = new _Tileset2.default(jsonTileset.name, jsonTileset.firstgid, jsonTileset.tilewidth, jsonTileset.tileheight, jsonTileset.margin, jsonTileset.spacing);

            newTileSet.image = cache.image.get(_Path2.default.getFilenameWithoutExtension(jsonTileset.image) || jsonTileset.name);

            newTileSet.updateData(jsonTileset.imagewidth, jsonTileset.imageheight);

            // check tile properties
            if (jsonTileset.tiles !== undefined) (0, _ParseTilesProperties2.default)(newTileSet, jsonTileset.tiles);

            tileSets.push(newTileSet);
        }
    }

    return tileSets;
}

/***/ }),

/***/ "./scene/Scene.js":
/*!************************!*\
  !*** ./scene/Scene.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PostPreloadingScene = __webpack_require__(/*! ./components/PostPreloadingScene */ "./scene/components/PostPreloadingScene.js");

var _PostPreloadingScene2 = _interopRequireDefault(_PostPreloadingScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(name) {
    _classCallCheck(this, Scene);

    this.name = name || 'New Scene';
    //this.childs = new EntityHierarchy("SceneHierarchy", this.game);
    /*this.camera = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.view = 0;*/

    /*if (myGame != null) {
      this.width = myGame.width;
      this.height = myGame.height;
    }*/
  }

  _createClass(Scene, [{
    key: 'preloadDone',
    value: function preloadDone() {

      if (this.scene === undefined) return;

      (0, _PostPreloadingScene2.default)(this.scene);
    }
  }, {
    key: 'instanceDestroy',
    value: function instanceDestroy(gameObject) {

      if (gameObject['destroy']) gameObject.destroy();

      //console.log("deleted " + gameObject._id)

      var index = this.instances.indexOf(gameObject);

      this.instances.splice(index, 1);
    }
  }, {
    key: 'addGameObject',
    value: function addGameObject(gameObject, clone) {

      var obj = void 0;
      var cl = false;

      if (arguments.length == 0) obj = new scintilla.GameObject();else {

        if (clone === undefined) cl = false;else cl = clone;

        if (cl) obj = gameObject.clone();else obj = gameObject;
      }

      obj._id = this.instances.length;
      obj._game = this.game;
      this.instances.push(obj);

      obj.start();
      return obj;
    }
  }, {
    key: 'setBounds',
    value: function setBounds(x, y, width, height) {

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }]);

  return Scene;
}();

exports.default = Scene;

/***/ }),

/***/ "./scene/SceneManager.js":
/*!*******************************!*\
  !*** ./scene/SceneManager.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _System = __webpack_require__(/*! ../core/system/System */ "./core/system/System.js");

var _System2 = _interopRequireDefault(_System);

var _Map = __webpack_require__(/*! ../structures/Map */ "./structures/Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Scene = __webpack_require__(/*! ./Scene */ "./scene/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

var _ScintillaLoadingScene = __webpack_require__(/*! ./builtin/ScintillaLoadingScene */ "./scene/builtin/ScintillaLoadingScene.js");

var _ScintillaLoadingScene2 = _interopRequireDefault(_ScintillaLoadingScene);

var _SetScene = __webpack_require__(/*! ./components/SetScene */ "./scene/components/SetScene.js");

var _SetScene2 = _interopRequireDefault(_SetScene);

var _InjectSystems = __webpack_require__(/*! ../core/system/components/InjectSystems */ "./core/system/components/InjectSystems.js");

var _InjectSystems2 = _interopRequireDefault(_InjectSystems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneManager = function () {
  function SceneManager(game) {
    _classCallCheck(this, SceneManager);

    this.game = game;
    this._scenes = new _Map2.default();

    this.currentScene = null;
    this._currentSceneName = '';
    this._changeScene = null;

    this._setup = false;
    this._clearCache = false;

    this._scintillaLoading = false;

    // callbacks

    this.onStartCallback = null;
    this.onLoadingCallback = null;
    this.onLoadingRenderCallback = null;
    this.onPreloadCallback = null;
    this.onUpdateCallback = null;
    this.onRenderCallback = null;
    this.onDestroyCallback = null;
    this._loadingPlaceHolder = new _ScintillaLoadingScene2.default(this.game);
  }

  _createClass(SceneManager, [{
    key: 'add',
    value: function add(sceneName, scene) {

      var newScene;

      if (scintilla.Scene.prototype.isPrototypeOf(scene)) {
        newScene = scene;
        newScene.game = this.game;
      } else newScene = null;

      if (newScene != null) this._scenes.set(sceneName, newScene);
    }
  }, {
    key: 'new',
    value: function _new(sceneName) {

      if (this._scenes.has(sceneName)) {
        throw "Could not create new Scene. The scene name \"" + name + "\" already exists.";
        return null;
      }

      var newScene = new _Scene2.default(this.game, sceneName);
      this._scenes.set(sceneName, newScene);

      return newScene;
    }
  }, {
    key: 'set',
    value: function set(sceneName, clearCache) {
      return (0, _SetScene2.default)(this, sceneName, clearCache, false);
    }
  }, {
    key: 'restart',
    value: function restart(clearCache) {

      if (clearCache === undefined) {
        clearCache = false;
      }

      this._changeScene = this._currentSceneName;
      this._clearCache = clearCache;
    }
  }, {
    key: 'remove',
    value: function remove(sceneName) {

      if (this._currentSceneName === sceneName) {

        this.currentScene = null;

        this.onStartCallback = null;
        this.onLoadingCallback = null;
        this.onLoadingRenderCallback = null;
        this.onPreloadCallback = null;
        this.onUpdateCallback = null;
        this.onRenderCallback = null;
        this.onDestroyCallback = null;
      }

      delete this.scenes[sceneName];
    }
  }]);

  return SceneManager;
}();

exports.default = SceneManager;


_System2.default.register('SceneManager', SceneManager, 'scene', function () {
  (0, _InjectSystems2.default)(this.game, this._loadingPlaceHolder);
});

/***/ }),

/***/ "./scene/builtin/ScintillaLoadingScene.js":
/*!************************************************!*\
  !*** ./scene/builtin/ScintillaLoadingScene.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scene2 = __webpack_require__(/*! ../Scene */ "./scene/Scene.js");

var _Scene3 = _interopRequireDefault(_Scene2);

var _Define = __webpack_require__(/*! ../../Define */ "./Define.js");

var _Define2 = _interopRequireDefault(_Define);

var _MathUtils = __webpack_require__(/*! ../../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScintillaLoadingScreen = function (_Scene) {
    _inherits(ScintillaLoadingScreen, _Scene);

    function ScintillaLoadingScreen(game) {
        _classCallCheck(this, ScintillaLoadingScreen);

        var _this = _possibleConstructorReturn(this, (ScintillaLoadingScreen.__proto__ || Object.getPrototypeOf(ScintillaLoadingScreen)).call(this, 'Scintilla Loading Scene'));

        _this.scintillaLogo = new Image();
        var logoData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA0CAQAAABxuOPTAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAEENCBdKapvAAABjklEQVRYw+2YSxKDIAyGA6seyiXH8mgsORS7dAFpUMNDJ9CNmakFAnz8MVIswCPbkT8L7IqS4REVgSO2HKiGvQOMa+7yGbhY5XKdhFPV2ZpMLaz3gqeIPd5PeeJaWBX3qiNYqqnn7VVrPayqu/JZl3ISSWstEb2wPtDaHjLhbo4nUwunrHQUOyWN2kBFpRJ26iMjp49qgHuPTDvQKkpbW5+i1n1wa5fAijp7P21/OP+wT0Hnws3uefDUdP7pNLtY5ULgPexE4Ohr4tR31H11er322muPdqXrealWYrPrkQNQgI8ZXVDqGbt/GRh20eSp/jERz7jUQn7qe10Ut5Z+HmdTM08WsaxJx02GUMvIgabsYwMA+AIcsuqQO3vk75CRoQhnyCN5LPu5nKQUYz1G5KmPq5V9tbaWn+aKCGABnAmFonAIijPXVUtKSHXd79H9lNqIAM4AbBm7/fDJNqF8biM1W3WMx9JnA3hkRaXqdD1GQW6j1AqdMVS3zgB49FkvXT16dIaDPFaq+5kC4MwX1X+rgjIvVdUAAAAASUVORK5CYII=";
        _this.scintillaLogo.src = logoData;

        _this.progress = 0;
        _this.fromProgress = 0;
        _this.toProgress = 0;
        _this.t = 0;
        _this.game = game;
        _this.nextScene = null;
        _this.preloadingDone = false;

        var drawFunc = function drawFunc(draw) {
            draw.image(this.scintillaLogo, 131, 73);
            draw.color = '#bcbcbc';
            draw.outlineRect(131, 132, 58, 7);
            draw.rect(133, 134, 54 * this.progress, 3);
            draw.font('Verdana', 6);
            draw.text('WIP - ' + _Define2.default.VERSION, 320 - 4, 240 - 4, '#787878', 'right');
        };

        var loadingFunc = function loadingFunc(dt) {

            this.t += dt / 0.15;

            if (this.t >= 1) this.t = 1.0;

            if (!this.preloadingDone) {
                var prog = this.load.progress;

                if (prog >= 1.0) this.preloadingDone = true;

                if (prog > this.progress) {
                    this.fromProgress = this.progress;
                    this.toProgress = prog;
                    this.t = 0;
                }
            } else {
                this.wait += dt;

                if (this.wait >= 2.0) {
                    this.preloadDone();
                }
            }

            this.progress = _MathUtils2.default.lerp(this.fromProgress, this.toProgress, this.t);
        };

        _this.loading = loadingFunc;
        _this.update = loadingFunc;
        _this.loadingGUI = drawFunc;
        _this.gui = drawFunc;
        return _this;
    }

    _createClass(ScintillaLoadingScreen, [{
        key: "init",
        value: function init(next) {
            this.nextScene = next;
            this.wait = 0;
            this.t = 0;
            this.progress = 0;
            this.preloadingDone = false;
            this.ui.setSize(320, 240);
            this.ui.setViewportByAspectRatio(1.33333333333);
        }
    }, {
        key: "start",
        value: function start() {
            //this.progress = 1;
        }
    }]);

    return ScintillaLoadingScreen;
}(_Scene3.default);

exports.default = ScintillaLoadingScreen;

/***/ }),

/***/ "./scene/components/ClearScene.js":
/*!****************************************!*\
  !*** ./scene/components/ClearScene.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ClearScene;

var _UnjectSystems = __webpack_require__(/*! ../../core/system/components/UnjectSystems */ "./core/system/components/UnjectSystems.js");

var _UnjectSystems2 = _interopRequireDefault(_UnjectSystems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClearScene(game, sceneManager) {

    if (sceneManager._currentSceneName) {

        //game.system.unject(sceneManager.currentScene);
        (0, _UnjectSystems2.default)(sceneManager.currentScene);

        if (sceneManager.onDestroyCallback) {
            sceneManager.onDestroyCallback.call(sceneManager.currentScene, game);
        }

        if (sceneManager._clearCache) {
            game.cache.clear();
        }
    }
}

/***/ }),

/***/ "./scene/components/PostPreloadingScene.js":
/*!*************************************************!*\
  !*** ./scene/components/PostPreloadingScene.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PostPreloadingScene;
function PostPreloadingScene(sceneManger) {

    sceneManger._scintillaLoading = false;

    if (sceneManger.currentScene === undefined || sceneManger.currentScene === null) return;

    if (sceneManger.onStartCallback) {
        sceneManger.onStartCallback.call(sceneManger.currentScene, sceneManger.game);
    }
}

/***/ }),

/***/ "./scene/components/PreUpdateScene.js":
/*!********************************************!*\
  !*** ./scene/components/PreUpdateScene.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = PreUpdateScene;

var _SetupScene = __webpack_require__(/*! ./SetupScene */ "./scene/components/SetupScene.js");

var _SetupScene2 = _interopRequireDefault(_SetupScene);

var _PreloadSceneComplete = __webpack_require__(/*! ./PreloadSceneComplete */ "./scene/components/PreloadSceneComplete.js");

var _PreloadSceneComplete2 = _interopRequireDefault(_PreloadSceneComplete);

var _ClearScene = __webpack_require__(/*! ./ClearScene */ "./scene/components/ClearScene.js");

var _ClearScene2 = _interopRequireDefault(_ClearScene);

var _StartLoadAssets = __webpack_require__(/*! ../../loader/components/StartLoadAssets */ "./loader/components/StartLoadAssets.js");

var _StartLoadAssets2 = _interopRequireDefault(_StartLoadAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreUpdateScene(sceneManager) {

      if (!sceneManager.game.systemInited || sceneManager._changeScene == null) return;

      (0, _ClearScene2.default)(sceneManager, sceneManager.game);

      _SetupScene2.default.call(sceneManager, sceneManager._changeScene);

      if (sceneManager._currentSceneName !== sceneManager._changeScene) {
            return;
      } else {
            sceneManager._changeScene = null;
      }

      if (sceneManager.onPreloadCallback) {

            sceneManager.game.system.load.reset();
            sceneManager.onPreloadCallback.call(sceneManager.currentScene, sceneManager.game);

            if (sceneManager.game.system.load.totalQueuedFiles === 0) {
                  _PreloadSceneComplete2.default.call(sceneManager);
            } else {

                  //sceneManager.game.system.load.start();
                  _StartLoadAssets2.default.call(sceneManager.game.system.load);
            }
      } else {

            _PreloadSceneComplete2.default.call(sceneManager);
      }
}

/***/ }),

/***/ "./scene/components/PreloadSceneComplete.js":
/*!**************************************************!*\
  !*** ./scene/components/PreloadSceneComplete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = PreloadSceneComplete;
function PreloadSceneComplete() {

      if (this._setup === false && this.onLoadingCallback) {
            this.onLoadingCallback.call(this.currentScene, this.game);
      }

      if (this._scintillaLoading) {
            //this._scintillaLoading = false;
            this._loadingPlaceHolder.start();
      }

      this._setup = true;

      /*if (!this._scintillaLoading && this.onStartCallback) {
          this.onStartCallback.call(this.currentScene, this.game);
      }*/
}

/***/ }),

/***/ "./scene/components/RenderScene.js":
/*!*****************************************!*\
  !*** ./scene/components/RenderScene.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RenderScene;
function RenderScene(sceneManager, drawer) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.gui(drawer);
        } else {
            if (sceneManager.onRenderCallback) sceneManager.onRenderCallback.call(sceneManager.currentScene, drawer);
        }
    } else {
        if (sceneManager._scintillaLoading) {
            sceneManager._loadingPlaceHolder.loadingGUI(drawer);
        } else {
            if (sceneManager.onLoadingRenderCallback) sceneManager.onLoadingRenderCallback.call(sceneManager.currentScene, drawer);
        }
    }
}

/***/ }),

/***/ "./scene/components/SetScene.js":
/*!**************************************!*\
  !*** ./scene/components/SetScene.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetScene;
function SetScene(manager, sceneName, clearCache) {

  if (!manager._scenes.has(sceneName)) throw new Error('SceneManager.set: Scene' + sceneName + ' does not exist.');

  if (clearCache === undefined) {
    clearCache = false;
  }

  manager._changeScene = sceneName;
  manager._clearCache = clearCache;
}

/***/ }),

/***/ "./scene/components/SetupScene.js":
/*!****************************************!*\
  !*** ./scene/components/SetupScene.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SetupScene;

var _InjectSystems = __webpack_require__(/*! ../../core/system/components/InjectSystems */ "./core/system/components/InjectSystems.js");

var _InjectSystems2 = _interopRequireDefault(_InjectSystems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SetupScene(sceneName) {

  this.currentScene = this._scenes.get(sceneName);

  this.onLoadingCallback = this.currentScene['loading'] || null;
  this.onLoadingRenderCallback = this.currentScene['loadingGUI'] || null;

  var bothIsNull = this.onLoadingCallback == null && this.onLoadingRenderCallback == null;

  if (this.onLoadingCallback == null || this.onLoadingRenderCallback == null) {

    if (bothIsNull) {
      this._loadingPlaceHolder.init(this.currentScene);

      this._scintillaLoading = true;
    } else {
      this._scintillaLoading = false;
    }
  }

  this.onRenderCallback = this.currentScene['gui'] || null;
  this.onUpdateCallback = this.currentScene['update'] || null;
  this.onStartCallback = this.currentScene['start'] || null;
  this.onPreloadCallback = this.currentScene['preload'] || null;
  this.onDestroyCallback = this.currentScene['destroy'] || null;

  (0, _InjectSystems2.default)(this.game, this.currentScene);
  //this.game.system.inject(this.currentScene);

  this._currentSceneName = sceneName;

  this._setup = false;
}

/***/ }),

/***/ "./scene/components/UpdateScene.js":
/*!*****************************************!*\
  !*** ./scene/components/UpdateScene.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateScene;
function UpdateScene(sceneManager, deltaTime) {

    if (sceneManager._setup) {

        if (sceneManager._scintillaLoading) {

            sceneManager._loadingPlaceHolder.update(deltaTime);
        } else {
            if (sceneManager.onUpdateCallback) sceneManager.onUpdateCallback.call(sceneManager.currentScene, deltaTime);
        }
    } else {
        if (sceneManager._scintillaLoading) {

            sceneManager._loadingPlaceHolder.loading(deltaTime);
        } else {

            if (sceneManager.onLoadingCallback) sceneManager.onLoadingCallback.call(sceneManager.currentScene, deltaTime);
        }
    }
}

/***/ }),

/***/ "./structures/List.js":
/*!****************************!*\
  !*** ./structures/List.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataList = function () {
    function DataList(elements, unique) {
        _classCallCheck(this, DataList);

        this.unique = unique || true;
        this.childs = [];

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.push(elements[i]);
            }
        }
    }

    _createClass(DataList, [{
        key: 'push',
        value: function push(child) {

            if (this.unique) {
                if (this.indexOf(child) === -1) this.childs.push(child);
            } else {
                this.childs.push(child);
            }

            return child;
        }
    }, {
        key: 'pushFront',
        value: function pushFront(child) {
            if (this.unique) {
                if (this.indexOf(child) === -1) this.childs.unshift(child);
            } else {
                this.childs.unshift(child);
            }
            return child;
        }
    }, {
        key: 'insert',
        value: function insert(child, index) {

            if (index === undefined) index = 0;

            if (this.childs.length === 0) return this.push(child);

            if (index >= 0 && index <= this.childs.length) {

                if (this.unique) {
                    if (this.indexOf(child) === -1) this.childs.splice(index, 0, child);
                } else {
                    this.childs.splice(index, 0, child);
                }
            }

            return child;
        }
    }, {
        key: 'indexOf',
        value: function indexOf(child) {
            return this.childs.indexOf(child);
        }
    }, {
        key: 'at',
        value: function at(index) {
            return this.childs[index];
        }
    }, {
        key: 'erase',
        value: function erase(child) {

            var idx = this.childs.indexOf(child);
            var childToErase = null;

            if (idx !== -1) childToErase = this.childs.splice(idx, 1);

            return childToErase;
        }
    }, {
        key: 'eraseAt',
        value: function eraseAt(index) {
            var child = this.childs[index];

            if (child) this.childs.splice(index, 1);

            return child;
        }
    }, {
        key: 'eraseList',
        value: function eraseList(listToRemove, size) {

            if (size === undefined) size = listToRemove.size;

            for (var i = 0; i < size; i++) {
                var child = listToRemove.childs[i];
                this.erase(child);
                /*let child = this.listToRemove[i];
                let index = this._instances.indexOf(gameObject);
                  if (index > -1)
                   this._instances.splice(index, 1);*/
            }
        }
    }, {
        key: 'has',
        value: function has(child) {
            return this.childs.indexOf(child) > -1;
        }
    }, {
        key: 'empty',
        value: function empty() {
            return this.childs.length == 0;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var i = this.childs.length;

            while (i--) {
                this.erase(this.childs[i]);
            }

            return this;
        }
    }, {
        key: 'splice',
        value: function splice(start, count) {
            return this.childs.splice(start, count);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.clear();
            this.childs = [];
            this.parent = null;
        }
    }, {
        key: 'concat',
        value: function concat(otherList, clearOther) {
            if (clearOther === undefined) clearOther = false;

            if (clearOther) {
                this.childs = this.childs.concat(otherList.childs.splice(0));
            } else {
                this.childs = this.childs.concat(otherList.childs);
            }

            return this;
        }
    }, {
        key: 'each',
        value: function each(callback) {
            var params = [null];

            var content = this.childs;

            for (var i = 0; i < arguments.length; i++) {
                params.push(arguments[i + 1]);
            }for (var _i = 0; _i < content.length; _i++) {
                params[0] = _i;
                var r = callback(content[_i], params);
                if (r !== undefined) return r;
                //break;
            }
        }
    }, {
        key: 'sort',
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _MergeSort2.default)(this.childs, predicate);

            //childs.sort(predicate);
        }
    }, {
        key: 'find',
        value: function find(predicate) {
            if (predicate === undefined) return;

            var size = this.childs.length;

            for (var i = 0; i < size; i++) {
                if (predicate(this.childs[i])) {
                    return this.childs[i];
                }
            }

            return null;
        }
    }, {
        key: 'swap',
        value: function swap(childA, childB) {

            if (childA === childB) return;

            var idx0 = this.indexOf(childA);
            var idx1 = this.indexOf(childB);

            if (idx0 < 0 || idx1 < 0) {
                throw new Error('DataList.swap: Could not swap childrens. The objects are not in the list.');
            }

            this.list[idx0] = childA;
            this.list[idx1] = childB;

            return this;
        }
    }, {
        key: 'swapByIndex',
        value: function swapByIndex(indexA, indexB) {
            if (indexA === indexB) return;

            var cA = this.at(indexA);
            var cB = this.at(indexB);

            if (cA === undefined || cB === undefined) {
                throw new Error('DataList.swapByIndex: Could not swap childrens by index. The objects are not in the list.');
            }

            this.list[indexA] = cA;
            this.list[indexB] = cB;

            return this;
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.childs.reverse();
            return this;
        }
    }, {
        key: 'size',
        get: function get() {
            return this.childs.length;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.childs.length;
        }
    }, {
        key: 'first',
        get: function get() {
            if (this.list.length > 0) return this.childs[0];else return null;
        }
    }, {
        key: 'last',
        get: function get() {
            if (this.childs.length > 0) {
                var idx = this.childs.length - 1;
                return this.childs[idx];
            } else return null;
        }
    }]);

    return DataList;
}();

exports.default = DataList;

/***/ }),

/***/ "./structures/Map.js":
/*!***************************!*\
  !*** ./structures/Map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// DataMap simple class
var DataMap = function () {
  function DataMap() {
    _classCallCheck(this, DataMap);

    this._content = {};
    this._size = 0;
  }

  _createClass(DataMap, [{
    key: "set",


    /* 
    Add or set value to the map
    key = keyName
    value = value
    */
    value: function set(key, value) {

      if (!this.has(key)) {
        this._size++;
      }

      this._content[key] = value;

      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      if (this.has(key)) {
        return this._content[key];
      } else {
        return null;
      }
    }
  }, {
    key: "has",
    value: function has(key) {
      return this._content.hasOwnProperty(key);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      for (var key in this._content) {
        if (entries[key] === value) {
          return true;
        } else continue;
      }

      return false;
    }
  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this._content);
    }
  }, {
    key: "values",
    value: function values() {
      var values = [];
      var content = this._content;

      for (var key in content) {
        values.push(entries[key]);
      }return values;
    }
  }, {
    key: "remove",
    value: function remove(key) {

      if (!this.has(key)) return null;

      var prop = this._content[key];
      delete this._content[key];
      this._size--;
      return prop;
    }
  }, {
    key: "delete",
    value: function _delete(key) {

      if (!this.has(key)) return false;

      delete this._content[key];
      this._size--;

      return true;
    }
  }, {
    key: "deleteAt",
    value: function deleteAt(key) {

      //if (!this.hasTagInKey(key))
      //  return false;
      this._size--;
      delete this._content[key];
    }
  }, {
    key: "deleteByIndexedArray",
    value: function deleteByIndexedArray(array) {
      for (var i = 0; i < array.length; i++) {
        delete this._content[array[i]];
        this._size--;
      }
    }
  }, {
    key: "clear",
    value: function clear() {

      for (var property in this._content) {
        delete this._content[property];
      }this._size = 0;
    }
  }, {
    key: "slowSize",
    value: function slowSize() {
      return Object.keys(_contents).length;
    }
  }, {
    key: "each",
    value: function each(callback) {
      var content = this._content;

      for (var property in content) {

        if (callback(property, content[property]) === false) break;
      }

      return this;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);

  return DataMap;
}();

exports.default = DataMap;

/***/ }),

/***/ "./structures/Set.js":
/*!***************************!*\
  !*** ./structures/Set.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MergeSort = __webpack_require__(/*! ./useful/MergeSort */ "./structures/useful/MergeSort.js");

var _MergeSort2 = _interopRequireDefault(_MergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataSet = function () {
    function DataSet(elements) {
        _classCallCheck(this, DataSet);

        this._content = [];
        this._size = 0;

        if (Array.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                this.set(elements[i]);
            }
        }
    }

    _createClass(DataSet, [{
        key: "set",
        value: function set(value) {
            if (this._content.indexOf(value) === -1) this._content.push(value);

            return this;
        }
    }, {
        key: "get",
        value: function get(value) {
            var index = this._content.indexOf(value);
            if (index > -1) {
                return this._content[index];
            } else {
                return null;
            }
        }
    }, {
        key: "at",
        value: function at(index) {
            return this._content[index];
        }
    }, {
        key: "has",
        value: function has(value) {
            return this._content.indexOf(value) > -1;
        }
    }, {
        key: "delete",
        value: function _delete(value) {
            var idx = this._content.indexOf(value);

            if (idx > -1) this._content.splice(idx, 1);

            return this;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._content.length = 0;
            return this;
        }
    }, {
        key: "each",
        value: function each(callback, scope) {
            var content = this._content.slice();
            var size = content.length;
            var i;

            if (scope) {
                for (i = 0; i < size; i++) {
                    if (callback.call(scope, content[i], i) === false) break;
                }
            } else {
                for (i = 0; i < size; i++) {
                    if (callback(content[i], i) === false) break;
                }
            }

            return this;
        }
    }, {
        key: "sort",
        value: function sort(predicate) {
            if (predicate === undefined) return;
            return (0, _MergeSort2.default)(this._content, predicate);
        }
    }, {
        key: "values",
        value: function values() {
            return this._content;
        }
    }, {
        key: "size",
        get: function get() {
            return this._content.length;
        }
    }, {
        key: "length",
        get: function get() {
            return this._content.length;
        }
    }]);

    return DataSet;
}();

exports.default = DataSet;

/***/ }),

/***/ "./structures/index.js":
/*!*****************************!*\
  !*** ./structures/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Utils: __webpack_require__(/*! ./useful */ "./structures/useful/index.js"),
    Set: __webpack_require__(/*! ./Set */ "./structures/Set.js"),
    Map: __webpack_require__(/*! ./Map */ "./structures/Map.js"),
    List: __webpack_require__(/*! ./List */ "./structures/List.js")
};

/***/ }),

/***/ "./structures/useful/MergeSort.js":
/*!****************************************!*\
  !*** ./structures/useful/MergeSort.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MergeSort;

// http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
// https://codereview.stackexchange.com/questions/87000/fast-merge-sort-in-javascript
function MergeSort(array, predicate) {
    var size = array.length;

    if (size < 2) return array;

    if (predicate === undefined) {
        predicate = function predicate(a, b) {
            return a < b ? -1 : a === b ? 0 : 1;
        };
    }

    /*function merge(left, right)
    {
        var result = [];
           while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
     
        while (left.length)
            result.push(left.shift());
     
        while (right.length)
            result.push(right.shift());
     
        return result;
    }*/

    function merge(begin, begin_right, end) {
        // Create a copy of the left and right halves.
        var left_size = begin_right - begin;
        var right_size = end - begin_right;
        var left = array.slice(begin, begin_right);
        var right = array.slice(begin_right, end);
        // Merge left and right halves back into original array.
        var i = begin,
            j = 0,
            k = 0;
        while (j < left_size && k < right_size) {
            if (predicate(left[j], right[k]) <= 0) array[i++] = left[j++];else array[i++] = right[k++];
        } // At this point, at least one of the two halves is finished.
        // Copy any remaining elements from left array back to original array.
        while (j < left_size) {
            array[i++] = left[j++];
        } // Copy any remaining elements from right array back to original array.
        while (k < right_size) {
            array[i++] = right[k++];
        }return array;
    }

    function msort(start, end) {
        var len = end - start;

        if (len < 2) return;

        var mid = start + (len >>> 1);
        //let left = list.slice(start, mid);
        //let right = list.slice(mid, end);
        msort(start, mid);
        msort(mid, end);
        return merge(start, mid, end);
    }

    //let mid = 0 + (size >>> 1);

    return msort(0, size); //mid,size);

}

/***/ }),

/***/ "./structures/useful/index.js":
/*!************************************!*\
  !*** ./structures/useful/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    MergeSort: __webpack_require__(/*! ./MergeSort */ "./structures/useful/MergeSort.js")
};

/***/ }),

/***/ "./time/GameTime.js":
/*!**************************!*\
  !*** ./time/GameTime.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Wrapper class for game time

var GameTime = function () {
    function GameTime(game) {
        _classCallCheck(this, GameTime);

        this.game = game;
    }

    _createClass(GameTime, [{
        key: "init",
        value: function init(gameLoop) {
            this._updateStep = gameLoop.updateStep;
        }
    }, {
        key: "now",
        get: function get() {
            return this._updateStep.time;
        }
    }, {
        key: "fps",
        get: function get() {
            return this._updateStep.fps;
        }
    }, {
        key: "desiredFps",
        get: function get() {
            return this._updateStep.fpsDesired;
        }
    }, {
        key: "delta",
        get: function get() {
            return this._updateStep.deltaTime;
        }
    }, {
        key: "elapsed",
        get: function get() {
            return this._updateStep.elapsed;
        }
    }, {
        key: "rawDelta",
        get: function get() {
            return this._updateStep.hiDeltaTime;
        }
    }]);

    return GameTime;
}();

exports.default = GameTime;

/***/ }),

/***/ "./time/UpdateStep.js":
/*!****************************!*\
  !*** ./time/UpdateStep.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestAnimationFrame = __webpack_require__(/*! ../dom/RequestAnimationFrame */ "./dom/RequestAnimationFrame.js");

var _RequestAnimationFrame2 = _interopRequireDefault(_RequestAnimationFrame);

var _ObjectGet = __webpack_require__(/*! ../utils/object/ObjectGet */ "./utils/object/ObjectGet.js");

var _ObjectGet2 = _interopRequireDefault(_ObjectGet);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateStep = function () {
        function UpdateStep(game, config) {
                _classCallCheck(this, UpdateStep);

                // CORE
                this.game = game;
                this.requestAnimationFrame = new _RequestAnimationFrame2.default(config.time.timeoutMode);
                this.isRunning = false;
                this.loop = null;
                this.render = null;

                // TIMER
                this.startTime = 0; // start time
                this.time = 0; // current hi-time
                this.previousTime = 0; // last hi-time
                this.elapsed = 0; // elapsed time
                this.hiDeltaTime = 0; // raw delta time
                this.deltaTime = 0; // delta time in miliseconds
                // FPS
                this.requireFpsUpdate = true;
                this.fpsDesired = _ObjectGet2.default.value(config, 'fps', 60);
                this.fps = this.fpsDesired;
                this.currentFps = 0;
                this._nextFpsUpdate = 0;
                this._framesThisSecond = 0;

                // ACCUMALATOR METHOD
                this.interpolation = false;
                this.timeStep = Math.ceil(1000 / this.fpsDesired);
                this.minTimeStep = this.timeStep * 1.25;
                this.accumalator = 0;
                this.accumulatorMax = this.timeStep * 10;
                this.updateLast = 0;
                this.updateAverageDelta = 0;
                this.frameCounter = 0;
        }

        _createClass(UpdateStep, [{
                key: "init",
                value: function init(gameLoop) {

                        if (this.isRunning) return;

                        this.reset();

                        this.loop = gameLoop.loop.bind(gameLoop);
                        this.render = gameLoop.render.bind(gameLoop);

                        this.startTime = window.performance.now();

                        this.requestAnimationFrame.start(this.update.bind(this));

                        this.isRunning = true;
                }
        }, {
                key: "update",
                value: function update(timeStamp) {

                        this.hiDeltaTime = timeStamp - this.previousTime;

                        // current
                        this.time = timeStamp;

                        // game elapsed time
                        this.elapsed += this.hiDeltaTime;

                        // FPS Update
                        if (this.requireFpsUpdate) this.fpsUpdate(timeStamp);

                        // set previous time
                        this.previousTime = timeStamp;

                        // game loop
                        this.accumalatorMethod(this.hiDeltaTime);

                        // game render
                        this.render(this.hiDeltaTime);
                }
        }, {
                key: "fpsUpdate",
                value: function fpsUpdate(timeStamp) {

                        if (timeStamp > this._nextFpsUpdate) {
                                this.currentFps = 0.25 * this._framesThisSecond + 0.75 * this.fps;
                                this.fps = _MathUtils2.default.clamp(~~this.currentFps, 0, this.fpsDesired);

                                this._nextFpsUpdate = timeStamp + 1000;
                                this._framesThisSecond = 0;
                        }

                        this._framesThisSecond++;
                }
        }, {
                key: "accumalatorMethod",
                value: function accumalatorMethod(deltaTime) {

                        if (++this.frameCounter % this.frameRate === 0) {

                                this.frameCounter = 0;

                                this.accumalator += deltaTime; //Math.max(Math.min(this.timeStep * 3, this.elapsed),0);
                                this.accumulator = Math.min(this.accumalator, this.accumalatorMax); //, this.updateAverage);

                                var deltaUpdate = this.interpolation ? deltaTime : this.timeStep;
                                var accumulatorUpdateDelta = this.interpolation ? deltaUpdate : Math.max(deltaUpdate, this.updateAverageDelta);
                                this.deltaTime = deltaUpdate / 1000;

                                while (this.accumalator >= accumulatorUpdateDelta || this.interpolation) {

                                        var updateStart = window.performance.now();

                                        // UPDATE GAME
                                        this.loop(deltaUpdate / 1000.0);

                                        var updateLast = window.performance.now();
                                        this.updateAverageDelta = updateLast - updateStart;

                                        this.accumalator -= accumulatorUpdateDelta;
                                        if (this.interpolation) {
                                                this.accumalator = 0;
                                                break;
                                        }
                                }
                        }
                }
        }, {
                key: "accumalatorReset",
                value: function accumalatorReset() {
                        this.frameCounter = 0;
                        this.frameRate = ~~(0.5 + 60 / this.fpsDesired);
                        this.accumalator = 0;
                        this.timeStep = 1000 / this.fpsDesired;
                        this.accumulatorMax = this.stepSize * 10;
                }
        }, {
                key: "reset",
                value: function reset() {
                        var now = window.performance.now();

                        this.deltaTime = 0;
                        this.hiDeltaTime = 0;
                        this.time = now;
                        this.previousTimeTime = now;
                        this._nextFpsUpdate = now + 1000;
                        this._framesThisSecond = 0;

                        this.accumalatorReset();
                }
        }]);

        return UpdateStep;
}();

/*
if (this.game.systemInited) {

    this.time.update(time);

    if (this._spiraling > 1) {

        this.time.deltaTime = 0;
        this._spiraling = 0;
        this.time.accumalator = 0;

        this.render(this.time.accumulatorDelta);

    } else {

    var countFrames = 0;

    while (this.time.accumalator >= this.time.accumulatorDelta) {

      //  this.time.updateStart = window.performance.now();

        this.time.deltaTime = Math.min(this.time.accumalator,this.time.accumulatorDelta) / 1000;

        this.logic(this.time.deltaTime);

        //this.time.updateLast =  window.performance.now();
      //  this.time.updateAverage = this.time.updateLast - this.time.updateStart;

        this.time.accumalator -= this.time.accumulatorDelta;

        countFrames++;

        this.time.refresh();

        if (countFrames >= 240) { // SPIRAL
            //panic();
            this.time.accumalator = 0;

            break;
        }
    }

      if (countFrames > this._lastFrameCount)
         this._spiraling++;
     else if (countFrames < this._lastFrameCount)
        this._spiraling = 0;

        this._lastFrameCount = countFrames;

        this.render(this.time.accumalator/this.time.accumulatorDelta);

    }



}*/


exports.default = UpdateStep;

/***/ }),

/***/ "./transform/ComputeBounds.js":
/*!************************************!*\
  !*** ./transform/ComputeBounds.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComputeBounds;
function ComputeBounds(bounds, transform, width, height, origin) {

  if (origin === undefined) origin = { x: 0, y: 0 };

  var top = transform.matrix.transformPoint(-origin.x, -origin.y);
  var left = transform.matrix.transformPoint(width - origin.x, -origin.y);
  var bottom = transform.matrix.transformPoint(-origin.x, height - origin.y);
  var right = transform.matrix.transformPoint(width - origin.x, height - origin.y);

  bounds.min.x = Math.min(top.x, left.x, bottom.x, right.x);
  bounds.min.y = Math.min(top.y, left.y, bottom.y, right.y);
  bounds.max.x = Math.max(top.x, left.x, bottom.x, right.x);
  bounds.max.y = Math.max(top.y, left.y, bottom.y, right.y);
}

/***/ }),

/***/ "./transform/ComputeDelimiterPoint.js":
/*!********************************************!*\
  !*** ./transform/ComputeDelimiterPoint.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ComputeDelimiterPoint;
function ComputeDelimiterPoint(x, y, rotation, anchor) {

    var coord = { x: 0, y: 0 };

    if (anchor === undefined) {
        coord.x = x * rotation.x - y * rotation.y;
        coord.y = x * rotation.y - y * rotation.x;
    } else {

        var xa = x - anchor.x;
        var ya = y - anchor.y;
        // cx = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
        coord.x = anchor.x + xa * rotation.x - ya * rotation.y;
        // cy = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));
        coord.y = anchor.y - xa * rotation.y - ya * rotation.x;
    }

    return coord;
}

/***/ }),

/***/ "./transform/Transform.js":
/*!********************************!*\
  !*** ./transform/Transform.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _BoundingBox = __webpack_require__(/*! ../math/BoundingBox */ "./math/BoundingBox.js");

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
  function Transform() {
    _classCallCheck(this, Transform);

    this.matrix = new _Matrix2.default(1);
    this.position = new _Vector2.default(0, 0, this);
    this.scale = new _Vector2.default(1, 1, this);
    this.origin = new _Vector2.default(0, 0, this);
    this.angle = 0;
    this.rotation = 0;
    this._cosSin = { x: 1, y: 0 };
    this._oldRotation = -1;
    this._isDirty = true;
    //this.worldPosition = new Vector(0,0);
    //this.worldScale =  new Vector(1,1);
    //this.worldRotation = 0;
    //this.bounds = new BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
    //this.globalBounds = new BoundingBox(0,0,1,1); // defined by render
  }

  _createClass(Transform, [{
    key: 'markDirty',
    value: function markDirty() {
      this._isDirty = true;
    }
  }, {
    key: 'destroy',
    value: function destroy() {

      delete this.position;
      delete this.scale;
      delete this.matrix;
      delete this.worldPosition;
      delete this.worldScale;
      delete this.origin;
      delete this.bounds;
      delete this.globalBounds;
      delete this._cosSin;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.matrix.setIdentity();
      this._isDirty = true;
      this._cosSin.x = 1;
      this._cosSin.y = 0;
      this.position.set(0, 0);
      this.angle = 0;
      this.rotation = 0;
      this._oldRotation = 0;
      this.origin.set(0, 0);
      this.scale.set(0, 0);
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),

/***/ "./transform/UpdateBounds.js":
/*!***********************************!*\
  !*** ./transform/UpdateBounds.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateBounds;

var _ComputeDelimiterPoint = __webpack_require__(/*! ./ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateBounds(bounds, x, y, width, height, cosSin, origin) {

    var coords = [];

    coords[0] = (0, _ComputeDelimiterPoint2.default)(x, y, cosSin, origin);
    coords[1] = (0, _ComputeDelimiterPoint2.default)(x + width, y, cosSin, origin);
    coords[2] = (0, _ComputeDelimiterPoint2.default)(x, y + height, cosSin, origin);
    coords[3] = (0, _ComputeDelimiterPoint2.default)(x + width, y + height, cosSin, origin);

    bounds.min.x = Math.min(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.min.y = Math.min(coords[0].y, coords[1].y, coords[2].y, coords[3].y);

    bounds.max.x = Math.max(coords[0].x, coords[1].x, coords[2].x, coords[3].x);
    bounds.max.y = Math.max(coords[0].y, coords[1].y, coords[2].y, coords[3].y);
}

/***/ }),

/***/ "./transform/UpdateTransform.js":
/*!**************************************!*\
  !*** ./transform/UpdateTransform.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransform;

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Matrix = __webpack_require__(/*! ../math/Matrix */ "./math/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

* | 0 | 3 | 6 | * | a | d | x |
* | 1 | 4 | 7 | * | b | e | y |
* | 2 | 5 | 8 | * | c | f | 1 |

*/

function UpdateTransform(transform, parentTransform) {

    //if (parentMatrix === undefined) parentMatrix = null;
    if (!transform._isDirty && !parentTransform._isDirty) return;

    transform.rotation = transform.angle * _MathUtils2.default.degToRad;

    // if (transform.rotation % MathUtils.TAU) {


    if (transform.rotation !== transform._oldRotation) {
        transform._oldRotation = transform.rotation;
        transform._cosSin.y = Math.sin(transform.rotation);
        transform._cosSin.x = Math.cos(transform.rotation);
    }

    transform.matrix.setModelMatrix(transform.position, transform.scale, transform._cosSin, transform.origin).concat(parentTransform.matrix);

    // } else {

    /*a  = transform.scale.x;
    d  = transform.scale.y;
    x =  transform.position.x;
    y =  transform.position.y;
    x -= transform.origin.x * a;
    y -= transform.origin.y * d;
      wt.a  = a  * pt.a;
    wt.b  = a  * pt.b;
    wt.c  = d  * pt.c;
    wt.d  = d  * pt.d;
    wt.x = x * pt.a + y * pt.c + pt.x;
    wt.y = x * pt.b + y * pt.d + pt.y;*/

    //  }

    //transform.worldPosition.set(wt.x ,wt.y);
    //transform.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
    //transform.worldRotation = Math.atan2(-wt.c, wt.d);
}

/***/ }),

/***/ "./transform/UpdateTransformBounds.js":
/*!********************************************!*\
  !*** ./transform/UpdateTransformBounds.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = UpdateTransformBounds;

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./math/MathUtils.js");

var _MathUtils2 = _interopRequireDefault(_MathUtils);

var _Vector = __webpack_require__(/*! ../math/Vector */ "./math/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _ComputeDelimiterPoint = __webpack_require__(/*! ./ComputeDelimiterPoint */ "./transform/ComputeDelimiterPoint.js");

var _ComputeDelimiterPoint2 = _interopRequireDefault(_ComputeDelimiterPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UpdateTransformBounds(bounds, frame, transform) {

    var coords = [];
    /* let scale = Vector.abs(transform.scale);
     let pos = transform.position;
     let anchor = transform.origin;
     let size = {
       x : frame.width * scale.x,
       y : frame.height * scale.y
     };
    
     anchor.x *= scale.x;
     anchor.y *= scale.y;
     pos.x -= anchor.x;
     pos.y -= anchor.y;
     anchor.x += pos.x;
     anchor.y += pos.y;*/

    //coords[0] = ComputeDelimiterPoint( pos.x, pos.y, transform._cosSin, anchor);
    //coords[1] = ComputeDelimiterPoint( pos.x + size.x,  pos.y, transform._cosSin, anchor);
    //coords[2] = ComputeDelimiterPoint( pos.x , pos.y + size.y, transform._cosSin, anchor);
    //coords[3] = ComputeDelimiterPoint( pos.x + size.x , pos.y + size.y, transform._cosSin, anchor);

    var top = transform.matrix.transformPoint(0, 0);
    var left = transform.matrix.transformPoint(frame.width, 0);
    var bottom = transform.matrix.transformPoint(0, frame.height);
    var right = transform.matrix.transformPoint(frame.width, frame.height);

    bounds.min.x = Math.min(top.x, left.x, bottom.x, right.x);
    bounds.min.y = Math.min(top.y, left.y, bottom.y, right.y);
    bounds.max.x = Math.max(top.x, left.x, bottom.x, right.x);
    bounds.max.y = Math.max(top.y, left.y, bottom.y, right.y);
}

// position (vector)
// scale (vector)
// rotation (vector x = cos, y = sin)
/*
setup(pos, scale, rotation, anchor, width, height) {
    var coords = [];
  var negx = 1;
  var negy = 1;
    if (scale.x < 0)
        negx = -1;
  if (scale.y < 0)
        negy = -1;

    this.size.x = width*scale.x*negx;
  this.size.y = height*scale.y*negy;
  anchor.x *= scale.x*negx;
  anchor.y *= scale.y*negy;
  pos.x -= anchor.x;
  pos.y -= anchor.y;
  anchor.x += pos.x;
  anchor.y += pos.y;
    var callback = null;
    if (rotation instanceof  scintilla.Vector)
      callback = this['calcCoordsCosSin'];
    else
      callback = this['calcCoords'];
    coords[0] = callback( pos.x, pos.y, anchor, rotation);
  coords[1] = callback( pos.x + this.size.x,  pos.y, anchor,rotation);
    coords[2] = callback( pos.x , pos.y + this.size.y, anchor,rotation);
  coords[3] = callback( pos.x + this.size.x , pos.y + this.size.y,anchor, rotation);

    this.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
    this.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
  this.center.x = pos.x+(this.max.x-this.min.x)/2;
  this.center.y = pos.y+(this.max.y-this.min.y)/2;
  this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);
  }

setByGameObject(gameObject, local) {
    //if (gameObject.render != null) {
      if (local) {
      this.setup(gameObject.position,
              gameObject.scale,
              gameObject._cosSin,
              gameObject.render.origin,
              gameObject.render.width,
              gameObject.render.height
            );
    } else {
        var frame = gameObject.component['render'].frame;
        var pos = {x:gameObject.worldPosition.x, y:gameObject.worldPosition.y};
      var org = {
        x:gameObject.origin.x * frame.width,
        y:gameObject.origin.y * frame.height};
        pos.x += gameObject.game.camera.view.x;
      pos.y += gameObject.game.camera.view.y;
        this.setup(pos,
              gameObject.worldScale,
              gameObject.worldRotation,
              org,
              frame.width,
              frame.height
            );
    }

  return this;

}

setByShape(shape,position) {

  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  var type = shape.getType();
    if (type == "Polygon") {
      var points = shape.getPoints();
      points.forEach(function (point) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
      });
  }
    if (position !== undefined) {
    minX += position.x;
    minY += position.y;
    maxX += position.x;
    maxY += position.y;
  }

  this.min.set(minX,minY);
  this.max.set(maxX,maxY)
  this.box.set(minX,minY,maxX-minX,maxY-minY);
  }
  calcCoordsCosSin(x, y, anchor, cos_and_sin) {
    var coord = {x:0,y:0};
    coord.x = anchor.x + ((x-anchor.x) * cos_and_sin.x) - ((y-anchor.y) * cos_and_sin.y);
  coord.y = anchor.y - ((x-anchor.x) * cos_and_sin.y) - ((y-anchor.y) * cos_and_sin.x);
      return coord;
  }
  calcCoords(x,y,anchor,rotation) {
    var coord = {x:0,y:0};
    coord.x = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
  coord.y = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));
      return coord;
  }*/

/***/ }),

/***/ "./utils/Base64Utils.js":
/*!******************************!*\
  !*** ./utils/Base64Utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base64Utils = {
    decode: function decode(str) {
        return window.atob(str);
        // Base64.decode(encodedString);
    },
    decodeToUint32: function decodeToUint32(str) {
        var bin = window.atob(str);
        var len = bin.length;
        var bytes = new Array(len);

        for (var i = 0; i < len; i += 4) {
            bytes[i / 4] = (bin.charCodeAt(i) | bin.charCodeAt(i + 1) << 8 | bin.charCodeAt(i + 2) << 16 | bin.charCodeAt(i + 3) << 24) >>> 0;
        }

        return bytes;
    },
    encode: function encode(str) {
        return window.btoa(str);
        // Base64.encode(string);
    }
};

Object.freeze(Base64Utils);

module.exports = Base64Utils;

/***/ }),

/***/ "./utils/Path.js":
/*!***********************!*\
  !*** ./utils/Path.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Path = {
  getExtension: function getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || "";
  },
  getFilename: function getFilename(path) {
    return path.split('\\').pop().split('/').pop() || path;
  },
  getFilenameWithoutExtension: function getFilenameWithoutExtension(path) {
    return this.removeExtension(this.getFilename(path));
  },
  removeExtension: function removeExtension(path) {
    return path.substr(0, path.lastIndexOf('.')) || path;
  },
  getPath: function getPath(path) {
    return path.substr(0, path.lastIndexOf("/") + 1) || "";
  },
  getRootPath: function getRootPath(path) {
    return path.substr(0, path.indexOf("/") + 1) || path;
  },
  getPathWithoutRoot: function getPathWithoutRoot(path) {
    var s = path.indexOf("/") + 1 || 0;
    var l = path.lastIndexOf("/") - s + 1 || path.length;
    return path.substr(s, l) || path;
  },
  getDirectoryName: function getDirectoryName(path) {
    var dir = path.split('/');
    var len = dir.length;
    if (len <= 1) return dir[dir.length - 1];else return dir[dir.length - 2];
  },
  getURL: function getURL(url, baseURL) {
    if (!url) return null;

    if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) return url;else return baseURL + url;
  }
};

Object.freeze(Path);

exports.default = Path;


module.exports = Path;

/***/ }),

/***/ "./utils/Validate.js":
/*!***************************!*\
  !*** ./utils/Validate.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Validate = {
    isFunction: function isFunction(value) {
        return value instanceof Function;
    },
    isClass: function isClass(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },
    isArray: function isArray(value) {
        return Array.isArray(value);
    },
    isNumber: function isNumber(value) {
        return !isNaN(value);
    }
};

Object.freeze(Validate);

exports.default = Validate;


module.exports = Validate;

/***/ }),

/***/ "./utils/object/DeepFreeze.js":
/*!************************************!*\
  !*** ./utils/object/DeepFreeze.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = DeepFreeze;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// To do so, we use this function.
function DeepFreeze(obj) {

    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
    propNames.forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) == 'object' && prop !== null) deepFreeze(prop);
    });

    // Freeze self (no-op if already frozen)
    return Object.freeze(obj);
}

/***/ }),

/***/ "./utils/object/MakeImmutable.js":
/*!***************************************!*\
  !*** ./utils/object/MakeImmutable.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MakeImmutable;

var _DeepFreeze = __webpack_require__(/*! ./DeepFreeze */ "./utils/object/DeepFreeze.js");

var _DeepFreeze2 = _interopRequireDefault(_DeepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MakeImmutable(value, deep) {

    if (deep === undefined) deep = false;

    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            if (deep) {
                (0, _DeepFreeze2.default)(value[i]);
            } else {
                Object.freeze(value[i]);
            }
        }
    } else {

        if (deep) {
            (0, _DeepFreeze2.default)(value);
        } else {
            Object.freeze(value);
        }
    }

    return value;
}

/***/ }),

/***/ "./utils/object/ObjectExtend.js":
/*!**************************************!*\
  !*** ./utils/object/ObjectExtend.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ObjectExtend;
function ObjectExtend(source, target, deepCopy) {

    var argsLength = arguments.length;
    target = arguments[1] || {}, deepCopy = deepCopy || false;

    for (var property in source) {

        var src = source[property];
        var dst = target[property];

        if (deepCopy) {

            // TODO
            /*
            if(	
            x !== "super" && //Never clone the super referance
            from[x] instanceof Function && //Only overwrite functions
            !(from[x].prototype instanceof Class) //Never overwrite referances to classes
            ){
            //Never create circular super referances.
            to[x] = from[x].super || superCopy(from, from[x]);
            }
            */

        } else if (dst === undefined) {
            target[property] = src;
        }
    }
}

/***/ }),

/***/ "./utils/object/ObjectGet.js":
/*!***********************************!*\
  !*** ./utils/object/ObjectGet.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectGettter = function () {
    function ObjectGettter() {
        _classCallCheck(this, ObjectGettter);
    }

    _createClass(ObjectGettter, [{
        key: 'value',
        value: function value(obj, key, defaultValue) {
            var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

            if (!obj || type === 'number' || type === 'string') return defaultValue;else if (obj.hasOwnProperty(key) && obj[key] !== undefined) return obj[key];else return defaultValue;
        }

        // Get value in complex object

    }, {
        key: 'propertyValue',
        value: function propertyValue(source, key, defaultValue) {
            if (!source || typeof source === 'number') return defaultValue;else if (source.hasOwnProperty(key)) return source[key];else if (key.indexOf('.')) {
                var keys = key.split('.');
                var parent = source;
                var value = defaultValue;

                for (var i = 0; i < keys.length; i++) {
                    if (parent.hasOwnProperty(keys[i])) {
                        value = parent[keys[i]];
                        parent = parent[keys[i]];
                    } else {
                        value = defaultValue;
                        break;
                    }
                }

                return value;
            } else {
                return defaultValue;
            }
        }
    }]);

    return ObjectGettter;
}();

;

var ObjectGet = new ObjectGettter();

Object.freeze(ObjectGet);

exports.default = ObjectGet;

/***/ })

/******/ });
});
//# sourceMappingURL=scintilla.dev.js.map