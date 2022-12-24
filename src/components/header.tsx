import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.png";
import "./header.css";



export default function Header({ hide, text }: Props) {
    if (hide || text == null)
        return (
            <>
            </>
        );

    // Will eventually need to change positioning to fixed automatically once the page scrolls down...
    return (
        <ul className="header">
            <li><Link to="/"><img src={Logo} alt="logo" /></Link></li>
            <li><h1>{text}</h1></li>

            
        </ul>
    );
    
}
