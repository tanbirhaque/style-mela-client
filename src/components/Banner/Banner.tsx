"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <div className='max-w-[1600px]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper rounded-2xl"
                >
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '750px' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/L5KzsZj/banner-slideshow-04.jpg'}
                            alt=''
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '750px' }}
                        />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={'https://i.ibb.co/2t7mnK0/Blog-Banners-2024-03-07-T113703-167.webp'}
                            alt=''
                            className='w-full h-full'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    );
};

export default Banner;