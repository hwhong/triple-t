import React from "react";
import styles from "./main.module.css";
import { GridCell } from "./components/grid-cell";

const valueMap: { [type: string]: number } = { O: 1, X: -1 };

function App() {
  const [cellArray, setCellArray] = React.useState(Array(9).fill(" "));
  const [currentPlayer, setCurrentPlayer] = React.useState("O");
  // const [row, setRow] = React.useState<number[]>([0, 0, 0]);
  // const [col, setCol] = React.useState([0, 0, 0]);
  // const [diag, setDiag] = React.useState(0);
  // const [xdiag, setXdiag] = React.useState(0);
  const handleClick = (i: number) => {
    if (cellArray[i] === " ") {
      cellArray[i] = currentPlayer;
      setCellArray([...cellArray]);
      const res = checkWinner();
      console.log(res);
      if (res) {
        alert(`Player ${currentPlayer} Wins!`);
        setCellArray(Array(9).fill(" "));
      }
      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
    }
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    return winningCombinations.some((combo) => {
      const i = combo[0];
      const j = combo[1];
      const k = combo[2];

      if (
        cellArray[i] === cellArray[j] &&
        cellArray[j] === cellArray[k] &&
        cellArray[i] !== " "
      ) {
        return true;
      }
    });
  };

  // const checkWinner = (i: number) => {
  //   const r = (i + 1) % 3;
  //   const c: number = Math.round((i + 1) / 3);
  //   console.log("c", c);
  //   row[r] += valueMap[currentPlayer];
  //   setRow([...row]);
  //   col[c] += valueMap[currentPlayer];
  //   setCol([...col]);
  //   if (r === c) {
  //     setDiag(diag + valueMap[currentPlayer]);
  //   }

  //   // X-diagonal
  //   if (r + c === 2) {
  //     setXdiag(xdiag + valueMap[currentPlayer]);
  //   }
  //   console.log(row);
  //   console.log(col);
  //   console.log(diag);
  //   console.log(xdiag);
  //   if (
  //     Math.abs(row[r]) === 3 ||
  //     Math.abs(col[c]) === 3 ||
  //     Math.abs(diag) === 3 ||
  //     Math.abs(xdiag) === 3
  //   ) {
  //     alert(`${currentPlayer} WON!`);
  //   }
  // };

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
