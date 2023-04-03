import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <PriceList />
      <Dashboard />
      <PhoneBar/>
    </div>
  );
};

export default App;