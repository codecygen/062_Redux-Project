// Redux-Manipulating-Data-In-Specific-Component-File
// This is a hook made by react-redux team
// There is also a useStore hook
import { useSelector, useDispatch } from 'react-redux';

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
  const counter = useSelector(state => state.counter);

  // Redux-Manipulating-Data-In-Specific-Component-File
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  // Redux-Manipulating-Data-In-Specific-Component-File
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* Redux-Manipulating-Data-In-Specific-Component-File */}
      <div className={classes.value}>{counter}</div>
      <div>
        {/* Redux-Manipulating-Data-In-Specific-Component-File */}
        <button onClick={incrementHandler}>Increment</button>
        {/* Redux-Manipulating-Data-In-Specific-Component-File */}
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
