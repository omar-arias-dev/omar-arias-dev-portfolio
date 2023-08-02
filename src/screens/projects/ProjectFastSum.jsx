import fsGame from "./../../assets/images/fsGame.png";

import "./index.css";

export default function ProjectFastSum() {
    return (
        <main className="project-fast-sum-container">
            <h1>Fast Sum</h1>
            <img src={fsGame} alt="fast-sum in game" className="project-fast-sum-image" />
            <p>Coming soon on PlayStore.</p>
        </main>
    )
}