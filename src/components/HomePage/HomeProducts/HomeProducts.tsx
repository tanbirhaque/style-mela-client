"use client"
import React, { useEffect, useState } from 'react';
import products from '@/data/democard.json'
import ProductCard from '@/components/shared/ProductCard/ProductCard';
import { Product } from '@/types/product';


const HomeProducts = () => {
    // console.log(products);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/all-products', {
                    method: "GET"
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('There was a problem fetching the data:', error);
            }
        }

        fetchData();
    }, []);

    console.log(products);



    return (
        <div className='max-w-[1600px]'>
            <div>
                <h2>Just For You</h2>
            </div>
            <div className='flex flex-wrap gap-[30px]'>
                {products.map((product: any) => (
                    <div key={product._id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;