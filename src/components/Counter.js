// Redux-React-Counter-App-Files

// Redux-Manipulating-Data-In-Specific-Component-File
// This is a hook made by react-redux team
// There is also a useStore hook
import { useSelector, useDispatch } from 'react-redux';

// This is necessary if we use 'redux-toolkit' library
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  // Redux-Manipulating-Data-In-Specific-Component-File
  // This calls dispatch function which then we can call in the component
  const dispatch = useDispatch();

  // Redux-Manipulating-Data-In-Specific-Component-File
  // useSelector automatically subscribes this to the react store file\
  // It will automatically get the latest state of the hook here.
  // If you remove the component from DOM for any reason, redux store file
  // will automatically unsubscribes this file as well.
  // If you only have a single reducer in the store file.
  // const counter = useSelector(state => state.counter);
  const counter = useSelector(state => state.counter.counter);
  // Here, first counter taps into the reducer's keyword in the redux store file
  // second counter points to the keyword of the state keywords.


  // Redux-Manipulating-Data-In-Specific-Component-File
  const show = useSelector(state => state.counter.showCounter);

  // Redux-Manipulating-Data-In-Specific-Component-File
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // Redux-Manipulating-Data-In-Specific-Component-File
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // Redux-Manipulating-Data-In-Specific-Component-File
  const increaseHandler = () => {
    // amount key is passed as action.amount to the
    // redux store file.
    // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
    // payload is the default key for "action" if you use
    // 'redux toolkit' library
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* Redux-Manipulating-Data-In-Specific-Component-File */}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        {/* Redux-Manipulating-Data-In-Specific-Component-File */}
        <button onClick={incrementHandler}>Increment</button>
        {/* Redux-Manipulating-Data-In-Specific-Component-File */}
        <button onClick={increaseHandler}>Increase by 5</button>
        {/* Redux-Manipulating-Data-In-Specific-Component-File */}
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// ===============================================================================
// ===============================================================================

// // If only 'redux' library included and not 'redux-toolkit'

// // Redux-Manipulating-Data-In-Specific-Component-File
// // This is a hook made by react-redux team
// // There is also a useStore hook
// import { useSelector, useDispatch } from 'react-redux';

// import classes from './Counter.module.css';

// const Counter = () => {
//   // Redux-Manipulating-Data-In-Specific-Component-File
//   // This calls dispatch function which then we can call in the component
//   const dispatch = useDispatch();

//   // Redux-Manipulating-Data-In-Specific-Component-File
//   // useSelector automatically subscribes this to the react store file\
//   // It will automatically get the latest state of the hook here.
//   // If you remove the component from DOM for any reason, redux store file
//   // will automatically unsubscribes this file as well.
//   const counter = useSelector(state => state.counter);

//   // Redux-Manipulating-Data-In-Specific-Component-File
//   const show = useSelector(state => state.showCounter);

//   // Redux-Manipulating-Data-In-Specific-Component-File
//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };

//   // Redux-Manipulating-Data-In-Specific-Component-File
//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };

//   // Redux-Manipulating-Data-In-Specific-Component-File
//   const increaseHandler = () => {
//     // amount key is passed as action.amount to the
//     // redux store file.
//     dispatch({ type: 'increase', amount: 5 });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: 'toggle' })
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {/* Redux-Manipulating-Data-In-Specific-Component-File */}
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         {/* Redux-Manipulating-Data-In-Specific-Component-File */}
//         <button onClick={incrementHandler}>Increment</button>
//         {/* Redux-Manipulating-Data-In-Specific-Component-File */}
//         <button onClick={increaseHandler}>Increase by 5</button>
//         {/* Redux-Manipulating-Data-In-Specific-Component-File */}
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;



// ===============================================================================
// ===============================================================================

// If class based components is used for 'redux' library


// Redux-Class-Based-Components

// import { Component } from 'react';
// import { useSelector, useDispatch, connect } from 'react-redux';
// import classes from './Counter.module.css';

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// ===============================================================================
// ===============================================================================