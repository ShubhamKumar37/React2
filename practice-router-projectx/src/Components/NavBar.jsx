import { Link } from "react-router-dom";
import LogoImage from "../assets/Logo.svg";
import {toast} from 'react-hot-toast'

export default function NavBar({IsLogged, SetIsLogged})
{
    return (
        <div className="flex flex-row">
            <div>
                <Link to='/'>
                    <img src={LogoImage} alt="Logo" loading="lazy"></img>
                </Link> 
            </div>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            <div>
                {   IsLogged === false && 
                    <Link to='/login'>
                    <button>
                        Login
                    </button>
                    </Link>
                }
                {   IsLogged === false && 
                    <Link to='/signup'>
                    <button>
                        Signup
                    </button>
                    </Link>
                }
                {   IsLogged === true && 
                    <Link to='/'>
                    <button onClick={() => {SetIsLogged(!IsLogged); toast.success("Logged out successfully")}} >
                        Logout
                    </button>
                    </Link>
                }
                {   IsLogged === true && 
                    <Link to='/dashboard'>
                    <button>
                        Dashboard
                    </button>
                    </Link>
                }
            </div>
        </div>
    );
}