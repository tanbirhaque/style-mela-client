import { useEffect, useState } from "react";
import ReviewData from "./ReviewData";

const AllReviews = ({ productID }: any) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  //filtering reviews
  const filteredReviews = reviews.filter(
    (review: any) => review.productID === productID
  );

  return (
    <div className="flex flex-col gap-5 my-10 px-20 py-5">
      <h1 className="text-3xl font-semibold font-jost">
        {filteredReviews.length} Reviews For this product
      </h1>
      <div className="flex flex-col gap-5 my-10">
        {filteredReviews.map((review: any) => (
          <ReviewData review={review} key={review._id} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
