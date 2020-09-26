declare class ImgSpinner extends HTMLImageElement {
    static classname: string;
    static _template: DocumentFragment;
    static _placeholder: string;
    static get observedAttributes(): string[];
    constructor();
    _spinUntilLoaded(): void;
    _onLoad(): void;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}
