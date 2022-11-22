const React = require("react");
import "./layout.css";
import favicon from "../images/favicon.ico"

// NOTE: This does not automatically apply, because this is a component, you have to explicitly export { Head } from "../components/layout"
export function Head() {
    return (
        <>
            <link rel="icon" href={favicon} type="image/x-icon" />
        </>
    )
}

export default function Layout({ title, children }: { title: string, children: JSX.Element }) {
    document.title = title;
    return (
        <>
            {children}
        </>
    );
}
