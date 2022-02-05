import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [Name, setName] = useState("");
  const [Ratings, setRatings] = useState("");
  const [Image, setImage] = useState("");
  const [Summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const history = useHistory();

  return (
    <div>
      {/* <div className="btnWrapper">
        <Button
          className="btnCentered"
          style={addBtnStyle}
          variant="contained"
          onClick={() => {
            setAddMovieBtn(addMovieBtn === "none" ? "block" : "none");
            setAddBtn(addBtn === "block" ? "none" : "block");
          }}
        >
          <AddIcon />
          Click to add Movie
        </Button>
      </div> */}

      {/* <div className="add-movie-form" style={addMovieStyles}> */}
      <div className="add-movie-form">
        <h1>Enter Movie Details</h1>
        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Ratings"
          value={Ratings}
          onChange={(event) => setRatings(event.target.value)}
          placeholder="Ratings"
        />

        <TextField
          required
          className="add-movie-txt"
          id="outlined-required"
          label="Image URL"
          value={Image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image URL"
        />

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
          placeholder="Summary"
        />

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
          placeholder="Trailer Linnk"
        />

        <div className="btnWrapper text-center">
          <button
            type="button"
            className="btn btn-primary btnSubmit"
            onClick={() => {
              const newMovie = {
                Name: Name,
                Ratings: Ratings,
                Image: Image,
                Summary: Summary,
                trailer: trailer,
              };
              setMovieList([...movieList, newMovie]);
              history.push("/movies");
            }}
          >
            Submit
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
