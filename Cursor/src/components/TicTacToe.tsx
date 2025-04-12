import { useState, useEffect } from "react";

type Player = "X" | "O";
type Board = (Player | null)[];

export function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "draw" | null>(null);

  // Reset the game
  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }

  // Check for a winner
  const checkWinner = (board: Board): Player | "draw" | null => {
    // Winning patterns (indices)
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];

    // Check for winner
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player;
      }
    }

    // Check for draw
    if (board.every((square) => square !== null)) {
      return "draw";
    }

    return null;
  };

  // Handle square click
  const handleClick = (index: number) => {
    // Don't allow click if square is already filled or game is over
    if (board[index] || winner) return;

    // Update the board
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Switch player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // Computer move (simple AI)
  useEffect(() => {
    // Only make a move if it's O's turn and game is not over
    if (currentPlayer === "O" && !winner) {
      const timeoutId = setTimeout(() => {
        // Get available squares
        const emptySquares = board
          .map((square, index) => (square === null ? index : null))
          .filter((index) => index !== null) as number[];

        if (emptySquares.length > 0) {
          // Random move
          const randomIndex = Math.floor(Math.random() * emptySquares.length);
          const computerMove = emptySquares[randomIndex];

          // Update the board
          const newBoard = [...board];
          newBoard[computerMove] = "O";
          setBoard(newBoard);

          // Switch back to player
          setCurrentPlayer("X");
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentPlayer, board, winner]);

  // Check for winner after each move
  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
    }
  }, [board]);

  // Render a square
  const Square = ({ index }: { index: number }) => (
    <button
      className={`w-full h-full border-2 border-[#4C566A] rounded shadow-md text-4xl font-bold flex items-center justify-center bg-white dark:bg-[#3B4252]
                 ${
                   board[index] === "X"
                     ? "text-[#5E81AC]"
                     : board[index] === "O"
                     ? "text-[#BF616A]"
                     : ""
                 }
                 hover:bg-[#E5E9F0] dark:hover:bg-[#4C566A] transition-colors active:shadow-inner`}
      onClick={() => handleClick(index)}
      disabled={!!board[index] || !!winner}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg">
        {winner
          ? winner === "draw"
            ? "Game ended in a draw!"
            : `Player ${winner} wins!`
          : `Current player: ${currentPlayer}`}
      </div>

      <div
        className="grid bg-[#D8DEE9] dark:bg-[#434C5E] p-2 rounded-lg shadow-lg mb-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gridTemplateRows: "repeat(3, 80px)",
          gap: "5px",
        }}
      >
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Square key={index} index={index} />
          ))}
      </div>

      <button
        onClick={resetGame}
        className="px-4 py-2 bg-[#5E81AC] hover:bg-[#81A1C1] text-white rounded-md transition-colors shadow-md"
      >
        New Game
      </button>
    </div>
  );
}
