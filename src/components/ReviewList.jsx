import React from "react";
import Review from "./Review";

const ReviewList = ({ username, review, rating }) => {
  return (
    <>
      <div className="overflow-auto" id="reviewBox">
        <Review rating={rating} />
        <p>Your rating is: {rating} of 5</p>
        <p>{username}</p>
        <p>"{review}"</p>
      </div>
    </>
  );
};

export default ReviewList;
