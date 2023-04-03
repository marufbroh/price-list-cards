import React, { useState } from 'react';
import List from '../List/List'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' }
    ];
    return (
        <nav className='p-3 lg:p-0'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}</span>
            </div>


            <ul className={`md:flex justify-end gap-12 absolute md:static duration-500 bg-gray-500 rounded-lg md:rounded-none p-3 lg:pr-24 font-bold text-white ${open ? 'top-10' : '-top-48'}`}>
                {
                    routes.map(route => <List key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default Navbar;