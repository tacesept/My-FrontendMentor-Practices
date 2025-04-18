import { useState, useEffect } from "react";
import GameHeader from "../game/GameHeader";
import GameBoard from "../game/GameBoard";
import ScoreBoard from "../game/ScoreBoard";
import GameOverMessage from "../game/GameOverMessage";
import RestartMessage from "../game/RestartMessage";

export default function Game({ gameMode, setGameMode, setScreen }) {
  const [turn, setTurn] = useState("x");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isCPUTurn, setIsCPUTurn] = useState(false);
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });
  const [restart, setRestart] = useState(false);

  const handleRestartCancel = () => {
    setRestart(false);
  };

  const handleRestartMsg = () => {
    setRestart(true);
  };

  const handleRestart = () => {
    setGameOver(false);
    setWinner(null);
    setScores({ x: 0, o: 0, tie: 0 });
    setBoard(Array(9).fill(null));
    setRestart(false);
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    // Check for tie
    if (!board.includes(null)) {
      return "tie";
    }

    return null;
  };

  const handleNextRound = () => {
    setTurn("x");
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    setIsCPUTurn(false);
  };

  const makeCPUMove = () => {
    if (gameOver) return;

    // Find all available moves
    const availableMoves = board.reduce((acc, cell, index) => {
      if (cell === null) acc.push(index);
      return acc;
    }, []);

    if (availableMoves.length > 0) {
      // Randomly select an available move
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      const cpuMove = availableMoves[randomIndex];

      // Make the move
      const newBoard = [...board];
      newBoard[cpuMove] = turn;
      setBoard(newBoard);

      // Check for winner after CPU move
      const gameResult = checkWinner(newBoard);
      if (gameResult) {
        setGameOver(true);
        setWinner(gameResult);
        setScores((prevScores) => ({
          ...prevScores,
          [gameResult]: prevScores[gameResult] + 1,
        }));
      } else {
        setTurn(turn === "x" ? "o" : "x");
      }
    }
    setIsCPUTurn(false);
  };

  // Handle CPU moves automatically
  useEffect(() => {
    if (gameMode.opponent === "cpu" && !gameOver) {
      const isCPUsTurn =
        (turn === "x" && gameMode.playerMark === "o") ||
        (turn === "o" && gameMode.playerMark === "x");

      if (isCPUsTurn && !isCPUTurn) {
        setIsCPUTurn(true);
        setTimeout(makeCPUMove, 100);
      }
    }
  }, [turn, gameOver, gameMode, isCPUTurn]);

  const handleBoxClick = (index) => {
    if (gameOver || board[index] || isCPUTurn) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setGameOver(true);
      setWinner(gameResult);
      setScores((prevScores) => ({
        ...prevScores,
        [gameResult]: prevScores[gameResult] + 1,
      }));
    } else {
      setTurn(turn === "x" ? "o" : "x");
    }
  };

  const handleQuit = () => {
    setGameOver(false);
    setWinner(null);
    setScores({ x: 0, o: 0, tie: 0 });
    setBoard(Array(9).fill(null));
    setScreen("menu");
    setGameMode({
      playerMark: null,
      opponent: null,
    });
  };

  return (
    <div className="game-container">
      <GameHeader
        turn={turn}
        winner={winner}
        onRestartClick={handleRestartMsg}
      />
      <GameBoard
        board={board}
        gameOver={gameOver}
        isCPUTurn={isCPUTurn}
        onBoxClick={handleBoxClick}
      />
      <ScoreBoard scores={scores} gameMode={gameMode} />
      {gameOver && (
        <GameOverMessage
          winner={winner}
          gameMode={gameMode}
          onQuit={handleQuit}
          onNextRound={handleNextRound}
        />
      )}
      {restart && (
        <RestartMessage
          onCancel={handleRestartCancel}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
