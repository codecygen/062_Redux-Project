// Redux-Store-File

// createReducer is also used but createSlice is even more powerful
import { configureStore } from '@reduxjs/toolkit';


import counterSlice from './counter-slice';
import authSlice from './auth-slice';


// configureStore enables us to have many different slices.
// it can accept only one slice as well as multiple slices
// in the form of object
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});


// Redux-React-Authentication-Only-Front-End
export default store;



// =================================================
// Redux store file without '@reduxjs/toolkit' library installed

// Redux-Store-File
// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         // we point state.counter to a new value as a rule of thumb,
//         // redux should be used in an immutable way.
//         // just writing "state.counter++" instead of returning a new value
//         // is not a good practice if you only use 'redux' library and not
//         // 'redux toolkit' library, 'redux-toolkit' library seems like it
//         // uses mutable method but in fact it is also immutable way of changing the value.
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     } else if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     } else if (action.type === 'increase') {
//         return {
//             // action.amount means whatever action we have from dispatch
//             // function in the component will be carried out here. "amount"
//             // is the keyword for action object. It is a made up keyword
//             // just like in any other object
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     } else if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;