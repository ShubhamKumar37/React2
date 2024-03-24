import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const { Cart } = useSelector((State) => State);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() =>
  {
    setTotalPrice(Cart.reduce((Acc, Curr) => Acc + Curr.price, 0));
  }, [Cart]);

  return (
    <div>
      {
        Cart.length > 0 ? 
        (<div>
          <div>
            {
              Cart.map((Item) => (
                <CartItem key={Item.id} Item={Item}></CartItem>
              ))
            }
          </div>
          <div>
            <div>
              <p>Your Cart</p>
              <p>Summary</p>
              <p>Total Items {Cart.length}</p>
            </div>
            <div>
              Total Price = {TotalPrice}
            </div>


          </div>
        </div>) : 
        (<div>
          <h1>Cart Empty</h1>
          <NavLink to='/'>
            <button>Shop Now</button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
