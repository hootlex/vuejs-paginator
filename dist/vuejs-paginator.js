(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePaginator"] = factory();
	else
		root["VuePaginator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _VPaginator = __webpack_require__(2);
	
	var _VPaginator2 = _interopRequireDefault(_VPaginator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _VPaginator2.default;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)
	module.exports = __webpack_require__(7)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(9)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./VPaginator.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./VPaginator.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e94f73a0&file=VPaginator.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VPaginator.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e94f73a0&file=VPaginator.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./VPaginator.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".numbered button{\r\n    position: relative;\r\n    float: left;\r\n    padding: 6px 12px;\r\n    margin-left: -1px;\r\n    line-height: 1.42857143;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n  }\r\n  .numbered .active-page {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #2e6da4;\r\n  }\r\n  .numbered .change-page {\r\n    color: #337ab7;\r\n    padding: 6px 10px;\r\n  }\r\n  .numbered .change-page[disabled] {\r\n    color: #777;\r\n  }\r\n  .simple button {\r\n    color: #337ab7;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n  }\r\n  .simple button[disabled] {\r\n    color: #777;\r\n  }\r\n  .v-paginator {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(8);
	
	exports.default = {
	  props: {
	    resource_url: {
	      type: String,
	      required: true
	    },
	    custom_template: '',
	    options: {
	      type: Object,
	      required: false,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      current_page: '',
	      last_page: '',
	      next_page_url: '',
	      prev_page_url: '',
	      config: {
	        remote_data: 'data',
	        remote_current_page: 'current_page',
	        remote_last_page: 'last_page',
	        remote_next_page_url: 'next_page_url',
	        remote_prev_page_url: 'prev_page_url',
	        previous_button_icon: 'glyphicon glyphicon-chevron-left',
	        previous_button_text: 'Previous',
	        next_button_icon: 'glyphicon glyphicon-chevron-right',
	        next_button_text: 'Next',
	        page_numbers: false,
	        max_buttons: 7,
	        ellipses: true,
	        page_button_text: ''
	      }
	    };
	  },
	
	  computed: {
	    pages: function pages() {
	      if (this.config.page_numbers) {
	        return _utils.utils.createPageNumbers(this.current_page, this.resource_url, this.last_page, this.config.max_buttons, this.config.ellipses, this.config.page_button_text);
	      }
	      return {};
	    }
	  },
	  methods: {
	    fetchData: function fetchData(pageUrl) {
	      pageUrl = pageUrl || this.resource_url;
	      var self = this;
	      this.$http.get(pageUrl, { headers: this.config.headers }).then(function (response) {
	        self.handleResponseData(response.data);
	      }).catch(function (response) {
	        console.log('Fetching data failed.', response);
	      });
	    },
	    handleResponseData: function handleResponseData(response) {
	      this.makePagination(response);
	      var data = _utils.utils.getNestedValue(response, this.config.remote_data);
	      this.$emit('update', data);
	    },
	    makePagination: function makePagination(data) {
	      this.current_page = _utils.utils.getNestedValue(data, this.config.remote_current_page);
	      this.last_page = _utils.utils.getNestedValue(data, this.config.remote_last_page);
	      this.next_page_url = this.current_page === this.last_page ? null : _utils.utils.getNestedValue(data, this.config.remote_next_page_url);
	      this.prev_page_url = this.current_page === 1 ? null : _utils.utils.getNestedValue(data, this.config.remote_prev_page_url);
	    },
	    initConfig: function initConfig() {
	      this.config = _utils.utils.mergeObjects(this.config, this.options);
	    }
	  },
	  watch: {
	    resource_url: function resource_url() {
	      this.fetchData();
	    }
	  },
	  created: function created() {
	    this.initConfig();
	    this.fetchData();
	  }
	};
	// </script>
	
	
	// <style>
	
	//   .numbered button{
	
	//     position: relative;
	
	//     float: left;
	
	//     padding: 6px 12px;
	
	//     margin-left: -1px;
	
	//     line-height: 1.42857143;
	
	//     color: #337ab7;
	
	//     text-decoration: none;
	
	//     background-color: #fff;
	
	//     border: 1px solid #ddd;
	
	//   }
	
	//   .numbered .active-page {
	
	//     color: #fff;
	
	//     background-color: #337ab7;
	
	//     border-color: #2e6da4;
	
	//   }
	
	//   .numbered .change-page {
	
	//     color: #337ab7;
	
	//     padding: 6px 10px;
	
	//   }
	
	//   .numbered .change-page[disabled] {
	
	//     color: #777;
	
	//   }
	
	//   .simple button {
	
	//     color: #337ab7;
	
	//     margin-left: 5px;
	
	//     margin-right: 5px;
	
	//   }
	
	//   .simple button[disabled] {
	
	//     color: #777;
	
	//   }
	
	//   .v-paginator {
	
	//     margin-top: 20px;
	
	//     margin-bottom: 20px;
	
	//   }
	
	// </style>
	// <template>
	
	//   <div class="v-paginator">
	
	//     <!-- Paginator with page numbers -->
	
	//     <div v-if="config.page_numbers" class="numbered">
	
	//       <span v-if="config.page_numbers">
	
	//         <div class="btn-group" role="group">
	
	//           <!-- Previous Button -->
	
	//           <button class="btn btn-default change-page" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
	
	//             <span v-if="!options.previous_button_text" :class="config.previous_button_icon"></span>
	
	//             <span v-else>{{config.previous_button_text}}</span>
	
	//           </button>
	
	
	//           <!-- Display a button for each page -->
	
	//           <button v-for="page in pages" @click="current_page != page.value ? fetchData(page.url) : ''"
	
	//                   class="btn btn-default" :class="{'active-page': current_page == page.value}">
	
	//             {{ page.name }}
	
	//           </button>
	
	
	//           <!-- Next Button -->
	
	//           <button class="btn btn-default change-page" @click="fetchData(next_page_url)" :disabled="!next_page_url">
	
	//             <span v-if="!options.next_button_text" :class="config.next_button_icon"></span>
	
	//             <span v-else>{{config.next_button_text}}</span>
	
	//           </button>
	
	//         </div>
	
	//       </span>
	
	//     </div>
	
	//     <!-- Simple Paginator -->
	
	//     <div v-else class="simple">
	
	//       <!-- Previous Button -->
	
	//       <button class="btn btn-default" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
	
	//         <span v-if="options.previous_button_icon" :class="config.previous_button_icon"></span>
	
	//         <span v-else>{{config.previous_button_text}}</span>
	
	//       </button>
	
	
	//       <span>Page {{current_page}} of {{last_page}}</span>
	
	
	//       <!-- Next Button -->
	
	//       <button class="btn btn-default" @click="fetchData(next_page_url)" :disabled="!next_page_url">
	
	//         <span v-if="options.next_button_icon" :class="config.next_button_icon"></span>
	
	//         <span v-else>{{config.next_button_text}}</span>
	
	//       </button>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mergeObjects = function mergeObjects(obj1, obj2) {
	  var obj3 = {};
	  for (var attrname in obj1) {
	    obj3[attrname] = obj1[attrname];
	  }
	  for (var _attrname in obj2) {
	    obj3[_attrname] = obj2[_attrname];
	  }
	  return obj3;
	};
	
	var getNestedValue = function getNestedValue(obj, path) {
	  var originalPath = path;
	  path = path.split('.');
	  var res = obj;
	  for (var i = 0; i < path.length; i++) {
	    res = res[path[i]];
	  }
	  if (typeof res === 'undefined') console.log('[VuePaginator] Response doesn\'t contain key ' + originalPath + '!');
	  return res;
	};
	
	var createPageNumbers = function createPageNumbers(currentPage, resourceUrl, lastPage, maxButtons, ellipsesEnabled, customText) {
	  var ext = resourceUrl.match(/\.\D*$/) ? resourceUrl.match(/\.\D*$/)[0] : '';
	  var rootUrl = resourceUrl.replace(new RegExp(ext + '$'), '').replace(/\d*$/, '');
	  var allPages = generatePagesArray(currentPage, lastPage, maxButtons, rootUrl, ext, ellipsesEnabled, customText);
	  return allPages;
	};
	
	function generatePagesArray(currentPage, totalPages, maxButtons, rootUrl, ext, ellipsesEnabled) {
	  var customText = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
	
	  // Sets the default value for maxButtons (7) if the provided maxButtons < 1
	  maxButtons = maxButtons < 1 ? 7 : maxButtons;
	  var pages = [];
	  var halfWay = Math.ceil(maxButtons / 2);
	  var position = void 0;
	
	  if (currentPage <= halfWay) {
	    position = 'start';
	  } else if (totalPages - halfWay < currentPage) {
	    position = 'end';
	  } else {
	    position = 'middle';
	  }
	
	  var ellipsesNeeded = maxButtons < totalPages;
	  var i = 1;
	  while (i <= totalPages && i <= maxButtons) {
	    var openingEllipsesNeeded = i === 2 && (position === 'middle' || position === 'end');
	    var closingEllipsesNeeded = i === maxButtons - 1 && (position === 'middle' || position === 'start');
	    if (ellipsesEnabled && ellipsesNeeded && openingEllipsesNeeded) {
	      pages.push({ name: '...', value: '...', url: '' + rootUrl + 2 + ext });
	    } else if (ellipsesEnabled && ellipsesNeeded && closingEllipsesNeeded) {
	      pages.push({ name: '...', value: '...', url: '' + rootUrl + (totalPages - 1) + ext });
	    } else {
	      var pageNumber = calculatePageNumber(i, currentPage, maxButtons, totalPages);
	      pages.push({ name: customText + pageNumber, value: pageNumber, url: '' + rootUrl + pageNumber + ext });
	    }
	    i++;
	  }
	  return pages;
	}
	
	function calculatePageNumber(i, currentPage, maxButtons, totalPages) {
	  var halfWay = Math.ceil(maxButtons / 2);
	  if (maxButtons === 1) {
	    return currentPage;
	  } else if (i === maxButtons) {
	    return totalPages;
	  } else if (i === 1) {
	    return i;
	  } else if (maxButtons < totalPages) {
	    if (totalPages - halfWay < currentPage) {
	      return totalPages - maxButtons + i;
	    } else if (halfWay < currentPage) {
	      return currentPage - halfWay + i;
	    } else {
	      return i;
	    }
	  } else {
	    return i;
	  }
	}
	
	var utils = exports.utils = { mergeObjects: mergeObjects, getNestedValue: getNestedValue, createPageNumbers: createPageNumbers };

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-paginator\">\r\n    <!-- Paginator with page numbers -->\r\n    <div v-if=\"config.page_numbers\" class=\"numbered\">\r\n      <span v-if=\"config.page_numbers\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <!-- Previous Button -->\r\n          <button class=\"btn btn-default change-page\" @click=\"fetchData(prev_page_url)\" :disabled=\"!prev_page_url\">\r\n            <span v-if=\"!options.previous_button_text\" :class=\"config.previous_button_icon\"></span>\r\n            <span v-else>{{config.previous_button_text}}</span>\r\n          </button>\r\n\r\n          <!-- Display a button for each page -->\r\n          <button v-for=\"page in pages\" @click=\"current_page != page.value ? fetchData(page.url) : ''\"\r\n                  class=\"btn btn-default\" :class=\"{'active-page': current_page == page.value}\">\r\n            {{ page.name }}\r\n          </button>\r\n\r\n          <!-- Next Button -->\r\n          <button class=\"btn btn-default change-page\" @click=\"fetchData(next_page_url)\" :disabled=\"!next_page_url\">\r\n            <span v-if=\"!options.next_button_text\" :class=\"config.next_button_icon\"></span>\r\n            <span v-else>{{config.next_button_text}}</span>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <!-- Simple Paginator -->\r\n    <div v-else class=\"simple\">\r\n      <!-- Previous Button -->\r\n      <button class=\"btn btn-default\" @click=\"fetchData(prev_page_url)\" :disabled=\"!prev_page_url\">\r\n        <span v-if=\"options.previous_button_icon\" :class=\"config.previous_button_icon\"></span>\r\n        <span v-else>{{config.previous_button_text}}</span>\r\n      </button>\r\n\r\n      <span>Page {{current_page}} of {{last_page}}</span>\r\n\r\n      <!-- Next Button -->\r\n      <button class=\"btn btn-default\" @click=\"fetchData(next_page_url)\" :disabled=\"!next_page_url\">\r\n        <span v-if=\"options.next_button_icon\" :class=\"config.next_button_icon\"></span>\r\n        <span v-else>{{config.next_button_text}}</span>\r\n      </button>\r\n    </div>\r\n  </div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vuejs-paginator.js.map