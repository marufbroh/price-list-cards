import React from 'react';

const List = ({route}) => {
    return (
        <li>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default List;