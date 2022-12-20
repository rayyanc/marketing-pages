import React from "react";
import Favicon from "../images/favicon.ico";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

// NOTE: This does not automatically apply, because this is a component, you have to explicitly export { Head } from "../components/layout"
export function Head() {
    return (
        <>
            <link rel="icon" href={Favicon} type="image/x-icon" />
        </>
    );
}
export function employe() {
    return (
        <>
            <link rel="icon" href={icon} type="image/x-icon" />
        </>
    );
}
interface Props {
    title: string,
    hideHeader?: boolean;
    headerText?: string,
    children: JSX.Element,
}

export default function Layout({ title, hideHeader, headerText, children }: Props ) {
    document.title = title;
    return (
        <main>
            <Header hide={hideHeader} text={headerText} />
            {children}
            <Footer />
        </main>
    );
}
