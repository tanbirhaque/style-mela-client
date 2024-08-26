"use client";
import React, { useEffect, useState } from "react";
import products from "@/data/democard.json";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { Product } from "@/types/product";

const HomeProducts = () => {
  // console.log(products);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/all-products", {
  //         method: "GET",
  //       });

  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("There was a problem fetching the data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(products);

  return (
    <div className="max-w-[1600px]">
      {/* Just For you section starts */}
      <div className="text-center py-12">
        <h2 className="font-jost font-extrabold text-[30px] uppercase pb-2">Just For You</h2>
        <p className="font-jost">Sitewide Discounts & Savings Of Up To 25%</p>
      </div>
      {/* <div className="flex flex-wrap gap-[30.5px] justify-center"> */}
      {/* <div className="flex flex-wrap gap-x-5 gap-y-8"> */}
      <div className="grid grid-cols-4 gap-[30.5px]">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      {/* Just For you section ends */}
      <div className="grid px-8 2xl:px-0 xl:grid-cols-2 gap-7 my-20">
        <div
          className="h-full rounded-3xl"
          style={{
            backgroundImage: "url(https://i.shgcdn.com/f5549a72-4a4b-4f65-9aa7-da99c83d143f/-/format/auto/-/preview/3000x3000/-/quality/lighter/)",
            backgroundSize: 'cover', // Adjusts the image size to cover the entire container
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            backgroundPosition: 'center', // Centers the image
            // maxHeight: '437px', // Sets the height of the container
            width: '100%', // Sets the width of the container
          }}
        >
          <div className="text-center  h-full bg-black bg-opacity-40 pt-[120px] pb-[120px] rounded-3xl px-20">
            <h2 className="font-jost font-bold text-[50px] text-white uppercase">DEALS ON Essentials Care!</h2>
            <p className="font-jost font-medium text-[18px] text-white pb-5">Up To 20% Off All Furniture On Store</p>
            <button className="bg-[#fa8c16] px-7 py-3 text-white w-fit rounded-xl hover:bg-black transition-all duration-200 ease-linear">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="h-full rounded-3xl"
          style={{
            backgroundImage: "url(https://uk.ulike.com/cdn/shop/articles/Laser_Hair_Removal_Devices_At_Home_UK.jpg?v=1690361781&width=1000)",
            backgroundSize: 'cover', // Adjusts the image size to cover the entire container
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            backgroundPosition: 'center', // Centers the image
            // maxHeight: '437px', // Sets the height of the container
            width: '100%', // Sets the width of the container
          }}
        >
          <div className="text-center h-full bg-black bg-opacity-40 pt-[120px] pb-[120px] rounded-3xl px-20">
            <h2 className="font-jost font-bold text-[50px] text-white uppercase">Deals on Hair Devices!</h2>
            <p className="font-jost font-medium text-[18px] text-white pb-5">Up To 20% Off All Hair Care Devices On Store</p>
            <button className="bg-[#fa8c16] px-7 py-3 text-white w-fit rounded-xl hover:bg-black transition-all duration-200 ease-linear">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
