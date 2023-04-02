import React from 'react';

const List = ({ route }) => {
    return (
        <li className='hover:bg-gray-600 p-1 rounded hover:text-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default List;