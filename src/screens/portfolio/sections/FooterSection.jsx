import "./../index.css";

import oaLogo from "./../../../assets/images/OA.png";

export default function FooterSection() {
    return (
        <footer className="footer-section">
            <div className="footer-section-elements-container">
                <h3 className="footer-section-title">Omar Arias Dev</h3>
                <img src={oaLogo} alt="Omar Arias Dev Logo" className="portfolio-header-icon portfolio-footer-icon" />
            </div>
        </footer>
    );
}