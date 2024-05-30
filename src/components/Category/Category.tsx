import React from "react";
import PriceSlider from "./PriceSlider";
import Colors from "./Colors";

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
      <Colors />
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
