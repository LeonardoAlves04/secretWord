import "./Game.css"

const Game = ({ endGame }) => {
    return (
        <div>Game
            <button onClick={endGame}>Mudar estagio do game</button>
        </div>
    )
}

export default Game