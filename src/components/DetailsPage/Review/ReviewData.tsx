import Image from "next/image";
import React from "react";

const ReviewData = ({ review }: any) => {
  const { length, _id, reviewText, reviewerName, reviewerEmail, date } =
    review || {};
  console.log(review);
  return (
    <div className="max-w-5xl mx-auto bg-[#FFFFFF] px-20 py-5 rounded-lg">
      {/* <h1 className=" text-3xl font-semibold font-jost">
        {length} Reviews For Aqua Globes
      </h1> */}

      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          {/* reviewer details div */}
          <div className="flex flex-row gap-5">
            <Image
              className="w-20 h-20 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
              width={75}
              height={75}
            />
            <div className="flex justify-center items-center text-center">
              <h1 className="text-xl font-semibold"> Akkas Ali</h1>
              {/* rating goes here */}
              {/* <div></div> */}
            </div>
          </div>
          {/* date */}
          <div className="flex justify-center items-center text-center">
            {date}
          </div>
        </div>
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewData;
