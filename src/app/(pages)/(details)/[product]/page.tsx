import products from '@/data/democard.json'
import ProductPictures from '@/components/DetailsPage/ProductPictures/ProductPictures'
import ProductDetails from '@/components/DetailsPage/ProductDetails/ProductDetails';
import ImageMagnifier from '@/components/DetailsPage/ProductPictures/MagnifyComponent/MagnifyComponent';

const Page = ({ params }: { params: { product: string } }) => {

    const productObject = products.find(product => product.id === params.product)
    const productPictures = productObject?.pictures ?? []

    const finalPictureArray = [...productPictures].sort((a, b) => {
        if (a.isThumbnail === b.isThumbnail) return 0;
        return a.isThumbnail ? -1 : 1;
    })

    // console.log("Product Object", productObject);
    // console.log("Product Pictures", productPictures);
    // console.log("Final Pictures", finalPictureArray);
    // console.log(Swiper);





    return (
        <>
            <div className='max-w-[1600px] mx-auto mt-[50px] flex justify-between'>
                <div className='w-1/2'>
                    <ProductPictures finalPictureArray={finalPictureArray}></ProductPictures>
                </div>
                <div className='w-1/2'>
                    <ProductDetails></ProductDetails>
                </div>
            </div>
            {/* <div>
                <ImageMagnifier></ImageMagnifier>
            </div> */}
        </>
    )
};

export default Page;