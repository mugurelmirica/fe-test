import { Cell } from "./Cell";

export interface BoardConfig {
  noOfRows: number;
  noOfCols: number;
  squareSize: number;
}

// Props

export interface BoardConfigProps {
  boardConfig: BoardConfig
}

export interface GameConfigProps extends BoardConfigProps {
  matrix: Cell[][]
}

export interface SquareProps {
  value: number,
  size: number,
  cell: Cell
}
