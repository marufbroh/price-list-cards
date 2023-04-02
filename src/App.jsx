import React, { useState } from 'react';
import List from './components/List/List';

const App = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' }
  ];

  return (
    <nav>
      <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <span>{open === true ? 'open' : 'close'}</span>

      <ul className='md:flex gap-5'>
        {
          routes.map(route => <List key={route.id} route={route} />)
        }
      </ul>
    </nav>
  );
};

export default App;