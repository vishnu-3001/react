import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const loggedIn=useSelector(state=>state.auth.isAuthenticated)
  return (
    <Fragment>
     { loggedIn&&<Header>
      </Header>}
      {!loggedIn&&<Auth></Auth>}
      {loggedIn&&<Counter />}
    </Fragment>
    
  );
}

export default App;
