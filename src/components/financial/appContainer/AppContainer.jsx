import React, { useContext } from 'react'
import Home from '../../../pages/home/Home';
import Login from '../../../pages/login/Login';
import { AuthContext } from '../../../context/AuthContext';

const AppContainer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      { user ? <Home userEmail = {user.email} /> : <Login /> }
    </div>
  )
}

export default AppContainer