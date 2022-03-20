// Redux-React-Authentication-Only-Front-End

// Redux-Manipulating-Data-In-Specific-Component-File
// In this level, it just conditionally renders if the app is authenticated
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {

  // Redux-Manipulating-Data-In-Specific-Component-File
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {/* Redux-Manipulating-Data-In-Specific-Component-File */}
      {!isAuth && <Auth />}
      {/* Redux-Manipulating-Data-In-Specific-Component-File */}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
