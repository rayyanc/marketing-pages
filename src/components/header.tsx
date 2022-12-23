import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.png";
import "./header.css";

import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";
interface Props {
    hide?: boolean,
    text?: string,
}

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
            <div className="socials">
                <ul>
                    <li><a href="mailto:ourvoicetechnologies@gmail.com"><MailIcon verticalAlign="middle" /></a></li>
                    <li><a href="https://github.com/ourvoicetechnologies"><MarkGithubIcon verticalAlign="middle" /></a></li>
                </ul>
            </div>
            <div className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/ourvoiceforstudents">OurVoice For Students</Link></li>
                    <li><Link to="/contact">Contact Info</Link></li>
                </ul>
            </div>
        </ul>
    );
}
