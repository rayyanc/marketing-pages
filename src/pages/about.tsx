import * as React from "react";
import Layout from "../components/layout";

export { Head } from "../components/layout";

export default function Page() {
    return (
        <Layout title="About OurVoice Technologies" headerText="About OurVoice Technologies">
            <div className="center" style={{ "paddingLeft": "20%", "paddingRight": "20%"}}>
                <h1>Who We Are</h1>
                <p>OurVoice is a one-of-a-kind Edtech Company. We give students a voice unrivaled by any other product on the market.</p>

                <h1>How We Started</h1>
                <p>OurVoice Technologies was started with one simple mission: To empower students with their own voices. Students often feel unheard or have no way to speak their minds. At OurVoice we want to change that.</p>
            </div>
        </Layout>
    );
}
