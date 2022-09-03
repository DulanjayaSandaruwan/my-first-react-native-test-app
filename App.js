import React from 'react';
import AppRouter from './src/router/Router';
import Forget from './src/screen/auth/Forget';
import Login from './src/screen/auth/Login';
import Register from './src/screen/auth/Register';
import Home from './src/screen/Home';

const App = () => {
  return (
    <AppRouter />
    // <Home />
    // <Login />
    // <Register />
    // <Forget />
  )
}

export default App;