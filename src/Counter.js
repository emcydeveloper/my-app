import React from "react";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);
  return (
    <div>
      <IconButton
        className="movie-like"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="secondary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        className="movie-dislike"
        onClick={() => {
          setDislike(disLike + 1);
        }}
      >
        <Badge badgeContent={disLike} color="success">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
