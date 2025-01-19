import React, { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import TETROMINOS from '../helpers/tetrominos'

const COLS = 10
const ROWS = 20

const STARTING_POSITION = { x: 3, y: -2 }

// Create an empty 2D array for the board
const createEmptyBoard = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0))

// Merge the board and the currently falling piece
const getMergedBoard = (
  board: number[][],
  tetrominoShape: number[][],
  position: { x: number; y: number },
) => {
  // Clone the board so we don't mutate the original
  const merged = board.map((row) => [...row])
  // Overlay the current tetromino
  tetrominoShape.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (cell !== 0) {
        const newX = position.x + cIdx
        const newY = position.y + rIdx
        // Only place if within visible board
        if (newY >= 0) {
          merged[newY][newX] = 2 // 2 indicates the falling piece
        }
      }
    })
  })
  return merged
}

const Tetris: React.FC = () => {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentTetromino, setCurrentTetromino] = useState(TETROMINOS[0]) // TODO: pick random
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState(STARTING_POSITION)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveTetromino(-1, 0)
      if (e.key === 'ArrowRight') moveTetromino(1, 0)
      if (e.key === 'ArrowDown') moveTetromino(0, 1)
      if (e.key === 'ArrowUp') setRotation((r) => r + 1)
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [position, currentTetromino, isGameOver])

  const moveTetromino = (dx: number, dy: number) => {
    if (isGameOver) return
    const newPosition = { x: position.x + dx, y: position.y + dy }
    if (isValidMove(currentTetromino.rotations[rotation % 4], newPosition)) {
      setPosition(newPosition)
    }
  }

  const isValidMove = (shape: number[][], pos: { x: number; y: number }) => {
    return shape.every((row, rIdx) =>
      row.every((cell, cIdx) => {
        if (cell === 0) return true
        const newX = pos.x + cIdx
        const newY = pos.y + rIdx
        // Check boundaries and collision
        if (
          newX < 0 ||
          newX >= COLS ||
          newY >= ROWS ||
          (newY >= 0 && board[newY][newX] === 1)
        ) {
          return false
        }
        return true
      }),
    )
  }

  // Place the tetromino on the board when it can’t move further
  const placeTetromino = () => {
    const newBoard = board.map((row) => [...row])
    currentTetromino.rotations[rotation % 4].forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell !== 0) {
          const newX = position.x + cIdx
          const newY = position.y + rIdx
          if (newY >= 0) {
            newBoard[newY][newX] = 1 // 1 indicates placed block
          }
        }
      })
    })
    setBoard(newBoard)
    checkLines(newBoard)
    // Reset piece
    setPosition(STARTING_POSITION)
    setRotation(0)
    setCurrentTetromino(TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)])
  }

  const checkLines = (newBoard: number[][]) => {
    let filledRows = 0
    // Remove fully filled rows
    const updatedBoard = newBoard.filter((row) => {
      const isFull = row.every((cell) => cell !== 0)
      if (isFull) filledRows++
      return !isFull
    })

    // Add empty rows at top
    while (updatedBoard.length < ROWS) {
      updatedBoard.unshift(Array(COLS).fill(0))
    }
    setBoard(updatedBoard)
    // If you want to track scores, do so based on `filledRows`
  }

  const checkGameOver = (newBoard: number[][]) => {
    // If top row has a block, game over
    if (newBoard[0].some((cell) => cell !== 0)) {
      setIsGameOver(true)
    }
  }

  // Drop piece every 500ms
  useInterval(() => {
    if (isGameOver) return
    const nextY = position.y + 1
    if (
      isValidMove(currentTetromino.rotations[rotation % 4], { x: position.x, y: nextY })
    ) {
      setPosition({ x: position.x, y: nextY })
    } else {
      placeTetromino()
      checkGameOver(board)
    }
  }, 500)

  // Prepare the merged board that shows both placed cells and the active piece
  const mergedBoard = getMergedBoard(
    board,
    currentTetromino.rotations[rotation % 4],
    position,
  )

  return (
    <div className="flex flex-col items-center justify-center mt-10 relative">
      <div className="relative w-full max-w-[300px] aspect-[10/20] border-2 border-gray-900 bg-gray-800 grid grid-rows-20 grid-cols-10">
        {mergedBoard.map((row, rowIdx) =>
          row.map((cell, colIdx) => {
            // Decide color for each cell
            let cellColor = 'bg-gray-900' // empty
            if (cell === 1) {
              // placed/landed cells
              cellColor = 'bg-blue-600'
            } else if (cell === 2) {
              // current/falling piece
              cellColor = currentTetromino.color
            }

            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`${cellColor} border border-gray-700`}
              />
            )
          }),
        )}
      </div>

      {isGameOver && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl">Game Over</h2>
        </div>
      )}
    </div>
  )
}

export default Tetris
