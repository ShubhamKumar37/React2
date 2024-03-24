import {Link} from 'react-router-dom';
import logo from "../assets/Logo.svg";

export default function NavBar(Props)
{
    return (
        <div className='relative flex flex-row justify-evenly pt-2 items-center'>
            <Link to='/'>
                <img src={logo} alt='This is logo' width={160} height={40} loading='lazy'></img>
            </Link>

            <nav>
                <ul className='relative flex flex-row gap-[3rem]'>
                    <li className='hover:underline'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex flex-row gap-4'>
                {Props.IsLogged === false &&
                    <Link to='/login'>
                        <button className='relative border-2 border-gray-600 rounded-lg p-2 px-3 hover:bg-[#333] transition-all duration-150'>Login</button>
                    </Link>
                }
                {Props.IsLogged === false &&
                    <Link to='/signup'>
                        <button className='relative border-2 border-gray-600 rounded-lg p-2 px-3 hover:bg-[#333] transition-all duration-150'>Signup</button>
                    </Link>
                }
                {Props.IsLogged === true &&
                    <Link to='/'>
                        <button className='relative border-2 border-gray-600 rounded-lg p-2 px-3 hover:bg-[#333] transition-all duration-150' onClick={() => Props.SetIsLogged(!Props.IsLogged)}>
                        {/* onClick={() => Props.SetIsLogged((Props.IsLogged) = !Props.IsLogged)} */}
                            Log out</button>
                    </Link>
                }
                {Props.IsLogged === true &&
                    <Link to='/dashboard'>
                        <button className='relative border-2 border-gray-600 rounded-lg p-2 px-3 hover:bg-[#333] transition-all duration-150'>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}