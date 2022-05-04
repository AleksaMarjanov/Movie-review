import React from "react";
import Stars from "./Stars";

const Review = ({ username, rating, review }) => {
  return (
    <div>
      <Stars username={username} rating={rating} />
      <div>{review}</div>
      <br />
    </div>
  );
};

export default Review;
