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
                    <div className="menu-item">
                        <button className="menu-button">Sobre Nutella®</button>
                        <div className="submenu">
                            <a href="/sustentabilidade">Nossos Compromissos com a sustentabilidade</a>
                            <a href="/ingredientes">Nossa qualidade & ingredientes</a>
                            <a href="/reciclagem">Reciclando o pote</a>
                            <a href="/novo-visual">Novo Visual Nutella®</a>
                            <a href="/historia">Nossa história</a>
                            <a href="/faq">FAQ</a>
                        </div>
                    </div>
                    <div className="menu-item">
                        <button className="menu-button">Inpire-se</button>
                        <div className="submenu">
                            <a href="/receitas">Encontre sua receita Nutella®</a>
                            <a href="/reutilizacao">Reutilize seu pote Nutella®</a>
                        </div>
                    </div>
                    <div className="menu-item">
                        <button className="menu-button">Para empresas</button>
                        <div className="submenu">
                            <a href="/">Encontre a Nutella® ideal para seu negócio</a>
                        </div>
                    </div>
                    <div className="menu-item">
                        <button className="menu-button">Produtos</button>
                        <div className="submenu">
                            <a href="/nutella-jar">Nutella®</a>
                            <a href="/nutella-b-ready">Nutella® B-Ready</a>
                        </div>
                    </div>
                </nav>
            </div>
    );
};

export default Body;
