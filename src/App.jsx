import React from 'react';
import Auth from './auth/Auth';
import MainPage from './mainPage/MainPage';

const App = () => {
  return (
    <div className='flex'>
      <Auth/>
      <MainPage/>
    </div>
  );
};

export default App;
