class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav-component>
                <nav>
                    <ul>
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="Page2.html">Game Library</a></li>
                    </ul>
                </nav>
            </nav-component>
        `;
    }
}

customElements.define('nav-component', NavComponent);