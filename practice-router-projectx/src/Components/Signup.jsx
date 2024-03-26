import Template from "./Template";
import SignupImage from "../assets/signup.png";
import FrameImg from "../assets/frame.png";

export default function Login({SetIsLogged})
{
    return (
        <Template
            Title="Join the million learning to code with StudyNotation for free"
            Desc1="Build skill for today, tommorrow and beyond"
            Desc2="Education to future-proof your carrer"
            FrameImg={FrameImg}
            SignupImage={SignupImage}
            SetIsLogged={SetIsLogged}
            Type='signup'
        ></Template>
    );
}