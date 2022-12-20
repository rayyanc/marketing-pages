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
        <Layout title="Meet The Team" headerText="Meet The Team">
            <div className="employes">
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>insert Name</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
            </div>



        </Layout>
    );
}