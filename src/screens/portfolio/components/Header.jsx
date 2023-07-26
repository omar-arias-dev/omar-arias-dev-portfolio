import IconDownload from "../../../assets/images/components/genericIcons/IconDownload";

import "./../index.css";

import oaLogo from "./../../../assets/images/OA.png";
import IconUser from "../../../assets/images/components/genericIcons/IconUser";
import IconDocument from "../../../assets/images/components/genericIcons/IconDocuments";
import IconSkills from "../../../assets/images/components/genericIcons/IconSkills";
import IconSend from "../../../assets/images/components/genericIcons/IconSend"

export default function Header() {
    return (
        <header className="portfolio-header">
            <nav className="portfolio-header-navbar">
                <ul className="portfolio-header-navbar-list">
                    <li className="portfolio-header-navbar-list-item">
                        <a href="#"><IconUser width={20} height={20} /><p>About Me</p></a>
                    </li>
                    <li className="portfolio-header-navbar-list-item">
                        <a href="#"><IconDocument width={20} height={20} /><p>Portfolio</p></a>
                    </li>
                    <li className="portfolio-header-navbar-list-item">
                        <a href="#"><IconSkills width={20} height={20} /><p>Skills</p></a>
                    </li>
                    <li className="portfolio-header-navbar-list-item">
                        <a href="#">
                            <IconSend width={20} height={20} />
                            <p>Contact Me</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="portfolio-header-section">
                <img src={oaLogo} alt="Omar Arias Dev Logo" className="portfolio-header-icon" />
                <button className="portfolio-header-download_cv_button">
                    <IconDownload width={20} height={20} />
                    <p>Download CV</p>
                </button>
            </section>
        </header>
    );
}