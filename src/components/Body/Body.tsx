import React from "react";
import "./Body.css";

const Body: React.FC = () => {
    return (
        <div className="body-menu-bar">
            <a href="/">
                <img
                    src="/images/logo.avif"
                    alt="Nutella Logo"
                    className="body-logo"
                />
            </a>
            <nav className="body-nav">
                <a href="#">Sobre Nutella®</a>
                <a href="#">Inspire-se</a>
                <a href="#">Descubra as<br />novidades</a>
                <a href="#">Produtos</a>
            </nav>
        </div>
    )
}
export default Body;