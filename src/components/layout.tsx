import "./layout.css";
const React = require("react");

export default function Layout({ children } : { children: JSX.Element }) {
    return (
        <div className="footer">
            {children}
        </div>
    );
}
