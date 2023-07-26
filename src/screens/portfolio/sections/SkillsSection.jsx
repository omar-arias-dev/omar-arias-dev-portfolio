import SectionLabel from "../components/SectionLabel";
import SkillCard from "../components/SkillCard";

import IconGit from "../../../assets/images/components/skillsIcons/IconGit";
import IconJavaScript from "../../../assets/images/components/skillsIcons/IconJavaScript";
import IconJava from "../../../assets/images/components/skillsIcons/IconJava";
import IconNode from "../../../assets/images/components/skillsIcons/IconNode";
import IconReact from "../../../assets/images/components/skillsIcons/IconReact";
import IconCss from "../../../assets/images/components/skillsIcons/IconCss";
import IconHtml from "../../../assets/images/components/skillsIcons/IconHtml";
import IconPython from "../../../assets/images/components/skillsIcons/IconPython";
import IconPhp from "../../../assets/images/components/skillsIcons/IconPhp";
import IconFirebase from "../../../assets/images/components/skillsIcons/IconFirebase";
import IconRedux from "../../../assets/images/components/skillsIcons/IconRedux";
import IconSpring from "../../../assets/images/components/skillsIcons/IconSpring";
import IconTailwind from "../../../assets/images/components/skillsIcons/IconTailwind";
import IconMysql from "../../../assets/images/components/skillsIcons/IconMysql";
import IconStyledComponents from "../../../assets/images/components/skillsIcons/IconStyledComponents";
import IconExpress from "../../../assets/images/components/skillsIcons/IconExpress";
import IconFigma from "../../../assets/images/components/skillsIcons/IconFigma";
import IconPostgresql from "../../../assets/images/components/skillsIcons/IconPostgresql";
import IconRedis from "../../../assets/images/components/skillsIcons/IconRedis";
import IconVscode from "../../../assets/images/components/skillsIcons/IconVscode";
import IconDocker from "../../../assets/images/components/skillsIcons/IconDocker";
import IconSlack from "../../../assets/images/components/skillsIcons/IconSlack";
import IconWordpress from "../../../assets/images/components/skillsIcons/IconWordpress";
import IconNginx from "../../../assets/images/components/skillsIcons/IconNginx";

import "./../index.css";

export default function SkillsSection() {
    return (
        <section className="skills-section">
            <SectionLabel title="Skills" id="skills-section" />
            <div className="skills-container">
                <div className="skill-card-container">
                    <SkillCard skillName="Git" skillIcon={ IconGit } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="JavaScript" skillIcon={ IconJavaScript } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Java" skillIcon={ IconJava } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Node.js" skillIcon={ IconNode } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="React" skillIcon={ IconReact } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="CSS 3" skillIcon={ IconCss } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="HTML 5" skillIcon={ IconHtml } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Python" skillIcon={ IconPython } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="PHP" skillIcon={ IconPhp } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Firebase" skillIcon={ IconFirebase } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Redux" skillIcon={ IconRedux } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Spring" skillIcon={ IconSpring } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Tailwind.css" skillIcon={ IconTailwind } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="MySQL" skillIcon={ IconMysql } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Styled-Components" skillIcon={ IconStyledComponents } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Express.js" skillIcon={ IconExpress } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Figma" skillIcon={ IconFigma } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="PostgreSQL" skillIcon={ IconPostgresql } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Redis" skillIcon={ IconRedis } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="VScode" skillIcon={ IconVscode } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Docker" skillIcon={ IconDocker } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Slack" skillIcon={ IconSlack } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="Wordpress" skillIcon={ IconWordpress } />
                </div>
                <div className="skill-card-container">
                    <SkillCard skillName="NGINX" skillIcon={ IconNginx } />
                </div>
            </div>
        </section>
    );
}