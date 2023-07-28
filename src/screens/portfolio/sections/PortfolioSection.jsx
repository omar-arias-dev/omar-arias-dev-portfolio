import useMediaQuery from "../../../hooks/useMediaQuery";

import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import ProjectLinkedCard from "../components/ProjectLinkedCard";

import IconReact from "../../../assets/images/components/skillsIcons/IconReact";
import IconSpring from "../../../assets/images/components/skillsIcons/IconSpring";
import IconPhp from "../../../assets/images/components/skillsIcons/IconPhp";

import fsGame from "../../../assets/images/fsMain.png";
import guessPokemonHome from "../../../assets/images/guessPokemonHome.png";
import calcDesk from "../../../assets/images/calcDesk.jpg";
import todoAppDesk from "../../../assets/images/todoAppDesk.jpg";
import smsApiGatewayCover from "../../../assets/images/smsApiGatewayCover.png";
import bustrackerApp from "../../../assets/images/bustrackerApp.png";
import career from "../../../assets/images/career.png";
import careerTablet from "../../../assets/images/career-tablet.png"; 
import careerMobile from "../../../assets/images/career-mobile.png"; 

import "./../index.css";

function useMediaQueries() {
    const monitorQuery = useMediaQuery("(min-width: 1024px)");
    const tabletQuery = useMediaQuery("(min-width: 768px)");
    const mobileQuery = useMediaQuery("(min-width: 425px)");

    return { mobileQuery, tabletQuery, monitorQuery };
}

export default function PortfolioSection() {

    const { mobileQuery, tabletQuery, monitorQuery } = useMediaQueries();

    return (
        <section className="portfolio-section">
            <SectionLabel title="Portfolio" id="portfolio-section" />
            <div className="portfolio-section-projects-container">
                <div className="project-style-mobile">
                    <ProjectLinkedCard
                        image={fsGame}
                        projectTitle="Fast Sum Mobile App"
                        icon={ IconReact }
                        imageTitle="Fast Sum"
                        project="fast-sum"
                    />
                    <ProjectLinkedCard
                        image={smsApiGatewayCover}
                        projectTitle="SMS API Gateway"
                        icon={ IconSpring }
                        imageTitle="SMS API Gateway"
                        project="sms-api-gateway"
                    />
                    <ProjectCard
                        link="https://bustracker.app/"
                        image={bustrackerApp}
                        projectTitle="Bustracker (Mobile, Front, Back)"
                        icon={ IconPhp }
                        imageTitle="Bustracker"
                    />
                </div>
                <div className="project-style-desk">
                    <ProjectCard
                        link="https://github.com/omar-arias-dev/guess-the-pokemon"
                        image={guessPokemonHome}
                        projectTitle="Guess the Pókemon Game"
                        icon={ IconReact }
                        imageTitle="Guess the Pókemon"
                        desk
                    />
                    <ProjectCard
                        link="https://github.com/omar-arias-dev/React-Frontend-Mentor-Calculator"
                        image={calcDesk}
                        projectTitle="Frontend Mentor Calculator App"
                        icon={ IconReact }
                        imageTitle="Calculator"
                        desk
                    />
                    <ProjectCard
                        link="https://github.com/omar-arias-dev/React-Frontend-Mentor-TODOapp"
                        image={todoAppDesk}
                        projectTitle="Frontend Mentor TODO App"
                        icon={ IconReact }
                        imageTitle="TODO App"
                        desk
                    />
                </div>
            </div>
            <SectionLabel title="Career" id="portfolio-section-career" />
            <div className="portfolio-section-career">
                <img
                    className="portfolio-section-career-image"
                    src={
                        monitorQuery ?
                            career
                        :
                        tabletQuery ?
                            careerTablet
                        :
                        mobileQuery ?
                            careerMobile
                        :
                        careerMobile
                    }
                    alt="career"
                />
            </div>
        </section>
    );
}