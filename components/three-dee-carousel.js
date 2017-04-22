/**
 * Created by Leon Revill on 3/25/2017.
 * Blog: blog.revillweb.com
 * Twitter: @RevillWeb
 * GitHub: github.com/RevillWeb
 */

import SingleSelectionMixin from 'elix/mixins/SingleSelectionMixin';
import ShadowTemplateMixin from 'elix/mixins/ShadowTemplateMixin';
import KeyboardMixin from 'elix/mixins/KeyboardMixin';
import KeyboardDirectionMixin from 'elix/mixins/KeyboardDirectionMixin';
import DirectionSelectionMixin from 'elix/mixins/DirectionSelectionMixin';
import symbols from 'elix/mixins/symbols';

// We want to apply a number of mixin functions to HTMLElement.
const mixins = [
    ShadowTemplateMixin,
    SingleSelectionMixin,
    KeyboardMixin,
    KeyboardDirectionMixin,
    DirectionSelectionMixin
];

// The mixins are functions, so an efficient way to apply them all is with
// reduce. This is just function composition. We end up with a base class we
// can extend below.
const base = mixins.reduce((cls, mixin) => mixin(cls), HTMLElement);

class ThreeDeeCarousel extends base {

    constructor() {
        super();
        this._rotation = 0;
        this._theta = 0;
        this[symbols.orientation] = "vertical";
    }

    get orientation() {
        return this[symbols.orientation] || this[symbols.defaults].orientation;
    }
    set orientation(value) {
        const changed = value !== this[symbols.orientation];
        this[symbols.orientation] = value;
        if ("orientation" in base) { super.orientation = value; }
        if (changed) {
            this._render();
            if (this[symbols.raiseChangeEvents]) {
                const event = new CustomEvent("orientation-changed");
                this.dispatchEvent(event);
            }
        }
    }
    toggleOrientation() {
        this.orientation = (this.orientation === "vertical") ? "horizontal" : "vertical";
    }


    /**
     * Single Selection
     */

    /**
     * Method used to toggle selected class on items
     * @param item - One of the components items
     * @param selected - Whether the item should be selected or not
     */
    [symbols.itemSelected](item, selected) {
        if (super[symbols.itemSelected]) { super[symbols.itemSelected](item, selected); }
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
    // Call the next method when the goUp action is initiated by the KeyboardDirectionMixin
    [symbols.goUp]() {
        this.next();
    }
    // Call the previous method when the goDown action is initiated by the KeyboardDirectionMixin
    [symbols.goDown]() {
        this.previous();
    }
    // Call the next method when the goAction action is initiated by the KeyboardDirectionMixin
    [symbols.goRight]() {
        this.next();
    }
    // Call the previous method when the goLeft action is initiated by the KeyboardDirectionMixin
    [symbols.goLeft]() {
        this.previous();
    }

    // Define a template that will be stamped into the Shadow DOM by the ShadowTemplateMixin.
    get [symbols.template]() {
        return `
            <style>
                :host {
                    display: block;
                    width: 10em;
                    height: 10em;
                    position: relative;
                    /*margin: 8em auto;*/
                    perspective: 1100px;
                }
                :host(:focus) {
                    outline: none;
                    background-color: #CCC;
                }
                #carousel {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    transition: transform 1s;
                }
                #carousel.panels-backface-invisible > * {                   
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
                    width: 90%;
                    height: 90%;
                    left: 5%;
                    top: 5%;
                    border: 2px solid black;                  
                    background-color: rgba(51,51,51,0.76);
                    transition: opacity 1s, transform 1s, background-color 1s, color 1s;
                }
                #carousel ::slotted(*.selected) {
                   background-color: var(--selected-bg-color, #0d152d);
                   color: var(--selected-color, #FFD700);
                }
            </style>
            <div id="carousel">
                <slot id="slot"></slot>
            </div>
    `;
    }
    next() {
        this._rotation = (this._rotation + (this._theta * 1 * -1));
        this._rotate();
    }
    previous() {
        this._rotation = (this._rotation + (this._theta * 1));
        this._rotate();
    }
    _render() {
        const panelCount = this.children.length;
        let panel, angle, i;
        const panelSize = this._$carousel[ (this.orientation === "horizontal") ? 'offsetWidth' : 'offsetHeight' ];
        this._rotateFn = (this.orientation === "horizontal") ? 'rotateY' : 'rotateX';
        this._theta = 360 / panelCount;
        // do some trig to figure out how big the carousel
        // is in 3D space
        this._radius = Math.round( ( panelSize / 2) / Math.tan( Math.PI / panelCount ) );
        for ( i = 0; i < panelCount; i++ ) {
            panel = this.children[i];
            angle = this._theta * i;
            panel.style.opacity = 1;
            // rotate panel, then push it out in 3D space
            panel.style.transform = this._rotateFn + '(' + angle + 'deg) translateZ(' + this._radius + 'px)';
        }
        // hide other panels
        for (  ; i < panelCount; i++ ) {
            panel = this.children[i];
            panel.style.opacity = 0;
            panel.style.transform = 'none';
        }
        // adjust rotation so panels are always flat
        this._rotation = Math.round( this._rotation / this._theta ) * this._theta;

        this._rotate();
    }
    _rotate(){
        // Figure out which item is most central (If there are an odd number of items there might not be a completely centered item)
        let idx = Math.round((this._rotation * -1) / this._theta) % this.children.length;
        if (idx < 0) {
            idx = this.children.length - (idx * -1);
        }
        this.selectedItem = this.children[idx];
        this._$carousel.style.transform = 'translateZ(-' + this._radius + 'px) ' + this._rotateFn + '(' + this._rotation + 'deg)';
    }
    connectedCallback() {
        this.style.margin = `${this.clientWidth}px auto`;
        this._$carousel = this.shadowRoot.querySelector("#carousel");
        this._$slot = this.shadowRoot.querySelector("#slot");
        this._$slot.addEventListener('slotchange', e => {
            this._render();
        });
        this.setAttribute("tabindex", "0");
    }
}

window.customElements.define("three-dee-carousel", ThreeDeeCarousel);

export default ThreeDeeCarousel;