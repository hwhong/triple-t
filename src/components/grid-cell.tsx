import React from "react";
import styles from "./grid-cell.module.css";

interface GridCellProps {
  index: number;
  content?: string;
  onGridClick?: () => void;
}

export const GridCell = (props: GridCellProps) => {
  return <div className={styles.root}>{props.content}</div>;
};
