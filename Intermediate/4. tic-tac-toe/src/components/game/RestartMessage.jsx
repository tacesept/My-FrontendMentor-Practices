import PropTypes from "prop-types";

export default function RestartMessage({ onCancel, onRestart }) {
  return (
    <div className="restart-msg">
      <span>RESTART GAME?</span>
      <div className="restart-msg-buttons">
        <button onClick={onCancel}>NO, CANCEL</button>
        <button className="yellow-button" onClick={onRestart}>
          YES, RESTART
        </button>
      </div>
    </div>
  );
}

RestartMessage.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};
