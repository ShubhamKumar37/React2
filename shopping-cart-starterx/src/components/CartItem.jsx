import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Remove } from "../redux/Slices/CartSlice";

export default function CartItem({Item}) {

  const Dispatch = useDispatch();
  return (
    <div className="w-[90%] flex flex-row gap-3 p-2 border border-[#c8c8c8] rounded-lg hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.005] transition-all duration-100">
      <div className="w-[30%]">
        <img className="w-[10rem] h-[10rem]" src={Item.image} alt='This is add to cart item'></img>
      </div>
      
      <div className="w-[70%] flex flex-col gap-3">
        <h1 className="font-bold">{Item.title}</h1>
        <p className="text-sm">{Item.description.substring(0, 100)}...</p>

        <div className="flex flex-row justify-between">
          <span className="font-bold text-green-700 text-xl">${Item.price}</span>
          <button className="relative text-2xl text-red-700 bg-red-300 p-1 rounded-full right-3 hover:scale-[1.1] transition-all duration-200" onClick={() => Dispatch(Remove(Item.id))}>
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}