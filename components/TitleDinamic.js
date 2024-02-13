class TitleDinamic extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //Base componente

        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title")

        //Estilizar component

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: rgb(7, 186, 209);
            }
        
        `

        //Enviar para a shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define('title-dinamic', TitleDinamic);