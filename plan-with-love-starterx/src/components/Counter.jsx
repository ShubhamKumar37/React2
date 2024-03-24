import { useState } from "react";


export default function Counter()
{
    const [Count, SetCount] = useState(0);

    function DecreaseHandler()
    {
        SetCount(Count - 10000);
    }
    function IncreaseHandler()
    {
        SetCount(Count + 100000);
    }

    function ResetHandler()
    {
        SetCount(0);
    }

    return (
        <div className="relative flex justify-center items-center h-[100vh] w-[100vw] bg-blue-200">
            <div className="relative min-h-[10rem] flex flex-col justify-between">
                <p className="text-xl font-bold">Increment and Decrement</p>
                <div className="flex flex-row justify-between border-2 border-gray-500 rounded-md p-2">
                    <button className="text-6xl" onClick={IncreaseHandler}>+</button>
                    <span className="text-3xl">{Count}</span>
                    <button className="text-6xl" onClick={DecreaseHandler}>-</button>
                </div>
                <button className="relative p-3 rounded-lg bg-blue-600" onClick={ResetHandler}>Reset</button>
            </div>
        </div>
    );
}