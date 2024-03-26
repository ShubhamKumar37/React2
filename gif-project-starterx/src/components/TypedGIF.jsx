import Loader from "./Loader";
import useGIF from "../hooks/useGIF";
import { useState } from "react";


export default function TypedGIF() {
  const [Type, SetType] = useState('Nigga');
  const {GIF, fetchGIF, Spinner} = useGIF();


  return (
    <div className="w-8/12 relative flex flex-col items-center bg-green-300 rounded-lg border border-black min-h-[10rem] justify-between p-2 text-xl font-bold underline text-[#415c3d] gap-3">
      <h1>A {Type} GIF</h1>
      {Spinner === true ? <Loader></Loader> : <img src={GIF} width="450" alt="Random GIF" className="rounded-lg"></img>}

      <input type="text" className="relative text-center px-[4rem] rounded-lg no-underline" onChange={(Event) => {SetType(Event.target.value)}} value={Type}></input>

      <button onClick={() => fetchGIF(Type)} className="bg-blue-800 text-white font-bold text-xl w-7/12 rounded-lg hover:scale-110 transition-all duration-150 p-1">Generate {Type} GIF</button>
    </div>
  );
}
