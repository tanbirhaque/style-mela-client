import products from '@/data/democard.json'
import ProductPictures from '@/components/DetailsPage/ProductPictures/ProductPictures'
import ProductDetails from '@/components/DetailsPage/ProductDetails/ProductDetails';
import ImageMagnifier from '@/components/DetailsPage/ProductPictures/MagnifyComponent/MagnifyComponent';
import Product_info from '@/components/DetailsPage/Product_info/Product_info';

const Page = ({ params }: { params: { product: string } }) => {
    const productID = params.product

    return (
        <>
            <div className='max-w-[1600px] mx-auto mt-[50px] flex justify-between'>
                <div className='w-1/2'>
                    {/* <ProductPictures finalPictureArray={finalPictureArray}></ProductPictures> */}
                    <ProductPictures productID={productID}></ProductPictures>
                </div>
                <div className='w-1/2'>
                    <ProductDetails productID={productID}></ProductDetails>
                </div>
            </div>
            {/* Description and other information */}
            <div className='max-w-[1600px] mx-auto mt-[120px]'>
                <Product_info productID={productID}></Product_info>
            </div>
        </>
    )
};

export default Page;