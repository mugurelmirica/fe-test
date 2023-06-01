import GameArea from "./Board.tsx";
import React, { useState, useEffect } from "react";

export interface BoardConfig {
  noOfRows: number;
  noOfCols: number;
  squareSize: number;
}

// X type means empty space
export enum CellType {
  X, I, O, T, J, L, S, Z
}

export interface Cell {
  index: number
  empty: boolean;
  type: CellType
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

//TODO rename to GameWrapper
export function GameEngine({ boardConfig }: BoardConfigProps) {
  // console.log("GameEngine boardConfig", boardConfig);
  const [matrix, setMatrix] = useState(initMatrix(boardConfig));
  // console.log("initial matrix", matrix);

  useEffect(
    () => {
      setTimeout(() => {
        setMatrix(randomBlocks(boardConfig, matrix))
      }, 100);
    },
    [boardConfig, matrix]
  );

  return (
    <GameArea boardConfig={boardConfig} matrix={matrix}></GameArea>
  );
}

function initMatrix(boardConfig: BoardConfig): Cell[][] {
  const data: Cell[][] = [];
  let index = 0;

  for (let i = 0; i < boardConfig.noOfRows; i++) {

    const cells: Cell[] = [];
    for (let j = 0; j < boardConfig.noOfCols; j++) {
      cells.push({ index: index, empty: true, type: CellType.X });
      index++;
    }

    data.push(cells);
  }

  //TEST
  data[3][3].empty = false;
  data[3][4].empty = false;
  data[3][5].empty = false;
  data[3][6].empty = false;

  return data;
}

function randomBlocks(boardConfig: BoardConfig, oldMatrix: Cell[][]): Cell[][] {
  // console.log('Doing random stuff!');
  const data = oldMatrix.slice();
  // console.log(data[3][3]);

  const items = 20;//randomIntBtween(1, 10);

  for (let k = 0; k < items; k++) {
    const i = randomIntBtween(0, boardConfig.noOfRows - 1);
    const j = randomIntBtween(0, boardConfig.noOfCols - 1);
    data[i][j].empty = !data[i][j].empty;
    // console.log("i, j => ", i, j);
  }

  return data;
}

function randomIntBtween(min: number, max: number): number {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}