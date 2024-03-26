import {createSlice} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


export const CartSlice = createSlice(
    {
        name:"Cart",
        initialState:[],
        reducers:
        {
            Add: (State, Action) => {
                State.push(Action.payload);
            },
            Remove: (State, Action) => {
                toast.error("Removed from cart");
                return State.filter((Element) => Element.id !== Action.payload);
            }
        }
    }
);

export const {Add, Remove} = CartSlice.actions;
export default CartSlice.reducer;