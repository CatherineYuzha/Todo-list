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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/Todo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/todo.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/todo.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".wrapper {\\n  background: white;\\n  width: 50%;\\n  margin: 80px auto;\\n  border-radius: 2px;\\n  box-shadow: 0 2px 2px 0 #00000044, 0 3px 1px -2px #00000044, 0 1px 5px 0 #00000044;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-size: 16px; }\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  padding: 5px;\\n  background-color: #929cca;\\n  text-align: center; }\\n  .header__item {\\n    display: inline-block;\\n    color: white;\\n    margin: 1rem auto; }\\n\\n.todo-list {\\n  height: 300px;\\n  overflow-y: scroll; }\\n  .todo-list__item {\\n    list-style: none;\\n    display: flex;\\n    font-size: 16px;\\n    background-color: white;\\n    transition: all 0.2s;\\n    padding: 1em;\\n    align-items: center; }\\n    .todo-list__item-text {\\n      color: black;\\n      padding: 10px;\\n      width: 70%; }\\n      .todo-list__item-text_none {\\n        display: none; }\\n      .todo-list__item-text_done-text {\\n        opacity: 0.5;\\n        text-decoration: line-through; }\\n    .todo-list__item-textfield {\\n      display: none; }\\n      .todo-list__item-textfield_block {\\n        display: block;\\n        font-size: 16px;\\n        border: 1px solid #b8bed8;\\n        background-color: white;\\n        transition: all 0.2s;\\n        height: 50px;\\n        align-items: center;\\n        margin-right: 10px;\\n        color: black;\\n        padding: 10px;\\n        width: 70%; }\\n        .todo-list__item-textfield_block:hover {\\n          background: #b8bed8; }\\n        .todo-list__item-textfield_block:focus {\\n          cursor: pointer; }\\n    .todo-list__item-button {\\n      margin-left: 10px;\\n      background: 0 0;\\n      border: none;\\n      border-radius: 2px;\\n      color: black;\\n      height: 45px;\\n      margin: 0;\\n      width: 135px;\\n      padding: 0 16px;\\n      display: inline-block;\\n      font-family: \\\"Open Sans\\\", sans-serif;\\n      font-size: 14px;\\n      font-weight: 500;\\n      letter-spacing: 0;\\n      overflow: hidden;\\n      will-change: box-shadow;\\n      outline: none;\\n      cursor: pointer;\\n      text-decoration: none;\\n      text-align: center;\\n      line-height: 36px;\\n      vertical-align: middle; }\\n      .todo-list__item-button:hover {\\n        background-color: #b8bed8; }\\n      .todo-list__item-button:active {\\n        background-color: #b8bed8; }\\n      .todo-list__item-button_none {\\n        display: none; }\\n\\n.todo-form {\\n  display: flex;\\n  background-color: white;\\n  border-top: 1px solid #41404080;\\n  padding: 10px; }\\n  .todo-form__input {\\n    flex: 1;\\n    outline: none;\\n    transition: all 0.2s;\\n    color: black;\\n    padding: 10px;\\n    width: 70%;\\n    border-radius: 2px;\\n    border: 1px solid lightgray; }\\n    .todo-form__input:focus {\\n      border: 1px solid #929cca; }\\n  .todo-form__button {\\n    margin-left: 10px;\\n    background: 0 0;\\n    border: none;\\n    border-radius: 2px;\\n    color: black;\\n    height: 45px;\\n    margin: 0;\\n    width: 135px;\\n    padding: 0 16px;\\n    display: inline-block;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    font-size: 14px;\\n    font-weight: 500;\\n    letter-spacing: 0;\\n    overflow: hidden;\\n    will-change: box-shadow;\\n    outline: none;\\n    cursor: pointer;\\n    text-decoration: none;\\n    text-align: center;\\n    line-height: 36px;\\n    vertical-align: middle; }\\n    .todo-form__button:hover {\\n      background-color: #b8bed8; }\\n    .todo-form__button:active {\\n      background-color: #b8bed8; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/todo.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/AddTaskForm.js":
/*!*******************************!*\
  !*** ./src/js/AddTaskForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddTaskForm; });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/js/Task.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AddTaskForm =\n/*#__PURE__*/\nfunction () {\n  function AddTaskForm(addTaskCallback) {\n    _classCallCheck(this, AddTaskForm);\n\n    this.$addTaskInput = document.createElement(\"input\");\n    this.$addTaskButton = document.createElement(\"button\");\n    this.$addTaskButton.onclick = this.assignAddButton.bind(this);\n    this.addTask = addTaskCallback;\n  }\n\n  _createClass(AddTaskForm, [{\n    key: \"assignAddButton\",\n    value: function assignAddButton() {\n      if (this.$addTaskInput.value === \"\") {\n        return false;\n      }\n\n      var task = {\n        text: this.$addTaskInput.value\n      };\n      this.$addTaskInput.value = \"\";\n      this.addTask(task);\n    }\n  }]);\n\n  return AddTaskForm;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/AddTaskForm.js?");

/***/ }),

/***/ "./src/js/Task.js":
/*!************************!*\
  !*** ./src/js/Task.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.js */ \"./src/js/TaskList.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(data, deleteCallback, editCallback, completeCallback) {\n    _classCallCheck(this, Task);\n\n    console.log();\n    this.text = data.text;\n    this.id = data.id || Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])();\n    this.editing = data.editing || false;\n    this.done = data.done || false;\n    this.deleteTask = deleteCallback;\n    this.editTask = editCallback;\n    this.completeTask = completeCallback;\n  }\n\n  _createClass(Task, [{\n    key: \"setDone\",\n    value: function setDone(isDone) {\n      this.done = isDone;\n    }\n  }, {\n    key: \"assignRemoveButton\",\n    value: function assignRemoveButton() {\n      this.outputTask.remove();\n      this.deleteTask(this.id);\n    }\n  }, {\n    key: \"assignEditButton\",\n    value: function assignEditButton(isCancel) {\n      if (!isCancel && !this.textFieldTask.value && this.editing) return false;\n      this.editing = !this.editing;\n      this.taskDeleteButton.classList.toggle(\"todo-list__item-button_none\", this.editing);\n      this.editCancelButton.classList.toggle(\"todo-list__item-button_none\", !this.editing);\n      this.textTask.classList.toggle(\"todo-list__item-text_none\", this.editing);\n      this.textFieldTask.classList.toggle(\"todo-list__item-textfield_block\", this.editing);\n\n      if (this.editing) {\n        this.taskEditButton.innerText = \"Сохранить\";\n        this.textFieldTask.value = this.text;\n      } else {\n        this.taskEditButton.innerText = \"Изменить\";\n\n        if (!isCancel) {\n          this.text = this.textFieldTask.value;\n          this.textTask.innerHTML = this.textFieldTask.value;\n        }\n      }\n\n      this.editTask(this);\n    }\n  }, {\n    key: \"assignCompleteTask\",\n    value: function assignCompleteTask() {\n      this.done = !this.done;\n      this.textTask.classList.toggle(\"todo-list__item-text_done-text\");\n      this.taskEditButton.disabled = this.done;\n      this.completeTask(this);\n    }\n  }, {\n    key: \"data\",\n    get: function get() {\n      var text = this.text,\n          id = this.id,\n          editing = this.editing,\n          done = this.done;\n      return {\n        text: text,\n        id: id,\n        editing: editing,\n        done: done\n      };\n    }\n  }, {\n    key: \"template\",\n    get: function get() {\n      this.outputTask = document.createElement(\"li\");\n      this.outputTask.classList.add(\"todo-list__item\");\n      this.taskDeleteButton = document.createElement(\"button\");\n      this.taskDeleteButton.classList.add(\"todo-list__item-button\");\n      this.taskDeleteButton.onclick = this.assignRemoveButton.bind(this);\n      this.taskDeleteButton.append(document.createTextNode(\"Удалить\"));\n      this.taskEditButton = document.createElement(\"button\");\n      this.taskEditButton.classList.add(\"todo-list__item-button\");\n      this.taskEditButton.onclick = this.assignEditButton.bind(this, false);\n      this.taskEditButton.append(document.createTextNode(\"Изменить\"));\n      this.editCancelButton = document.createElement(\"button\");\n      this.editCancelButton.classList.add(\"todo-list__item-button\");\n      this.editCancelButton.classList.add(\"todo-list__item-button_none\");\n      this.editCancelButton.onclick = this.assignEditButton.bind(this, true);\n      this.editCancelButton.append(document.createTextNode(\"Отмена\"));\n      this.textTask = document.createElement(\"p\");\n      this.textTask.onclick = this.assignCompleteTask.bind(this);\n      this.textTask.classList.add(\"todo-list__item-text\");\n      this.textTask.append(document.createTextNode(this.text));\n      this.textFieldTask = document.createElement(\"textarea\");\n      this.textFieldTask.classList.add(\"todo-list__item-textfield\");\n      this.textFieldTask.setAttribute(\"placeholder\", \"Введите изменения...\");\n      this.outputTask.append(this.textTask, this.textFieldTask, this.taskEditButton, this.taskDeleteButton, this.editCancelButton);\n      return this.outputTask;\n    }\n  }]);\n\n  return Task;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Task.js?");

/***/ }),

/***/ "./src/js/TaskList.js":
/*!****************************!*\
  !*** ./src/js/TaskList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaskList; });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/js/Task.js\");\n/* harmony import */ var _AddTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTaskForm */ \"./src/js/AddTaskForm.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TaskList =\n/*#__PURE__*/\nfunction () {\n  function TaskList(data) {\n    _classCallCheck(this, TaskList);\n\n    this.outputElement(data);\n    this.eventHandlers();\n  }\n\n  _createClass(TaskList, [{\n    key: \"eventHandlers\",\n    value: function eventHandlers() {\n      new _AddTaskForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.add.bind(this));\n    }\n  }, {\n    key: \"outputElement\",\n    value: function outputElement(data) {\n      var _this = this;\n\n      this.list = [];\n      this.$taskList = document.querySelector(\".js-todo-list\"); //document.createElement('ul');\n      // this.$taskList.classList.add('todo-list');\n      // this.$taskList.classList.add('js-todo-list');\n      // document.body.append(this.$taskList);\n\n      data.list.forEach(function (item) {\n        _this.add(item);\n      });\n    }\n  }, {\n    key: \"add\",\n    value: function add(task) {\n      var newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task, this[\"delete\"].bind(this), this.modify.bind(this), this.complete.bind(this));\n      this.list.push(newTask.data);\n      this.$taskList.append(newTask.template);\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(id) {\n      this.list = this.list.filter(function (item) {\n        return item.id !== id;\n      });\n    }\n  }, {\n    key: \"modify\",\n    value: function modify(modifiedTask) {\n      var task = this.list.find(function (task) {\n        return task.id === modifiedTask.id;\n      });\n      task.text = modifiedTask.text;\n      task.editing = modifiedTask.editing;\n    }\n  }, {\n    key: \"complete\",\n    value: function complete(completedTask) {\n      var task = this.list.find(function (task) {\n        return task.id === completedTask.id;\n      });\n      task.done = completedTask.done;\n    }\n  }]);\n\n  return TaskList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/TaskList.js?");

/***/ }),

/***/ "./src/js/Todo.js":
/*!************************!*\
  !*** ./src/js/Todo.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stubs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubs.js */ \"./src/js/stubs.js\");\n/* harmony import */ var _TaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.js */ \"./src/js/TaskList.js\");\n/* harmony import */ var _scss_todo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/todo.scss */ \"./src/scss/todo.scss\");\n/* harmony import */ var _scss_todo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_todo_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var taskList = new _TaskList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    list: _stubs_js__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"]\n  }); //taskList.outputElement();\n  //taskList.eventHandlers();\n});\n\n//# sourceURL=webpack:///./src/js/Todo.js?");

/***/ }),

/***/ "./src/js/stubs.js":
/*!*************************!*\
  !*** ./src/js/stubs.js ***!
  \*************************/
/*! exports provided: tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n\nvar tasks = [{\n  text: \"Инициализация проекта\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Вывод существующих задач\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Добавление задачи\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Редактирование\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Удаление\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Фиксирование статуса задачи (выполнено/не выполнено)\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}, {\n  text: \"Перемещение по списку кнопками\",\n  id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"generateId\"])(),\n  done: false,\n  editing: false\n}];\n\n//# sourceURL=webpack:///./src/js/stubs.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateId\", function() { return generateId; });\n// TODO: функцию надо экспортировать, иначе никто ее не сможет использовать !!!!!!!!!!!!!\nfunction generateId() {\n  return \"\".concat(Date.now().toString(36), \"-\").concat(Math.random().toString(36).substr(2));\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/scss/todo.scss":
/*!****************************!*\
  !*** ./src/scss/todo.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./todo.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/todo.scss\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/todo.scss?");

/***/ })

/******/ });