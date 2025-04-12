import { useState, useCallback, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export function ChessGame() {
  const [game, setGame] = useState<Chess>(new Chess());
  const [boardWidth, setBoardWidth] = useState(400);
  // Player is fixed as white, AI as black
  const playerColor = "w";

  // Resize board based on window size
  useEffect(() => {
    function handleResize() {
      const width = Math.min(
        400,
        window.innerWidth > 500
          ? window.innerWidth * 0.4
          : window.innerWidth * 0.9
      );
      setBoardWidth(width);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Make AI move whenever it's black's turn
  useEffect(() => {
    // If it's black's turn and the game is not over, make a move
    if (game.turn() === "b" && !game.isGameOver()) {
      // Add a small delay to make it feel more natural
      const timeoutId = setTimeout(makeRandomMove, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [game]); // Run this effect whenever the game state changes

  // Reset the game
  function resetGame() {
    const newGame = new Chess();
    setGame(newGame);
  }

  // Make a move on the board
  function makeAMove(move: any) {
    const gameCopy = new Chess(game.fen());

    try {
      const result = gameCopy.move(move);
      setGame(gameCopy);
      return result;
    } catch (error) {
      console.error("Invalid move:", move, error);
      return null;
    }
  }

  // Handle piece drop (player's move)
  function onDrop(sourceSquare: string, targetSquare: string) {
    // Only allow moves when it's the player's turn (white)
    if (game.turn() !== playerColor) return false;

    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for simplicity
    });

    // If the move was illegal, return false
    if (move === null) return false;

    return true;
    // No need to call makeRandomMove here as the useEffect will handle it
  }

  // Make a random move for AI
  const makeRandomMove = useCallback(() => {
    if (game.isGameOver() || game.isDraw()) return;

    try {
      const possibleMoves = game.moves();
      if (possibleMoves.length === 0) return;

      // Select a random move
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIndex];
      console.log("AI is making move:", move);
      makeAMove(move);
    } catch (error) {
      console.error("Error making AI move:", error);
    }
  }, [game]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-md">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={boardWidth}
          boardOrientation="white"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={resetGame}
          className="inline-flex h-10 items-center justify-center rounded-md bg-[hsl(var(--primary))] px-4 py-2 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary))]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
        >
          Reset Game
        </button>
        {game.isGameOver() && (
          <div className="text-lg font-semibold text-[hsl(var(--foreground))]">
            Game over!
            {game.isCheckmate()
              ? ` ${game.turn() === "w" ? "Black" : "White"} wins by checkmate.`
              : game.isDraw()
              ? " Draw."
              : ""}
          </div>
        )}
      </div>
      <div className="text-sm text-[hsl(var(--foreground))]">
        You play as White
        {game.turn() === "w" ? " (Your turn)" : " (Computer's turn)"}
      </div>
    </div>
  );
}
