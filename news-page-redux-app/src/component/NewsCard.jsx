import {Obj} from "../data";
import Card from "./Card";

export default function NewCard() 
{

    const Data = Obj.articles;
    console.log(Data[0]);
    return (
        <div className="w-[1080px] flex flex-col mt-[4rem]">
            {
                Data && Data.map((item, index) =>
                {
                    return (<Card value={item} key={index}></Card>);
                })
            }
        </div>
    );
}