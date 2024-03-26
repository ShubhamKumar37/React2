import { useState } from "react";


export default function Card({id, name, info, image, price, RemoveCard})
{
    const [ReadMore, SetReadMore] = useState(false);
    let Description = ReadMore == false ? `${info.substring(0, 200)}`: `${info}`;

    function ReadMoreHandler()
    {
        SetReadMore(!ReadMore);
    }

    return (
        <div className="relative flex flex-col w-[30%] border-2 border-red-700 rounded-xl p-3 justify-between max-h-fit">
            <img src={image} className="aspect-square rounded-md object-cover"></img>
            <div>
                <h4 className="text-1xl text-green-600 font-bold">{price} $</h4>
                <h4 className="text-3xl">{name}</h4>

                <div className="text-sm">
                    {Description}
                    <span className="text-blue-700 cursor-pointer" onClick={ReadMoreHandler}>{ReadMore == false ? `...read more` : `...show less`}</span>
                </div>
            </div>
            <button className="relative border-2 border-red-700 text-red-700 hover:text-white hover:bg-red-700 rounded-lg hover:scale-[1.05] transition-all duration-300" onClick={() => RemoveCard(id)}>Not Interested</button>
            
        </div>
    );
}