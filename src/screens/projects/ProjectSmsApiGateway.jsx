import IconSlack from "../../assets/images/components/skillsIcons/IconSlack";
import IconGit from "../../assets/images/components/skillsIcons/IconGit";
import IconJava from "../../assets/images/components/skillsIcons/IconJava";
import IconSpring from "../../assets/images/components/skillsIcons/IconSpring";
import IconMysql from "../../assets/images/components/skillsIcons/IconMysql";
import IconNginx from "../../assets/images/components/skillsIcons/IconNginx";

import smsApiGatewayCode from "./../../assets/images/sms-api-gateway-code.png";
import smsApiGatewayDiploma from "./../../assets/images/sms-api-gateway-diploma.jpg";
import smsApiGatewayMe from "./../../assets/images/sms-api-gateway-me.jpg";

import "./index.css";

export default function ProjectSmsApiGateway() {
    return (
        <main className="project-sms-api-gateway-container">
            <header className="sms-api-gateway-header">
                <h1>SMS API Gateway</h1>
                <h3>Computer-Systems Engineering degree project</h3>
            </header>
            <section className="sms-api-gateway-tools-section">
                <h4>Programming Languages, frameworks & tools used</h4>
                <div className="sms-api-gateway-tools-images-list">
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconSlack width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">Slack</figcaption>
                    </figure>
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconGit width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">Git</figcaption>
                    </figure>
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconJava width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">Java</figcaption>
                    </figure>
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconSpring width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">Spring</figcaption>
                    </figure>
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconMysql width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">MySQL</figcaption>
                    </figure>
                    <figure className="sms-api-gateway-tools-images-list-item">
                        <IconNginx width={60} height={60} />
                        <figcaption className="sms-api-gateway-tools-images-list-item-title">NGINX</figcaption>
                    </figure>
                </div>
            </section>
            <section className="sms-api-gateway-history-container">
                <figure className="sms-api-gateway-history-item">
                    <img className="sms-api-gateway-image image-code" src={smsApiGatewayCode} alt="SMS API Gateway" />
                    <figcaption>Code was written in Java. Its Framework was Spring</figcaption>
                </figure>
                <figure className="sms-api-gateway-history-item">
                    <img className="sms-api-gateway-image image-diploma" src={smsApiGatewayDiploma} alt="Diploma got when the project was finished" />
                    <figcaption>Diploma got when the project was finished</figcaption>
                </figure>
                <figure className="sms-api-gateway-history-item">
                    <img className="sms-api-gateway-image image-me" src={smsApiGatewayMe} alt="Me when I was on the bus which went to Tecnomotum" />
                    <figcaption>Me when I was on the bus which went to Tecnomotum</figcaption>
                </figure>
            </section>
        </main>
    );
}