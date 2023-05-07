import "../styles/footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer">
                <div className="footer-contacts">
                    <h1>Contacts</h1>
                        <p><a className="footer-contactText" href="tel:+260955336825"><PhoneOutlinedIcon /> +260 955 336825</a></p>
                        <p><PlaceOutlinedIcon /> Leopards Hill Mall, Leopards Hill Rd, Bauleni, Lusaka, Zambia</p>
                        <p><AccessTimeOutlinedIcon /> Monday – Sunday<br/>8:00 – 17:00</p>
                        <a href="https://wa.me/260955336825/"><WhatsAppIcon /> WhatsApp </a>
                </div>
                <div className="footer-map">
                    {/* <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoWDZn3OPQBkRRH8xyLO8-S0&key=AIzaSyBgB0tY8-gE3cfSSUZ5st4z152lfElE7Yk"></iframe> */}
                </div>
            </div>
            <nav className="footerMenu">
                <ul>
                    <li><Link className="footerMenu-link" to="/">Home</Link></li>
                    <li><Link className="footerMenu-link" to="/dental-supplies">Dental Supplies</Link></li>
                    <li><Link className="footerMenu-link" to="/contact">Contact</Link></li>
                    <li><Link className="footerMenu-link" to="/about">About</Link></li>
                    <li><Link className="footerMenu-link" to="/blog">Blog</Link></li>
                    <li><Link className="footerMenu-link" to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link className="footerMenu-link" to="/terms-and-conditions">Terms and Conditions</Link></li>
                </ul>
            </nav>
            <p>
                Copyright © {currentYear} Taradasi Medics
            </p>
        </footer>
    );
}

export default Footer;