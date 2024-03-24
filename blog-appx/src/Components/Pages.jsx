import { AppContext } from "../Context/AppContext.jsx";
import { useContext } from "react";

export default function Pages() {
    const { Page, TotalPages, PageChangeHandler } = useContext(AppContext);

    const NextPage = () => {
        PageChangeHandler(Page + 1);
    };

    const PreviousPage = () => {
        PageChangeHandler(Page - 1);
    };

    return (
        <div className="fixed z-10 bg-[#fff] bottom-0 w-full py-2">
            <div className="w-[500px] mx-auto flex flex-row justify-between">

                <div className="flex gap-[1rem] items-center">
                    {Page > 1 && (
                        <button className=" bg-blue-500 text-white hover:font-bold rounded-lg p-1 px-2" onClick={PreviousPage}>Previous</button>
                    )}
                    {Page < TotalPages && (
                        <button className=" bg-blue-500 text-white hover:font-bold rounded-lg p-1 px-2" onClick={NextPage}>Next</button>
                    )}
                </div>

                <div className="border border-black w-fit h-fit bg-[#e3e3e3] rounded-lg p-1 px-2">
                    Page {Page} of {TotalPages} Pages
                </div>
            </div>
        </div>
    );
}
