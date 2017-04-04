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
import symbols from 'elix/mixins/symbols';

// We want to apply a number of mixin functions to HTMLElement.
const mixins = [
    ShadowTemplateMixin,
    SingleSelectionMixin,
    KeyboardMixin,
    KeyboardDirectionMixin
];

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
    [symbols.goUp]() {
        if (this._isHorizontal === true) {
            this.isHorizontal = false;
        }
        this.next();
    }
    [symbols.goDown]() {
        if (this._isHorizontal === true) {
            this.isHorizontal = false;
        }
        this.previous();
    }
    [symbols.goRight]() {
        if (this._isHorizontal === false) {
            this.isHorizontal = true;
        }
        this.next();
    }
    [symbols.goLeft]() {
        if (this._isHorizontal === false) {
            this.isHorizontal = true;
        }
        this.previous();
    }

    // Define a template that will be stamped into the Shadow DOM by the
    // ShadowTemplateMixin.
    get [symbols.template]() {
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
        this._isHorizontal = (value === true);
        this._render();
    }
    get isHorizontal() {
        return this._isHorizontal;
    }
    next() {
        this.rotation = (this._rotation + (this._theta * 1 * -1));
    }
    previous() {
        this.rotation = (this._rotation + (this._theta * 1));
    }
    _render() {
        const panelCount = this.children.length;
        let panel, angle, i;
        const panelSize = this._$carousel[ this._isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
        this._rotateFn = this._isHorizontal ? 'rotateY' : 'rotateX';
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

export default ThreeDeeCarousel;