import React from "react";
import { useHistory,useParams } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";



export function EditMovie({ movieList, setMovieList }) {
    const history = useHistory();
  const { movieid }= useParams();
  const movie = movieList[movieid];


  const [Name, setName] = useState(movie.Name);
  const [Ratings, setRatings] = useState(movie.Ratings);
  const [Image, setImage] = useState(movie.Image);
  const [Summary, setSummary] = useState(movie.Summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  
  return (
    <div>

      <div className="add-movie-form">
        <h1>Enter Movie Details</h1>
        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name" />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Ratings"
          value={Ratings}
          onChange={(event) => setRatings(event.target.value)}
          placeholder="Ratings" />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Image URL"
          value={Image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image URL" />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-multiline-flexible"
          label="Summary"
          multiline
          maxRows={4}
          // value={value}
          value={Summary}
          onChange={(event) => {
            setSummary(event.target.value);
            // setValue(event.target.value);
          }}
          placeholder="Summary" />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-multiline-flexible"
          label="Trailer Link"
          multiline
          //   maxRows={4}
          // value={value}
          value={trailer}
          onChange={(event) => {
            setTrailer(event.target.value);
            // setValue(event.target.value);
          }}
          placeholder="Trailer Linnk" />

        <div className="btnWrapper text-center">
          <button
            type="button"
            className="btn btn-primary btnSubmit"
            onClick={() => {
              const updateMovie = {
                //   id:"",
                Name: Name,
                Ratings: Ratings,
                Image: Image,
                Summary: Summary,
                trailer: trailer,
              };
              const movieCopy = [...movieList];
              movieCopy[movieid]=updateMovie;
              setMovieList(movieCopy);
              history.push("/movies");
            }}
          >
            Save
          </button>

          <button
            onClick={() => {
              history.push("/movies");
            }}
            type="button"
            className="btn btn-primary btnCancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
