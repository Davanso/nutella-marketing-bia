import React, { useEffect, useState } from "react";
import "./HeroCarousel.css";

const slides = [
    {
        id: 1,
        image: "/images/slide1.avif",
        title: "Comece o dia com Nutella®",
        subtitle: "Bom dia",
        link: "/nutella-bom-dia/nutella",
    },
    {
        id: 2,
        image: "/images/slide2.avif",
        title: "",
        link: "",
    },
    {
        id: 3,
        image: "/images/slide3.avif",
        title: (
            <>
                Descubra o nascer do <br/> sol com Nutella®.
            </>
        ),
        link: "/nutella-bom-dia/nascer-do-sol",
    },
];

const HeroCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-content">
                        {slide.id === 1 && (
                            <p className="hero-subtitle">Bom dia</p>
                        )}
                        <h2 className={`hero-title ${slide.id === 1 ? "black" : ""}`}>
                            {slide.title}
                        </h2>

                        {/* Oculta botão no slide 3 */}
                        {slide.id !== 2 && (
                            <a href={slide.link} className="hero-button">
                                Descubra Mais
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>

    );
};

export default HeroCarousel;
