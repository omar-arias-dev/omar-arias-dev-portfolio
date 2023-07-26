import "./../index.css";

export default function SectionLabel({ title, id, white }) {
    return (
        <label id={id} className={ white ? "section-label section-label-white" : "section-label" }>{title}</label>
    );
}