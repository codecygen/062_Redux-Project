// Redux-Store-File
import { createSlice } from "@reduxjs/toolkit";

// Redux-React-Counter-App-Files
const initialCounterState = { counter: 0, showCounter: true };

// Redux-React-Counter-App-Files
const counterSlice = createSlice({
   name: 'counter',
   initialState: initialCounterState,
   reducers: {
       // here we don't need to accept action as an argument as there
       // is nothing to do for the increment case
       increment(state) {
           // Here despite the fact this looks like a mutable way
           // of manipulating the variable, it is in fact immutable
           // as 'redux toolkit' library uses special means to turn this
           // into an immutable way of manipulating the value.
           state.counter++;
       },
       decrement(state) {
           state.counter--;
       },
       increase(state, action) {
        // 'payload' is a key auto assigned for action object
        // if you use 'redux toolkit' library
        state.counter = state.counter + action.payload;
       },
       toggleCounter(state) {
           state.showCounter = !state.showCounter;
       }
   }
});

export const counterActions = counterSlice.actions;
export default counterSlice;