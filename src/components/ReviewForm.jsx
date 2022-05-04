import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ReviewForm = ({ onAdd }) => {
  // new newReview that will be created
  const [newReview, setNewReview] = useState({
    username: "",
    review: "",
    // rating: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewReview((prevRating) => {
      return {
        ...prevRating,
        [name]: value,
      };
    });
  }

  function submitRating(event) {
    onAdd(newReview);
    event.preventDefault();
    setNewReview({
      username: "",
      review: "",
    });
  }

  return (
    <>
      <h6>Add your review:</h6>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          name="stars"
          onChange={handleChange}
          // need this value later on to keep track of this data
          // value={newReview.rating.toParseInt}
        />
      </Box>
      <label>User Name:</label>
      <input
        type="text"
        name="username"
        className="form-control"
        onChange={handleChange}
        placeholder="Username"
        value={newReview.username}
      />
      <label>Review :</label>
      <textarea
        name="review"
        className="form-control"
        rows="3"
        onChange={handleChange}
        placeholder="Tell me what do you think about the movie?"
        value={newReview.review}
      />

      <br />
      <button
        className="btn btn-primary"
        id="button"
        type="button"
        onClick={submitRating}
      >
        Submit
      </button>
    </>
  );
};

export default ReviewForm;
