"use client"
{/* TODO: Dynamic Ratings */ }
import React, { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import './style.css'
import { initFlowbite } from 'flowbite';

const ProductDetails = () => {
    // const [rating, setRating] = useState(0) // Initial value
    // #ffa700
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <div className='pl-[72px] mt-[92px]'>
            <div className='flex gap-3 mb-[10px]'>
                <Rating
                    style={{ maxWidth: 90 }}
                    value={4}
                />
                <p>(3 customer reviews)</p>
            </div>
            <div className='mb-[30px]'>
                {/* Title */}
                <h2 className='text-[30px] font-extrabold font-jost mb-5'>Aqua Globes</h2>
                {/* Price */}
                <h3 className='text-4xl font-bold text-[#3d3d3d] mb-4'>$125.00</h3>
                {/* Short Description */}
                <p className='text-[#333] mb-4 max-w-[430px]'>This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications.</p>
            </div>
            {/* Add to cart */}
            <div>
                {/* Cart value */}
                <div>
                    <form className="max-w-xs mx-auto">
                        <div className="relative flex items-center max-w-[8rem]">
                            {/* Minus Button */}
                            <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="quantity-input"
                                className="bg-[#f5f5f5] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-s-lg p-3 h-[53px] focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                            >
                                <svg className="w-3 h-3 text-[#fa8c16]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>

                            {/* Number Preview */}
                            <input
                                type="text"
                                id="quantity-input"
                                data-input-counter data-input-counter-min="1"
                                data-input-counter-max="50"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f5f5] border-x-0 border-gray-300 h-[53px] text-center text-[#3d3d3d] text-[20px] font-extrabold focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="999"
                                value="5"
                                required
                            />

                            {/* Plus Button */}
                            <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="quantity-input"
                                className="bg-[#f5f5f5] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-e-lg p-3 h-[53px] focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                            >
                                <svg className="w-3 h-3 text-[#fa8c16]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                {/* Submit Btn */}
                <div></div>
            </div>
        </div>
    );
};

export default ProductDetails;