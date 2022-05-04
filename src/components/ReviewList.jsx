import React from "react";
import Review from "./Review";

const ReviewList = ({ username, review, rating }) => {
  return (
    <>
      <div className="overflow-auto" id="reviewBox">
        <p>Rating</p>
        <Review rating={rating} />
        <p>Username</p>
        <p>{username}</p>
        <p>Content</p>
        <p>{review}</p>
      </div>
    </>
  );
};

export default ReviewList;
