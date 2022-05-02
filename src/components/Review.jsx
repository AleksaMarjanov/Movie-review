import React from 'react'
import Stars from './Stars'

const Review = (props) => {
  return (
    <div>
    <Stars user={props.review.username} rating={props.review.rating}/>
    <div>{props.review.review}</div>
    <br/>
  </div>
  )
}

export default Review