import IconSend from "../../../assets/images/components/genericIcons/IconSend";

import "./../index.css";

export default function ContactMeForm() {
    return(
        <form className="foo">
            <div className="contact_me-form">
                <div className="form-inputs-container">
                    <input className="form-text" type="text" placeholder="Name" required />
                    <input className="form-text" type="email" placeholder="Email" required />
                    <input className="form-text" type="text" placeholder="Subject" required />
                </div>
                <textarea className="form-text form-text-message" placeholder="Message" required />
            </div>
            <div className="contact_me-form-button-container">
                <button className="form-button-submit">
                    Send
                    <IconSend fill="white" />
                </button>
            </div>
        </form>
    )
}