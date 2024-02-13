class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div"); // div principal
        componentRoot.setAttribute("class", "card"); //criando classe da div

        // Criando div cardLeft
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left"); // criando classe da div

        // Criando novos atributos dentro da div card-left
        const author = document.createElement("span");
        //criando conteúdo
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url") // adionando url

        const content = document.createElement("p");
        content.textContent = this.getAttribute("text");


        // adicionando os atributos dentro da div card-left
        cardLeft.appendChild(author);
        cardLeft.appendChild(link);
        cardLeft.appendChild(content);

        // Criando div cardRight
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right"); // criando classe da div

        // Criando novos atributos dentro da div cardRight
        const image = document.createElement("img");
        image.src = "./assets/lucky-star-anime.gif"; // caminho da imagem
        image.alt = "Personagem de Anime digitando"
        cardRight.appendChild(image); // adicionando o atributo dentro da div cardRight


        // adicinando divs filhas dentro da div principal
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent =

            `
            .card {
                display: flex;
                width: 80%;
                padding: 50px;
                flex-direction: row;
                border-radius: 10px;
                margin: auto;
                margin-top: 20px;
                justify-content: space-between;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            
            span {
                color: rgb(116, 116, 116);
                font-size: 15px;
                font-weight: 400;
            }
            
            p {
                font-size: 16px;
            }
            
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: auto;
                margin-right: 15px;
            }
            
            
            .card-left > a {
                padding: 15px 0;
                font-size: 25px;
                text-decoration: none;
                color: black;
            }

          
            .card-left > a:hover {
             color: rgb(0, 102, 255);
    }

            .card-right img {
                border-radius: 10px;
            }

    `
        return style;

    }
}

customElements.define("card-news", CardNews)
