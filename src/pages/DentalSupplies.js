import "../styles/dentalSupplies.css";
import { Link } from "react-router-dom";

function DentalSupplies() {
    return (
        <main className="dentalSuppliesPage">
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
                            <img className="productImage" src={ require("../images/dental-drill-bits.png") } alt="dental drill bits" />
                            <h3 className="productName">Dental Drill Bits</h3>
                        </Link>
                    </div>
                    <div className="productContainer">
                        <Link to="/dental-supplies">
                            <img className="productImage" src={ require("../images/dental-chair.png") } alt="dental chairs" />
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
                            <img className="productImage" src={ require("../images/dental-x-ray-impression.png") } alt="dental x-ray" />
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
                    <Link to="/contact">Contact Us For Pricing</Link>
                </button>
            </section>
        </main>
    );
}

export default DentalSupplies;