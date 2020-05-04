import React from "react";
import styles from "./main.module.css";
import { GridCell } from "./components/grid-cell";

const valueMap: { [type: string]: number } = { O: 1, X: -1 };

function App() {
  const [cellArray, setCellArray] = React.useState(Array(9).fill(" "));
  const [currentPlayer, setCurrentPlayer] = React.useState("O");
  const [row, setRow] = React.useState<number[]>([0, 0, 0]);
  const [col, setCol] = React.useState([0, 0, 0]);
  const [diag, setDiag] = React.useState(0);
  const [xdiag, setXdiag] = React.useState(0);
  const handleClick = (i: number) => {
    if (cellArray[i] === " ") {
      cellArray[i] = currentPlayer;
      setCellArray([...cellArray]);
      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
      checkWinner(i);
    }
  };

  const checkWinner = (i: number) => {
    const r = (i + 1) % 3;
    const c: number = Math.round((i + 1) / 3);
    console.log("c", c);
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
    console.log(row);
    console.log(col);
    console.log(diag);
    console.log(xdiag);
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
