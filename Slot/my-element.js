class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = /* html */ `
        <section>
            <h2>
                <slot name="title"></slot>
            </h2>
            <div>
                <p>
                    <slot name="text"></slot>
                </p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
          <style>
            h2 {
              color: red;
            }
          </style>
        `;
    }

    render() {
        /**
         * cloneNode(true) -> Indica que no solo agrege el primer elemento sino todos
         * incluyendo los que estan anidados internamente
         */
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement);
