import React, { useState } from "react";
import "./ProductCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
    {
        name: "Nutella®",
        image: "/images/nutella-slide.avif",
        link: "/nutella",
    },
    {
        name: "Nutella® B-ready",
        image: "/images/b-ready-slide.avif",
        link: "/nutella-b-ready",
    },
];

const ProductCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="carousel-container">
            <div className="carousel-content">
                <div className="carousel-slide">
                    <a href={products[current].link}>
                        <img src={products[current].image} alt={products[current].name} className="carousel-image" />
                    </a>
                        <div className="carousel-label">{products[current].name}</div>
                </div>
                <div className="carousel-text">
                    <h2>Um amor,<br />diferentes<br />maneiras de<br />compartilhá-lo</h2>
                </div>
            </div>
            <div className="carousel-nav">
                <button onClick={prev}>
                    <FaChevronLeft />
                </button>
                <button onClick={next}>
                    <FaChevronRight />
                </button>
            </div>

        </section>
    );
};

export default ProductCarousel;
