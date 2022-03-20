// Redux-Store-File

// createReducer is also used but createSlice is even more powerful
import { createSlice, configureStore } from '@reduxjs/toolkit';

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

// Redux-React-Authentication-Only-Front-End
const initialAuthState = {
    isAuthenticated: false
};

// Redux-React-Authentication-Only-Front-End
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },

        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// configureStore enables us to have many different slices.
// it can accept only one slice as well as multiple slices
// in the form of object
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
// Redux-React-Authentication-Only-Front-End
export const authActions = authSlice.actions;
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