import './App.css';
import StartScreen from './components/StartScreen';
import { useCallBack, useEffect, useState } from "react";
import { wordsList } from "./data/words"
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  // estágios do jogo. Tela inicial, jogo e fim do jogo
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    // escolhendo uma categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // escolhendo uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { category, word }
  }

  const startGame = () => {
    setGameStage(stages[1].name)

    // desestruturando a função acima para escolher uma palavra e categoria aleatoria
    const { word, category } = pickWordAndCategory();

    // criando um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // settando os estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters);
    console.log(word)
    console.log(category)
  }

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // checando se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //  colocando a letra colocada ou removendo uma chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
    }
    console.log(guessedLetters)
    console.log(wrongLetters)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
