import "../styles/header.css";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img id="logo" src={logo} alt="taradasi-medics-logo" />
            </Link>
            <input type="checkbox" id="hamburger-checkbox" />
            <label id="hamburger" htmlFor="hamburger-checkbox">
                <span className="hamburgerLine" id="hamburgerLine-1"></span>
                <span className="hamburgerLine" id="hamburgerLine-2"></span>
                <span className="hamburgerLine" id="hamburgerLine-3"></span>
            </label>
            <nav id="headerMenu">
                <ul>
                    <li>
                        <Link className="headerMenu-link" to="/dental-supplies">Dental Supplies</Link>
                    </li>
                    <li>
                        <Link className="headerMenu-link" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="headerMenu-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="headerMenu-link" to="/blog">Blog</Link>
                    </li>
                    <li className="headerMenu-phoneAndWhatsapp">
                        <Link to="tel:+260955336825">Call +260 955 336825</Link>
                    </li>
                    <li className="headerMenu-phoneAndWhatsapp">
                        <Link className="social" to="https://wa.me/260955336825">
                            {/* <img className="socialMedia" src={whatsAppIcon} /> */}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;