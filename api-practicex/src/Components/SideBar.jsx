import { FaCrown } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaGlassMartini } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { MdTempleHindu } from "react-icons/md";
import { RiGlobeLine } from "react-icons/ri";
import { MdAutoGraph } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { GiOnTarget } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

export default function SideBar({ Mode, SetMode, Logged, SetLogged }) {

    const Navigate = useNavigate();

    function ModeHandler() {
        SetMode(!Mode);
    }

    function ClickHandler() {

        SetLogged(prevLogged => prevLogged === true ? false : true);
        Navigate(Logged ? '/' : '/account');
        
    }

    return (
        <div className={`flex flex-col w-[238px] items-center  gap-3 ${Mode === false ? "bg-[#EFF3F6] text-black" : "text-white bg-[#2C2C2C]"}`}>
            <div className="relative flex flex-row justify-between py-3 border-b border-[#999999] gap-2">
                <div className="text-5xl text-[#999999]"><MdAccountCircle /></div>
                <div className="w-[80%] justify-center flex items-center">
                        <button onClick={ClickHandler} className={`${Mode === false ? "text-[#CC0000] border border-[#CC0000]" : "text-white border border-white"} rounded-full px-4`} >{Logged === false ? "Login" : "Logout"}</button>
                </div>
            </div>

            <label class="inline-flex items-center  cursor-pointer border-b border-[#999999] py-3 px-3 gap-3">
                <input type="checkbox" value="" class="sr-only peer" onChange={ModeHandler} />
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
                <span class={`"ms-3 text-sm font-medium ${Mode === false ? "text-black" : "text-white"}"`}>{Mode === false ? "Dark mode" : "Light mode"}</span>
            </label>

            <div className="flex flex-row gap-2 py-3 px-3 cursor-pointer border-b border-[#999999]">
                <span>Edition</span>

                <select className={`${Mode === false ? "bg-white text-black" : "bg-black text-white"} rounded-lg w-[4rem]`}>
                    <option>IN</option>
                    <option>US</option>
                </select>
            </div>

            <div className="py-3 ">
                <div className="bg-[#CC0000] rounded-full items-center gap-1 justify-center text-white flex flex-row "><FaCrown /> Subscribe</div>
                <ul className="flex flex-col gap-5 ml-4">
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer mt-2">
                        <FaHome /> Home
                    </li>
                    <Link to='/TVpage'>
                        <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                            <MdLiveTv />TV
                        </li>

                    </Link>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaBook />Magzine
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaGlassMartini />Life+Style
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <GiIndiaGate />India
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdTempleHindu />South
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <RiGlobeLine />World
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdAutoGraph />Business
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <FaRegLightbulb />Technology
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <MdFreeBreakfast />Entertairment
                        {/* <select>
                            <option></option>
                            <option>Show Buzz</option>
                            <option>Bollywood</option>
                            <option>Hollywood</option>
                            <option>OTT</option>
                            <option>Latest<br/> Reviews</option>
                        </select> */}
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <GiOnTarget />Sports
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <BiSolidOffer />Special
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <IoLogoYoutube />Videos
                    </li>
                    <li className="flex flex-row text-lg items-center gap-3 hover:font-bold transition-all duration-100 cursor-pointer">
                        <TbWorld />Other News
                    </li>
                </ul>
            </div>
        </div>
    );
}