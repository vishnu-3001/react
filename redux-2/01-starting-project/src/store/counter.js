import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:{ counter: 0,showCounter:true },
    reducers:{
        increment (state,action) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter=!state.showCounter
        }
    }
});
export const counterActions=counterSlice.actions;

export default counterSlice.reducer