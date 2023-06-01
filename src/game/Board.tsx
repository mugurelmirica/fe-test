import React from "react";
import { ReactElement } from "react";
import { GameConfigProps, SquareProps } from "./Engine.tsx";

// export default function GameArea({boardConfig}: BoardConfigProps, {matrix}: MatrixProps) {
export default function GameArea({ boardConfig, matrix }: GameConfigProps) {
  // console.log("GameArea boardConfig", boardConfig);
  // console.log("GameArea matrix", matrix);
  var index = 0;

  const divRows: ReactElement[] = []
  for (let i = 0; i < boardConfig.noOfRows; i++) {

    const cells: ReactElement[] = [];
    for (let j = 0; j < boardConfig.noOfCols; j++) {
      cells.push(
        <Square key={index} value={index} size={boardConfig.squareSize} cell={matrix[i][j]}></Square>
      );
      index++;
    }

    divRows.push(<div key={'row' + i} className="board-row">{cells}</div>);
  }

  return (
    <>
      {divRows}
    </>
  );
}

function Square({ value, size, cell }: SquareProps) {

  return (
    <button className="square" style={{ height: `${size}px`, width: `${size}px`, background: `${cell.empty ? '' : 'black'}` }}>
      {value}
    </button>
  );
}