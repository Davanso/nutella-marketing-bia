import React from "react";
import "./Header.css";
import {
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="header-icons">
                <FaFacebookF color={"blue"}/>
                <FaXTwitter />
                <FaYoutube color={"red"}/>
                <FaInstagram color={"#d901b3"}/>
                |
                <FaSearch />
            </div>
        </header>
    );
};

export default Header;
