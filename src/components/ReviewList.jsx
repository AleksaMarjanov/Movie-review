import React from 'react'
import Review from './Review';


const ReviewList = (props) => {
  return (
    <>
      <h5>User Reviews:</h5>
        <br/>
        <div  className='overflow-auto' id='reviewBox'>
        {/* {props.reviews.map( review => <Review review={review} key={review.id} /> )} */}
        </div> 
      </>
  )
}

export default ReviewList