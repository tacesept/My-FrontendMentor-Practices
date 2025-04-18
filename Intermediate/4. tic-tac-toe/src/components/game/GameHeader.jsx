import PropTypes from "prop-types";
import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";
import iconRestart from "../../assets/icon-restart.svg";
import logo from "../../assets/logo.svg";

export default function GameHeader({ turn, winner, onRestartClick }) {
  return (
    <div className="game-header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      {!winner ? (
        <div className="turn-indicator-container">
          <div className="turn-indicator">
            {turn === "x" ? (
              <img src={iconX} alt="x" />
            ) : (
              <img src={iconO} alt="o" />
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
                  src={winner === "x" ? iconX : iconO}
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
          <img src={iconRestart} alt="restart" />
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
