import PropTypes from "prop-types";

export default function ScoreBoard({ scores, gameMode }) {
  const playerX = () => {
    if (gameMode.opponent === "cpu") {
      if (gameMode.playerMark === "x") {
        return "X (YOU)";
      } else {
        return "X (CPU)";
      }
    } else if (gameMode.opponent === "player") {
      if (gameMode.playerMark === "x") {
        return "X (P1)";
      } else {
        return "X (P2)";
      }
    }
  };

  const playerO = () => {
    if (gameMode.opponent === "cpu") {
      if (gameMode.playerMark === "o") {
        return "O (YOU)";
      } else {
        return "O (CPU)";
      }
    } else if (gameMode.opponent === "player") {
      if (gameMode.playerMark === "o") {
        return "O (P1)";
      } else {
        return "O (P2)";
      }
    }
  };

  return (
    <div className="score-container">
      <div className="score-box score-box-x">
        <span className="score-box-text">{playerX()}</span>
        <span className="score-box-number">{scores.x}</span>
      </div>
      <div className="score-box">
        <span className="score-box-text">TIE</span>
        <span className="score-box-number">{scores.tie}</span>
      </div>
      <div className="score-box score-box-o">
        <span className="score-box-text">{playerO()}</span>
        <span className="score-box-number">{scores.o}</span>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  scores: PropTypes.shape({
    x: PropTypes.number.isRequired,
    o: PropTypes.number.isRequired,
    tie: PropTypes.number.isRequired,
  }).isRequired,
  gameMode: PropTypes.shape({
    opponent: PropTypes.string.isRequired,
    playerMark: PropTypes.string.isRequired,
  }).isRequired,
};
