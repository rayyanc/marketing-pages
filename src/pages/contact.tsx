import * as React from "react";
import Layout from "../components/layout";
export { Head } from "../components/layout";

/*function box() {
    return (
        <div className="box1">
            <div className="box2">
                <div className="icon">
                    <img src="" alt="Icon" width="128" height="128"></img>
                </div>
                <div className = "title-ting">
                   
                </div>
                <div className="info">

                </div>
            </div>
        </div>
    );
}*/
export default function Page() {
    return (
        <Layout title="contact" headerText="Contact Info">
            <div className="center" style={{ "paddingLeft": "5%", "paddingRight": "0%"}}>
               

            </div>
        </Layout>
    );
}