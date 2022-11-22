import * as React from "react";
import Layout from "../components/layout";
import BannerLogoImage from "../images/bannerlogo.png";
import Logo from "../images/logo.png";
import "../styles/home.css";

//NOTE: Ignore like every error in this file. It compiles with gatsby, idk why tsserver is broken

export { Head } from "../components/layout"

// Add fade or some animation so this doesn't look garbage
function BannerLogo() {
    const [ margin, setMargin ] = React.useState({top: "", bottom: ""});
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
            setMargin({ top: (m - 8).toString() + "px", bottom: m.toString() + "px" });
        }

        window.addEventListener("resize", sizeMargins);

        setTimeout(sizeMargins, 100);
    }, [ref]);

    return (
        <img src={BannerLogoImage} alt="logo" style={logoStyle} ref={ref} />
    );
}

export default function IndexPage() {
    // Definitely need like actual content here. No clue what to put!
    return (
        <Layout title="OurVoice Technologies">
            <main>
                <div className="center">
                    <BannerLogo />
                    <h1>Placeholder title!111!!!</h1>
                    <p className="centerMargins" style={{ "width": "50%" }}>
                        「君のことじゃないよ」気のせいにしたいよ <br />
                        ばれたって誤魔化すの 相手にしないで <br />
                        背の順あいうえお 並びたくもないよ <br />
                        もういっそ お目出度い 一人を竹刀で <br />
                        誰かといないと 避難場所はないよ <br />
                        ミラクルな目を まだ逸らせはしないで <br />
                        あたしを嫌う鳥の 笑い声を消そうよ <br />
                        端ないほど集中力が <br />
                        <br />
                        着いた 吐いた ツイッター呟く 7個目の方で <br />
                        ATP上手に受け渡す日々だけ <br />
                        <br />
                        もう 勘が冴えて悔しいわ <br />
                        無意識に運べたら楽だろうな <br />
                        淡々と笑えないわ 取り繕ってしまうわ <br />
                        いつも ゲラゲラ 道を塞ぐ民よ <br />
                        感謝の言葉しか出てこないよ <br />
                        後戻りは しなくていいの <br />
                        今のところは 帰って眠るだけ <br />
                        <br />
                        おかしいと思うほど 頷いてしまう方法 <br />
                        顔に出すこと 許されなくて <br />
                        泣き疲れてしまおう リセットを覚えよう <br />
                        興味ないなら ほっといてくれ <br />
                    </p>
                </div>
            </main>
        </Layout>
    );
};
