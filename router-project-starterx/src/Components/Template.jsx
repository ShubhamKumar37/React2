import FrameImg from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

export default function Template(Props) {
    return (
        <div className='w-8/12 max-w-[1080px] flex flex-row justify-between mx-auto mt-[4rem] h-[100%] '>
            <div className='relative flex flex-col w-[450px]'>
                <h1 className='relative text-white font-bold text-2xl'>{Props.Title}</h1>
                <div className='mt-4'>
                    <p className='text-lg'>{Props.Desc1}</p>
                    <p className='italic text-blue-400'>{Props.Desc2}</p>
                </div>

                {
                    Props.FormType === 'signup' ?
                        (<SignupForm SetIsLogged={Props.SetIsLogged}></SignupForm>) :
                        (<LoginForm SetIsLogged={Props.SetIsLogged}></LoginForm>)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-white'></div>
                    <p className='text-white font-medium leading[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-white'></div>
                </div>

                <button>
                    <div className='flex flex-row justify-center items-center text-xl border border-gray-600 gap-2 px-4 p-2 hover:bg-[#1e1e1e] rounded-lg'>
                        <FcGoogle></FcGoogle>
                        Signup with google
                    </div>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[400px]'>
                <img src={Props.Image} alt='Person' loading='lazy' width={558} height={490} className='absolute -left-5 -top-5'></img>
                <img src={FrameImg} alt='Grid' loading='lazy' width={558} height={504} className=' '></img>
            </div>
        </div>
    );
}