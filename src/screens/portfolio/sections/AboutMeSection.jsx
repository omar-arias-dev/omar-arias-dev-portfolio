import useMediaQuery from "../../../hooks/useMediaQuery";

import IconGithub from "../../../assets/images/components/genericIcons/IconGithub";
import IconLinkedIn from "../../../assets/images/components/genericIcons/IconLinkedIn";
import IconEmail from "../../../assets/images/components/genericIcons/IconEmail";
import IconTwitter from "../../../assets/images/components/genericIcons/IconTwitter";
import IconInstagram from "../../../assets/images/components/genericIcons/IconInstagram";

import terminalIcon from "../../../assets/images/terminal.png";
import omarAriasDevPhoto from "../../../assets/images/myPhoto.png";

function useMediaQueries() {
    const monitorQuery = useMediaQuery("(min-width: 1024px)");
    const tabletQuery = useMediaQuery("(min-width: 768px)");
    const mobileQuery = useMediaQuery("(min-width: 425px)");

    return { mobileQuery, tabletQuery, monitorQuery };
}

export default function AboutMeSection() {

    const { mobileQuery, tabletQuery, monitorQuery } = useMediaQueries();

    return (
        <section className="about_me">
            <aside className="about_me-profile">
                <img src={terminalIcon} alt="Terminal Icon" className="about_me-profile-terminal_icon" />
                <h1 id="about_me-section" className="about_me-profile-title">Omar Arias Dev</h1>
                <figure>
                    <img src={omarAriasDevPhoto} alt="Omar Arias Dev" className="about_me-profile_photo" />
                    <figcaption className="about_me-profile_photo-description">
                        Computer-Systems Engineer, Full-Stack web & software developer committed in each line of code & relentless focus.
                    </figcaption>
                </figure>
            </aside>
            <aside className="about_me-spotlight">
                <h1 className="about_me-spotlight-title">Continuous<br />results</h1>
                <p className="about_me-spotlight-motto">Coding the best solutions for all software projects.</p>
                <div className="about_me-spotlight-links">
                    <a
                        href="https://github.com/omar-arias-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="about_me-spotlight-link github"
                    >
                        <IconGithub
                            width={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                            height={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omar-arias-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="about_me-spotlight-link linkedin"
                    >
                        <IconLinkedIn
                            width={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                            height={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                        />
                    </a>
                    <a
                        href="mailto:omar.arias.dev@gmail.com"
                        className="about_me-spotlight-link mail"
                    >
                        <IconEmail
                            width={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                            height={monitorQuery ? 58 : tabletQuery ? 40 : mobileQuery ? 38 : 38}
                        />
                    </a>
                </div>
                <div className="about_me-spotlight-social_links">
                    <a
                        href="https://twitter.com/omarariasdev"
                        target="_blank"
                        rel="noreferrer"
                        className="about_me-spotlight-social_link twit"
                    >
                        <IconTwitter
                            width={monitorQuery ? 50 : tabletQuery ? 38 : mobileQuery ? 35 : 35}
                            height={monitorQuery ? 50 : tabletQuery ? 38 : mobileQuery ? 35 : 35}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/omarariasdev/"
                        target="_blank"
                        rel="noreferrer"
                        className="about_me-spotlight-social_link insta"
                    >
                        <IconInstagram
                            width={monitorQuery ? 50 : tabletQuery ? 38 : mobileQuery ? 35 : 35}
                            height={monitorQuery ? 50 : tabletQuery ? 38 : mobileQuery ? 35 : 35}
                        />
                    </a>
                </div>
            </aside>
        </section>
    );
}
