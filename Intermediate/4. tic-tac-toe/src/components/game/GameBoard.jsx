import PropTypes from "prop-types";
import iconX from "../../assets/icon-x.svg";
import iconO from "../../assets/icon-o.svg";

export default function GameBoard({ board, gameOver, isCPUTurn, onBoxClick }) {
  return (
    <div className="game-board">
      {[...Array(9)].map((_, index) => (
        <button
          key={index}
          className={`box ${gameOver || isCPUTurn ? "disabled" : ""}`}
          onClick={() => onBoxClick(index)}
          disabled={board[index] || gameOver || isCPUTurn}
        >
          {board[index] && (
            <img
              src={board[index] === "x" ? iconX : iconO}
              alt={board[index]}
            />
          )}
        </button>
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  gameOver: PropTypes.bool.isRequired,
  isCPUTurn: PropTypes.bool.isRequired,
  onBoxClick: PropTypes.func.isRequired,
};
