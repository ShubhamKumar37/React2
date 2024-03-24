import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm(Props) {

    const Navigate = useNavigate();
    const [PassField, SetPassField] = useState(false);
    const [FormData, SetFormData] = useState(
        {
            Email: "", Password: ""
        }
    )

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
        Props.SetIsLogged(true);
        toast.success("Loggedin successfully");
        Navigate('/dashboard');
    }

    return (
        <form onSubmit={SubmitHandler} className="my-4 flex flex-col gap-2">
            <label>
                <p>Email Address <sup className="text-red-600">*</sup></p>
                <input type="email" name="Email" onChange={ChangeHandler} placeholder="Example@gmail.com" value={FormData.Email} required
                className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>
            </label>

            <label className="relative flex flex-col">
                <p>Password <sup className="text-red-600">*</sup></p>
                <input type={PassField === false ? "password" : "text"} name="Password" onChange={ChangeHandler} placeholder="Enter your password" value={FormData.Password} required
                className="bg-black border border-gray-500 p-2 w-full rounded-lg"></input>

                <span className="cursor-pointer absolute right-3 top-[2.2rem] text-xl" onClick={() => SetPassField((Flag) => !Flag)}>
                    {
                        PassField === false ?
                            (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                            (<AiOutlineEye></AiOutlineEye>)
                    }
                </span>
            </label>
            
            <div className="relative flex w-full justify-end ">
                <Link to="#">
                    <span className="italic text-blue-100 hover:underline">Forget Password</span>
                </Link>
            </div>

            <button className="bg-[#c8ad4d] text-[#292525] font-bold p-2 rounded-lg hover:underline hover:bg-[#e9c545] transition-all duration-200">log in</button>
        </form>
    );
}