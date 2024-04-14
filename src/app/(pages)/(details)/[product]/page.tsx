import ProductPictures from '@/components/DetailsPage/ProductPictures/ProductPictures';
// Todo: Remove the client
// Importing Product Json Data
import products from '@/data/democard.json'

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
        <div className='max-w-[1600px] mx-auto mt-[50px]'>
            <div>
                <ProductPictures finalPictureArray={finalPictureArray}></ProductPictures>
            </div>
            <div>

            </div>
        </div>
    )
};

export default Page;