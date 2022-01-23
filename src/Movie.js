import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Counter } from "./Counter";
import { useHistory } from "react-router-dom";

export function Movie({ KeyID, Name, Ratings, Image, Summary }) {
  const ratingStyles = { color: Ratings < 8 ? "red" : "green" };

  const [visible, setVisible] = useState(false);
  const showSummaryStyle = { display: visible ? "block" : "none" };
  // console.log(KeyID);
  const history = useHistory();

  return (
    <Card className="movie-container" key={KeyID}>
      <CardContent>
        <img className="movie-poster" src={Image} alt=""></img>
        <Counter />
        {/* <hr></hr> */}
        <section className="movie-section">
          <h3 className="movie-name">
            {Name}
            <IconButton onClick={() => setVisible(!visible)}>
              {visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => history.push("/movies/"+ KeyID)}>!</IconButton>
          </h3>
          
          <p className="movie-rating" style={ratingStyles}>
            ⭐ {Ratings}
          </p>
        </section>

        <p style={showSummaryStyle} className="movie-summary">
          {/* <hr></hr> */}
          {Summary}
        </p>
      </CardContent>
    </Card>
  );
}
