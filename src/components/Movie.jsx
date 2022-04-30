import React from 'react'

const Movie = (props) => {
  return (
    <div className="card">
    <div className="top">
      <h1>{props.title}</h1>
      <h2 className="name">{props.name}</h2>
      <img src={props.img} alt={`${props.name} Movie`} />
    </div>
    <div className="bottom">
      <h5>{props.director}</h5>
      <h6>{props.releaseDate}</h6>
    </div>
  </div>
  )
}

export default Movie


