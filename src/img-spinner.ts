class ImgSpinner extends HTMLImageElement {
  static classname = 'img-spinner-loading';

  static _template: DocumentFragment = (() => {
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

  static _placeholder: string =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  static get observedAttributes() {
    return ['src', 'srcset'];
  }

  constructor() {
    super();
    if (!(this['src'] || this['srcset'])) {
      this['src'] = ImgSpinner._placeholder;
      this.classList.add(ImgSpinner.classname);
    }
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

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    this._spinUntilLoaded();
  }
}

customElements.define('img-spinner', ImgSpinner, { extends: 'img' });
