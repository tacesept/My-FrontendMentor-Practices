import PropTypes from "prop-types";

export default function GameHeader({ turn, winner, onRestartClick }) {
  return (
    <div className="game-header">
      <div>
        <img src="/src/assets/logo.svg" alt="logo" className="logo" />
      </div>
      {!winner ? (
        <div className="turn-indicator-container">
          <div className="turn-indicator">
            {turn === "x" ? (
              <img src="/src/assets/icon-x.svg" alt="x" />
            ) : (
              <img src="/src/assets/icon-o.svg" alt="o" />
            )}
            <span>TURN</span>
          </div>
        </div>
      ) : (
        <div className="turn-indicator-container">
          <div
            className={`turn-indicator ${
              winner === "x" ? "winner-x" : winner === "o" ? "winner-o" : "tie"
            }`}
          >
            {winner === "tie" ? (
              <span>TIE</span>
            ) : (
              <>
                <img
                  className="winner-icon"
                  src={`/src/assets/icon-${winner}.svg`}
                  alt={winner}
                />
                <span>WINS</span>
              </>
            )}
          </div>
        </div>
      )}
      <div className="restart-button">
        <button onClick={onRestartClick}>
          <img src="/src/assets/icon-restart.svg" alt="restart" />
        </button>
      </div>
    </div>
  );
}

GameHeader.propTypes = {
  turn: PropTypes.string.isRequired,
  winner: PropTypes.string,
  onRestartClick: PropTypes.func.isRequired,
};
