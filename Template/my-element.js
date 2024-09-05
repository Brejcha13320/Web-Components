class myElement extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = /* html */ `
        <section>
            <h2 class="title">Hola mundo!</h2>
            <div>
            <p>Soy más texto ejemplo</p>
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
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement);
