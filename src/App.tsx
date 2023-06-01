import React from "react";
import { GameEngine, BoardConfig } from "./game/Engine.tsx";

const boardConfig: BoardConfig = { noOfRows: 20, noOfCols: 10, squareSize: 28 };
// console.log("App boardConfig", boardConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tetris game</h2>
      </header>
      <GameEngine boardConfig={boardConfig}></GameEngine>
    </div>
  );
}

export default App;