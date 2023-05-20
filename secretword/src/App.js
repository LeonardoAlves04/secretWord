import './App.css';
import StartScreen from './components/StartScreen';
import { useCallBack, useEffect, useState } from "react";
import { wordsList } from "./data/words"
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const endGame = () => {
    setGameStage(stages[2].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game endGame={endGame} />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
}

export default App;
