import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa";
import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-title-row">
                    <h2 className="footer-title">Se gostou, compartilhe</h2>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/Nutella/photos/?locale=fr_FR&_rdr"  target="_blank" rel="noopener noreferrer">
                            <FaFacebookF/>
                        </a>
                        <a href="https://x.com/nutellaglobal" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter/>
                        </a>
                        <a href="https://www.youtube.com/@nutellabrasil3671" target="_blank" rel="noopener noreferrer">
                            <FaYoutube/>
                        </a>
                        <a href="https://www.instagram.com/nutella/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-columns">
                <div>
                    <h4>Ferrero websites</h4>
                    <ul>
                        <li>Ferrero.com.br</li>
                        <li>Ferrero Sustainability</li>
                        <li>Ferrero Careers</li>
                        <li>Ferrero HazelNut Company</li>
                        <li>Ferrero Linkedin</li>
                        <li>Tictac.com.br</li>
                        <li>Kinder.com.br</li>
                        <li>FerreroRocher.com.br</li>
                        <li>Nutella® Food Service</li>
                        <li>Serviço ao consumidor</li>
                    </ul>
                </div>

                <div>
                    <h4>Sobre Nutella®</h4>
                    <ul>
                        <li>Nossos Compromissos com a sustentabilidade</li>
                        <li>Nossa qualidade & ingredientes</li>
                        <li>Reciclando o pote</li>
                        <li>Novo Visual Nutella®</li>
                        <li>Nossa história</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <h4>Inspire-se</h4>
                    <ul>
                        <li>Encontre sua receita de Nutella®</li>
                        <li>Reutilize seu pote de Nutella®</li>
                    </ul>
                </div>

                <div>
                    <h4>Para empresas</h4>
                    <ul>
                        <li>Nutella® xxx</li>
                    </ul>
                </div>

                <div>
                    <h4>Produtos</h4>
                    <ul>
                        <li>Nutella®</li>
                        <li>Nutella B-ready</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    ©Ferrero 2025 TODOS OS DIREITOS RESERVADOS |
                    Política de cookies | Termos de utilização |
                    Requisitos técnicos | Política de privacidade
                </p>

                <button className="footer-button">
                    <FaPhone /> Fale conosco
                </button>
            </div>
        </footer>
    );
};

export default Footer;
