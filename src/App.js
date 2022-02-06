import React from "react";
import "./App.css";
import { useState } from "react";
import { Movie } from "./Movie";
import { Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { useHistory } from "react-router-dom";
import { EditMovie } from "./EditMovie";
import { ColorGame } from "./ColorGame";

export default function App() {
  const movieInfo = [
    {
      Name: "Doctor",
      Ratings: "10",
      Image: "https://static.toiimg.com/photo/80667091.jpeg",
      Summary:
        "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa.",
      Trailer: "",
    },
    {
      Name: "Sethupathi",
      Ratings: "10",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/81kFniN14wL._RI_.jpg",
      Summary:
        "While conducting an investigation into the mysterious death of a fellow officer, a cop's own reputation is questioned when a suspect in his custody is shot.",
      Trailer: "",
    },
    {
      Name: "Alai Payuthey",
      Ratings: "10",
      Image:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/04/koimoi-recommends-alaipayuthey-starring-r-madhavan-shalini-003.jpg",
      Summary:
        "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
      Trailer: "",
    },
    {
      Name: "Fast & Furious",
      Ratings: "7",
      Image:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg",
      Summary:
        "Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and family. The franchise also includes short films, a television series, live shows, video games and theme park attractions. It is distributed by Universal Pictures.",
      Trailer: "",
    },
  ];

  const history = useHistory();
  const [movieList, setMovieList] = useState(movieInfo);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">List Movies</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
        <li>
          <Link to="/testing">For testing</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/movies/edit/:movieid">
          <h1>editing movie</h1>
          <EditMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/movies/:movieid">
          <MovieDetails movieList={movieList} />
        </Route>

        <Route path="/movies">
          <section className="main-container">
            {movieList.map((movie, index) => (
              <Movie
                KeyID={index}
                trailer={movie.Trailer}
                Name={movie.Name}
                Ratings={movie.Ratings}
                Image={movie.Image}
                Summary={movie.Summary}
                deleteBtn={
                  <div>
                    <button
                      onClick={() => {
                        history.push("/movies/edit/" + index);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        const newMovieList = movieList.filter((movie, inx) => {
                          return inx !== index;
                        });
                        setMovieList(newMovieList);
                      }}
                    >
                      delete
                    </button>
                  </div>
                }
              />
            ))}
          </section>
        </Route>

        <Route path="/addmovie">
          <AddMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/testing">
          <h1>Context Functionality</h1>
          <ColorGame />
        </Route>

        <Route path="/">
          <h1>Welcome to Movie app</h1>
        </Route>
      </Switch>
    </div>
  );
}

