import React from "react";
import { useState, useContext, createContext } from "react";


const MyContext = createContext(null);

export function ColorGame() {
  const [color, setcolor] = useState("");
  const styles = { background: color };
  const obj = { color, setcolor, styles };
  return (
    <MyContext.Provider value={obj}>
      <div>
<h1> Parent Component P1 </h1>
        <ChangeColor />
      </div>
    </MyContext.Provider>
  );
}

function ChangeColor() {
  const { styles } = useContext(MyContext);
  return (
    <div>
      <h1 style={styles}>Child of P1 Parent just using background color using context</h1>
      <TochangeColor />
    </div>
  );
}


function TochangeColor() {
    const { color, styles, setcolor } = useContext(MyContext);

    return (
        <div>
            <input
                value={color}
                style={styles}
                onChange={(event) => {
                    setcolor(event.target.value);
                }}
            ></input>
            <span style={styles}>Am grand Child of P1</span>
        </div>
    );
}
