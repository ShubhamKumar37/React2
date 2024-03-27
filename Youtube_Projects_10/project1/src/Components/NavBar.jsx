import Brand_Logo from "../Images/brand_logo.png";

const NavBar = () => {
  return (
    <div className="w-full relative">
        <div className="w-[80%] pt-4 relative flex flex-row mx-auto justify-between">
            <img src={Brand_Logo}></img>
            <ul className="flex relative flex-row gap-[24px] items-center">
                <li className="cursor-pointer">Menu</li>
                <li className="cursor-pointer">Location</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>

            <button className="relative bg-red-500 px-3 border-black border text-white">Login</button>
        </div>
    </div>
  )
}

export default NavBar;