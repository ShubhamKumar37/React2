import { useState } from "react";


export default function NewDate(Props)
{
    const [Title, SetTitle] = useState('');
    const [Date, SetDate] = useState('');

    function ChangeDateHandler(Event)
    {
        SetDate(Event.target.value);
    }
    function ChangeTitleHandler(Event)
    {
        SetTitle(Event.target.value);
    }
    function ObjReturnHandler(Event)
    {
        Event.preventDefault();
        let Obj = {
            NewTitle: Title,
            NewDate: Date   
        }

        // Props.onCopy(Obj);

        SetTitle("");
        SetDate("");

        console.log(Obj);
        return Obj;
    }
    return (
        <form onSubmit={ObjReturnHandler} className="relative bg-green-400 p-5 w-fit rounded-md">
            <div>
                <lable for="Title">Enter the Title = </lable>
                <input id="Title" type="text" onChange={ChangeTitleHandler} value={Title} className="border-2 border-black rounded-md"></input>
            </div>
            <div>
                <lable for="Date">Enter the Date = </lable>
                <input id="Title" type="date" onChange={ChangeDateHandler} value={Date} className="border-2 border-black rounded-md" ></input>
            </div>
            <button type="submit" className="relative bg-blue-600 text-white p-4 rounded-lg hover:text-xl">Add to Cards</button>
        </form>
    );
}