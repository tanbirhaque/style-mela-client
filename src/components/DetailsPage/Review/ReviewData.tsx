import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewData = ({ review }: any) => {
  const { _id, reviewText, reviewerName, reviewerEmail, date, reviewRating } =
    review || {};
  //   console.log(review);
  return (
    <div className="bg-[#FFFFFF] px-20 py-5 rounded-lg">
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          {/* reviewer details div */}
          <div className="flex flex-row gap-5">
            <Image
              className="w-20 h-20 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
              width={75}
              height={75}
            />
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-xl font-semibold">{reviewerName}</h1>
              {/* TODO:needs to be dynamic */}
              <Rating style={{ maxWidth: 90 }} value={reviewRating} readOnly />
              {/* <Rating style={{ maxWidth: 90 }} value={4} /> */}
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
