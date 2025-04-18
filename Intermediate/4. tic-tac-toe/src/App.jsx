import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";

function App() {
  const [screen, setScreen] = useState("menu");
  const [gameMode, setGameMode] = useState({
    playerMark: null,
    opponent: null,
  }); 

  useEffect(() => {
    if (gameMode.playerMark && gameMode.opponent) {
      setScreen("game");
    }
  }, [gameMode]);
 

  return (
    <main className="container">
      {screen === "menu" && (
        <Menu setScreen={setScreen} setGameMode={setGameMode} />
      )}
      {screen === "game" && <Game gameMode={gameMode} setGameMode={setGameMode} setScreen={setScreen} />}
    </main>
  );
}

export default App;
