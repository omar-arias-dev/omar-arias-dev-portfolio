import "./../index.css";

export default function SectionLabel({ title, white }) {
    return (
        <label className={ white ? "section-label section-label-white" : "section-label" }>{title}</label>
    );
}