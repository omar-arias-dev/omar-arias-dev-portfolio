import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";

import IconReact from "../../../assets/images/components/skillsIcons/IconReact";
import IconSpring from "../../../assets/images/components/skillsIcons/IconSpring";
import IconPhp from "../../../assets/images/components/skillsIcons/IconPhp";

import fsGame from "../../../assets/images/fsMain.png";
import guessPokemonHome from "../../../assets/images/guessPokemonHome.png";
import calcDesk from "../../../assets/images/calcDesk.jpg";
import todoAppDesk from "../../../assets/images/todoAppDesk.jpg";
import smsApiGatewayCover from "../../../assets/images/smsApiGatewayCover.png";
import bustrackerApp from "../../../assets/images/bustrackerApp.png";

import "./../index.css";

export default function PortfolioSection() {
    return (
        <section className="portfolio-section">
            <SectionLabel title="Portfolio" id="portfolio-section" />
                <div className="portfolio-section-projects-container">
                    <div className="project-style-mobile">
                        <ProjectCard
                            link="#"
                            image={fsGame}
                            projectTitle="Fast Sum Mobile App"
                            icon={ IconReact }
                            imageTitle="Fast Sum"
                            />
                        <ProjectCard
                            link="#"
                            image={smsApiGatewayCover}
                            projectTitle="SMS API Gateway"
                            icon={ IconSpring }
                            imageTitle="SMS API Gateway"
                        />
                        <ProjectCard
                            link="#"
                            image={bustrackerApp}
                            projectTitle="Bustracker (Mobile, Front, Back)"
                            icon={ IconPhp }
                            imageTitle="Bustracker"
                        />
                    </div>
                    <div className="project-style-desk">
                        <ProjectCard
                            link="#"
                            image={guessPokemonHome}
                            projectTitle="Guess the Pókemon Game"
                            icon={ IconReact }
                            imageTitle="Guess the Pókemon"
                            desk
                        />
                        <ProjectCard
                            link="#"
                            image={calcDesk}
                            projectTitle="Frontend Mentor Calculator App"
                            icon={ IconReact }
                            imageTitle="Calculator"
                            desk
                        />
                        <ProjectCard
                            link="#"
                            image={todoAppDesk}
                            projectTitle="Frontend Mentor TODO App"
                            icon={ IconReact }
                            imageTitle="TODO App"
                            desk
                        />
                    </div>
                </div>
        </section>
    );
}