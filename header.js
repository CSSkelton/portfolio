class Header extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Cody Skelton - Web Developer</h1>
            </header>

            <nav>
                <ul>
                    <li><a href="index.html">Landing</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="db.html">DB Diagrams</a></li>
                    <li><a href="api.html">API Unit Tests</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("header-component", Header);