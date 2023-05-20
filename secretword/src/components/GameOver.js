import "./GameOver.css"

const GameOver = ({ retry }) => {
    return (
        <div>GameOver

            <button onClick={retry}>Reiniciar o jogo</button>
        </div>
    )
}

export default GameOver