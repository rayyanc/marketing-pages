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

export default function Layout({ title, children }: { title: string, children: JSX.Element }) {
    document.title = title;
    // Header coming soon:tm:
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
