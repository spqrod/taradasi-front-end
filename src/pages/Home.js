import "../styles/home.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Home() {
    return (
        <main className="homePage">
            <section className="heroSection">
                <div className="heroInfo">
                    <h1>Your search for dental supplies ends here</h1>
                    <p>Taradasi Medics is the leading dental supplier in Zambia. We provide Zambian dentists with everything from drill bits to dental chairs.</p>
                    <button className="button">
                        <Link to="/dental-supplies">See Dental Supplies</Link>
                    </button>
                    <p>Or call <a href="tel:+260955336825">+260 955 336825</a></p>
                </div>
                <div className="heroImageContainer">
                    <img className="heroImage" src={require("../images/dental-drills.jpg")} />
                </div>
            </section>
            <section className="shopSection">
                <h2>Shop Dental Supplies</h2>
                <div className="productsContainer">
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-drills.jpg") } alt="dental drills" />
                            <h3 className="productName">Dental Drills</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-drill-bits.jpg") } alt="dental drill bits" />
                            <h3 className="productName">Dental Drill Bits</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-chair.jpg") } alt="dental chairs" />
                            <h3 className="productName">Dental Chairs</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-instruments-3.jpg") } alt="dental instruments" />
                            <h3 className="productName">Dental Instruments</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-x-ray-impression.jpg") } alt="dental x-ray" />
                            <h3 className="productName">X-Ray</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-instruments-3.jpg") } alt="dental instruments" />
                            <h3 className="productName">Dental Instruments</h3>
                        </Link>
                    </div>
                </div>
                <button className="button">
                    <Link to="/dental-supplies">See Dental Supplies</Link>
                </button>
            </section>
            <section className="fromZambiaSection">
                <h2>We Are From Zambia</h2>
                <div className="fromZambiaContainer">
                    <p>
                        But our dental equipment is from all over the world.<br/><br/>

                        We handpicked the best dental products from the best medical manufacturers for you.<br/><br/>

                        We work directly with top manufacturers from Germany, USA, India and China.<br/><br/>

                        Whether you are in Lusaka, Livingstone, Kitwe, Kabwe or any other city, now you can order and receive world-class dental supplies without leaving your clinic!<br/><br/>

                        Our Dental Store is located in Lusaka, Zambia, but we ship across all of Southern Africa.
                    </p>
                    <img className="fromZambiaImage" src={require("../images/our-dental-suppliers-map.png")} alt="" />
                </div>

            </section>
            <section className="benefits">
                <h2>Why Work With Us</h2>
                <div className="benefitsContainer">
                    <div className="benefitContainer">
                        <LocalOfferOutlinedIcon fontSize="large"/>
                        <h3>
                            Competitive Prices
                        </h3>
                        <p>
                            Taradasi negotiates the best prices with the manufacturers. The savings are passed on to you.
                        </p>
                    </div>
                    <div className="benefitContainer">
                        <PublicOutlinedIcon fontSize="large"/>
                        <h3>
                            Large Selection
                        </h3>
                        <p>
                            Medical and Dental Lab Materials, Instruments, Equipment, Consumables. We have everything you need.
                        </p>
                    </div>
                    <div className="benefitContainer">
                        <ShoppingCartOutlinedIcon fontSize="large"/>
                        <h3>
                            Retail and Wholesale
                        </h3>
                        <p>
                            We are okay if you come for just 1 drill bit.
                        </p>
                    </div>
                    <div className="benefitContainer">
                        <LocalShippingOutlinedIcon fontSize="large"/>
                        <h3>
                            Over The Counter or We Deliver
                        </h3>
                        <p>
                            For your convenience.
                        </p>
                    </div>
                    <div className="benefitContainer">
                        <FavoriteBorderOutlinedIcon fontSize="large"/>
                        <h3>
                            Built by Dentists for Dentists
                        </h3>
                        <p>
                            Our Managing Director is a Dentist Surgeon with 25 years of experience. So we know exactly what you are looking for.
                        </p>
                    </div>
                    <div className="benefitContainer">
                        <HealthAndSafetyOutlinedIcon fontSize="large"/>
                        <h3>
                            Safe Deal
                        </h3>
                        <p>
                            Our strong side is Honesty and Integrity. You can be sure there are no risks and unpleasant surprises with us.
                        </p>
                    </div>
                </div>
            </section>
            <section className="reviewsSection">
                <h2>What People Say</h2>
                <div className="reviewsContainer">
                    <div className="reviewContainer">
                        <div className="reviewImageContainer">
                            <img className="reviewImage" src={require("../images/zambian-dental-surgeon.jpg")} alt="" />
                        </div>
                        <div className="reviewInfoContainer">
                            <p>
                                Taradasi Medics is an all weather partner in the growth of quality dental technology in Zambia. The company has come like natural rain which allows everything to grow when it drops without segregation. Prices are relatively fair, I have obtained everything I need so far.
                            </p>
                            <p>
                                <b>Mr Ernest Nsama Chishimba</b><br/>
                                Director, ENC Restorative Dental laboratory (Lusaka, Zambia)
                            </p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <div className="reviewImageContainer">
                        </div>
                        <div className="reviewInfoContainer">
                            <p>
                                I would like to share my good experience I got when I dealt with the company in many things like customer service, reasonable prices and quick delivery for the products which I need urgently.
                                I highly recommend my fellow dentists to buy materials from the shop.
                            </p>
                            <p>
                                <b>Dr Amir Magdy</b><br/>
                                Dental Surgeon, Head of Dental Department, Coptic Hospital (Lusaka, Zambia)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Home;