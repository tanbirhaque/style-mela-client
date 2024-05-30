"use client";

import Category from "@/components/Category/Category";
import Cover from "@/components/shared/Cover/Cover";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Page = () => {
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
    <>
      <Cover heading={"shop"} route={"shop"} />
      <div className="my-10 flex flex-col-reverse md:flex-row gap-5">
        {/* filter div */}
        {/* <div className="w-1/4 ml-1 md:ml-8">
          <h3 className="font-extrabold">Category</h3>
        </div> */}
        <Category />
        {/* products div */}
        <div>
          <h1 className="text-3xl font-extrabold mb-10">Featured Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product: any) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

// Sort By:
// - Default
// - Popularity
// - Rating
// - Newest
// - Oldest
// - Low Price
// - High Price
