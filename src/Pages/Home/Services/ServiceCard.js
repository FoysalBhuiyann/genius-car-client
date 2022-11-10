import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


const ServiceCard = ({service}) => {
    const {img, price, title} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-6">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-semibold text-orange-600'><span>Price : $</span>{price}</p>
                
                <div className="flex justify-end">
                <h2 className='text-orange-600'><FaArrowRight/></h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;