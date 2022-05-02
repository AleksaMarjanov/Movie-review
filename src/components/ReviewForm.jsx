import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ReviewForm = (props) => {
  
  
  // new newReview that will be created
  const [newReview, setReview] = useState({
      username: "",
      review: "",
      rating: ""
  });
 

  function handleChange(event) {
      const {name, value} = event.target;

      setReview(prevRating => {
        return {
          ...prevRating,
          [name] : value
        }
      })
  }

  function submitRating(event) {
    props.onAdd(newReview)
    event.preventDefault();
    setReview({
      username: "",
      review: "",
    });
    console.log('Rating submitted')
  }

  return (
    <>
    <h6>Add your review:</h6>
    <Box sx={{'& > legend': { mt: 2 },}}>
    <Rating  name="simple-controlled" 
    onChange={handleChange} 
    // need this value later on to keep track of this data
    // value={newReview.rating.toParseInt}
    />
    </Box>
    <label>User Name:</label>
      <input 
      type='text' 
      name='username'
      className='form-control'  
      onChange={handleChange} 
      placeholder='Username'
      value={newReview.username}
      />
      <label>Review :</label>
      <textarea  
      name='review'
      className='form-control' 
      rows='3'  
      onChange={handleChange} 
      placeholder='Tell me what do you think about the movie?'
      value={newReview.review}
      />
      
      <br/>
      <button className="btn btn-primary" id='button' type="button" onClick={submitRating}>Submit</button>
    </>
  )
}

export default ReviewForm