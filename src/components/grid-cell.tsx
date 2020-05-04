import React from "react";
import styles from "./grid-cell.module.css";
import classNames from "classnames";

interface GridCellProps {
  index: number;
  content?: string;
  onCellClick: () => void;
}

export const GridCell = (props: GridCellProps) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.circle]: props.content === "O",
      })}
      onClick={() => props.onCellClick()}
    >
      {props.content}
    </div>
  );
};
