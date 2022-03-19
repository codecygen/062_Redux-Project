// Redux-Store-File
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    } else if (action.type === 'increase') {
        return {
            // action.amount means whatever action we have from dispatch
            // function in the component will be carried out here. "amount"
            // is the keyword for action object. It is a made up keyword
            // just like in any other object
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    } else if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;