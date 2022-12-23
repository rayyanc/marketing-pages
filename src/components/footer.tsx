import React from "react";
import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";
import { Link } from "gatsby";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
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
        </div>
    );
}
