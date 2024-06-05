"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";

// import "./trending.css";

const Trending = () => {
  //fetching all products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/all-products", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-10 px-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-extrabold text-3xl text-left">TRENDING ITEMS</h1>
          <p>Sitewide Discounts & Savings Of Up To 25%</p>
        </div>
        {/* <div className="flex gap-2">
          <button className="w-12 h-12 hover:text-white bg-[#f5f5f5] hover:bg-[#fa8c16] flex justify-center items-center rounded-md ">
            <MdKeyboardArrowLeft className="text-xl" />
          </button>
          <button className="w-12 h-12 hover:text-white bg-[#f5f5f5] hover:bg-[#fa8c16] flex justify-center items-center rounded-md">
            <MdKeyboardArrowRight className="text-xl" />
          </button>
        </div> */}
      </div>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Grid, Pagination]}
        navigation={true}
        modules={[Grid, Navigation]}
        className="mySwiper my-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product: any) => (
            <div key={product._id}>
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Trending;
