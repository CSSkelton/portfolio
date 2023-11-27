class Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>Copyright &copy; 2023 All Rights Reserved</a>
            </footer>
        `;
    }

}

customElements.define("footer-component", Footer);