import React, { useEffect, useState } from "react";
import "./HeroCarousel.css";

interface Slide {
    id: number;
    image: string;
    title: React.ReactNode;
    subtitle?: string;
    link?: string;
}

interface HeroCarouselProps {
    slides: Slide[];
    customClass?: string;
    onSlideChange?: (index: number) => void;
    hideInternalTitle?: boolean;
}

const HeroCarousel: React.FC<HeroCarouselProps> = (
    {
        slides,
        customClass = "",
        onSlideChange,
        hideInternalTitle = false,
    }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                const next = (prev + 1) % slides.length;
                if (onSlideChange) {
                    onSlideChange(next);
                }
                return next;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length, onSlideChange]);

    return (
        <div className={`hero-carousel ${customClass}`}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-content">
                        {slide.subtitle && (
                            <p className="hero-subtitle">{slide.subtitle}</p>
                        )}
                        {!hideInternalTitle && (
                            <h2 className={`hero-title ${slide.id === 1 ? "black" : ""}`}>
                                {slide.title}
                            </h2>
                        )}
                        {slide.link && (
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
