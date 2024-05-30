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
      <div className="max-w-[1600px] mx-auto my-10 flex flex-col-reverse md:flex-row gap-5">
        {/* filter div */}
        <Category />
        {/* products div */}
        <div>
          <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold mb-10">Featured Product</h1>

            {/* dropdown */}
            <div className="pr-9">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Sort By: Default{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <div className="py-2" aria-labelledby="dropdownDefaultButton">
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    Popularity
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    Rating
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    Newest
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    Oldest
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    Low Price
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
                <div className="flex justify-around">
                  <label className="ms-2 mr-5 hover:font-semibold">
                    High Price
                  </label>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16]"
                  />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
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
