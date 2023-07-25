import { useState } from "react";
import "./../index.css";

export default function ProjectCard({ image, link, imageTitle, icon: FrameworkIcon, projectTitle, desk }) {

    const [showMainFramework, setShowMainFramework] = useState(false);

    return (
        <a
            href={link}
            className={desk ? "portfolio-project-card-desk" : "portfolio-project-card"}
            onMouseEnter={() => setShowMainFramework(true)}
            onMouseLeave={() => setShowMainFramework(false)}
        >
            <section className="portfolio-project-card-image-container">
                <img
                    className={desk ? "portfolio-project-card-image-desk" : "portfolio-project-card-image"}
                    src={image}
                    alt={imageTitle}
                />
            </section>
            <footer className="portfolio-project-card-footer">
                {
                    showMainFramework ?
                        <FrameworkIcon width={60} height={60} />
                    :
                    <h3 className="portfolio-project-card-title">{projectTitle}</h3>
                }
            </footer>
        </a>
    );
}