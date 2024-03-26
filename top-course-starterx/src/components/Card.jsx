import { useState } from "react";

export default function Card({ Course }) {
    const [ReadMore, SetReadMore] = useState(true);
    let Desc = ReadMore == true ? `${Course.description.substring(0, 70)}` : `${Course.description}`;
    
    function ReadHandler()
    {
        SetReadMore(!ReadMore);
    }

    return (
        <div  className="relative w-[20%] border-2 border-gray-700 rounded-lg p-2 cursor-pointer gap-3">
            <img src={Course.image.url} className="relative h-fit w-fit rounded-lg"></img>
            <h1>{Course.title}</h1>
            <p className="text-sm">{Desc}...<span className="cursor-pointer" onClick={ReadHandler}>{ReadMore == true ? 'ReadMore' : 'ShowLess'}</span></p>
        </div>
    );
}