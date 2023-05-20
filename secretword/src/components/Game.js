import "./Game.css"

const Game = ({ verifyLetter }) => {
    return (
        <div>Game
            <button onClick={verifyLetter}>Mudar estagio do game</button>
        </div>
    )
}

export default Game