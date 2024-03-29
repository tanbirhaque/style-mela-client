import { Product } from '@/types/product';
import Image from 'next/image';
import React from 'react';


interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const thumIMG = product.pictures.find(thumImg => thumImg?.isThumbnail)
    console.log(thumIMG);

    return (
        <div>
            <div>
                <Image
                    src={`${thumIMG?.url ?? null}`}
                    alt=""
                    width={377}
                    height={377}
                    sizes='100vw'
                    className='rounded-xl h-[377px] w-[377px]'
                />
            </div>
            <div>
                <h3 className='font-jost font-bold'>{product.title}</h3>
            </div>
        </div>
    );
};

export default ProductCard;