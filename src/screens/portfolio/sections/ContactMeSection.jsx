import SectionLabel from "../components/SectionLabel";
import ContactMeForm from "../components/ContactMeForm";
import "./../index.css";

export default function ContactMeSection() {
    return (
        <section className="contact_me-section-container">
            <div className="contact_me-elements-container">
                <hr className="divider divider-black" />
                <SectionLabel title="Contact Me" id="contact_me-section" white />
                <ContactMeForm />
            </div>
        </section>
    );
}