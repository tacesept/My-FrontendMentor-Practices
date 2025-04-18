import { useState } from "react";
import logo from "../../assets/logo.svg";

export default function Menu({ setGameMode }) {
  const [activeMark, setActiveMark] = useState("");

  const handleMarkClick = (mark) => {
    setActiveMark(mark);
    setGameMode((prev) => ({ ...prev, playerMark: mark }));
  };

  const handleGameModeClick = (mode) => {
    setGameMode((prev) => ({ ...prev, opponent: mode }));
  };

  return (
    <div className="menu">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <section className="select-mark">
        <h1>PICK PLAYER 1'S MARK</h1>
        <div className="select-mark__buttons">
          <button
            className={activeMark === "x" ? "active" : ""}
            onClick={() => handleMarkClick("x")}
          >
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="#A8BFC9"
              />
            </svg>
          </button>
          <button
            className={activeMark === "o" ? "active" : ""}
            onClick={() => handleMarkClick("o")}
          >
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="#A8BFC9"
              />
            </svg>
          </button>
        </div>
        <span>REMEMBER : X GOES FIRST</span>
      </section>

      <div className="start-buttons">
        <button onClick={() => handleGameModeClick("cpu")}>
          NEW GAME (VS CPU)
        </button>
        <button onClick={() => handleGameModeClick("player")}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
