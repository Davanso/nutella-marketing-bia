import React from "react";
import "./Header.css";
import {
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";



const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="header-icons">
                <a href="https://www.facebook.com/Nutella/photos/?locale=fr_FR&_rdr"  target="_blank" rel="noopener noreferrer">
                    <FaFacebookF color={"blue"}/>
                </a>
                <a href="https://x.com/nutellaglobal" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://www.youtube.com/@nutellabrasil3671" target="_blank" rel="noopener noreferrer">
                    <FaYoutube color={"red"}/>
                </a>
                <a href="https://www.instagram.com/nutella/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color={"#d901b3"}/>
                </a>
            </div>
        </header>
    );
};

export default Header;
