import "../styles/contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

function Contact() {

    const captchaRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        const { name, phone, email, message } = e.target.elements;

        const messageDetails = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
            token
        };

        const response = await fetch("https://taradasi.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(messageDetails),
        });
        
        const result = await response.json();
        alert(result.status);
    };

    return (
        <main className="contactPage">
            <section className="contactSection">
                <h1>Contact Us</h1>
                <div className="contactOptionsContainer">
                    <div className="contactInfoContainer">
                        <h3>Call us</h3>
                        <p><a className="footer-contactText" href="tel:+260955336825"> +260 955 336825</a></p>
                        <a href="https://wa.me/260955336825/"> WhatsApp </a>
                        <h3>Visit us</h3>
                        <p>Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia.</p>
                        <h3>Working hours</h3>
                        <p>7 days a week. 08:00 – 17:00.</p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}> 
                        <input type="text" name="name" id="name" placeholder="Name" className="form-input" pattern="[a-zA-Z]*" maxLength="40"/>			
                        <input type="email" name="email" id="email" placeholder="Email" className="form-input" pattern="[\w\.\-]+@[a-zA-Z\d\-]+\.[a-zA-Z]{2,10}\.?[a-zA-Z]{0,10}" maxLength="50"/>
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-input" pattern="[+]?[\d\s()-]*" minLength="6" maxLength="30"/>
                        <input type="text" name="message" id="message" placeholder="Message" className="form-input" required/>
                        <div className="checkboxAndLabelContainer">
                            <input type="checkbox" className="form-checkbox" required/>
                            <label htmlFor="checkbox">I have read and agree to the Terms and Conditions and Privacy Policy</label>
                        </div>
                        <ReCAPTCHA 
                            sitekey = { process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY }
                            ref = { captchaRef }
                        />
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contact;