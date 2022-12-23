import * as React from "react";
import Layout from "../components/layout";
import Chart from "../images/chart.png";

export { Head } from "../components/layout";

function Charts() {
    const [ margin, setMargin ] = React.useState({ top: "", bottom: "" });
    var logoStyle = {
        maxWidth: "75%",
        height: "auto",
        marginTop:10,
        marginBottom: 5,
    };

    const ref = React.useRef();

    // TODO: Add debounce so this isn't running at the max speed of the eventLoop
    // This whole thing just centers the logo vertically
    React.useEffect( () => {
        function sizeMargins() {
            if (ref == null)
                return;
            var m: number = window.innerHeight / 2 - ref.current?.offsetHeight / 2;
            // 8 px difference because of some weird spacing that comes from nowhere
            setMargin({ top: m.toString() + "px", bottom: (m - 8).toString() + "px" });
        }

        window.addEventListener("resize", sizeMargins);

        setTimeout(sizeMargins, 100);
    }, [ref]);

    return (
        <img src={Chart} alt="logo" style={logoStyle} ref={ref} />
    );
}

export default function Page() {
    return (
        <Layout title="OurVoice For Students" headerText="OurVoice For Students">
            <div className="texts" style={{ "paddingLeft": "10%", "paddingRight": "10%" }}>
                <div className="text">
                <div className="center" style={{"paddingLeft": "20%", "paddingRight": "20%"}}><Charts/></div>
                
                <ul>              
                <h3>According to research at the Quaglia Institute for School Voice and Aspirations (QISVA)</h3>
                <p>can give your students a voice for less than a quarter of the price of a single #2 pencil. 
                More than ⅔ of students feel uncomfortable sharing suggestions or concerns directly with their teachers<a href="https://www.quagliainstitute.org/uploads/legacy/Student_Voice_Grades_6-12_Decade_of_Data_Report.pdf">(QISVA)</a>. </p>
                </ul>
                </div>

                <div className="text">
                <h3>Why Choose Us</h3>

                <ul>
                    <li>    OurVoice for students was built with students in mind.</li>
                    <li>We allow schools to both give their students a voice and collect information that will improve the student experience.</li>
                    <li>OurVoice Technologies was created to give students a voice and OurVoice For Students does just that. </li>
                </ul>
                </div>

                <div className="text">
                <h3>Features</h3>
                <ul>
                    <li>    OurVoice for students is custom fit for schools. Schools can change settings to best fit their student body.
                    Schools host OurVoice on their own platform allowing them increased customizability, ease of use, and security.
                    </li>
                    <br />
                    <li>Teachers and admins can create custom VoiceBoxes, about eh3 verything from safety to curriculum. These VoiceBoxes allow students to give feedback and insight that can improve teaching, safety, and the overall student experience.</li>
                    <br />
                    <li>Our dynamic poll systems allow teachers and admins the ability to post polls and ask questions to as many or as few students as they would like, allowing them to collect data on everything from a classroom to a district. </li>
                </ul>
                </div>

                <div className="text">
                <h3>Cost</h3>
                <p> At OurVoice we believe quality software shouldn’t break the bank. That's why we only charge 8 cents a month for student accounts.</p>
                <h3>Customer Care</h3>
                <p>We want to make sure each school district is in good hands that's why we have a sales team that works around the clock to provide the best experience for our customers. Each customer care officer will work directly with your district to set up, and we don't stop there, if you ever have a problem our team will be there for you. At OurVoice we take care of you. </p>
                </div>


   
                <div className="text">
                <h3>Features</h3>
                <ul>
                    <li>    OurVoice for students is custom fit for schools. Schools can change settings to best fit their student body.
                    Schools host OurVoice on their own platform allowing them increased customizability, ease of use, and security.
                    </li>
                    <br />
                    <li>Teachers and admins can create custom VoiceBoxes, about eh3 verything from safety to curriculum. These VoiceBoxes allow students to give feedback and insight that can improve teaching, safety, and the overall student experience.</li>
                    <br />
                    <li>Our dynamic poll systems allow teachers and admins the ability to post polls and ask questions to as many or as few students as they would like, allowing them to collect data on everything from a classroom to a district. </li>
                </ul>
                </div>
                </div>
        </Layout>
    );
}
