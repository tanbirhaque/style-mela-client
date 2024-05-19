import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


// interface ProductCardProps {
//     product: Product;
// }

const ProductCard = ({ product }: any) => {
    const getThumbnailImageObject = product?.images?.find((thumbnail: any) => thumbnail?.thumbnail)
    const Thumbnail_URL: any = getThumbnailImageObject?.url
    // console.log(Thumbnail_URL);
    // console.log(product);

    return (
        <Link href={`/${product?._id}`}>
            <div className='w-[377px] group'>
                <div className=''>
                    <Image
                        src={`${Thumbnail_URL !== undefined ? Thumbnail_URL : 'https://www.britax-romer.co.uk/on/demandware.static/Sites-Britax-UK-Site/-/default/dw71f81a13/images/britax/PlaceholderProductImage.jpg'}`}
                        alt=""
                        width={377}
                        height={377}
                        sizes='100vw'
                        className='rounded-2xl h-[377px] w-[377px] group-hover:shadow-[rgba(0,_0,_0,_0.25)_0px_15px_40px_-12px] transition-all duration-200 ease-in-out'
                    />
                </div>
                <div>
                    <h3 className='font-jost font-bold text-xl mt-7 ml-1  line-clamp-1'>{product.title}</h3>
                    <div className='flex justify-between items-end'>
                        <div>
                            {/* Ratings */}
                            <div className="flex items-center my-2">
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            {/* Price */}
                            <div className='ml-1'>
                                <p className='text-[20px] font-bold text-[#fa8c16]'>${product?.price}</p>
                            </div>
                        </div>
                        {/* Add to cart */}
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                            <button className='bg-[#fa8c16] text-white px-7 py-3 rounded-xl hover:bg-black transition-all duration-200 ease-linear'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;