import * as React from "react"

const Movie = ({ movie }) => {
    //const { title, plot, featuredImage, imDb } = movie?.fields;
    return (
      <div>
        <h1>{movie?.fields?.title}</h1>
        <p>{movie?.fields?.plot}</p>
        {movie?.fields?.featuredImage && <img src={movie?.fields?.featuredImage.fields.file.url} alt="Movie" />}
        <a href={movie?.fields?.imDb}>Visit {movie?.fields?.title} on IMDb</a>
      </div>
    );
  };
  
  export default Movie;