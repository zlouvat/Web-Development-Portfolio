import { useState } from "react";
import { ChessGame } from "./components/Chess";
import { TicTacToe } from "./components/TicTacToe";

type GameType = "none" | "chess" | "tictactoe";

function App() {
  const [currentGame, setCurrentGame] = useState<GameType>("none");

  const games = [
    {
      id: "chess",
      name: "Chess",
      description: "Play chess against an AI opponent",
      icon: "♟️",
      color: "#4F46E5", // Indigo
    },
    {
      id: "tictactoe",
      name: "Tic-Tac-Toe",
      description: "Classic X and O game against the computer",
      icon: "⭕",
      color: "#EC4899", // Pink
    },
    // Add more games here in the future
  ];

  function handleGameSelect(gameType: GameType) {
    setCurrentGame(gameType);
  }

  function handleBackToMenu() {
    setCurrentGame("none");
  }

  // Render the current game
  const renderGame = () => {
    switch (currentGame) {
      case "chess":
        return <ChessGame />;
      case "tictactoe":
        return <TicTacToe />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-[#5E81AC] dark:bg-[#4C566A] py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Game Center</h1>

          {currentGame === "none" && (
            <div className="flex flex-wrap justify-center gap-8">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => handleGameSelect(game.id as GameType)}
                  className={`flex items-center gap-4 px-10 py-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-white text-lg`}
                  style={{ backgroundColor: game.color }}
                >
                  <span className="text-5xl">{game.icon}</span>
                  <span className="font-medium text-2xl">{game.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {currentGame !== "none" && (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center">
            <button
              onClick={handleBackToMenu}
              className="flex items-center px-4 py-2 bg-[#5E81AC] hover:bg-[#81A1C1] text-white rounded-lg transition-colors shadow-md"
            >
              <span className="mr-2">←</span>
              <span>Back to games</span>
            </button>
            <h2 className="text-2xl font-semibold ml-4">
              {games.find((g) => g.id === currentGame)?.name}
            </h2>
          </div>

          <div className="bg-white dark:bg-[#3B4252] rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            {renderGame()}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
