"use client";
import React, { useEffect, useState } from "react";
import products from "@/data/democard.json";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { Product } from "@/types/product";

const HomeProducts = () => {
  // console.log(products);

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

  console.log(products);

  return (
    <div className="max-w-[1600px]">
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
    </div>
  );
};

export default HomeProducts;
