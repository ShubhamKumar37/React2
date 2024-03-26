import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function SignupForm(Props) {
    const Navigate = useNavigate();
    const [PassField, SetPassField] = useState(false);
    const [ConPassField, SetConPassField] = useState(false);
    const [IsStudent, SetIsStudent] = useState(true);
    const [FormData, SetFormData] = useState(
        {
            FirstName: "", LastName: "", Email: "", Password: "", ConfirmPassword: ""
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
        if(FormData.Password !== FormData.ConfirmPassword)
        {
            toast.error("Password does not match");
            return ;
        }
        Props.SetIsLogged(true);
        toast.success("Signed up successfully");
        Navigate('/dashboard');
    }

    return (
        <div className="relative h-[100%] w-[100%]">
            <div className="relative flex gap-2 bg-[#1f1f1f] w-fit p-2 my-2 text-2xl rounded-full px-3 transition-all duration-700">
                <button onClick={() =>
                {
                    SetIsStudent(true);
                }} className={`p-2 px-4 rounded-full  ${ IsStudent === true ? " transition-all duration-700 bg-black" : "bg-transparent "}`}>Student</button>
                <button onClick={() =>
                {
                    SetIsStudent(false);
                }}  className={`p-2 px-4 rounded-full  ${ IsStudent === false ? " transition-all duration-700 bg-black" : "bg-transparent "}`}>Instructor</button>
            </div>

            <form onSubmit={SubmitHandler} className="flex flex-col gap-[2rem] ">
                <div className="flex gap-6">
                    <label className="w-full">
                        <p>First Name  <sup className="text-red-600">*</sup></p>
                        <input type="text"
                            placeholder="Enter your first name"
                            value={FormData.FirstName}
                            onChange={ChangeHandler}
                            name="FirstName" required className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>
                    </label>
                    <label className="w-full">
                        <p>Last Name  <sup className="text-red-600">*</sup></p>
                        <input type="text"
                            placeholder="Enter your last name"
                            value={FormData.LastName}
                            onChange={ChangeHandler}
                            name="LastName" required className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>
                    </label>
                </div>
                <label>
                    <p>Email Address  <sup className="text-red-600">*</sup></p>
                    <input type="email"
                        placeholder="Enter your email"
                        value={FormData.Email}
                        onChange={ChangeHandler}
                        name="Email" required className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>
                </label>

                <div className="relative flex gap-5">
                    <label className="w-full">
                        <p>Create Password  <sup className="text-red-600">*</sup></p>
                        <input type={PassField === false ? "password" : "text"} name="Password" onChange={ChangeHandler} placeholder="Enter your password" value={FormData.Password} required className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>

                    </label>
                    <span className="cursor-pointer absolute left-[11.5rem] top-[2.2rem] text-xl" onClick={() => SetPassField((Flag) => !Flag)}>
                        {
                            PassField === false ?
                                (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                                (<AiOutlineEye></AiOutlineEye>)
                        }
                    </span>
                    <label className="w-full">
                        <p>Confirm Password  <sup className="text-red-600">*</sup></p>
                        <input type={ConPassField === false ? "password" : "text"} name="ConfirmPassword" onChange={ChangeHandler} placeholder="Confirm password" value={FormData.ConfirmPassword} required className="bg-black border border-gray-500 p-2 w-full rounded-lg selection:bg-black"></input>

                    </label>
                    <span  className="cursor-pointer absolute right-3 top-[2.2rem] text-xl" onClick={() => SetConPassField((Flag) => !Flag)}>
                        {
                            ConPassField === false ?
                                (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                                (<AiOutlineEye></AiOutlineEye>)
                        }
                    </span>
                </div>

                <button className="bg-[#c8ad4d] text-[#292525] font-bold p-2 rounded-lg hover:underline hover:bg-[#e9c545] transition-all duration-200">Create Account</button>
            </form>

        </div>
    );
}