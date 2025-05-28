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
        }, 8000); // 8 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        // Carousel container for hero slides
        <div className="hero-carousel">
            {slides.map((slide, index) => (
                // Each slide, with background image and active class if current
                <div
                    key={slide.id}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-content">
                        {/* Show subtitle only on the first slide */}
                        {slide.id === 1 && (
                            <p className="hero-subtitle">Bom dia</p>
                        )}
                        {/* Slide title, with black style for the first slide */}
                        <h2 className={`hero-title ${slide.id === 1 ? "black" : ""}`}>
                            {slide.title}
                        </h2>

                        {/* Hide button on slide 2 */}
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
