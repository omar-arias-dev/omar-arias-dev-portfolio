import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import PortfolioSection from "./sections/PortfolioSection";

import "./index.css";

export default function Portfolio() {
    return (
        <main className="portfolio">
           <Header />
           <AboutMe />
           <hr className="divider" />
           <PortfolioSection />
        </main>
    );
}