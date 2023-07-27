import { useState, useRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import IconSend from "../../../assets/images/components/genericIcons/IconSend";

import "./../index.css";

export default function ContactMeForm() {


    const [validCaptcha, changeValidCaptcha] = useState(null);
    const captcha = useRef(null);
    
    const onChange = () => {
        if (captcha.current.getValue()) {
            changeValidCaptcha(true);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (captcha.current.getValue()) {
            changeValidCaptcha(true);
        } else {
            changeValidCaptcha(false);
        }
        if (validCaptcha === true) {
            event.target.submit();
        }
    }

    return(
        <form
            className="foo"
            autoComplete="off"
            action="https://formsubmit.co/omar.arias.dev@gmail.com"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="contact_me-form">
                <div className="form-inputs-container">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://www.linkedin.com/in/omar-arias-dev/" />
                    <input className="form-text" type="text" placeholder="Name" name="name" required />
                    <input className="form-text" type="email" placeholder="Email" name="email" required />
                    <input className="form-text" type="text" placeholder="Subject" name="subject" required />
                </div>
                <textarea className="form-text form-text-message" placeholder="Message" name="message" required />
            </div>
            <div className="contact_me-form-button-container">
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LdeQ10nAAAAAJmyOu9rZ4BKK42LGMWIAlU1CNW_"
                    onChange={onChange}
                    theme="dark"
                />
                {
                    validCaptcha === false && <p className="form-captcha-message">Do the captcha</p>
                }
                <button className="form-button-submit">
                    Send
                    <IconSend fill="white" />
                </button>
            </div>
        </form>
    )
}