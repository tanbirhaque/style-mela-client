import React, { useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import styles from './style.module.css'
import './style.css'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ProductPicturesProps } from '@/types/product';



// interface ProductPicturesProps {
//     finalPictureArray: {
//         url: string;
//         isThumbnail: boolean;
//     }[];
// }

const ProductPictures = ({ finalPictureArray }: ProductPicturesProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <div>
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
                    spaceBetween={15}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper prevSlide mt-[10px]"
                >
                    {
                        finalPictureArray?.map(item => (
                            <div key={item.url}>
                                <SwiperSlide>
                                    <Image
                                        className='max-w-[117px] max-h-[117px] rounded-[10px]'
                                        src={item.url}
                                        width={117}
                                        height={117}
                                        alt='Product Preview Images'
                                    />
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ProductPictures;