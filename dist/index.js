/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
var selectionDateObj = __webpack_require__(6);
var pastTimeObj = __webpack_require__(7);

var oButton = document.getElementsByClassName('time-button')[0];
oButton.onclick = function () {
    if (oButton.getAttribute('class') == 'time-button') {
        selectionDateObj.comprehensive();
        pastTimeObj.startUp();
    } else if (oButton.getAttribute('class') == 'death-button') {}
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.time {\n  width: 100%;\n  height: 100%;\n}\n.time .surface {\n  width: 100vw;\n  height: 40vh;\n  position: relative;\n  margin-top: 20%;\n  transition: all 1s;\n}\n.time .surface .clock-dial {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -103px 0 0 -103px;\n  border: 6px solid rgba(0, 0, 0, 0.8);\n  border-radius: 50%;\n}\n.time .surface .clock-dial .hour-hand,\n.time .surface .clock-dial .minute-hand,\n.time .surface .clock-dial .second-hand {\n  transition: all 1s;\n  width: 3px;\n  position: absolute;\n  transform: rotate(0deg);\n  left: 50%;\n  margin-left: -1.5px;\n}\n.time .surface .clock-dial .hour-hand {\n  height: 80px;\n  top: 30px;\n  background-color: #000;\n  transform-origin: center 70px;\n}\n.time .surface .clock-dial .minute-hand {\n  height: 90px;\n  top: 20px;\n  background-color: #000;\n  transform-origin: center 80px;\n}\n.time .surface .clock-dial .second-hand {\n  height: 95px;\n  top: 15px;\n  background-color: red;\n  transform-origin: center 85px;\n}\n.time .information {\n  width: 100%;\n  height: 30vh;\n  transition: all 1s;\n}\n.time .information .start {\n  font-size: 20px;\n  line-height: 30px;\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: 600;\n  padding: 0 180px;\n}\n.time .information .existence {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.time .information .existence .existence-display {\n  font-size: 20px;\n  line-height: 40px;\n  text-align: center;\n}\n.time .information .existence .existence-words {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 30px;\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.time .information .existence .display-information {\n  width: 355px;\n  height: auto;\n  margin-left: 10px;\n}\n.time .information .existence .display-information .each-information {\n  width: 117px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  font-size: 0;\n}\n.time .information .existence .display-information .each-information.each-information:nth-child(2) {\n  border-left: none;\n}\n.time .information .existence .display-information .each-information.each-information:nth-child(3) {\n  border-left: none;\n}\n.time .information .existence .display-information .each-information.each-information:nth-child(4) {\n  border-top: none;\n}\n.time .information .existence .display-information .each-information.each-information:nth-child(5) {\n  border-top: none;\n  border-left: none;\n}\n.time .information .existence .display-information .each-information.each-information:nth-child(6) {\n  border-top: none;\n  border-left: none;\n}\n.time .information .existence .display-information .each-information .each-valuer {\n  line-height: 30px;\n  font-size: 18px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.7);\n}\n.time .information .death {\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.time .information .death .existence-display {\n  font-size: 20px;\n  line-height: 40px;\n  text-align: center;\n}\n.time .information .death .existence-words {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 30px;\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.time .information .death .display-information {\n  width: 355px;\n  height: auto;\n  margin-left: 10px;\n}\n.time .information .death .display-information .each-information {\n  width: 117px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  font-size: 0;\n}\n.time .information .death .display-information .each-information.each-information:nth-child(2) {\n  border-left: none;\n}\n.time .information .death .display-information .each-information.each-information:nth-child(3) {\n  border-left: none;\n}\n.time .information .death .display-information .each-information.each-information:nth-child(4) {\n  border-top: none;\n}\n.time .information .death .display-information .each-information.each-information:nth-child(5) {\n  border-top: none;\n  border-left: none;\n}\n.time .information .death .display-information .each-information.each-information:nth-child(6) {\n  border-top: none;\n  border-left: none;\n}\n.time .information .death .display-information .each-information .each-valuers {\n  line-height: 30px;\n  font-size: 18px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.7);\n}\n.time .state {\n  width: 100%;\n  height: 42px;\n  position: relative;\n  transition: all 1s;\n}\n.time .state .time-button,\n.time .state .death-button {\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  width: 200px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.5);\n  letter-spacing: 10px;\n  cursor: pointer;\n  outline: none;\n}\n.data {\n  width: 80vw;\n  height: auto;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  font-size: 0;\n  display: none;\n  transition: all 1s;\n}\n.data .specific-date {\n  width: auto;\n  height: 40px;\n  border-bottom: 2px solid #2a5caa;\n  color: #2a5caa;\n  font-size: 19px;\n  line-height: 40px;\n  padding-left: 15px;\n}\n.data .year,\n.data .month,\n.data .day {\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  height: 180px;\n  margin-left: 15px;\n  overflow: hidden;\n}\n.data .choice {\n  width: 80px;\n  height: auto;\n  transition: all 0.5s;\n}\n.data .choice li {\n  height: 40px;\n  font-size: 18px;\n  color: #555;\n  list-style: none;\n  line-height: 40px;\n  text-align: center;\n}\n.data .choice li.discolour {\n  color: #2a5caa;\n}\n.data .push-button {\n  width: 100%;\n  height: 45px;\n}\n.data .push-button .button-a {\n  font-size: 20px;\n  padding: 9px 40px;\n  line-height: 45px;\n  text-decoration: none;\n  font-weight: 600;\n  letter-spacing: 15px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.data .indicate {\n  position: absolute;\n  width: 80px;\n  height: 1px;\n  background-color: #2a5caa;\n  top: 40px;\n}\n.data .indicate::after {\n  content: '';\n  position: absolute;\n  width: 80px;\n  height: 1px;\n  background-color: #2a5caa;\n  top: 40px;\n}\n.background-shadow {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  transition: all 1s;\n}\n#uio {\n  transform: translateY(12px);\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
    contrast: 0,
    year: 0,
    month: 0,
    day: 0,
    numberOfDays: 0,
    indexDay: 1,
    informationArr: [0, 1, 1],
    lock: true,
    promptRendering: function () {
        var oDiv = document.getElementsByClassName('specific-date')[0];
        var oSpan = oDiv.getElementsByTagName('span');
        oSpan[0].innerHTML = this.year;
        oSpan[1].innerHTML = this.month;
        oSpan[2].innerHTML = this.day;
    },
    renderingDay: function () {
        var oUl = document.getElementsByClassName('choice');
        elementDay = '<li></li>';
        this.monthlyNumberOfDays();
        for (var i = 1; i <= this.numberOfDays; i++) {
            elementDay += '<li>' + i + '日</li>';
        }
        elementDay += '<li></li><li></li><li></li>';
        oUl[2].innerHTML = elementDay;
        oUl[2].getElementsByTagName('li')[this.indexDay].setAttribute('class', 'discolour');
    },
    rendering: function () {
        var nowYear = new Date().getUTCFullYear();
        this.year = nowYear;
        this.month = 1;
        this.day = 1;
        var oUl = document.getElementsByClassName('choice');
        minimumYear = nowYear - 100;
        elementYear = '<li></li>';
        elementMonth = '<li></li>';
        for (var i = nowYear; i >= minimumYear; i--) {
            if (i == nowYear) {
                elementYear += '<li class="discolour">' + i + '年</li>';
            } else {
                elementYear += '<li>' + i + '年</li>';
            }
        }
        elementYear += '<li></li><li></li><li></li>';
        oUl[0].innerHTML = elementYear;
        for (var j = 1; j < 13; j++) {
            if (j == 1) {
                elementMonth += '<li class="discolour">' + j + '月</li>';
            } else {
                elementMonth += '<li>' + j + '月</li>';
            }
        }
        elementMonth += '<li></li><li></li><li></li>';
        oUl[1].innerHTML = elementMonth;
        this.renderingDay();
        this.promptRendering();
    },
    monthlyNumberOfDays: function () {
        switch (this.month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                this.numberOfDays = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                this.numberOfDays = 30;
                break;
        }
    },
    yearOfJudgment: function () {
        if (this.year % 4 == 0 && this.month == 2) {
            this.numberOfDays = 29;
            this.renderingDay();
        } else if (this.year % 4 != 0 && this.month == 2) {
            this.numberOfDays = 28;
            this.renderingDay();
        }
    },
    specificDate: function (number, figure) {
        if (number === 0) {
            this.year = parseInt(figure);
            this.yearOfJudgment();
        } else if (number === 1) {
            this.month = parseInt(figure);
            this.monthlyNumberOfDays();
            this.renderingDay();
            this.yearOfJudgment();
        } else if (number === 2) {
            this.day = parseInt(figure);
        }
    },
    location: function (moveNumbers, oHeight) {
        var model = parseInt(-moveNumbers) % 40;
        //计算出li是否挪动
        var reduce = parseInt(-moveNumbers) - model;
        //判断出li位置
        var except = (parseInt(-moveNumbers) - model) / 40;
        //判断方向
        if (this.contrast > moveNumbers) {
            if (model > 29) {
                return [reduce + 40, except + 2];
            } else {
                return [reduce, except + 1];
            }
        } else {
            if (model > 20) {
                return [reduce - 40, except - 1];
            } else {
                return [reduce, except];
            }
        }
        this.contrast = moveNumbers;
    },
    slide: function () {
        var beforeY = [0, 0, 0];
        var move = [0, 0, 0];
        var storage = [0, 0, 0];
        var oUl = document.getElementsByClassName('choice');
        var oThis = this;
        for (var i = 0; i < oUl.length; i++) {
            (function (i) {
                oUl[i].ontouchmove = function (e) {
                    var y = e.changedTouches[0].clientY;
                    var oHeight = this.offsetHeight;
                    var oLi = this.getElementsByTagName('li');
                    for (var j = 0; j < oLi.length; j++) {
                        oLi[j].setAttribute('class', ' ');
                    }
                    oHeight = 200 - oHeight;
                    if (!beforeY[i]) {
                        beforeY[i] = y;
                    }
                    move[i] = -(beforeY[i] - y);
                    beforeY[i] = y;
                    if (-50 < move[i] && move[i] < 50) {
                        storage[i] += move[i];
                        if (storage[i] > 1) {
                            this.style.transform = 'translateY(0px)';
                            storage[i] = 0;
                        } else if (storage[i] < oHeight) {
                            this.style.transform = 'translateY(' + oHeight + 'px)';
                            storage[i] = oHeight;
                        } else {
                            this.style.transform = 'translateY(' + storage[i] + 'px)';
                            var moveString = this.style.transform;
                            var moveArr = moveString.split('(');
                            var moveNumbers = parseFloat(moveArr[1]);
                            this.ontouchend = function () {
                                var accept = oThis.location(moveNumbers, oHeight);
                                this.style.transform = 'translateY(-' + accept[0] + 'px)';
                                accept[1] = accept[1] == 0 ? 1 : accept[1];
                                oLi[accept[1]].setAttribute('class', 'discolour');
                                if (i == 2) {
                                    oThis.indexDay = accept[1];
                                }
                                var figure = this.getElementsByClassName('discolour')[0].innerHTML;
                                oThis.specificDate(i, figure);
                                oThis.promptRendering();
                                oThis.informationArr[0] = oThis.year;
                                oThis.informationArr[1] = oThis.month;
                                oThis.informationArr[2] = oThis.day;
                                location.hash = oThis.informationArr;
                            };
                        }
                    }
                };
            })(i);
        }
    },
    generationDateBox: function () {
        var oDiv = document.getElementsByClassName('data')[0];
        oDiv.setAttribute('style', 'display: block');
        var oDiv1 = document.getElementsByClassName('background-shadow')[0];
        if (this.lock) {
            oDiv.innerHTML = `<div class="specific-date">
                            <span>1994</span>-<span>02</span>-<span>28</span>
                        </div>
                        <div class="year">  
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="month">
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="day">
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="push-button">
                            <a href="javaScript:void(0)" class="button-a">取消</a>
                            <a href="javaScript:void(0)" class="button-a">确定</a>
                        </div>`;
            this.lock = false;
        }

        oDiv1.setAttribute('style', 'display: block');
    },
    comprehensive: function () {
        this.generationDateBox();
        this.rendering();
        this.slide();
        this.informationArr[0] = this.year;
        location.hash = this.informationArr;
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
    year: 0,
    month: 0,
    day: 0,
    nowHours: 0,
    nowMinutes: 0,
    nowSeconds: 0,
    nowDate: 0,
    nowMonth: 0,
    nowFullYear: 0,
    clocksAndWatches: function () {
        var hourValue = 0;
        var oStyle = document.createElement('style');
        //小时
        if (this.nowHours > 12) {
            hourValue = this.nowHours - 12;
        } else {
            hourValue = this.nowHours;
        }
        var hourDegree = 360 / 12;
        hourDegree *= hourValue;
        var hourDegrees = hourDegree + 360;
        //分钟
        var minutesDegree = 360 / 60;
        minutesDegree *= this.nowMinutes;
        hourDegree += 30 / 60 * this.nowMinutes;
        var minutesDegrees = minutesDegree + 360;
        //秒
        var secondsDegree = 360 / 60;
        secondsDegree *= this.nowSeconds;
        hourDegree += 30 / 360 * this.nowSeconds;
        minutesDegree += 6 / 60 * this.nowSeconds;
        var secondsDegrees = secondsDegree + 360;
        oStyle.innerHTML = '@keyframes hour\
                        {\
                            from {transform:rotate(' + hourDegree + 'deg)}\
                            to {transform:rotate(' + hourDegrees + 'deg)}\
                        }\
                        @keyframes minutes\
                        {\
                            from {transform:rotate(' + minutesDegree + 'deg)}\
                            to {transform:rotate(' + minutesDegrees + 'deg)}\
                        }\
                        @keyframes seconds\
                        {\
                            from {transform:rotate(' + secondsDegree + 'deg)}\
                            to {transform:rotate(' + secondsDegrees + 'deg)}\
                        }\
                        @keyframes hours\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate(' + hourDegree + 'deg)}\
                        }\
                        @keyframes minutess\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate(' + minutesDegree + 'deg)}\
                        }\
                        @keyframes secondss\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate(' + secondsDegree + 'deg)}\
                        }';
        var oHead = document.getElementsByTagName('head')[0].appendChild(oStyle);
        document.getElementsByClassName('hour-hand')[0].setAttribute('style', 'animation:hours 1s linear,hour 86400s linear 1s infinite');
        document.getElementsByClassName('minute-hand')[0].setAttribute('style', 'animation:minutess 1s linear,minutes 3600s linear 1s infinite');
        document.getElementsByClassName('second-hand')[0].setAttribute('style', 'animation:secondss 1s linear,seconds 60s linear 1s infinite');
    },
    calculatingAge: function () {
        var age = this.nowFullYear - this.year - 1;
        var days = 0;
        var seconds = 0;
        if (this.month == 2 && this.day == 29) {
            if (this.nowFullYear % 4 != 0) {
                this.day = 28;
            }
        }
        if (this.nowMonth < this.month) {
            for (var i = this.month; i <= 12; i++) {
                if (i == 2 && (this.nowFullYear - 1) % 4 == 0) {
                    days += 29;
                    continue;
                } else if (i == 2 && (this.nowFullYear - 1) % 4 != 0) {
                    days += 28;
                    continue;
                }
                switch (i) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days += 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days += 30;
                        break;
                }
            }
            days -= this.day;
            for (var j = this.nowMonth; j > 0; j--) {
                if (j == 2 && this.nowFullYear % 4 == 0) {
                    days += 29;
                    continue;
                } else if (j == 2 && this.nowFullYear % 4 != 0) {
                    days += 28;
                    continue;
                }
                switch (j) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days += 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days += 30;
                        break;
                }
            }
            if (this.nowMonth == 2 && this.nowFullYear % 4 == 0) {
                days -= 29 - this.nowDate;
            } else if (this.nowMonth == 2 && this.nowFullYear % 4 != 0) {
                days -= 28 - this.nowDate;
            } else {
                switch (this.nowMonth) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days -= 31 - this.nowDate;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days -= 30 - this.nowDate;
                        break;
                }
            }
            seconds = days * 24 * 60 * 60 - 8640 + (this.nowHours * 60 + this.nowMinutes) * 60;
        } else if (this.nowMonth > this.month) {
            age += 1;
            for (var i = this.month; i <= this.nowMonth; i++) {
                if (i == 2 && this.nowFullYear % 4 == 0) {
                    days += 29;
                    continue;
                } else if (i == 2 && this.nowFullYear % 4 != 0) {
                    days += 28;
                    continue;
                }
                switch (i) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days += 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days += 30;
                        break;
                }
            }
            days -= this.day;
            if (this.nowMonth == 2 && this.nowFullYear % 4 == 0) {
                days -= 29 - this.nowDate;
            } else if (this.nowMonth == 2 && this.nowFullYear % 4 != 0) {
                days -= 28 - this.nowDate;
            } else {
                switch (this.nowMonth) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days -= 31 - this.nowDate;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days -= 30 - this.nowDate;
                        break;
                }
            }
            seconds = days * 24 * 60 * 60 - 8640 + (this.nowHours * 60 + this.nowMinutes) * 60;
        } else if (this.nowMonth = this.month) {
            if (this.day < this.nowDate) {
                age += 1;
                for (var i = this.month; i <= this.nowMonth; i++) {
                    if (i == 2 && this.nowFullYear % 4 == 0) {
                        days += 29;
                        continue;
                    } else if (i == 2 && this.nowFullYear % 4 != 0) {
                        days += 28;
                        continue;
                    }
                    switch (i) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days += 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days += 30;
                            break;
                    }
                }
                days -= this.day;
                if (this.nowMonth == 2 && this.nowFullYear % 4 == 0) {
                    days -= 29 - this.nowDate;
                } else if (this.nowMonth == 2 && this.nowFullYear % 4 != 0) {
                    days -= 28 - this.nowDate;
                } else {
                    switch (this.nowMonth) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days -= 31 - this.nowDate;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days -= 30 - this.nowDate;
                            break;
                    }
                }
                seconds = days * 24 * 60 * 60 - 8640 + (this.nowHours * 60 + this.nowMinutes) * 60;
            } else if (this.day > this.nowDate) {
                for (var i = this.month; i <= 12; i++) {
                    if (i == 2 && (this.nowFullYear - 1) % 4 == 0) {
                        days += 29;
                        continue;
                    } else if (i == 2 && (this.nowFullYear - 1) % 4 != 0) {
                        days += 28;
                        continue;
                    }
                    switch (i) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days += 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days += 30;
                            break;
                    }
                }
                days -= this.day;
                for (var j = this.nowMonth; j > 0; j--) {
                    if (j == 2 && this.nowFullYear % 4 == 0) {
                        days += 29;
                        continue;
                    } else if (j == 2 && this.nowFullYear % 4 != 0) {
                        days += 28;
                        continue;
                    }
                    switch (j) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days += 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days += 30;
                            break;
                    }
                }
                if (this.nowMonth == 2 && this.nowFullYear % 4 == 0) {
                    days -= 29 - this.nowDate;
                } else if (this.nowMonth == 2 && this.nowFullYear % 4 != 0) {
                    days -= 28 - this.nowDate;
                } else {
                    switch (this.nowMonth) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days -= 31 - this.nowDate;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days -= 30 - this.nowDate;
                            break;
                    }
                }
                seconds = days * 24 * 60 * 60 - 8640 + (this.nowHours * 60 + this.nowMinutes) * 60;
            } else if (this.day = this.nowDate) {
                age += 1;
                days = 0;
                seconds = (this.nowHours * 60 + this.nowMinutes) * 60;
            }
        }
        this.addRendering(age, days, seconds);
        this.numberOfSeconds(days);
    },
    numberOfSeconds: function (days) {
        var displayAge = document.getElementsByClassName('display-age')[0];
        var age = Number(displayAge.innerHTML);
        var displaySecond = document.getElementsByClassName('display-second')[0];
        var seconds = Number(displaySecond.innerHTML);
        var oThis = this;
        var node = document.createElement('div');
        node.setAttribute('class', 'death');
        node.innerHTML = `<p class='existence-display'>你还有 <span class='display-ages'></span>.<span class='display-seconds'></span> 岁了</p>
                        <p class='existence-words'>在这个世界上，你还有</p>
                        <div class='display-information'>
                            <div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>年</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>月</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>周</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>天</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>小时</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1000000000</p>
                                <p class='each-valuers'>分钟</p>
                            </div>
                        </div>`;
        document.getElementsByClassName('information')[0].appendChild(node);
        setInterval(function () {
            seconds += 1;
            if (seconds == 31536000) {
                age += 1;
            }
            oThis.addRendering(age, days, seconds, 1);
        }, 1000);
        var button = document.getElementsByClassName('death-button')[0];
        var death = document.getElementsByClassName('death')[0];
        var existence = document.getElementsByClassName('existence')[0];
        var yichen = true;
        button.onclick = function () {
            if (yichen) {
                death.setAttribute('style', 'display: block');
                existence.setAttribute('style', 'display: none');
                button.innerHTML = '生之钟';
                yichen = false;
            } else {
                death.setAttribute('style', 'display: none');
                existence.setAttribute('style', 'display: block');
                button.innerHTML = '死之钟';
                yichen = true;
            }
        };
    },
    addRendering: function (age, days, seconds, piao) {
        var sun = 0;
        for (var i = this.year; i < this.year + age; i++) {
            if (i % 4 == 0) {
                sun += 366;
            } else {
                sun += 365;
            }
        }
        // sun+=days;
        document.getElementsByClassName('display-age')[0].innerHTML = age;
        document.getElementsByClassName('display-second')[0].innerHTML = seconds;
        document.getElementsByClassName('each-valuer')[0].innerHTML = age;
        document.getElementsByClassName('each-valuer')[2].innerHTML = parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24 / 30);
        document.getElementsByClassName('each-valuer')[4].innerHTML = parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24 / 7);
        document.getElementsByClassName('each-valuer')[6].innerHTML = parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24);
        document.getElementsByClassName('each-valuer')[8].innerHTML = parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60);
        document.getElementsByClassName('each-valuer')[10].innerHTML = parseInt((sun * 24 * 60 * 60 + seconds) / 60);
        if (piao == 1) {
            document.getElementsByClassName('display-ages')[0].innerHTML = 100 - age;
            document.getElementsByClassName('display-seconds')[0].innerHTML = 31536000 - seconds;
            document.getElementsByClassName('each-valuers')[0].innerHTML = 100 - age;
            document.getElementsByClassName('each-valuers')[2].innerHTML = 1200 - parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24 / 30);
            document.getElementsByClassName('each-valuers')[4].innerHTML = 5214 - parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24 / 7);
            document.getElementsByClassName('each-valuers')[6].innerHTML = 36500 - parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60 / 24);
            document.getElementsByClassName('each-valuers')[8].innerHTML = 876000 - parseInt((sun * 24 * 60 * 60 + seconds) / 60 / 60);
            document.getElementsByClassName('each-valuers')[10].innerHTML = 52560001 - parseInt((sun * 24 * 60 * 60 + seconds) / 60);
        }
    },
    timeRotation: function () {
        var date = new Date();
        //获取小时
        this.nowHours = date.getHours();
        if (this.nowHours == 0) {
            this.nowHours = 24;
        }
        //获取分钟
        this.nowMinutes = date.getMinutes();
        //获取秒
        this.nowSeconds = date.getSeconds();
        //获取天
        this.nowDate = date.getDate();
        //获取月
        this.nowMonth = date.getMonth() + 1;
        //获取年
        this.nowFullYear = date.getFullYear();
        this.clocksAndWatches();
        this.calculatingAge();
    },
    getHash: function () {
        var hashString = location.hash;
        hashString = hashString.split('#');
        hashString = hashString[1].split(',');
        this.year = Number(hashString[0]);
        this.month = Number(hashString[1]);
        this.day = Number(hashString[2]);
        this.timeRotation();
    },
    confirmationOfCancellation: function () {
        var oDiv = document.getElementsByClassName('data')[0];
        var oDiv1 = document.getElementsByClassName('background-shadow')[0];
        var oA = document.getElementsByClassName('button-a');
        var oButton = document.getElementsByClassName('time-button')[0];
        var oThis = this;
        oA[0].onclick = function () {
            oDiv.setAttribute('style', 'display: none');
            oDiv1.setAttribute('style', 'display: none');
            return false;
        };
        oA[1].onclick = function () {
            oDiv.setAttribute('style', 'display: none');
            oDiv1.setAttribute('style', 'display: none');
            oButton.innerHTML = '死之钟';
            oButton.setAttribute('class', 'death-button');
            document.getElementsByClassName('surface')[0].setAttribute('style', 'margin-top: 10%');
            document.getElementsByClassName('information')[0].setAttribute('style', 'height: 42vh');
            var node = document.createElement('div');
            node.setAttribute('class', 'existence');
            node.innerHTML = `<p class='existence-display'>你已经 <span class='display-age'></span>.<span class='display-second'></span> 岁了</p>
                            <p class='existence-words'>在这个世界上，你已经存在</p>
                            <div class='display-information'>
                                <div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>年</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>月</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>周</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>天</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>小时</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1000000000</p>
                                    <p class='each-valuer'>分钟</p>
                                </div>
                            </div>`;
            document.getElementsByClassName('information')[0].appendChild(node);
            document.getElementsByClassName('start')[0].setAttribute('style', 'display: none');
            oThis.getHash();
            return false;
        };
    },
    startUp: function () {
        this.confirmationOfCancellation();
    }
};

/***/ })
/******/ ]);