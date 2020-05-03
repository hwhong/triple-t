import React from "react";
import styles from "./grid-cell.module.css";

interface GridCellProps {
  index: number;
  content?: string;
  onCellClick: () => void;
}

export const GridCell = (props: GridCellProps) => {
  return (
    <div className={styles.root} onClick={() => props.onCellClick()}>
      {props.content}
    </div>
  );
};
