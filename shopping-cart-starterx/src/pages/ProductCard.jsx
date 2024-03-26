import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Add, Remove } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';

export default function ProductCard({ Post }) {

    const { Cart } = useSelector((State) => State);
    const Dispatch = useDispatch();

    function RemoveCartHandler()
    {
        Dispatch(Remove(Post.id));
    }

    function AddCartHandler()
    {
        Dispatch(Add(Post));
        toast.success("Add to cart");
    }

    return (
        <div className="rounded-lg border border-[#bdbdbd] flex flex-col justify-between p-4 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-200 cursor-pointer">
            <div className="flex flex-col items-center w-[75%] mx-auto gap-3">
                <div className="text-lg font-bold text-center">{Post.title.substring(0, 15)}...</div>

                <div className="text-center text-sm">{Post.description.substring(0, 70)}...</div>

                <div>
                    <img src={Post.image} alt={Post.image} className="w-[10rem] h-[10rem]"></img>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-8">
                <div className="text-green-600 font-bold">{Post.price}$</div>

                <div className="px-2 p-1 border-2 border-black hover:bg-black hover:text-white transition-all duration-200 rounded-lg font-bold text-sm">
                    {
                        Cart.some((Item) => Item.id === Post.id) ? (<button onClick={RemoveCartHandler}><p>Remove </p></button>) : (<button onClick={AddCartHandler}><p>Add to cart</p></button>)
                    }
                </div>
            </div>
        </div>
    );
}