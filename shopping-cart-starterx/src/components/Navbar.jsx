import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Logo from "./logo.png"

export default function Navbar() {
  return (
    <div className="w-full relative bg-black text-white py-2">
      <div className="w-9/12 relative mx-auto flex justify-between items-center">
        <div>
          <NavLink to='/'>
            <img src={Logo} alt="This is logo" className="w-[8rem] scale-[1]"></img>

          </NavLink>
        </div>

        <div className="flex flex-row gap-[0.5rem] items-center">
          <NavLink to='/'>
            <p>Home</p>

          </NavLink>
          <NavLink to='/cart'>
            <FaCartShopping></FaCartShopping>
            </NavLink >

        </div>
      </div>
    </div>
  );
}