"use client"
import Image from 'next/image';
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
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


    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);


    return (
        <div>
            <>
                {/* Main Product Images */}
                <div className='w-[765px] h-[765px]'>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            finalPictureArray?.map(item => (
                                <div key={item.url}>
                                    <SwiperSlide>
                                        <Image
                                            className='min-w-[765px] min-h-[765px]'
                                            src={item.url}
                                            width={765}
                                            height={765}
                                            alt='Product Main Images'
                                        />
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
                {/* Preview Images */}
                <div className='w-[765px] h-[132px]'>
                    <Swiper
                        // onSwiper={setThumbsSwiper}
                        onSwiper={(swiper) => setThumbsSwiper(swiper)}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            finalPictureArray?.map(item => (
                                <div key={item.url}>
                                    <SwiperSlide>
                                        <Image
                                            className='min-w-[132px] min-h-[132px]'
                                            src={item.url}
                                            width={765}
                                            height={765}
                                            alt='Product Preview Images'
                                        />
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
            </>
        </div>
    )
};

export default Page;