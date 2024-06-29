import Navbar from "./component/Navbar"
import { useSelector } from "react-redux"
import NewCard from "./component/NewsCard";

export default function App() {
  const mode = useSelector((state) => state.mode.value);


  return (
    <div className={`w-full h-full ${mode === true ? "bg-black text-white" : "bg-white text-black"} flex flex-col`}>
      <div className="mx-auto">
        <Navbar ></Navbar>
      </div>
      <div className="mx-auto">
        <NewCard></NewCard>
      </div>
    </div>
  )
}