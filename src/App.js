import { useSelector } from 'react=redux';

import Header from './components/Header';
import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}

export default App;
