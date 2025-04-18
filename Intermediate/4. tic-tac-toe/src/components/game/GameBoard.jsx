import PropTypes from "prop-types";

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
              src={`/src/assets/icon-${board[index]}.svg`}
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
