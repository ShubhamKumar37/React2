import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function Account({Logged, SetLogged}) {

    const [FormData, SetFormData] = useState({
        Email:""
    });
    const Navigate = useNavigate();

    function ChangeHandler(Event)
    {
        SetFormData((Prev) =>
        {
            return {
                ...Prev,
                [Event.target.name]:Event.target.value
            }
        })
    }

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        console.log("Final data is ");
        console.log(FormData);
        console.log(Logged);
        SetLogged(true);
        Navigate('/');
    }

    return (
        <div>
            <div className='bg-black py-2'>
                <Link to='/'>
                    <div className='flex flex-row text-white items-center gap-[0.5rem] w-fit mx-auto group' onClick={() => SetLogged(false)}>
                        <div className='text-2xl border-2 border-white  rounded-full  transition-all duration-150 p-1 group-hover:bg-white group-hover:border-black group-hover:text-black'>
                            <IoIosArrowBack></IoIosArrowBack>
                        </div>
                        <div className='group-hover:font-bold  transition-all duration-150'>
                            Back to India Today
                        </div>
                    </div>
                </Link>
            </div>

            <div className='relative w-full mt-7'>
                <div className='w-10/12 relative mx-auto flex flex-row '>
                    <div className='w-[60%] bg-[#2E5BFF]'>
                        <div className='w-[530px] h-[600px]  flex items-center justify-center'>
                            <img src='https://auth.indiatoday.in/images/login-vector.svg' className='scale-[0.8]'></img>

                        </div>
                    </div>

                    <div className='flex flex-col w-[50%] gap-[2rem] border border-y-gray-400 border-r-gray-400'>
                        <div className='flex justify-center mt-[4rem]'>
                            <img src='https://auth.indiatoday.in/images/indiatodaylogo.png' className='w-[90px] h-[90px]'></img>

                        </div>

                        <form className='flex flex-col items-center' onSubmit={SubmitHandler}>
                            <label className='flex flex-col items-center'> <p className='text-2xl mb-[1rem] '>Sign Up / Login With<br/></p>
                                <input onChange={ChangeHandler} type='email' name='Email' placeholder='Enter your Email' className='bg-[#F5F5F5] text-xl p-2 px-[4rem] text-center rounded-full border border-[#CECECE] active:border-black' value={FormData.Email}></input>
                            </label>
                            <br/>

                            <button className='bg-[#CF1F25] rounded-full px-[4rem] p-2 text-white hover:font-bold transition-all duration-100'>Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}