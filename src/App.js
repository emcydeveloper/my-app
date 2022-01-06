import React from "react";
import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


export default function App() {
  const movieInfo = [
    {Name: "Doctor", Ratings: "10", Image: "https://static.toiimg.com/photo/80667091.jpeg", Summary: "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa."},
    {Name: "Sethupathi", Ratings: "10", Image: "https://images-na.ssl-images-amazon.com/images/I/81kFniN14wL._RI_.jpg", Summary: "While conducting an investigation into the mysterious death of a fellow officer, a cop's own reputation is questioned when a suspect in his custody is shot."},
    {Name: "Alai Payuthey", Ratings: "10", Image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/04/koimoi-recommends-alaipayuthey-starring-r-madhavan-shalini-003.jpg", Summary: "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be."},
    {Name: "Fast & Furious", Ratings: "7", Image: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg", Summary: "Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and family. The franchise also includes short films, a television series, live shows, video games and theme park attractions. It is distributed by Universal Pictures."}
  ];
  const [Name,setName]=useState("");
  const [Ratings,setRatings]=useState("");
  const [Image,setImage]=useState("");
  const [Summary,setSummary]=useState("");

  const[movieList, setMovieList]=useState(movieInfo);

  return (
    <div className="App">
      <div className="add-movie-form">
        <h1>Enter Movie Details</h1>
      <input value={Name} onChange={(event)=>setName(event.target.value)} placeholder ="Name"/>
      <input value={Ratings} onChange={(event)=>setRatings(event.target.value)} placeholder ="Ratings"/>
      <input value={Image} onChange={(event)=>setImage(event.target.value)} placeholder ="Image URL"/>
      <input value={Summary} onChange={(event)=>setSummary(event.target.value)} placeholder ="Summary"/>
      {/* <button onClick={()=>{
        const newMovie = {Name:Name,Ratings:Ratings,Image:Image,Summary:Summary};
        setMovieList([...movieList,newMovie])
        }}>Add Movie</button> */}
        <Button variant="contained" onClick={()=>{
        const newMovie = {Name:Name,Ratings:Ratings,Image:Image,Summary:Summary};
        setMovieList([...movieList,newMovie])
        }}><AddIcon />Add Movie</Button>
        {/* <button type="button" class="btn btn-primary">Primary</button> */}
      </div>

      <section className="main-container">
      {movieList.map((movie) => (
        <Movie Name={movie.Name} Ratings={movie.Ratings} Image={movie.Image} Summary={movie.Summary} />
      ))}
      </section>
      
    </div>
  );
}

function Movie({Name,Ratings,Image,Summary}) {
  const ratingStyles={color: Ratings<8 ? "red" : "green"};
  let [summarydisplayValue, setdisplaySummaryValue]=useState("none");
  let summaryStyles = {display:summarydisplayValue}
  
  let [fabUnhide, setFabUnhide] = useState("block")
  let fabStyleUnhide = {display:fabUnhide};

  let [fabHide, setFabHide] = useState("none")
  let fabStyleHide = {display:fabHide,float:"right"};
  

  return (
    <div className="movie-container">
      <img className="movie-poster" src={Image} alt=""></img>
      <Counter />
      <hr></hr>
      <section className="movie-section">
        <h3 className="movie-name">{Name}</h3>
        <p className="movie-rating" style={ratingStyles}>⭐ {Ratings}</p>
      </section>
      <hr></hr>
      <Fab style={fabStyleUnhide} size="small" color="secondary" aria-label="add" onClick={() => 
        {
          setdisplaySummaryValue(summarydisplayValue === "none" ? "block" : "none");
          setFabUnhide(fabUnhide === "block" ? "none" : "block");
          setFabHide(fabHide === "none" ? "block" : "none");
        }}>
      + 
      </Fab>
      <p className="movie-summary" style={summaryStyles}>{Summary}</p>
      <Fab style={fabStyleHide} size="small" color="secondary" aria-label="add" onClick={() => 
        {
          setdisplaySummaryValue(summarydisplayValue === "block" ? "none" : "block");
          setFabUnhide(fabUnhide === "none" ? "block" : "none");
          setFabHide(fabHide === "block" ? "none" : "block");
        }}>
      -
      </Fab>
    </div>
  );
}

function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);
  return (
    <div>
      <button className="movie-like" onClick={() => {setLike(like + 1);}}>👍 {like}</button>
      <button className="movie-dislike" onClick={() => {setDislike(disLike + 1);}}>👎 {disLike}</button>
    </div>
  );
}
