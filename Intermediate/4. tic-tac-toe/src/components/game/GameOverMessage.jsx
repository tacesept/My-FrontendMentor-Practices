import PropTypes from "prop-types";
import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";

export default function GameOverMessage({
  winner,
  gameMode,
  onQuit,
  onNextRound,
}) {
  return (
    <div className="game-over-msg">
      {winner === "tie" ? (
        <span className="tie-msg">ROUND TIED</span>
      ) : (
        <>
          <span>
            {gameMode.opponent === "player"
              ? winner === gameMode.playerMark
                ? "P1 WON!"
                : "P2 WON!"
              : winner === gameMode.playerMark
              ? "YOU WON!"
              : "OH NO, YOU LOST..."}
          </span>
          <span className="winner-msg">
            <img
              src={winner === "x" ? iconX : iconO}
              alt={winner}
              className="winner-icon"
            />
            <span>TAKES THE ROUND</span>
          </span>
        </>
      )}
      <div className="game-over-buttons">
        <button onClick={onQuit}>QUIT</button>
        <button className="yellow-button" onClick={onNextRound}>
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}

GameOverMessage.propTypes = {
  winner: PropTypes.string.isRequired,
  gameMode: PropTypes.shape({
    opponent: PropTypes.string.isRequired,
    playerMark: PropTypes.string.isRequired,
  }).isRequired,
  onQuit: PropTypes.func.isRequired,
  onNextRound: PropTypes.func.isRequired,
};
