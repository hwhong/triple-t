import React, { useState } from "react";
import styles from "./main.module.css";
import { GridCell } from "./components/grid-cell";

const valueMap: { [type: string]: number } = { O: 1, X: -1 };

function App() {
  const [cellArray, setCellArray] = useState(Array(9).fill(" "));
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [row, setRow] = useState<number[]>([0, 0, 0]);
  const [col, setCol] = useState([0, 0, 0]);
  const [diag, setDiag] = useState(0);
  const [xdiag, setXdiag] = useState(0);
  const handleClick = (i: number) => {
    if (cellArray[i] === " ") {
      cellArray[i] = currentPlayer;
      setCellArray([...cellArray]);
      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
      checkWinner(i);
    }
  };

  const checkWinner = (i: number) => {
    const r = i % 3;
    const c = Math.round(i / 3);

    row[r] += valueMap[currentPlayer];
    setRow([...row]);
    col[c] += valueMap[currentPlayer];
    setCol([...col]);
    if (r === c) {
      setDiag(diag + valueMap[currentPlayer]);
    }

    // X-diagonal
    if (r + c === 2) {
      setXdiag(xdiag + valueMap[currentPlayer]);
    }
    // console.log(row);
    // console.log(col);
    // console.log(diag);
    // console.log(xdiag);
    if (
      Math.abs(row[r]) === 3 ||
      Math.abs(col[c]) === 3 ||
      Math.abs(diag) === 3 ||
      Math.abs(xdiag) === 3
    ) {
      alert(`${currentPlayer} WON!`);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.board}>
        {cellArray.map((content, i) => {
          return (
            <GridCell
              index={i}
              content={content}
              onCellClick={() => handleClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
