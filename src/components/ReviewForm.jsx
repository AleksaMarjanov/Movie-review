import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ReviewForm = (props) => {

  const [newRating, setRating] = useState({
      username: "",
      content: "",
      rating: "",
  });
  

  function handleChange(event) {
      const {name, value} =event.target;

      setRating(prevRating => {
        return {
          ...prevRating,
          [name] : value
        }
      })
  }

  function submitRating(event) {
    props.onAdd(newRating)
    event.preventDefault();
    setRating({
      username: "",
      content: "",
      rating: ''
    });
  }

  return (
    <>
    <h6>Add your review:</h6>
    <Box sx={{'& > legend': { mt: 2 },}}>
    <Rating value={newRating.rating.toParseInt} name="simple-controlled" onChange={handleChange}/>
    </Box>
    <label>User Name</label>
      <input  type='text' className='form-control' value={newRating.username} onChange={handleChange} placeholder='Username'/>
      <label>Review</label>
      <textarea  className='form-control' rows='3' value={newRating.content} onChange={handleChange} placeholder='Review'/>
      <br/>
      <button className="btn btn-primary" id='button' type="button" onClick={submitRating}>Submit</button>
    </>
  )
}

export default ReviewForm