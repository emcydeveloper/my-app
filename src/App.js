import React from "react";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";
import { Switch, Route, Link, useParams } from "react-router-dom";

export default function App() {
  const movieInfo = [
    {
      Name: "Doctor",
      Ratings: "10",
      Image: "https://static.toiimg.com/photo/80667091.jpeg",
      Summary:
        "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa.",
    },
    {
      Name: "Sethupathi",
      Ratings: "10",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/81kFniN14wL._RI_.jpg",
      Summary:
        "While conducting an investigation into the mysterious death of a fellow officer, a cop's own reputation is questioned when a suspect in his custody is shot.",
    },
    {
      Name: "Alai Payuthey",
      Ratings: "10",
      Image:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/04/koimoi-recommends-alaipayuthey-starring-r-madhavan-shalini-003.jpg",
      Summary:
        "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
    },
    {
      Name: "Fast & Furious",
      Ratings: "7",
      Image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg",
      Summary:
        "Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and family. The franchise also includes short films, a television series, live shows, video games and theme park attractions. It is distributed by Universal Pictures.",
    },
  ];
  const [Name, setName] = useState("");
  const [Ratings, setRatings] = useState("");
  const [Image, setImage] = useState("");
  const [Summary, setSummary] = useState("");

  const [movieList, setMovieList] = useState(movieInfo);

  const [addMovieBtn, setAddMovieBtn] = useState("none");
  const addMovieStyles = { display: addMovieBtn };

  const [addBtn, setAddBtn] = useState("block");
  const addBtnStyle = { display: addBtn };

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">List Movies</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/movies/:movieid">
          <MovieDetils movieList = {movieList} />
        </Route>
        <Route path="/movies">
          <h1>testing</h1>
          <div className="btnWrapper">
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
          </div>

          <div className="add-movie-form" style={addMovieStyles}>
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
            {/* <input
          value={Name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        /> */}
            <TextField
              required
              className="add-movie-txt"
              id="outlined-required"
              label="Ratings"
              value={Ratings}
              onChange={(event) => setRatings(event.target.value)}
              placeholder="Ratings"
            />
            {/* <input
          value={Ratings}
          onChange={(event) => setRatings(event.target.value)}
          placeholder="Ratings"
        /> */}
            <TextField
              required
              className="add-movie-txt"
              id="outlined-required"
              label="Image URL"
              value={Image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Image URL"
            />
            {/* <input
          value={Image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image URL"
        /> */}

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
            {/* <input
          value={Summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Summary"
        /> */}

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
                  };
                  setMovieList([...movieList, newMovie]);
                  setAddMovieBtn(addMovieBtn === "block" ? "none" : "block");
                  setAddBtn(addBtn === "none" ? "block" : "none");
                }}
              >
                Submit
              </button>

              <button
                onClick={() => {
                  setAddMovieBtn(addMovieBtn === "block" ? "none" : "block");
                  setAddBtn(addBtn === "none" ? "block" : "none");
                }}
                type="button"
                className="btn btn-primary btnCancel"
              >
                Cancel
              </button>
            </div>
          </div>

          <section className="main-container">
            {movieList.map((movie, index) => (
              <Movie
                KeyID={index}
                Name={movie.Name}
                Ratings={movie.Ratings}
                Image={movie.Image}
                Summary={movie.Summary}
              />
            ))}
          </section>
        </Route>

        <Route path="/">
          <h1>Welcome to Movie app</h1>
        </Route>
      </Switch>
    </div>
  );
}

function MovieDetils({movieList}) {
  // console.log(movieList);
  const { movieid } = useParams();
  const movie = movieList[movieid];
  const name = movie.Name;
  const description  = movie.Summary;
  return (
    <div>
      <h1>{movieid}</h1>
      <h2>{name}</h2>
      <h5>{description}</h5>
    </div>
  );
}
