import { useEffect, useState } from "react";
import ReviewData from "./ReviewData";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className=" flex flex-col gap-5 my-10">
      <h1 className=" text-3xl font-semibold font-jost px-20 py-5">
        3 Reviews For this product
      </h1>
      {reviews.map((review: any) => (
        <div key={review._id}>
          {/* <h1 className=" text-3xl font-semibold font-jost">
            {review.length} Reviews For Aqua Globes
          </h1> */}
          <ReviewData review={review} />
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
