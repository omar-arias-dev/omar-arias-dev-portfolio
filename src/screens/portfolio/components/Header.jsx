import { useState } from "react";

import oaLogo from "./../../../assets/images/OA.png";
import IconUser from "../../../assets/images/components/genericIcons/IconUser";
import IconDocument from "../../../assets/images/components/genericIcons/IconDocuments";
import IconSkills from "../../../assets/images/components/genericIcons/IconSkills";
import IconSend from "../../../assets/images/components/genericIcons/IconSend"
import IconDownload from "../../../assets/images/components/genericIcons/IconDownload";
import IconsHamburgerMenu from "../../../assets/images/components/genericIcons/IconsHamburgerMenu";

import CVOmarArias from "../../../assets/docs/CV-OmarArias.pdf";

import "./../index.css";

export default function Header() {

    const [menuClosed, setMenuClosed] = useState(true);

    const handleCloseMenu = () => {
        setMenuClosed(!menuClosed);
    }

    return (
        <header className="portfolio-header">
            <nav className="portfolio-header-navbar">
                <ul className={`portfolio-header-navbar-list ${menuClosed && "switch-menu"}`}>
                    <a href="#about_me-section">
                        <li className="portfolio-header-navbar-list-item">
                            <IconUser width={20} height={20} />
                            <p>About Me</p>
                        </li>
                    </a>
                    <a href="#portfolio-section">
                        <li className="portfolio-header-navbar-list-item">
                            <IconDocument width={20} height={20} />
                            <p>Portfolio</p>
                        </li>
                    </a>
                    <a href="#skills-section">
                        <li className="portfolio-header-navbar-list-item">
                            <IconSkills width={20} height={20} />
                            <p>Skills</p>
                        </li>
                    </a>
                    <a href="#contact_me-section">
                        <li className="portfolio-header-navbar-list-item">
                            <IconSend width={20} height={20} />
                            <p>Contact Me</p>
                        </li>
                    </a>
                </ul>
            </nav>
            <section className="portfolio-header-section">
                <img src={oaLogo} alt="Omar Arias Dev Logo" className="portfolio-header-icon" />
                <a
                    href={CVOmarArias}
                    download="CV-OMAR_ARIAS"
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-header-download_cv_button"
                >
                    <IconDownload width={20} height={20} />
                    <p>Download CV</p>
                </a>
                <button onClick={() => handleCloseMenu()} className="portfolio-header-hamburger-menu-button">
                    <IconsHamburgerMenu menuClosed={menuClosed} />
                </button>
            </section>
        </header>
    );
}