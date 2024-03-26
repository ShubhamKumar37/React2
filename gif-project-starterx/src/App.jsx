import RandomGIF from "./components/RandomGIF";
import TypedGIF from "./components/TypedGIF";

export default function App() {
  return (
    <div className="background min-w-screen min-h-screen w-full h-full relative flex flex-col items-center">
      <h1 className="bg-white w-11/12 mt-5 p-3 text-center rounded-lg text-2xl font-bold underline">GIF Generator</h1>
      <div className="flex flex-col gap-5 mt-[2rem] w-11/12 items-center">
        <RandomGIF></RandomGIF>
        <TypedGIF></TypedGIF>
      </div>
    </div>
  );
}
