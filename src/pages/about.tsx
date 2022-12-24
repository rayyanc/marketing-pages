import * as React from "react";
import Layout from "../components/layout";
import icon from "../images/icon.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
export { Head } from "../components/layout";

export default function Page() {
    return (
        <Layout title="About OurVoice Technologies" headerText="About OurVoice Technologies">
            <div className="center" style={{ "paddingLeft": "10%", "paddingRight": "10%" }}>

                <div className="employes" style={{ "paddingLeft": "5%", "paddingRight": "0%" }}>
                    <div className=".employe">
                        <img src="" alt="icon" width="500px" height="500px" />
                        <h3>Carson</h3>
                        <h4>CEO</h4>
                    </div>

                    <div className=".employe">
                        <img src="" alt="icon" width="200px" height="200px" />
                        <h3>Mathew MCcoy</h3>
                        <h4>VP of Sales</h4>
                    </div>

                    <div className=".employe">
                        <a href="https://github.com/sparo288"><img src={icon2} alt="icon" width="200px" height="200px"/></a>
                        <h3>Abel Semahegn</h3>
                        <h4>CTO</h4>
                    </div>

                    <div className=".employe">
                        <a href="https://github.com/pollen00"><img src={icon} alt="icon" width="200px" height="200px"/></a>
                        <h3>Aidan Williams</h3>
                        <h4>Chief Backend Architect</h4>
                    </div>

                    <div className=".employe">
                    <a href="https://github.com/rayyanc"><img src={icon3} alt="icon" width="200px" height="200px" /></a>
                        <h3>Rayyan Choudhry</h3>
                        <h4>Leed Frontend Engineer</h4>
                    </div>


                    <div className=".employe">
                    <a href="https://github.com/steviegt6"><img src={icon1} alt="icon" width="200px" height="200px" /></a>
                        <h3>Stephen</h3>
                        <h4>Software Engineer</h4>
                    </div>

                </div>
                <div className="texts">
                    <div className="text">
                        <h1>Who We Are</h1>
                        <p>OurVoice Technologie is a one-of-a-kind Edtech Company. We give students a voice unrivaled by any other product on the market.</p>
                    </div>

                    <div className="text">
                        <h1>How We Started</h1>
                        <p>OurVoice Technologie was started with one simple mission: To empower students with their own voices. Students often feel unheard or have no way to speak their minds. At OurVoice we want to change that.</p>
                    </div>
                    <div className="text">
                        <h1>How its going</h1>
                        <p>OurVoice Technologie on a daly baises we work towards inovations in technologies for students and employies in the Education and work place.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
