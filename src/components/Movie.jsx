import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Movie = (props) => {
  // for the array or reviews
  const [reviews, setNewReview] = useState([]);

  // function that will add newReview to reviews array
  function addReview(newReview) {
    setNewReview((prevReviews) => {
      return [...prevReviews, newReview];
    });
  }

  return (
    <>
      <div className="flex-container" id="movieContainer">
        <div className="row">
          <div className="col-sm-4">
            <img src={props.img} alt={`${props.name} Movie`} />
          </div>
          <div className="col-sm-8">
            <div className="row">
              <h1>{props.title}</h1>
              <div className="col-sm-5">
                <h5>{props.director}</h5>
                <h6>{props.releasedate}</h6>
                <ReviewForm onAdd={addReview} />
              </div>
              <div className="col-sm-7">
                {/* <h5>User Reviews:</h5> */}
                {reviews.map((reviewItem, index) => {
                  return (
                    <ReviewList
                      key={index}
                      id={index}
                      username={reviewItem.username}
                      review={reviewItem.review}
                      rating={reviewItem.stars}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
