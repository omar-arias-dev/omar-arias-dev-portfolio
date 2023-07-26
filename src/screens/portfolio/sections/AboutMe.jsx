import IconGithub from "../../../assets/images/components/genericIcons/IconGithub";
import IconLinkedIn from "../../../assets/images/components/genericIcons/IconLinkedIn";
import IconEmail from "../../../assets/images/components/genericIcons/IconEmail";
import IconTwitter from "../../../assets/images/components/genericIcons/IconTwitter";
import IconInstagram from "../../../assets/images/components/genericIcons/IconInstagram";

import terminalIcon from "../../../assets/images/terminal.png";
import omarAriasDevPhoto from "../../../assets/images/myPhoto.png";

export default function AboutMe() {
    return (
        <section className="about_me">
            <aside className="about_me-profile">
                <img src={terminalIcon} alt="Terminal Icon" className="about_me-profile-terminal_icon" />
                <h1 className="about_me-profile-title">Omar Arias Dev</h1>
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
                    <span className="about_me-spotlight-links-bracket">{"{"}</span>
                    <a href="#">
                        <IconGithub width={58} height={58} />
                    </a>
                    <a href="#">
                        <IconLinkedIn width={58} height={58} />
                    </a>
                    <a href="#">
                        <IconEmail width={58} height={58} />
                    </a>
                    <span className="about_me-spotlight-links-bracket">{"}"}</span>
                </div>
                <div className="about_me-spotlight-social_links">
                    <span className="about_me-spotlight-links-angle_bracket">{"["}</span>
                    <a className="about_me-spotlight-social_link twit"><IconTwitter width={30} height={30} /></a>
                    <a className="about_me-spotlight-social_link insta"><IconInstagram width={30} height={30} /></a>
                    <span className="about_me-spotlight-links-angle_bracket">{"]"}</span>
                </div>
            </aside>
        </section>
    );
}
