import {createSlice} from '@reduxjs/toolkit';


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
                return State.filter((Element) => Element.id !== Action.payload);
            }
        }
    }
);

export const {Add, Remove} = CartSlice.actions;
export default CartSlice.reducer;