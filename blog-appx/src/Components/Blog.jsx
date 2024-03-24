import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

export default function Blog()
{
    const {Loading, Blog} = useContext(AppContext);
    return (
        <div className={`relative mt-[3rem] w-[500px] h-full flex flex-col ${Loading === true ? "items-center h-screen": ""} justify-center`}>
            {
                Loading === true ? (<Spinner></Spinner>) : 
                (
                    Blog.length === 0 ? (<div >No Post Available for you</div>):
                    (
                        Blog.map((Data) =>
                        {
                            return (
                                <div className="relative flex flex-col h-full my-3 gap-[4px]">
                                    <h1 className="font-bold text-lg">{Data.title}</h1>
                                    <p><span className="italic">{Data.author}</span> on <span className="font-bold">{Data.category}</span></p>

                                    <p>Published on {Data.date}</p>

                                    <p className="text-sm">{Data.content}</p>

                                    <p className="flex flex-row flex-wrap gap-[8px]">
                                        {
                                            Data.tags.map((Ele) =>
                                            {
                                                return (
                                                    <span className="text-blue-600">#<span className="underline cursor-pointer hover:text-blue-800">{Ele} </span></span>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            )
                        })

                    )
                )
            }
        </div>
    );
}