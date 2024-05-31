import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaRegEye } from "react-icons/fa6";
import Modal from "./Modal";
import { PiEyeThin, PiHeartStraightThin, PiShareFatThin, PiShareNetworkThin } from "react-icons/pi";
import { MdShare } from "react-icons/md";
import { HiShare } from "react-icons/hi2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import "./CardRating.css"

// interface ProductCardProps {
//     product: Product;
// }

const ProductCard = ({ product }: any) => {
  const { _id, images, price, discount } = product || {};

  const getThumbnailImageObject = product?.images?.find(
    (thumbnail: any) => thumbnail?.thumbnail
  );
  const Thumbnail_URL: any = getThumbnailImageObject?.url;
  // console.log(Thumbnail_URL);
  // console.log(product);

  //modal trigger
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const modalTriggerOpen = (content: any) => {
    setModal(true);
    setModalContent(content);
    console.log("modal triggered");
  };

  const modalTriggerClose = () => {
    setModal(false);
  };

  // Function to calculate total percentage after discount
  const calculateTotalPrice = ({ price, discount }: any) => {
    let discountedAmount = price * (discount / 100);

    let discountedPrice = price - discountedAmount;

    return {
      discountedPrice: discountedPrice,
    };
  };

  const result = calculateTotalPrice(product);
  console.log(result.discountedPrice);

  return (
    <>
      <div>
        {/* <Link href={`/${product?._id}`}> */}
        <div className="max-w-[377px] group">
          {/* image div */}
          <div className="relative">
            <div>
              <Link href={`/${product?._id}`}>
                <Image
                  src={`${Thumbnail_URL !== undefined
                    ? Thumbnail_URL
                    : "https://www.britax-romer.co.uk/on/demandware.static/Sites-Britax-UK-Site/-/default/dw71f81a13/images/britax/PlaceholderProductImage.jpg"
                    }`}
                  alt=""
                  width={280}
                  height={280}
                  sizes="100vw"
                  className="rounded-2xl aspect-square w-full group-hover:shadow-[rgba(0,_0,_0,_0.25)_0px_15px_40px_-12px] transition-all duration-200 ease-in-out relative"
                />
                {/* sale label */}
                {discount > 0 ? (
                  <div className="absolute top-4 left-5 bg-[#fa8c16] text-white rounded-md py-1 px-2.5">
                    Sale
                  </div>
                ) : (
                  <></>
                )}
              </Link>
            </div>
            <div className="z-[999] absolute right-4 bottom-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100">
              <button
                className="text-black text-md w-fit max-h-fit bg-white p-[6px] rounded-[4px]  shadow-md"
              >
                <PiHeartStraightThin />
              </button>
              <button
                className="text-black text-md w-fit max-h-fit bg-white p-[6px] rounded-[4px]  shadow-md"
              >
                <PiShareFatThin />
              </button>
              <button
                className="text-black text-md w-fit max-h-fit bg-white p-[6px] rounded-[4px] shadow-md"
                onClick={() => modalTriggerOpen(product)}
              >
                <PiEyeThin />
              </button>
            </div>
          </div>
          <Link href={`/${product?._id}`}>
            <div>
              {/* Ratings */}
              <div className="card-Rating mt-5" >
                <Rating
                  readOnly
                  style={{ maxWidth: 120 }}
                  value={3}
                // onChange={onChange}
                />
              </div>
              <h3 className="font-jost font-bold text-xl mt-2 mb-1 ml-1 line-clamp-1">
                {product.title}
              </h3>
              {/* <h3 className="font-jost font-bold text-xl mt-7 ml-1 mb-3 line-clamp-1">
                {product.title}
              </h3> */}
              <div className="flex justify-between items-center">
                <div>
                  {/* Price */}
                  <div className="ml-1">
                    {discount ? (
                      <div className="flex flex-row-reverse gap-2 items-center">
                        <del className="text-gray-500">&#x9F3;{price}</del>
                        <p className="text-[22px] font-bold text-[#fa8c16]">
                          &#x9F3;{result.discountedPrice.toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-[22px] font-bold text-[#fa8c16]">
                        &#x9F3;{price}
                      </p>
                    )}
                  </div>
                </div>
                {/* Add to cart */}
                <div className="w-[38%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className="bg-[#fa8c16] py-3 text-white w-full rounded-xl hover:bg-black transition-all duration-200 ease-linear">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* </Link> */}
        {/* modal div */}
        <div className="z-[99999]">
          <Modal
            modal={modal}
            onClose={modalTriggerClose}
            modalContent={modalContent}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
