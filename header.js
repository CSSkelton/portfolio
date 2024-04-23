class Header extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <h1>Cody Skelton - Web Developer</h1>
            

                <nav>
                    <ul>
                        <li><a href="index.html">Landing</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="resume.html">Resume</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="db.html">DB Diagrams</a></li>
                        <li><a href="api.html">API Unit Tests</a></li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">Presentations</button>
                                <div class="dropdown-content">
                                    <a href="web-430/skelton-tech-value-stream.html">Tech Value Stream</a>
                                    <a href="web-430/skelton-two-pizza-rule.html">Two-Pizza Rule</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define("header-component", Header);