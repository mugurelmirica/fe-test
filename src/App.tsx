import React from "react";
import { GameWrapper } from "./game/GameWrapper";
import { BoardConfig } from "./game/GameConfig";

const boardConfig: BoardConfig = { noOfRows: 20, noOfCols: 10, squareSize: 28 };
// console.log("App boardConfig", boardConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tetris game</h2>
      </header>
      <GameWrapper boardConfig={boardConfig}></GameWrapper>
    </div>
  );
}

export default App;