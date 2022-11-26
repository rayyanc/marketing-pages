import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.png";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
    );
}
