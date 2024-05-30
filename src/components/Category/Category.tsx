import React from "react";
import PriceSlider from "./PriceSlider";

const Category = () => {
  return (
    <div className="w-1/4 ml-1 md:ml-8 text-[#000000]">
      {/* category */}
      <h3 className="font-extrabold">Category</h3>
      {/* checkbox div for category */}
      <div className="my-5 px-10   space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2   font-medium">Hair Wigs</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2   font-medium text-gray-900 dark:text-gray-300">
            Hair Extension
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2   font-medium">Hair bangs</label>
        </div>
      </div>
      {/* type */}
      <h3 className="font-extrabold">Type</h3>
      {/* checkbox div for type */}
      <div className="my-5 px-10 space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2   font-medium">Long</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2 font-medium text-gray-900 dark:text-gray-300">
            Short
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2 font-medium">Curly</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2   font-medium">Straight</label>
        </div>
      </div>
      {/* brands */}
      <h3 className="font-extrabold">Brands</h3>
      <div className="my-5 px-10 space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#fa8c16] bg-gray-100 border-gray-300 rounded focus:ring-[#fa8c16] focus:ring-2"
          />
          <label className="ms-2 font-medium text-gray-900 dark:text-gray-300">
            XYZ
          </label>
        </div>
      </div>
      {/* colors */}
      <h3 className="font-extrabold">Colors</h3>
      <div className="my-5 grid grid-cols-8">
        <span className="bg-[#000000] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#1AE0E0] text-[#1AE0E0] w-9 h-9 rounded-[10px] mb-3 inline-block">
          T
        </span>
        <span className="bg-[#DDA44D] text-[#DDA44D] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#1F55F8] text-[#1F55F8] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#06D506] text-[#06D506] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#BABABA] text-[#BABABA] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#0ECB9B] text-[#0ECB9B] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#0BBBF5] text-[#0BBBF5] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#A9E418] text-[#A9E418] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#F48700] text-[#F48700] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#BF00FF] text-[#BF00FF] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#EA06B1] text-[#EA06B1] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#7F00FF] text-[#7F00FF] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#E72525] text-[#E72525] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#F1F129] text-[#F1F129] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
        <span className="bg-[#B2B564] text-[#B2B564] w-9 h-9 rounded-[10px] mb-3 inline-block">
          B
        </span>
      </div>
      {/* price range */}
      <h3 className="font-extrabold">Price Range</h3>
      <PriceSlider />
      {/* filter */}
      <button
        className="bg-[#fa8c16] text-[#ffffff] hover:bg-black w-full text-center rounded-[27px] font-semibold pt-5 pb-4 px-9"
        // style={{ padding: "20px 35px 17px" }}
      >
        Filter
      </button>
    </div>
  );
};

export default Category;
