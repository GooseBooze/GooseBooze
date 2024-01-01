class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav-components>
                <nav>
                    <ul>
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="Page2.html">Game Library</a></li>
                    </ul>
                </nav>
            </nav-components>
        `;
    }
}

customElements.define('nav-component', NavComponent);