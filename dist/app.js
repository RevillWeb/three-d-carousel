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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(1);



/**
 * A collection of (potentially polyfilled) Symbol objects for standard
 * component properties and methods.
 *
 * These Symbol objects are used to allow mixins and a component to internally
 * communicate, without exposing these properties and methods in the component's
 * public API.
 *
 * To use these Symbol objects in your own component, include this module and
 * then create a property or method whose key is the desired Symbol.
 *
 *     import 'SingleSelectionMixin' from 'elix-mixins/src/SingleSelectionMixin';
 *     import 'symbols' from 'elix-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
 *       [symbols.itemSelected](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * @module symbols
 */
const symbols = {

  /**
   * Symbols for the `content` property.
   *
   * This property returns the component's content -- however the component
   * wants to define that. This could, for example, return the component's
   * distributed children.
   *
   * @type {HTMLElement[]}
   */
  content: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('content'),

  /**
   * Symbol for the `contentChanged` method.
   *
   * For components that define a `content` property, this method should be
   * invoked when that property changes.
   *
   * @function contentChanged
   */
  contentChanged: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('contentChanged'),

  /**
   * Symbol for the `defaults` property.
   *
   * This property can be used to set or override defaults that will be applied
   * to a new component instance. When implementing this property, take care to
   * first acquire any defaults defined by the superclass. The standard idiom is
   * as follows:
   *
   *     get [symbols.defaults]() {
   *       const defaults = super[symbols.defaults] || {};
   *       // Set or override default values here
   *       defaults.customProperty = false;
   *       return defaults;
   *     }
   *
   * @var {object} defaults
   */
  defaults: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('defaults'),

  /**
   * Symbol for the `getItemText` method.
   *
   * This method can be applied to an item to return its text.
   *
   * @function getText
   * @param {HTMLElement} item - the item to extract text from
   * @returns {string} - the text of the item
   */
  getItemText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('getText'),

  /**
   * Symbol for the `goDown` method.
   *
   * This method is invoked when the user wants to go/navigate down.
   *
   * @function goDown
   */
  goDown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goDown'),

  /**
   * Symbol for the `goEnd` method.
   *
   * This method is invoked when the user wants to go/navigate to the end (e.g.,
   * of a list).
   *
   * @function goEnd
   */
  goEnd: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goEnd'),

  /**
   * Symbol for the `goLeft` method.
   *
   * This method is invoked when the user wants to go/navigate left.
   *
   * @function goLeft
   */
  goLeft: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goLeft'),

  /**
   * Symbol for the `goRight` method.
   *
   * This method is invoked when the user wants to go/navigate right.
   *
   * @function goRight
   */
  goRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goRight'),

  /**
   * Symbol for the `goStart` method.
   *
   * This method is invoked when the user wants to go/navigate to the start
   * (e.g., of a list).
   *
   * @function goStart
   */
  goStart: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goStart'),

  /**
   * Symbol for the `goUp` method.
   *
   * This method is invoked when the user wants to go/navigate up.
   *
   * @function goUp
   */
  goUp: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('goUp'),

  /**
   * Symbol for the `itemAdded` method.
   *
   * This method is invoked when a new item is added to a list.
   *
   * @function itemAdded
   * @param {HTMLElement} item - the item being selected/deselected
   */
  itemAdded: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('itemAdded'),

  /**
   * Symbol for the `itemsChanged` method.
   *
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   *
   * @function itemsChanged
   */
  itemsChanged: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('itemsChanged'),

  /**
   * Symbol for the `itemSelected` method.
   *
   * This method is invoked when an item becomes selected or deselected.
   *
   * @function itemSelected
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  itemSelected: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('itemSelected'),

  /**
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('keydown'),

  /**
   * Indicates the general horizontal and/or vertical orientation of the
   * component. This may affect both presentation and behavior (e.g., of
   * keyboard navigation).
   *
   * Accepted values are "horizontal", "vertical", or "both" (the default).
   *
   * @type {string}
   */
  orientation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('orientation'),

  /**
   * Symbol for the `raiseChangeEvents` property.
   *
   * This property is used by mixins to determine whether they should raise
   * property change events. The standard HTML pattern is to only raise such
   * events in response to direct user interactions. For a detailed discussion
   * of this point, see the Gold Standard checklist item for
   * [Propery Change Events](https://github.com/webcomponents/gold-standard/wiki/Property%20Change%20Events).
   *
   * The above article describes a pattern for using a flag to track whether
   * work is being performed in response to internal component activity, and
   * whether the component should therefore raise property change events.
   * This `raiseChangeEvents` symbol is a shared flag used for that purpose by
   * all Elix mixins and components. Sharing this flag ensures that internal
   * activity (e.g., a UI event listener) in one mixin can signal other mixins
   * handling affected properties to raise change events.
   *
   * All UI event listeners (and other forms of internal handlers, such as
   * timeouts and async network handlers) should set `raiseChangeEvents` to
   * `true` at the start of the event handler, then `false` at the end:
   *
   *     this.addEventListener('click', event => {
   *       this[symbols.raiseChangeEvents] = true;
   *       // Do work here, possibly setting properties, like:
   *       this.foo = 'Hello';
   *       this[symbols.raiseChangeEvents] = false;
   *     });
   *
   * Elsewhere, property setters that raise change events should only do so it
   * this property is `true`:
   *
   *     set foo(value) {
   *       // Save foo value here, do any other work.
   *       if (this[symbols.raiseChangeEvents]) {
   *         const event = new CustomEvent('foo-changed');
   *         this.dispatchEvent(event);
   *       }
   *     }
   *
   * In this way, programmatic attempts to set the `foo` property will not
   * trigger the `foo-changed` event, but UI interactions that update that
   * property will cause those events to be raised.
   *
   * @var {boolean} raiseChangeEvents
   */
  raiseChangeEvents: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('raiseChangeEvents'),

  /**
   * Symbol for the `shadowCreated` method.
   *
   * This method is invoked when the component's shadow root has been attached
   * and populated. Other code can handle this method to perform initialization
   * that depends upon the existence of a populated shadow subtree.
   *
   * @function shadowCreated
   */
  shadowCreated: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('shadowCreated'),

  /**
   * Symbol for the `template` property.
   *
   * This property returns a component's template.
   *
   * @type {string|HTMLTemplateElement}
   */
  template: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('template')
};

/* harmony default export */ __webpack_exports__["a"] = (symbols);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* The number of fake symbols we've served up */
let count = 0;

function uniqueString(description) {
  return `_${description}${count++}`;
}

const symbolFunction = typeof window.Symbol === 'function' ?
  window.Symbol :
  uniqueString;

/**
 * Polyfill for ES6 symbol class.
 *
 * Mixins and component classes often want to associate private data with an
 * element instance, but JavaScript does not have direct support for true
 * private properties. One approach is to use the
 * [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * data type to set and retrieve data on an element.
 *
 * Unfortunately, the Symbol type is not available in Internet Explorer 11. In
 * lieu of returning a true Symbol, this polyfill returns a different string
 * each time it is called.
 *
 * Usage:
 *
 *     const fooSymbol = Symbol('foo');
 *
 *     class MyElement extends HTMLElement {
 *       get foo() {
 *         return this[fooSymbol];
 *       }
 *       set foo(value) {
 *         this[fooSymbol] = value;
 *       }
 *     }
 *
 * In IE 11, this sample will "hide" data behind an instance property that looks
 * like this._foo0. The underscore is meant to reduce (not eliminate) potential
 * accidental access, and the unique number at the end is mean to avoid (not
 * eliminate) naming conflicts.
 *
 * @function Symbol
 * @param {string} description - A string to identify the symbol when debugging
 * @returns {Symbol|string} — A Symbol (in ES6 browsers) or unique string ID (in
 * ES5).
 */
/* harmony default export */ __webpack_exports__["a"] = (symbolFunction);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_elix_mixins_SingleSelectionMixin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_elix_mixins_ShadowTemplateMixin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_elix_mixins_KeyboardMixin__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_elix_mixins_KeyboardDirectionMixin__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__ = __webpack_require__(0);
/**
 * Created by Leon Revill on 3/25/2017.
 * Blog: blog.revillweb.com
 * Twitter: @RevillWeb
 * GitHub: github.com/RevillWeb
 */







// We want to apply a number of mixin functions to HTMLElement.
const mixins = [__WEBPACK_IMPORTED_MODULE_1_elix_mixins_ShadowTemplateMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_elix_mixins_SingleSelectionMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_elix_mixins_KeyboardMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_elix_mixins_KeyboardDirectionMixin__["a" /* default */]];

// The mixins are functions, so an efficient way to apply them all is with
// reduce. This is just function composition. We end up with a base class we
// can extend below.
const base = mixins.reduce((cls, mixin) => mixin(cls), HTMLElement);

class ThreeDeeCarousel extends base {

    constructor() {
        super();

        this._rotation = 0;
        this._isHorizontal = false;
        this._theta = 0;
    }

    /**
     * Single Selection
     */

    /**
     * Method used to toggle selected class on items
     * @param item - One of the components items
     * @param selected - Whether the item should be selected or not
     */
    [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].itemSelected](item, selected) {
        if (super[__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].itemSelected]) {
            super[__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].itemSelected](item, selected);
        }
        item.classList.toggle('selected', selected);
    }

    /**
     * Method used to return the current set of items in the carousel
     * @returns {*|boolean|Array|HTMLElement[]}
     */
    get items() {
        return this.children;
    }

    /**
     * Keyboard Support
     */
    [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].goUp]() {
        if (this._isHorizontal === true) {
            this.isHorizontal = false;
        }
        this.next();
    }
    [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].goDown]() {
        if (this._isHorizontal === true) {
            this.isHorizontal = false;
        }
        this.previous();
    }
    [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].goRight]() {
        if (this._isHorizontal === false) {
            this.isHorizontal = true;
        }
        this.next();
    }
    [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].goLeft]() {
        if (this._isHorizontal === false) {
            this.isHorizontal = true;
        }
        this.previous();
    }

    // Define a template that will be stamped into the Shadow DOM by the
    // ShadowTemplateMixin.
    get [__WEBPACK_IMPORTED_MODULE_4_elix_mixins_symbols__["a" /* default */].template]() {
        return `
            <style>
                :host {
                    display: block;
                    width: 210px;
                    height: 140px;
                    position: relative;
                    margin: 180px auto;
                    perspective: 1100px;
                }
                #carousel {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    transition: transform 1s;
                }
                #carousel.panels-backface-invisible figure {                   
                    backface-visibility: hidden;
                }
                #carousel ::slotted(*) {
                    margin: 0;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    display: block;
                    position: absolute;
                    width: 186px;
                    height: 116px;
                    left: 10px;
                    top: 10px;
                    border: 2px solid black;
                    line-height: 116px;
                    font-size: 80px;
                    font-weight: bold;
                    color: white;
                    text-align: center;
                    background-color: rgba(51,51,51,0.76);
                    transition: opacity 1s, transform 1s, background-color 1s, color 1s;
                }
                #carousel ::slotted(figure.selected) {
                   background-color: #0d152d;
                   color: #FFD700;
                }
            </style>
            <div id="carousel">
                <slot id="slot"></slot>
            </div>
    `;
    }

    set rotation(value) {
        if (this._rotation === value) return;
        this._rotation = parseInt(value);
        this._rotate();
    }
    get rotation() {
        return this._rotation;
    }
    set isHorizontal(value) {
        if (this._isHorizontal === value) return;
        this._isHorizontal = value === true;
        this._render();
    }
    get isHorizontal() {
        return this._isHorizontal;
    }
    next() {
        this.rotation = this._rotation + this._theta * 1 * -1;
    }
    previous() {
        this.rotation = this._rotation + this._theta * 1;
    }
    _render() {
        const panelCount = this.children.length;
        let panel, angle, i;
        const panelSize = this._$carousel[this._isHorizontal ? 'offsetWidth' : 'offsetHeight'];
        this._rotateFn = this._isHorizontal ? 'rotateY' : 'rotateX';
        this._theta = 360 / panelCount;
        // do some trig to figure out how big the carousel
        // is in 3D space
        this._radius = Math.round(panelSize / 2 / Math.tan(Math.PI / panelCount));
        for (i = 0; i < panelCount; i++) {
            panel = this.children[i];
            angle = this._theta * i;
            panel.style.opacity = 1;
            // rotate panel, then push it out in 3D space
            panel.style.transform = this._rotateFn + '(' + angle + 'deg) translateZ(' + this._radius + 'px)';
        }
        // hide other panels
        for (; i < panelCount; i++) {
            panel = this.children[i];
            panel.style.opacity = 0;
            panel.style.transform = 'none';
        }
        // adjust rotation so panels are always flat
        this._rotation = Math.round(this._rotation / this._theta) * this._theta;

        this._rotate();
    }
    _rotate() {
        const idx = parseInt((this._rotation / 360).toString().split(".")[1] || 0);
        console.log("IDX:", idx);
        this.selectedItem = this.children[idx];
        this._$carousel.style.transform = 'translateZ(-' + this._radius + 'px) ' + this._rotateFn + '(' + this._rotation + 'deg)';
    }
    connectedCallback() {
        this._$carousel = this.shadowRoot.querySelector("#carousel");
        this._$slot = this.shadowRoot.querySelector("#slot");
        this._$slot.addEventListener('slotchange', e => {
            this._render();
        });
        this.setAttribute("tabindex", "0");
    }
}

window.customElements.define("three-dee-carousel", ThreeDeeCarousel);

/* unused harmony default export */ var _unused_webpack_default_export = (ThreeDeeCarousel);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_three_dee_carousel__ = __webpack_require__(2);
/**
 * Created by Leon Revill on 3/28/2017.
 * Blog: blog.revillweb.com
 * Twitter: @RevillWeb
 * GitHub: github.com/RevillWeb
 */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardDirectionMixin;



/**
 * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
 * (go left, go right, etc.).
 *
 * This mixin expects the component to invoke a `keydown` method when a key is
 * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
 * purpose, or wire up your own keyboard handling and call `keydown` yourself.
 *
 * This mixin calls methods such as `goLeft` and `goRight`. You can define
 * what that means by implementing those methods yourself. If you want to use
 * direction keys to navigate a selection, use this mixin with
 * [DirectionSelectionMixin](DirectionSelectionMixin.md).
 *
 * If the component defines a property called `symbols.orientation`, the value
 * of that property will constrain navigation to the horizontal or vertical axis.
 *
 * @module KeyboardDirectionMixin
 * @param base {Class} the base class to extend
 * @returns {Class} the extended class
 */
function KeyboardDirectionMixin(base) {

  /**
   * The class prototype added by the mixin.
   */
  class KeyboardDirection extends base {

    /**
     * Invoked when the user wants to go/navigate down.
     * The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goDown]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goDown]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goDown](); }
    }

    /**
     * Invoked when the user wants to go/navigate to the end (e.g., of a list).
     * The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goEnd]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goEnd]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goEnd](); }
    }

    /**
     * Invoked when the user wants to go/navigate left.
     * The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goLeft]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goLeft]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goLeft](); }
    }

    /**
     * Invoked when the user wants to go/navigate right.
     * The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goRight]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goRight]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goRight](); }
    }

    /**
     * Invoked when the user wants to go/navigate to the start (e.g., of a
     * list). The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goStart]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goStart]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goStart](); }
    }

    /**
     * Invoked when the user wants to go/navigate up.
     * The default implementation of this method does nothing.
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goUp]() {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goUp]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goUp](); }
    }

    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown](event) {
      let handled = false;

      const orientation = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].orientation] || 'both';
      const horizontal = (orientation === 'horizontal' || orientation === 'both');
      const vertical = (orientation === 'vertical' || orientation === 'both');

      // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
      // as the user may be trying to navigate back or forward in the browser.
      switch (event.keyCode) {
        case 35: // End
          handled = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goEnd]();
          break;
        case 36: // Home
          handled = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goStart]();
          break;
        case 37: // Left
          if (horizontal && !event.metaKey && !event.altKey) {
            handled = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goLeft]();
          }
          break;
        case 38: // Up
          if (vertical) {
            handled = event.altKey ? this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goStart]() : this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goUp]();
          }
          break;
        case 39: // Right
          if (horizontal && !event.metaKey && !event.altKey) {
            handled = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goRight]();
          }
          break;
        case 40: // Down
          if (vertical) {
            handled = event.altKey ? this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goEnd]() : this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].goDown]();
          }
          break;
      }
      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown] && super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown](event)) || false;
    }

  }

  return KeyboardDirection;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardMixin;



/**
 * Mixin which manages the keydown handling for a component.
 *
 * This mixin handles several keyboard-related features.
 *
 * First, it wires up a single keydown event handler that can be shared by
 * multiple mixins on a component. The event handler will invoke a `keydown`
 * method with the event object, and any mixin along the prototype chain that
 * wants to handle that method can do so.
 *
 * If a mixin wants to indicate that keyboard event has been handled, and that
 * other mixins should *not* handle it, the mixin's `keydown` handler should
 * return a value of true. The convention that seems to work well is that a
 * mixin should see if it wants to handle the event and, if not, then ask the
 * superclass to see if it wants to handle the event. This has the effect of
 * giving the mixin that was applied last the first chance at handling a
 * keyboard event.
 *
 * Example:
 *
 *     [symbols.keydown](event) {
 *       let handled;
 *       switch (event.keyCode) {
 *         // Handle the keys you want, setting handled = true if appropriate.
 *       }
 *       // Prefer mixin result if it's defined, otherwise use base result.
 *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
 *     }
 *
 * Until iOS Safari supports the `KeyboardEvent.key` property
 * (see http://caniuse.com/#search=keyboardevent.key), mixins should generally
 * test keys using the legacy `keyCode` property, not `key`.
 *
 * A second feature provided by this mixin is that it implicitly makes the
 * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
 * has the effect of adding the component to the tab order in document order.
 *
 * @module KeyboardMixin
 * @param base {Class} the base class to extend
 * @returns {Class} the extended class
 */
function KeyboardMixin(base) {

  /**
   * The class prototype added by the mixin.
   */
  class Keyboard extends base {

    constructor() {
      super();
      console.log(this);
      this.addEventListener('keydown', event => {
        this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].raiseChangeEvents] = true;
        const handled = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
        this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].raiseChangeEvents] = false;
      });
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      if (this.getAttribute('tabindex') == null && this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].defaults].tabindex !== null) {
        this.setAttribute('tabindex', this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].defaults].tabindex);
      }
    }

    get [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].defaults]() {
      const defaults = super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].defaults] || {};
      // The default tab index is 0 (document order).
      defaults.tabindex = 0;
      return defaults;
    }

    /**
     * Handle the indicated keyboard event.
     *
     * The default implementation of this method does nothing. This will
     * typically be handled by other mixins.
     *
     * @param {KeyboardEvent} event - the keyboard event
     * @return {boolean} true if the event was handled
     */
    [__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown](event) {
      if (super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown]) { return super[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].keydown](event); }
    }

  }

  return Keyboard;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = ShadowTemplateMixin;



// A cache of processed templates.
//
// We maintain this as a map keyed by element tag (localName). We could store
// an element's processed template on its element prototype. One scenario that
// wouldn't support would be registration of the same constructor under multiple
// tag names, which was a (perhaps theoretical) use case for Custom Elements.
//
const mapTagToTemplate = {};


/**
 * Mixin which adds stamping a template into a Shadow DOM subtree upon component
 * instantiation.
 *
 * To use this mixin, define a `template` property as a string or HTML
 * `<template>` element:
 *
 *     class MyElement extends ShadowTemplateMixin(HTMLElement) {
 *       get [symbols.template]() {
 *         return `Hello, <em>world</em>.`;
 *       }
 *     }
 *
 * When your component class is instantiated, a shadow root will be created on
 * the instance, and the contents of the template will be cloned into the
 * shadow root. If your component does not define a `template` property, this
 * mixin has no effect.
 *
 * For the time being, this extension retains support for Shadow DOM v0. That
 * will eventually be deprecated as browsers (and the Shadow DOM polyfill)
 * implement Shadow DOM v1.
 *
 * @module ShadowTemplateMixin
 * @param base {Class} the base class to extend
 * @returns {Class} the extended class
 */
function ShadowTemplateMixin(base) {

  /**
   * The class prototype added by the mixin.
   */
  class ShadowTemplate extends base {

    /*
     * If the component defines a template, a shadow root will be created on the
     * component instance, and the template stamped into it.
     */
    constructor() {
      super();

      const tag = this.localName;
      let template = mapTagToTemplate[tag];

      // See if we've already processed a template for this tag.
      if (!template) {
        // This is the first time we've created an instance of this tag.

        // Get the template and perform initial processing.
        template = this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].template];
        if (!template) {
          console.warn(`ShadowTemplateMixin expects a component to define a property called [symbols.template].`);
          return;
        }

        if (typeof template === 'string') {
          // Upgrade plain string to real template.
          const templateText = template;
          template = document.createElement('template');
          template.innerHTML = templateText;
        }

        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
          // Let the CSS polyfill do its own initialization.
          window.ShadyCSS.prepareTemplate(template, tag);
        }

        // Store this for the next time we create the same type of element.
        mapTagToTemplate[tag] = template;
      }

      // Stamp the template into a new shadow root.
      const root = this.attachShadow({ mode: 'open' });
      const clone = document.importNode(template.content, true);
      root.appendChild(clone);

      /* Let the component know the shadow tree has been populated. */
      if (this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].shadowCreated]) {
        this[__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* default */].shadowCreated]();
      }
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.styleElement(this);
      }
    }

  }

  return ShadowTemplate;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbols__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = SingleSelectionMixin;




// Symbols for private data members on an element.
const canSelectNextSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('canSelectNext');
const canSelectPreviousSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('canSelectPrevious');
const selectionRequiredSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('selectionRequired');
const selectionWrapsSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('selectionWraps');

// We want to expose both selectedIndex and selectedItem as independent
// properties but keep them in sync. This allows a component user to reference
// the selection by whatever means is most natural for their situation.
//
// To efficiently keep these properties in sync, we track "external" and
// "internal" references for each property:
//
// The external index or item is the one we report to the outside world when
// asked for selection.  When handling a change to index or item, we update the
// external reference as soon as possible, so that if anyone immediately asks
// for the current selection, they will receive a stable answer.
//
// The internal index or item tracks whichever index or item last received the
// full set of processing. Processing includes raising a change event for the
// new value. Once we've begun that processing, we store the new value as the
// internal value to indicate we've handled it.
//
const externalSelectedIndexSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('externalSelectedIndex');
const externalSelectedItemSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('externalSelectedItem');
const internalSelectedIndexSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('internalSelectedIndex');
const internalSelectedItemSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('internalSelectedItem');


/**
 * Mixin which adds single-selection semantics for items in a list.
 *
 * This mixin expects a component to provide an `items` Array or NodeList of
 * all elements in the list.
 *
 * This mixin tracks a single selected item in the list, and provides means to
 * get and set that state by item position (`selectedIndex`) or item identity
 * (`selectedItem`). The selection can be moved in the list via the methods
 * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
 *
 * This mixin does not produce any user-visible effects to represent
 * selection.
 *
 * @module SingleSelectionMixin
 * @param base {Class} the base class to extend
 * @returns {Class} the extended class
 */
function SingleSelectionMixin(base) {

  /**
   * The class prototype added by the mixin.
   */
  class SingleSelection extends base {

    constructor() {
      super();
      // Set defaults.
      if (typeof this.selectionRequired === 'undefined') {
        this.selectionRequired = this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].defaults].selectionRequired;
      }
      if (typeof this.selectionWraps === 'undefined') {
        this.selectionWraps = this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].defaults].selectionWraps;
      }
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */
    get canSelectNext() {
      return this[canSelectNextSymbol];
    }
    set canSelectNext(canSelectNext) {
      const changed = canSelectNext !== this[canSelectNextSymbol];
      this[canSelectNextSymbol] = canSelectNext;
      if ('canSelectNext' in base.prototype) { super.canSelectNext = canSelectNext; }
      if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents] && changed) {
        this.dispatchEvent(new CustomEvent('can-select-next-changed'));
      }
    }

    /**
     * True if the selection can be moved to the previous item, false if not
     * (the selected item is the first one in the list).
     *
     * @type {boolean}
     */
    get canSelectPrevious() {
      return this[canSelectPreviousSymbol];
    }
    set canSelectPrevious(canSelectPrevious) {
      const changed = canSelectPrevious !== this[canSelectPreviousSymbol];
      this[canSelectPreviousSymbol] = canSelectPrevious;
      if ('canSelectPrevious' in base.prototype) { super.canSelectPrevious = canSelectPrevious; }
      if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents] && changed) {
        this.dispatchEvent(new CustomEvent('can-select-previous-changed'));
      }
    }

    get [__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].defaults]() {
      const defaults = super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].defaults] || {};
      defaults.selectionRequired = false;
      defaults.selectionWraps = false;
      return defaults;
    }

    /**
     * Handle a new item being added to the list.
     *
     * The default implementation of this method simply sets the item's
     * selection state to false.
     *
     * @param {HTMLElement} item - the item being added
     */
    [__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemAdded](item) {
      if (super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemAdded]) { super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemAdded](item); }
      this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected](item, item === this.selectedItem);
    }

    [__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemsChanged]() {
      if (super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemsChanged]) { super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemsChanged](); }

      // In case selected item changed position or was removed.
      trackSelectedItem(this);

      // In case the change in items affected which navigations are possible.
      updatePossibleNavigations(this);
    }

    /**
     * Apply the indicate selection state to the item.
     *
     * The default implementation of this method does nothing. User-visible
     * effects will typically be handled by other mixins.
     *
     * @param {HTMLElement} item - the item being selected/deselected
     * @param {boolean} selected - true if the item is selected, false if not
     */
    [__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected](item, selected) {
      if (super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected]) { super[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected](item, selected); }
    }

    /**
     * The index of the item which is currently selected.
     *
     * The setter expects an integer or a string representing an integer.
     *
     * A `selectedIndex` of -1 indicates there is no selection. Setting this
     * property to -1 will remove any existing selection.
     *
     * @type {number}
     */
    get selectedIndex() {
      return this[externalSelectedIndexSymbol] != null ?
        this[externalSelectedIndexSymbol] :
        -1;
    }
    set selectedIndex(index) {
      // See notes at top about internal vs. external copies of this property.
      const changed = index !== this[internalSelectedIndexSymbol];
      let item;
      let parsedIndex = parseInt(index);
      if (parsedIndex !== this[externalSelectedIndexSymbol]) {
        // Store the new index and the corresponding item.
        const items = this.items;
        const hasItems = items && items.length > 0;
        if (!(hasItems && parsedIndex >= 0 && parsedIndex < items.length)) {
          parsedIndex = -1; // No item at that index.
        }
        this[externalSelectedIndexSymbol] = parsedIndex;
        item = hasItems && parsedIndex >= 0 ? items[parsedIndex] : null;
        this[externalSelectedItemSymbol] = item;
      } else {
        item = this[externalSelectedItemSymbol];
      }

      // Now let super do any work.
      if ('selectedIndex' in base.prototype) { super.selectedIndex = index; }

      if (changed) {
        // The selected index changed.
        this[internalSelectedIndexSymbol] = parsedIndex;

        if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents]) {
          const event = new CustomEvent('selected-index-changed', {
            detail: {
              selectedIndex: parsedIndex,
              value: parsedIndex // for Polymer binding. TODO: Verify still necessary
            }
          });
          this.dispatchEvent(event);
        }
      }

      if (this[internalSelectedItemSymbol] !== item) {
        // Update selectedItem property so it can have its own effects.
        this.selectedItem = item;
      }
    }

    /**
     * The currently selected item, or null if there is no selection.
     *
     * Setting this property to null deselects any currently-selected item.
     * Setting this property to an object that is not in the list has no effect.
     *
     * TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
     * TODO: If selectionRequired, leave selection alone?
     *
     * @type {object}
     */
    get selectedItem() {
      return this[externalSelectedItemSymbol] || null;
    }
    set selectedItem(item) {
      // See notes at top about internal vs. external copies of this property.
      const previousSelectedItem = this[internalSelectedItemSymbol];
      const changed = item !== previousSelectedItem;
      let index;
      if (item !== this[externalSelectedItemSymbol]) {
        // Store item and look up corresponding index.
        const items = this.items;
        const hasItems = items && items.length > 0;
        index = hasItems ? Array.prototype.indexOf.call(items, item) : -1;
        this[externalSelectedIndexSymbol] = index;
        if (index < 0) {
          item = null; // The indicated item isn't actually in `items`.
        }
        this[externalSelectedItemSymbol] = item;
      } else {
        index = this[externalSelectedIndexSymbol];
      }

      // Now let super do any work.
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }

      if (changed) {
        // The selected item changed.
        this[internalSelectedItemSymbol] = item;

        if (previousSelectedItem) {
          // Update selection state of old item.
          this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected](previousSelectedItem, false);
        }
        if (item) {
          // Update selection state to new item.
          this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].itemSelected](item, true);
        }

        updatePossibleNavigations(this);

        if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents]) {
          const event = new CustomEvent('selected-item-changed', {
            detail: {
              selectedItem: item,
              value: item // for Polymer binding
            }
          });
          this.dispatchEvent(event);
        }
      }

      if (this[internalSelectedIndexSymbol] !== index) {
        // Update selectedIndex property so it can have its own effects.
        this.selectedIndex = index;
      }
    }

    /**
     * Select the first item in the list.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectFirst() {
      if (super.selectFirst) { super.selectFirst(); }
      return selectIndex(this, 0);
    }

    /**
     * True if the list should always have a selection (if it has items).
     *
     * @type {boolean}
     * @default false
     */
    get selectionRequired() {
      return this[selectionRequiredSymbol];
    }
    set selectionRequired(selectionRequired) {
      const parsed = String(selectionRequired) === 'true';
      const changed = parsed !== this[selectionRequiredSymbol];
      this[selectionRequiredSymbol] = parsed;
      if ('selectionRequired' in base.prototype) { super.selectionRequired = selectionRequired; }
      if (changed) {
        if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents]) {
          const event = new CustomEvent('selection-required-changed');
          this.dispatchEvent(event);
        }
        if (selectionRequired) {
          trackSelectedItem(this);
        }
      }
    }

    /**
     * True if selection navigations wrap from last to first, and vice versa.
     *
     * @type {boolean}
     * @default false
     */
    get selectionWraps() {
      return this[selectionWrapsSymbol];
    }
    set selectionWraps(selectionWraps) {
      const parsed = String(selectionWraps) === 'true';
      const changed = parsed !== this[selectionWrapsSymbol];
      this[selectionWrapsSymbol] = parsed;
      if ('selectionWraps' in base.prototype) { super.selectionWraps = selectionWraps; }
      if (changed) {
        if (this[__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* default */].raiseChangeEvents]) {
          const event = new CustomEvent('selection-wraps-changed');
          this.dispatchEvent(event);
        }
        updatePossibleNavigations(this);
      }
    }

    /**
     * Select the last item in the list.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectLast() {
      if (super.selectLast) { super.selectLast(); }
      return selectIndex(this, this.items.length - 1);
    }

    /**
     * Select the next item in the list.
     *
     * If the list has no selection, the first item will be selected.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectNext() {
      if (super.selectNext) { super.selectNext(); }
      return selectIndex(this, this.selectedIndex + 1);
    }

    /**
     * Select the previous item in the list.
     *
     * If the list has no selection, the last item will be selected.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectPrevious() {
      if (super.selectPrevious) { super.selectPrevious(); }
      const newIndex = this.selectedIndex < 0 ?
        this.items.length - 1 :     // No selection yet; select last item.
        this.selectedIndex - 1;
      return selectIndex(this, newIndex);
    }

    /**
     * Fires when the canSelectNext property changes in response to internal
     * component activity.
     *
     * @memberof SingleSelection
     * @event can-select-next-changed
     */

    /**
     * Fires when the canSelectPrevious property changes in response to internal
     * component activity.
     *
     * @memberof SingleSelection
     * @event can-select-previous-changed
     */

    /**
     * Fires when the selectedIndex property changes in response to internal
     * component activity.
     *
     * @memberof SingleSelection
     * @event selected-index-changed
     * @param {number} detail.selectedIndex The new selected index.
     */

    /**
     * Fires when the selectedItem property changes in response to internal
     * component activity.
     *
     * @memberof SingleSelection
     * @event selected-item-changed
     * @param {HTMLElement} detail.selectedItem The new selected item.
     */

  }

  return SingleSelection;
}


// Ensure the given index is within bounds, and select it if it's not already
// selected.
function selectIndex(element, index) {

  const items = element.items;
  if (items == null) {
    // Nothing to select.
    return false;
  }

  const count = items.length;
  const boundedIndex = element.selectionWraps ?
    // JavaScript mod doesn't handle negative numbers the way we want to wrap.
    // See http://stackoverflow.com/a/18618250/76472
    ((index % count) + count) % count :

    // Keep index within bounds of array.
    Math.max(Math.min(index, count - 1), 0);

  const previousIndex = element.selectedIndex;
  if (previousIndex !== boundedIndex) {
    element.selectedIndex = boundedIndex;
    return true;
  } else {
    return false;
  }
}

// Following a change in the set of items, or in the value of the
// `selectionRequired` property, reacquire the selected item. If it's moved,
// update `selectedIndex`. If it's been removed, and a selection is required,
// try to select another item.
function trackSelectedItem(element) {

  const items = element.items;
  const itemCount = items ? items.length : 0;

  const previousSelectedItem = element.selectedItem;
  if (!previousSelectedItem) {
    // No item was previously selected.
    if (element.selectionRequired) {
      // Select the first item by default.
      element.selectedIndex = 0;
    }
  } else if (itemCount === 0) {
    // We've lost the selection, and there's nothing left to select.
    element.selectedItem = null;
  } else {
    // Try to find the previously-selected item in the current set of items.
    const indexInCurrentItems = Array.prototype.indexOf.call(items, previousSelectedItem);
    const previousSelectedIndex = element.selectedIndex;
    if (indexInCurrentItems < 0) {
      // Previously-selected item was removed from the items.
      // Select the item at the same index (if it exists) or as close as possible.
      const newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
      // Select by item, since index may be the same, and we want to raise the
      // selected-item-changed event.
      element.selectedItem = items[newSelectedIndex];
    } else if (indexInCurrentItems !== previousSelectedIndex) {
      // Previously-selected item still there, but changed position.
      element.selectedIndex = indexInCurrentItems;
    }
  }
}

// Following a change in selection, report whether it's now possible to
// go next/previous from the given index.
function updatePossibleNavigations(element) {
  let canSelectNext;
  let canSelectPrevious;
  const items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  } else if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    const index = element.selectedIndex;
    if (index < 0 && items.length > 0) {
      // Special case. If there are items but no selection, declare that it's
      // always possible to go next/previous to create a selection.
      canSelectNext = true;
      canSelectPrevious = true;
    } else {
      // Normal case: we have an index in a list that has items.
      canSelectPrevious = (index > 0);
      canSelectNext = (index < items.length - 1);
    }
  }
  if (element.canSelectNext !== canSelectNext) {
    element.canSelectNext = canSelectNext;
  }
  if (element.canSelectPrevious !== canSelectPrevious) {
    element.canSelectPrevious = canSelectPrevious;
  }
}


/***/ })
/******/ ]);