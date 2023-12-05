class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">HomePage</a></li>
                    <li><a href="Page2.html">Favourite-Games</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);