import NavBar from "./NavBar";
import NavSearch from "./NavSearch";


export default function MainNav({Mode}) {
    return (
        <div className={`border-b border-gray-400  ${Mode === false ? 'bg-white' : 'bg-[#2C2C2C] text-white'}`}>
            <div>
                <NavBar Mode={Mode}></NavBar>
                <NavSearch></NavSearch>
            </div>
        </div>
    );
}