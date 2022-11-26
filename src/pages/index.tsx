import * as React from "react";
import Layout from "../components/layout";
import BannerLogoImage from "../images/bannerlogo.png";

//NOTE: Ignore like every error in this file. It compiles with gatsby, idk why tsserver is broken

export { Head } from "../components/layout";

// Add fade or some animation so this doesn't look garbage
function BannerLogo() {
    const [ margin, setMargin ] = React.useState("");
    var logoStyle = {
        maxWidth: "75%",
        height: "auto",
        marginTop: margin,
        marginBottom: margin,
    };

    const ref = React.useRef();

    // TODO: Add debounce so this isn't running at the max speed of the eventLoop
    // This whole thing just centers the logo vertically
    React.useEffect( () => {
        function sizeMargins() {
            if (ref == null)
                return;
            var m: number = window.innerHeight / 2 - ref.current?.offsetHeight / 2;
            setMargin(m.toString() + "px" );
        }

        window.addEventListener("resize", sizeMargins);

        setTimeout(sizeMargins, 100);
    }, [ref]);

    return (
        <img src={BannerLogoImage} alt="logo" style={logoStyle} ref={ref} />
    );
}

export default function Page() {
    // Definitely need like actual content here. No clue what to put!
    return (
        <Layout title="OurVoice Technologies">
            <div className="center">
                <BannerLogo />
            </div>
        </Layout>
    );
}
