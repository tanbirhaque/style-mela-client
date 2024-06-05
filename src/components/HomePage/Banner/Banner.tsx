"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="max-w-[1600px]">
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
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-2xl"
        >
          <SwiperSlide>
            <Image
              src={
                "https://i0.wp.com/berinaprofessional.com/wp-content/uploads/2024/01/color-care-banner-1.webp?fit=1920%2C715&ssl=1"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "750px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                "https://moollis.com/wp-content/uploads/slider/cache/c85f0b1d398d2580d978d7686092b74d/Moroccan-Oil-Banner-Edited.webp"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "750px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                "https://www.soultree.in/cdn/shop/collections/Hair_care.jpg?v=1713936787"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "750px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                "https://store.focallurebd.com/storage/files/1/Hair-care.jpg"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "750px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
