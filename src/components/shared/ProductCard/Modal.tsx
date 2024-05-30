import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./modal.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { Rating } from "@smastrom/react-rating";

const Modal = ({ modal, modalContent, onClose }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (modal) {
      setIsVisible(true);
      // Trigger the transition
      setTimeout(() => setIsTransitioning(true), 10); // Small delay to ensure the transition class is applied after the element becomes visible
    } else {
      setIsTransitioning(false);
      setTimeout(() => setIsVisible(false), 500); // Match the duration of the CSS transition
    }
  }, [modal]);

  if (!isVisible) {
    return null;
  }
  // const [tran, setTran] = useState(true)
  // if (modal !== true) {
  //   return null;
  // }
  console.log("From modal:", modal);

  const { title, price, description, listingCategory } = modalContent || {};

  const getThumbnailImageObject = modalContent?.images?.find(
    (thumbnail: any) => thumbnail?.thumbnail
  );
  const Thumbnail_URL: any = getThumbnailImageObject?.url;

  //   console.log(modalContent);

  return (
    <section className="modal">
      <div className={`modal-content fixed ${isTransitioning ? 'w-full' : 'w-0'} max-h-[570px] bg-white transition-all ease-linear duration-500 overflow-x-hidden p-8`}>
        <div className="cursor-pointer text-2xl font-bold absolute right-6 top-6">
          <IoMdClose onClick={onClose} />
        </div>
        {/* modal contents */}
        <div className="flex gap-10">
          <div className="bg-[#f5f5f5] rounded-2xl">
            <Image
              src={`${Thumbnail_URL !== undefined
                ? Thumbnail_URL
                : "https://www.britax-romer.co.uk/on/demandware.static/Sites-Britax-UK-Site/-/default/dw71f81a13/images/britax/PlaceholderProductImage.jpg"
                }`}
              alt=""
              width={500}
              height={500}
              sizes="100vw"
              className="rounded-2xl h-[500px] min-w-[500px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            {/* <Rating style={{ maxWidth: 90 }} value={3} /> */}
            <h5 className="font-jost text-2xl font-semibold">{title}</h5>
            <h3 className="font-jost text-4xl text-[#3d3d3d]">${price}</h3>
            <p>{description}</p>
            {/* Add to cart */}
            <div>
              <button className="bg-[#f5f5f5] font-semibold text-xl text-black max-w-32 px-7 py-3 rounded-xl space-x-3">
                <span className="text-[#fa8c16]">-</span>
                <span>1</span>
                <span className="text-[#fa8c16]">+</span>
              </button>
              <button className="bg-[#fa8c16] max-w-fit text-white px-7 py-3 rounded-xl hover:bg-black transition-all duration-200 ease-linear">
                Add To Cart
              </button>
            </div>
            {listingCategory.map((category: any) => (
              <p key={category} className="text-[#bbbbbb]">
                <span className="font-semibold text-[#3d3d3d]">
                  Categories:{" "}
                </span>
                {category.value}
              </p>
            ))}
            {/*  */}
            <div className="flex justify-between text-base">
              <p>More Information</p>
              <div className="flex gap-2 text-2xl">
                <GoShareAndroid />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Modal;
