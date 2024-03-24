import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function LoginForm({ SetIsLogged }) {

    const Navigate = useNavigate();
    const [FormData, SetFormData] = useState({
        Email: "", Password: ""
    });
    const [IsVisible, SetIsVisible] = useState(false);

    function ChangeHandler(Event) {
        SetFormData((Prev) => {
            return {
                ...Prev,
                [Event.target.name]: Event.target.value
            }
        });
    }
    console.log(FormData);

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        SetIsLogged(true);
        toast.success("Login is successful");
        Navigate('/dashboard');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <label>
                <p>Email Addreass <sup>*</sup></p>
                <input type="email" name="Email" placeholder="Enter your email" onChange={ChangeHandler} required></input>
            </label>

            <div>

                <label>
                    <p>Password <sup>*</sup></p>
                    <input type={IsVisible === true ? "text" : "password"} name="Password" placeholder="Enter password" onChange={ChangeHandler} required></input>

                </label>
                <span className="cursor-pointer" onClick={() => {
                    SetIsVisible(!IsVisible)
                }}>
                    {
                        IsVisible === true ?
                        <AiOutlineEye></AiOutlineEye>:
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                    }
                </span>
            </div>

            <div>
                <button>Login</button>
            </div>

        </form>
    );
}