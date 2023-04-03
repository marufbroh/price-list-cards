import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure><img src={price.photo} alt="" /></figure>
            <div className="card-body">
                <h2>
                    <span className="text-5xl font-extrabold">${price.price}</span>
                    <span className='text-lg font-semibold'>/Mon</span>
                </h2>
                <h3 className='text-3xl font-bold'>{price.name}</h3>
                <p className='text-xl font-semibold'>{price.description}</p>
                <h5 className='text-2xl font-bold'>Features</h5>
                <ul>
                    {
                        price.benefits.map((benefit, index) => <li className='list-decimal font-semibold' key={index}>{benefit}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default PriceCard;