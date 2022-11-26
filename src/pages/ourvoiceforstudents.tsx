import * as React from "react";
import Layout from "../components/layout";

export { Head } from "../components/layout";

export default function Page() {
    return (
        <Layout title="OurVoice For Students">
            <div className="center">
                <h1>Cost</h1>
                <p>At OurVoice we believe quality software shouldn’t break the bank. That's why we only charge 8 cents a month for student accounts.</p>

                <h1>Customer Care</h1>
                <p>We want to make sure each school district is in good hands that's why we have a sales team that works around the clock to provide the best experience for our customers. Each customer care officer will work directly with your district to set up, and we don't stop there, if you ever have a problem our team will be there for you. At OurVoice we take care of you. </p>

                <h1>Features</h1>
                <ul>
                    <li>OurVoice for students is custom fit for schools. Schools can change settings to best fit their student body.</li>
                    <li>Schools host OurVoice on their own platform allowing them increased customizability, ease of use, and security.</li>
                    <li>Teachers and admins can create custom VoiceBoxes, about everything from safety to curriculum. These VoiceBoxes allow students to give feedback and insight that can improve teaching, safety, and the overall student experience.</li>
                    <li>Our dynamic poll systems allow teachers and admins the ability to post polls and ask questions to as many or as few students as they would like, allowing them to collect data on everything from a classroom to a district. </li>
                </ul>

                <h1>Why Choose Us</h1>
                <ul>
                    <li>OurVoice for students was built with students in mind.</li>
                    <li>We allow schools to both give their students a voice and collect information that will improve the student experience.</li>
                    <li>OurVoice Technologies was created to give students a voice and OurVoice For Students does just that. </li>
                </ul>
            </div>
        </Layout>
    );
}
