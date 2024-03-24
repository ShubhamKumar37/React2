import Template from "./Template";
import SignupImg from "../assets/signup.png";

export default function Signup(Props)
{
    return (
        <Template
            Title="Join the million learning to code with StudyNotation for free"
            Desc1="Build skill for today, tommorrow and beyond"
            Desc2="Education to future-proof your carrer"
            Image={SignupImg}
            FormType="signup"
            SetIsLogged={Props.SetIsLogged}
        ></Template>
    );
}