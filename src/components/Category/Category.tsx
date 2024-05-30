import React from "react";
import PriceSlider from "./PriceSlider";
import Colors from "./Colors";

const Category = () => {
  return (
    <div className="w-1/4 ml-1 md:ml-8 text-[#000000]">
      {/* category */}
      <h3 className="font-extrabold">Category</h3>
      {/* checkbox div for category */}
      <div className="my-5 pl-5 pr-10 space-y-3">
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Hair Wigs</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Hair Extension</p>
            <p className="text-[12px]">(0)</p>
          </div>
        </label>
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Hair bangs</p>
            <p className="text-[12px]">(1)</p>
          </div>
        </label>
      </div>
      {/* type */}
      <h3 className="font-extrabold">Type</h3>
      {/* checkbox div for type */}
      <div className="my-5 pl-5 pr-10 space-y-2">
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Long</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Short</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Curly</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>Straight</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
      </div>
      {/* brands */}
      <h3 className="font-extrabold">Brands</h3>
      <div className="my-5 pl-5 pr-10 space-y-2">
        <label className="flex items-center gap-5">
          <input
            type="checkbox"
            className="peer w-[22px] h-[22px] text-[#fa8c16] border border-gray-300 rounded checked:bg-[#fa8c16] checked:border-none appearance-none"
          />
          <div className="peer-checked:font-semibold flex justify-between items-center flex-grow">
            <p>XYZ</p>
            <p className="text-[12px]">(10)</p>
          </div>
        </label>
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
