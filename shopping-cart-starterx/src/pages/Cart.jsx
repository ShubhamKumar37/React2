import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const { Cart } = useSelector((State) => State);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Cart.reduce((Acc, Curr) => Acc + Curr.price, 0));
  }, [Cart]);

  return (
    <div className="w-full realtive flex flex-row mt-5">
      {
        Cart.length > 0 ?
          (<div className="relative w-8/12 mx-auto flex flex-row">
            <div className="w-[70%] flex flex-col gap-9">
              {
                Cart.map((Item) => (
                  <CartItem key={Item.id} Item={Item}></CartItem>
                ))
              }
            </div>
            <div className="fixed right-[10rem] border border-gray-300 rounded-lg  flex flex-col justify-between p-3 h-[20rem]">
              <div>
                <p className="text-3xl text-green-600">Your Cart</p>
                <p className="text-xl font-bolg text-green-600">Summary</p>
                <p className=" font-bold ">Total Items :   {Cart.length}</p>
              </div>
              <div className="flex relative gap-4 items-baseline">
                <p className="font-bold w-fit text-sm">
                  Total Price : {TotalPrice}

                </p>
                <button className="p-1 px-2 hover:scale-105 transition-all duration-100 bg-green-600 rounded-lg text-white">Shop Now</button>
              </div>


            </div>
          </div>) :
          (<div className="relative w-screen h-screen flex justify-center items-center flex-col">
            <h1 className="font-bold">Cart Empty</h1>
            <NavLink to='/'>
              <button className="p-2 px-5 hover:scale-105 transition-all duration-100 bg-green-600 rounded-lg mt-4 text-white font-bold text-xl">Shop Now</button>
            </NavLink>
          </div>)
      }
    </div>
  );
};

export default Cart;
