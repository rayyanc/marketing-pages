import * as React from "react";
import Layout from "../components/layout";
import BannerLogoImage from "../images/bannerlogo.png";

//NOTE: Ignore like every error in this file. It compiles with gatsby, idk why tsserver is broken

export { Head } from "../components/layout";

// Add fade or some animation so this doesn't look garbage
function BannerLogo() {
    const [ margin, setMargin ] = React.useState({ top: "", bottom: "" });
    var logoStyle = {
        maxWidth: "75%",
        height: "auto",
        marginTop: margin.top,
        marginBottom: margin.bottom,
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
        <img src={BannerLogoImage} alt="logo" style={logoStyle} ref={ref} />
    );
}

export default function Page() {
    // Definitely need like actual content here. No clue what to put!
    return (
        <Layout title="OurVoice Technologies" hideHeader={true}>
            
            <div className="center">
                <p className="test">By students for students</p>
                <div className="ting"><BannerLogo /></div>
                
            </div>
            
        </Layout>
        
    );
}
