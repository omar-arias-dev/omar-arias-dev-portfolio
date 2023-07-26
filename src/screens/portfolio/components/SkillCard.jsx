import "./../index.css";

export default function SkillCard({ skillName, skillIcon: SkillIcon }) {
    return (
        <figure className="skill-figure-container">
            <SkillIcon width={100} height={100} />
            <figcaption className="skill-figure-caption">{skillName}</figcaption>
        </figure>
    );
}