// Redux-React-Authentication-Only-Front-End

// Redux-Manipulating-Data-In-Specific-Component-File
// In this level, it conditionally renders the parts based on the fact if
// the app is authenticated as well as dispatch action is done here too because
// the password entering action is performed on this component
import { useDispatch } from 'react-redux';
// Redux-Manipulating-Data-In-Specific-Component-File
import { authActions } from '../store/auth';


import classes from './Auth.module.css';

const Auth = () => {
  // Redux-Manipulating-Data-In-Specific-Component-File
  const dispatch = useDispatch();


  // Redux-Manipulating-Data-In-Specific-Component-File
  const loginHandler = event => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
