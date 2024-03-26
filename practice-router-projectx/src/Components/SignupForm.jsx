import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function SignupForm({ SetIsLogged }) {
    const Navigate = useNavigate();
    const [FormData, SetFormData] = useState({
        Email: "", Password: "", FirstName: "", LastName: "", ConPassword: ""
    });

    const [IsVisible, SetIsVisible] = useState(false);
    const [IsConVisible, SetIsConVisible] = useState(false);

    function ChangeHandler(Event) {
        SetFormData((Prev) => {
            return {
                ...Prev,
                [Event.target.name]: Event.target.value
            }
        });
    }

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        if(FormData.Password !== FormData.ConPassword)
        {
            toast.error("Your password does not match");
            return ;
        }
        SetIsLogged(true);
        toast.success("Signup is successful");
        Navigate('/dashboard');
    }
    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input type="text" name="FirstName" placeholder="Enter your first name" onChange={ChangeHandler} required></input>
                    </label>
                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input type="text" name="LastName" placeholder="Enter your last name" onChange={ChangeHandler} required></input>
                    </label>

                </div>
                <label>
                    <p>Email Addreass <sup>*</sup></p>
                    <input type="email" name="Email" placeholder="Enter your email" onChange={ChangeHandler} required></input>
                </label>

                <div>
                    <div>

                        <label>
                            <p>Create Password <sup>*</sup></p>
                            <input type={IsVisible === true ? "text" : "password"} name="Password" placeholder="Enter password" onChange={ChangeHandler} required></input>

                        </label>
                        <span className="cursor-pointer" onClick={() => {
                            SetIsVisible(!IsVisible)
                        }}>
                            {
                                IsVisible === true ?
                                    <AiOutlineEye></AiOutlineEye> :
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                            }
                        </span>
                    </div>
                    <div>

                        <label>
                            <p>Confirm Password <sup>*</sup></p>
                            <input type={IsConVisible === true ? "text" : "password"} name="ConPassword" placeholder="Confirm password" onChange={ChangeHandler} required></input>

                        </label>
                        <span className="cursor-pointer" onClick={() => {
                            SetIsConVisible(!IsConVisible)
                        }}>
                            {
                                IsConVisible === true ?
                                    <AiOutlineEye></AiOutlineEye> :
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                            }
                        </span>
                    </div>
                </div>
                <div>
                    <button>
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
}