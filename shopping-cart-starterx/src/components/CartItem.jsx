import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Remove } from "../redux/Slices/CartSlice";

export default function CartItem({Item}) {

  const Dispatch = useDispatch();
  return (
    <div>
      <div>
        <img className="w-[10rem] h-[10rem]" src={Item.image} alt='This is add to cart item'></img>
      </div>
      
      <div>
        <h1>{Item.title}</h1>
        <p>{Item.description}</p>

        <div>
          <span>{Item.price}</span>
          <button onClick={() => Dispatch(Remove(Item.id))}>
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}