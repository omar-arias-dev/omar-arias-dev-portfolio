import Header from "./components/Header";
import AboutMeSection from "./sections/AboutMeSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsSection from "./sections/SkillsSection";
import ContactMeSection from "./sections/ContactMeSection";
import FooterSection from "./sections/FooterSection";

import "./index.css";

export default function Portfolio() {
    return (
        <main className="portfolio">
           <Header />
           <AboutMeSection />
           <hr className="divider" />
           <PortfolioSection />
           <hr className="divider" />
           <SkillsSection />
           <ContactMeSection />
           <FooterSection />
        </main>
    );
}