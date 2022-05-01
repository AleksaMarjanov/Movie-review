import React, {useState} from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

const Movie = (props) => {



  const [ratings, setRatings] = useState([]);

  function addRating(newRating) {
    setRatings(prevRating => {
      return [...prevRating, newRating]
    })
  }



  return (
    <>
    <div className="flex-container" id='movieContainer'>
      <div className="row">
        <div className='col-sm-4'>
        <img src={props.img} alt={`${props.name} Movie`} />
        </div>
    <div className='col-sm-8' >
      <div className='row'>
        <h1>{props.title}</h1>
          <div className='col-sm-5'>
            <h5>{props.director}</h5>
            <h6>{props.releaseDate}</h6>
            <ReviewForm 
             onAdd={addRating}
             />
          </div>
          <div className='col-sm-7'>
            <ReviewList />
          </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )

}

export default Movie


