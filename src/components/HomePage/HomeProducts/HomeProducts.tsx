import React from 'react';
import products from '@/data/democard.json'
import ProductCard from '@/components/shared/ProductCard/ProductCard';
import { Product } from '@/types/product';


const HomeProducts = () => {
    // console.log(products);
    return (
        <div className='max-w-[1600px]'>
            <div>
                <h2>Just For You</h2>
            </div>
            <div className='flex flex-wrap gap-[30px]'>
                {products.map((product: Product) => (
                    <div key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;