import Template from "./Template";
import LoginImg from "../assets/login.png";

export default function Login(Props)
{
    return (
        <Template
            Title="Welcome back"
            Desc1="Build skill for today, tommorrow and beyond"
            Desc2="Education to future-proof your carrer"
            Image={LoginImg}
            FormType="login"
            SetIsLogged={Props.SetIsLogged}
        ></Template>
    );
}