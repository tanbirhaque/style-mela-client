"use client"
{/* TODO: Dynamic Ratings */ }
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './style.css'
import CircleFillHoverBtn from '@/components/shared/Buttons/CircleFillHoverBtn/CircleFillHoverBtn';
import { PiHeartLight } from "react-icons/pi";
import { PiShareNetworkLight } from "react-icons/pi";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(0)

    const handleIncrementQuantity = () => {
        const increment = quantity + 1
        setQuantity(increment)
    }

    const handleDecrementQuantity = () => {
        let decrement = quantity
        if (quantity > 0) {
            decrement -= 1
        }
        else {
            decrement = 0
        }
        setQuantity(decrement)
    }


    return (
        <div className='pl-[72px] mt-[92px]'>
            <div className='flex gap-3 mb-[10px]'>
                <Rating
                    style={{ maxWidth: 90 }}
                    value={4}
                />
                <p>(3 customer reviews)</p>
            </div>
            <div>
                {/* Title */}
                <h2 className='text-[30px] font-extrabold font-jost mb-5'>Aqua Globes</h2>
                {/* Price */}
                <h3 className='text-4xl font-bold text-[#3d3d3d] mb-4'>$125.00</h3>
                {/* Short Description */}
                <p className='text-[#333] mb-4 max-w-[430px] text-[16px]'>This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications.</p>
            </div>
            {/* Add to cart */}
            <div className='flex gap-3 mt-[40px]'>
                {/* Cart value */}
                <div>
                    <form className="max-w-xs">
                        <div className="relative flex items-center max-w-[8rem]">
                            {/* Decrement Button */}
                            <button
                                type="button"
                                id="decrement-button"
                                onClick={handleDecrementQuantity}
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
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f5f5] border-x-0 border-gray-300 h-[53px] text-center text-[#3d3d3d] text-[20px] font-extrabold focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="999"
                                value={quantity}
                                required
                            />

                            {/* Increment Button */}
                            <button
                                type="button"
                                id="increment-button"
                                onClick={handleIncrementQuantity}
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
                <div>
                    <CircleFillHoverBtn btnText={'Add To Cart'}></CircleFillHoverBtn>
                </div>
            </div>
            {/* Wishlist and Share */}
            <div className='flex items-center gap-6 mt-12'>
                <div className='w-fit text-[19px] border border-gray-300 flex items-center gap-5 px-5 py-4 rounded-[10px] '>
                    <p>Add To Wishlist</p>
                    <span><PiHeartLight className='text-[22px]'></PiHeartLight></span>
                </div>
                <div className='flex items-center gap-3 text-[19px]'>
                    <p>Share</p>
                    <span><PiShareNetworkLight className='text-[22px]'></PiShareNetworkLight></span>
                </div>
            </div>
            {/* Category */}
            <div className='mt-6'>
                <h3 className='font-bold'>Category <span className='text-[#858997]'>Wigs</span></h3>
            </div>
        </div>
    );
};

export default ProductDetails;