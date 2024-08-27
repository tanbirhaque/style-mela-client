"use client"
import React, { useEffect, useState } from 'react';
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
// import { ProductPicturesProps } from '@/types/product';
import ImageMagnifier from './MagnifyComponent/MagnifyComponent';
import data from '../../../data/democard.json';




const ProductPictures = ({ productID }: any) => {
    const [images, setImages] = useState([]);
    // console.log(images);
    // console.log(productID);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(`http://localhost:5000/single-product/${productID}`, {
    //                 method: "GET"
    //             })
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }

    //             const data = await res.json();
    //             setImages(data.images);
    //         } catch (error) {
    //             console.error('There was a problem fetching the data:', error);
    //         }
    //     }

    //     fetchData()
    // }, [productID])
    useEffect(() => {
        const fetchData = () => {
            // Find the product by ID
            const product = data.find(item => item._id === productID);

            if (product) {
                setImages(product.images);
            } else {
                console.error('Product not found');
            }
        };

        fetchData();
    }, [productID]);

    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
    const [theURL, setTheURL] = useState('')

    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    const handleSetURL = (url: string) => {
        setTheURL(url);
    }

    return (
        <div>
            {/* Main Product Images */}
            <div className='w-[765px] h-[765px] relative'>
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
                        images?.map((item: any, index) => (
                            <div key={index}>
                                <SwiperSlide>
                                    <Image
                                        className='min-w-[765px] min-h-[765px]'
                                        src={item.url}
                                        // onTouchMove={handleSetURL(item.url)}
                                        width={765}
                                        height={765}
                                        style={{ height: 765, width: 765 }}
                                        onMouseEnter={(e) => {
                                            // update image size and turn-on magnifier
                                            const elem = e.currentTarget;
                                            const { width, height } = elem.getBoundingClientRect();
                                            setSize([width, height]);
                                            setShowMagnifier(true);
                                            setTheURL(item.url);
                                        }}
                                        onMouseMove={(e) => {
                                            // update cursor position
                                            const elem = e.currentTarget;
                                            const { top, left } = elem.getBoundingClientRect();

                                            // calculate cursor position on the image
                                            const x = e.pageX - left - window.pageXOffset;
                                            const y = e.pageY - top - window.pageYOffset;
                                            setXY([x, y]);
                                        }}
                                        onMouseLeave={() => {
                                            // close magnifier
                                            setShowMagnifier(false);
                                        }}
                                        alt='Product Main Images'
                                    />
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper>
                {/* Magnify Image div */}
                <div
                    className="absolute top-0 -right-[600px] w-[600px] h-[400px] z-[9999999]"
                    style={{
                        display: showMagnifier ? "" : "none",
                        pointerEvents: "none",
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${theURL}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * 2}px ${imgHeight * 2
                            }px`,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${-x * 2 + 735 / 2}px`,
                        backgroundPositionY: `${-y * 2 + 735 / 2}px`
                    }}
                ></div>
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
                        images?.map((item: any, index) => (
                            <div key={index}>
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