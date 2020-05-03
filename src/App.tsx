import React, { useState } from "react";
import styles from "./main.module.css";
import { GridCell } from "./components/grid-cell";

function App() {
  const [cellArray, setCellArray] = useState(Array(9).fill(" "));
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const handleClick = (i: number) => {};

  return (
    <div className={styles.root}>
      <div className={styles.board}>
        {cellArray.map((i) => {
          return <GridCell index={i} content={cellArray[i]} />;
        })}
      </div>
    </div>
  );
}

export default App;
