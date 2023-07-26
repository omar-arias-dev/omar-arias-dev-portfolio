import Header from "./components/Header";
import AboutMeSection from "./sections/AboutMeSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsSection from "./sections/SkillsSection";

import "./index.css";
import ContactMeSection from "./sections/ContactMeSection";

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
        </main>
    );
}