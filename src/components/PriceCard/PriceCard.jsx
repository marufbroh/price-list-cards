import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2>
                    <span className="text-5xl font-extrabold">${price.price}</span>
                    <span className='text-lg font-semibold'>/Mon</span>
                </h2>
                <h4 className='text-3xl font-bold'>{price.name}</h4>
                <p className='text-2xl font-semibold'>{price.description}</p>
                <ul>
                    {
                        price.benefits.map((benefit, index) =><li className='list-decimal font-semibold' key={index}>{benefit}</li>)
                    }
                </ul>
            </div>
            <figure><img src={price.photo} alt="" /></figure>
        </div>
    );
};

export default PriceCard;