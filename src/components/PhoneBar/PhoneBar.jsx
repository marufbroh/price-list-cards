import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => console.log(data.data.data))
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;