import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (State) => {
            State.value = !State.value;
        }
    }
});

export const {changeMode} = modeSlice.actions;

export default modeSlice.reducer;