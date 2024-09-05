const template = document.createElement('div');
template.innerHTML = `
    <style>
        p {
            color: blue
        }
    </style>
    <p>Hola Mundo 2</p>
    <p>Texto Ejemplo</p>
`;

class myElement extends HTMLElement {

    constructor(){
        super();

        this.p = document.createElement('p');
    }

    connectedCallback(){
        this.p.textContent = "Hola Mundo!!";
        this.appendChild(this.p);
        this.appendChild(template);
    }


}
customElements.define('my-element', myElement)