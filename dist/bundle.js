(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
class ImgSpinner extends HTMLImageElement {
    constructor() {
        super();
        if (!(this['src'] || this['srcset'])) {
            this['src'] = ImgSpinner._placeholder;
            this.classList.add(ImgSpinner.classname);
        }
    }
    static get observedAttributes() {
        return ['src', 'srcset'];
    }
    _spinUntilLoaded() {
        if (!this.complete) {
            this.classList.add(ImgSpinner.classname);
            this.onload = this._onLoad;
        }
    }
    _onLoad() {
        this.classList.remove(ImgSpinner.classname);
    }
    connectedCallback() {
        this._spinUntilLoaded();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this._spinUntilLoaded();
    }
}
ImgSpinner.classname = 'img-spinner-loading';
ImgSpinner._template = (() => {
    const t = document.createElement('template');
    t.innerHTML = `\
      <style>
      .${ImgSpinner.classname} {
        filter: opacity(50%);
        background: transparent url('icons/spinner.svg') no-repeat scroll center
          center;
        background-blend-mode: multiply;
        shape-outside: polygon(0 0, 0 200px, 300px 600px);
      }
      </style>`;
    document.head.appendChild(t.content);
    return t.content;
})();
ImgSpinner._placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
customElements.define('img-spinner', ImgSpinner, { extends: 'img' });

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./img-spinner");

},{"./img-spinner":1}]},{},[2]);
