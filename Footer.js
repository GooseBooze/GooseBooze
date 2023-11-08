class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p><i><a>https://github.com/GooseBooze</a></p>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);