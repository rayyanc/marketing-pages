import * as React from "react";
import Layout from "../components/layout";
export { Head } from "../components/layout";
export { employe } from "../components/layout";
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
            <div className="employes" style={{ "paddingLeft": "5%", "paddingRight": "0%"}}>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>Carson</h3>
                    <h4>CEO of OurVoice Technologies</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>Mathew MCcoy</h3>
                    <h4>CMO of OurVoice Technologies</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon"></img>
                    <h3>Abel Semahegn</h3>
                    <h4>CTO of OurVoice Technologies</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>Aidan Williams</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>Rayyan Choudhry</h3>
                    <h4>insert title</h4>
                </div>

                <div className=".employe">
                    <p>insert bio</p>
                </div>
                <div className=".employe">
                    <img src="" alt="icon" width="500px" height="500px"/>
                    <h3>Stephen</h3>
                    <h4>insert title</h4>
                </div>
                <div className=".employe">
                    <p>insert bio</p>
                </div>
            </div>



        </Layout>
    );
}