import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch(`prices.json`)
            .then(res => res.json())
            .then(data => setPrices(data.membershipTypes))
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-center bg-slate-500 p-4 my-12 text-5xl font-bold text-white rounded-lg'>Awosome Afordable Price</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    prices.map(price => <PriceCard key={price.id} price={price} />)
                }
            </div>
        </div>
    );
};

export default PriceList;