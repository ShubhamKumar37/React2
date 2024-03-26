import Cards from "./Cards.jsx";
import NewsSlider from "./NewsSlider.jsx";
// import {Routes, Route, Link} from 'react-router-dom';
import SideBar from "./SideBar.jsx";

export default function Home({News, SetMode, Mode, Logged, SetLogged})
{
    return (
        <div className="flex ">
          <SideBar Logged={Logged} SetLogged={SetLogged} SetMode={SetMode} Mode={Mode}></SideBar>
          <div className={`flex w-full justify-evenly ${Mode === false ? "bg-white" : "bg-[#1B1B1B]"}`}>
            {
              News && <Cards Logged={Logged} s Mode={Mode} News={News}></Cards>
            }

            <div className="relative right-0">
              {
                News && <NewsSlider Mode={Mode} News={News}></NewsSlider>
              }

            </div>
          </div>
        </div>
    );
}