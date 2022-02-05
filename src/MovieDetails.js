import React from "react";
import { useParams } from "react-router-dom";

export function MovieDetails({ movieList }) {
  // console.log(movieList);
  const { movieid } = useParams();
  const movie = movieList[movieid];
  const name = movie.Name;
  const description = movie.Summary;
  const trailer = movie.trailer;
  return (
    <div>
      <h1>{movieid}</h1>
      <h2>{name}</h2>
      <h5>{description}</h5>
      <h5>{trailer}</h5>
    </div>
  );
}
