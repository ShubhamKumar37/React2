import { MdLiveTv } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-baseline">
            <Link to='/'>
                <div className=" relative text-[#CB0F22] font-bold text-4xl  py-1 w-fit">INDIA TODAY</div>
            </Link>

            <div className="flex flex-row items-center gap-4">
                <div className="cursor-pointer px-2 flex items-center flex-col">
                    <a href="https://www.indiatoday.in/magazine" target="_blank"><img src="https://imgs.search.brave.com/z85gmY0diMfpl_SXBnrxzjvy9pO_EOVlUuzyE78GTZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvMi8yNS9JbmRp/YV9Ub2RheV9UVi5q/cGcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vMjgwP2NiPTIw/MTcxMTMwMTUxNTIw" className="w-[1.5rem]"></img></a>
                    <span className="text-[10px] " ><a href="https://www.indiatoday.in/magazine" target='_blank'>Magzine</a></span>
                </div>
                <div className="cursor-pointer px-2 flex items-center flex-col">
                    <MdLiveTv />
                    <span className="text-[10px] mt-[-2px]"><a href="https://www.indiatoday.in/livetv" target="_blank">Live TV</a></span>
                </div>
                <div className="cursor-pointer px-2 flex items-center flex-col">
                <CiSearch />
                    <span className="text-[10px]">Search</span>
                </div>
            </div>
        </div>
    );
}