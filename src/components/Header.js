// Redux-React-Authentication-Only-Front-End

// Redux-Manipulating-Data-In-Specific-Component-File
// In this level, it just conditionally renders if the app is authenticated
import { useSelector, useDispatch } from 'react-redux';
// Redux-Manipulating-Data-In-Specific-Component-File
import { authActions } from '../store/auth';

import classes from './Header.module.css';

const Header = () => {
  // Redux-Manipulating-Data-In-Specific-Component-File
  const dispatch = useDispatch();

  // Redux-Manipulating-Data-In-Specific-Component-File
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    // Redux-Manipulating-Data-In-Specific-Component-File
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* Redux-Manipulating-Data-In-Specific-Component-File */}
      {isAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
