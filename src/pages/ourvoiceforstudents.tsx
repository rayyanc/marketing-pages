import * as React from "react";
import Layout from "../components/layout";
import Chart from "../images/chart.png";

export { Head } from "../components/layout";

function Charts() {
    const [margin, setMargin] = React.useState({ top: "", bottom: "" });
    var logoStyle = {
        maxWidth: "55%",
        height: "55%",
        marginTop: 10,
        marginBottom: 0,
    };

    const ref = React.useRef();

    // TODO: Add debounce so this isn't running at the max speed of the eventLoop
    // This whole thing just centers the logo vertically
    React.useEffect(() => {
        function sizeMargins() {
            if (ref == null)
                return;
            var m: number = window.innerHeight / 2 - ref.current?.offsetHeight / 2;
            // 8 px difference because of some weird spacing that comes from nowhere
            setMargin({ top: m.toString() + "px", bottom: (m - 2).toString() + "px" });
        }

        window.addEventListener("resize", sizeMargins);

        setTimeout(sizeMargins, 10);
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


                    <ul>
                        <h1>According to research at the Quaglia Institute for School Voice and Aspirations <a href="https://www.quagliainstitute.org/uploads/legacy/Student_Voice_Grades_6-12_Decade_of_Data_Report.pdf">(QISVA)</a>.</h1>
                        

                    </ul>
                </div>
                <div className="center" style={{ "paddingLeft": "20%", "paddingRight": "20%" }}><Charts />
                    <h1>*More than ⅔ of students feel uncomfortable sharing suggestions or concerns directly with their teachers</h1>
                </div>
                <div className="text">
                    <h1>Why Choose Us</h1>

                    <ul>
                        <p>
                            OurVoice for students was built with students in mind.
                            We allow schools to both give their students a voice and collect information that will improve the student experience.
                            OurVoice Technologies was created to give students a voice and OurVoice For Students does just that. </p>
                    </ul>
                </div>


                <div className="text">
                    <h1>Features</h1>
                    <ul>
                        <p>
                            OurVoice for students is custom fit for schools. Schools can change settings to best fit their student body.
                            Schools host OurVoice on their own platform allowing them increased customizability, ease of use, and security.
                            Teachers and admins can create custom VoiceBoxes, about eh3 verything from safety to curriculum. These VoiceBoxes allow students to give feedback and insight that can improve teaching, safety, and the overall student experience.
                            Our dynamic poll systems allow teachers and admins the ability to post polls and ask questions to as many or as few students as they would like, allowing them to collect data on everything from a classroom to a district. </p>
                    </ul>
                </div>

                <div className="text">
                    <h1>Cost</h1>
                    <p> 
                        At OurVoice we believe quality software shouldn’t break the bank. 
                        For less than a pencil and a note card for every student, 
                        you can give your students a voice. 
                        That's why we only charge 8 cents a month per student accounts.
                    </p>
                </div>

                <div className="text">
                    <h1>Customer Care</h1>
                    <p>We want to make sure each school district is in good hands that's why we have a sales team that works around the clock to provide the best experience for our customers. Each customer care officer will work directly with your district to set up, and we don't stop there, if you ever have a problem our team will be there for you. At OurVoice we take care of you. </p>
                </div>

            </div>





        </Layout >
    );
}
