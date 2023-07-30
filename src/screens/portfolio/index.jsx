import { useEffect, useState } from "react";

import Header from "./components/Header";
import AboutMeSection from "./sections/AboutMeSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsSection from "./sections/SkillsSection";
import ContactMeSection from "./sections/ContactMeSection";
import FooterSection from "./sections/FooterSection";

import ToTopButton from "./components/ToTopButton";

import "./index.css";

const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Portfolio() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener("scroll", handleScrollButtonVisibility);
        
        return () => {
            window.removeEventListener("scroll", handleScrollButtonVisibility);
        }
    }, []);

    return (
        <main className="portfolio">
            {showButton && <ToTopButton onToTop={handleScrollToTop} />}
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