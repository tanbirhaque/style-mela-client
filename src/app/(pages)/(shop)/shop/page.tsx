"use client";

import Category from "@/components/Category/Category";
import Cover from "@/components/shared/Cover/Cover";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const [dropOpen, setDropOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
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

  const handleDropOpen = () => {
    setDropOpen(!dropOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropOpen(false);
    }
  };

  useEffect(() => {
    if (dropOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropOpen]);

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
            <div className="relative h-fit" ref={dropdownRef}>
              <button
                // id="dropdownDefaultButton"
                className={`text-white bg-black font-medium rounded-t-lg ${dropOpen ? '' : 'rounded-b-lg'} px-5 py-2.5 text-center inline-flex items-center transition-all ease-linear duration-500`}
                type="button"
                onClick={handleDropOpen}
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

              <div className={`bg-white absolute ${dropOpen ? 'top-full opacity-100' : 'top-20 opacity-0'} transition-all ease-linear duration-500 w-full z-[999] rounded-b-lg shadow-lg`}>
                <div className="p-5 grid gap-2">
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Default</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Popularity</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Rating</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Newest</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Oldest</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">Low Price</p>
                  </label>
                  <label className="flex flex-row-reverse items-center justify-between">
                    <input
                      type="checkbox"
                      className="peer w-[20px] h-[20px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
                    />
                    <p className="peer-checked:font-bold">High Price</p>
                  </label>
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
      </div >
    </>
  );
};

export default Page;
