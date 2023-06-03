import React, { useState, useEffect } from "react";

import DisplayArea from "./DisplayArea";
import { BoardConfig, BoardConfigProps } from "./GameConfig";
import { Cell, CellType } from "./Cell";

export function GameWrapper({ boardConfig }: BoardConfigProps) {
  // console.log("GameEngine boardConfig", boardConfig);
  const [matrix, setMatrix] = useState(initMatrix(boardConfig));
  // console.log("initial matrix", matrix);

  useEffect(
    () => {
      setTimeout(() => {
        setMatrix(randomBlocks(matrix))
      }, 1000);
    },
    [matrix]
  );

  return (
    <DisplayArea boardConfig={boardConfig} matrix={matrix}></DisplayArea>
  );
}

// TODO move to logic
function initMatrix(boardConfig: BoardConfig): Cell[][] {
  const matrixData: Cell[][] = [];
  let index = 0;

  for (let i = 0; i < boardConfig.noOfRows; i++) {

    const cells: Cell[] = [];
    for (let j = 0; j < boardConfig.noOfCols; j++) {
      cells.push(new Cell(index, CellType.X));
      index++;
    }

    matrixData.push(cells);
  }

  return matrixData;
}

// TODO move to logic
function randomBlocks(dataMatrix: Cell[][]): Cell[][] {
  // console.log('Doing random stuff!');
  const updatedMatrix = dataMatrix.slice();
  const noOfRows = updatedMatrix.length;
  const noOfCols = (noOfRows === 0) ? 0 : updatedMatrix[0].length;

  const items = randomIntBtween(1, 10);

  for (let k = 0; k < items; k++) {
    const i = randomIntBtween(0, noOfRows - 1);
    const j = randomIntBtween(0, noOfCols - 1);
    updatedMatrix[i][j].type = randomEnum(CellType);
  }

  return updatedMatrix;
}

function randomEnum<T extends object>(anEnum: T): T[keyof T] {
  const enumValues = Object.keys(anEnum)
    .filter(key => typeof anEnum[key as keyof typeof anEnum] === 'number')
    .map(key => key);

  return anEnum[randomIntBtween(0, enumValues.length - 1) as keyof T];
}

function randomIntBtween(min: number, max: number): number {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}