import Template from "./Template";
import LogImage from "../assets/login.png";
import FrameImg from "../assets/frame.png";

export default function Login({SetIsLogged})
{
    return (
        <Template
            Title="Welcome back"
            Desc1="Build skill for today, tommorrow and beyond"
            Desc2="Education to future-proof your carrer"
            FrameImg={FrameImg}
            Img={LogImage}
            SetIsLogged={SetIsLogged}
            Type='login'
        ></Template>
    );
}