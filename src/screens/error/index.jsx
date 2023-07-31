import { useRouteError } from "react-router-dom";

import "./index.css";

export default function ErrorPage() {

    const error = useRouteError();
    console.error("Error:", error);

    return (
        <main className="error-page-main-container">
            <div className="error-page-simple-section">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
            {
                error &&
                <div className="error-page-dev-section">
                    <code>{error.status}</code>
                    <code>{error.statusText}</code>
                    <code>{error.data}</code>
                </div>
            }
        </main>
    );
}