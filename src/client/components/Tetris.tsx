import React, { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useInterval'

// Define the board dimensions
const COLS = 10
const ROWS = 20
const BOARD_WIDTH = COLS * 30 // 30px per block
const BOARD_HEIGHT = ROWS * 30 // 30px per block

// Define Tetrimino shapes
const TETROMINOS = [
  {
    shape: [
      [1, 1, 1, 1], // I
    ],
    color: 'bg-cyan-400',
  },
  {
    shape: [
      [1, 1, 1], // T
      [0, 1, 0],
    ],
    color: 'bg-purple-400',
  },
  {
    shape: [
      [1, 1], // O
      [1, 1],
    ],
    color: 'bg-yellow-400',
  },
  {
    shape: [
      [1, 1, 0], // L
      [0, 1, 1],
    ],
    color: 'bg-orange-400',
  },
  {
    shape: [
      [0, 1, 1], // J
      [1, 1, 0],
    ],
    color: 'bg-blue-400',
  },
  {
    shape: [
      [1, 1, 0], // S
      [0, 1, 1],
    ],
    color: 'bg-green-400',
  },
  {
    shape: [
      [0, 1, 1], // Z
      [1, 1, 0],
    ],
    color: 'bg-red-400',
  },
]

// Utility function to create an empty board
const createEmptyBoard = () => {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
}

const Tetris: React.FC = () => {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentTetromino, setCurrentTetromino] = useState(TETROMINOS[0])
  const [position, setPosition] = useState({ x: 3, y: 0 }) // Starting position
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
	const handleKeydown = (e: KeyboardEvent) => {
	  if (e.key === 'ArrowLeft') {
		moveTetromino(-1, 0)
	  }
	  if (e.key === 'ArrowRight') {
		moveTetromino(1, 0)
	  }
	  if (e.key === 'ArrowDown') {
		moveTetromino(0, 1)
	  }
	  if (e.key === 'ArrowUp') {
		rotateTetromino()
	  }
	}
	
	window.addEventListener('keydown', handleKeydown)
	return () => window.removeEventListener('keydown', handleKeydown)
  }, [position, currentTetromino, isGameOver] )
  

  // Handle moving the tetromino
  const moveTetromino = (dx: number, dy: number) => {
    if (isGameOver) return

    const newPosition = { x: position.x + dx, y: position.y + dy }
    if (isValidMove(currentTetromino.shape, newPosition)) {
      setPosition(newPosition)
    }
  }

  const rotateMatrix = (matrix: number[][]): number[][] => {
	return matrix[0].map((_, index) => matrix.map(row => row[index])).reverse()
  }
  

  const rotateTetromino = () => {
    if (isGameOver) return

    const rotatedShape = rotateMatrix(currentTetromino.shape)
    if (isValidMove(rotatedShape, position)) {
      setCurrentTetromino({ ...currentTetromino, shape: rotatedShape })
    }
  }

  // Validate if tetromino is in a valid position
  const isValidMove = (shape: number[][], position: { x: number, y: number }) => {
    return shape.every((row, rIdx) =>
      row.every((cell, cIdx) => {
        const newX = position.x + cIdx
        const newY = position.y + rIdx
        return (
          cell === 0 ||
          (newX >= 0 && newX < COLS && newY < ROWS && board[newY][newX] === 0)
        )
      })
    )
  }

  // Place the tetromino on the board when it reaches the bottom
  const placeTetromino = () => {
    const newBoard = [...board]
    currentTetromino.shape.forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell !== 0) {
          const newX = position.x + cIdx
          const newY = position.y + rIdx
          newBoard[newY][newX] = 1
        }
      })
    })
    setBoard(newBoard)
    checkLines()
    setPosition({ x: 3, y: 0 }) // Reset position
    setCurrentTetromino(TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)])
  }

  const checkLines = () => {
    let newBoard = board.filter(row => row.some(cell => cell === 0)) // Keep non-full rows
    const clearedLines = ROWS - newBoard.length
    newBoard = [...Array(clearedLines).fill(Array(COLS).fill(0)), ...newBoard] // Add empty rows at the top
    setBoard(newBoard)
    if (clearedLines > 0) {
      // You can track score here by adding clearedLines
    }
  }

  // Handle game over
  const checkGameOver = () => {
    if (board[0].some(cell => cell !== 0)) {
      setIsGameOver(true)
    }
  }

  useInterval(() => {
    if (isGameOver) return
    const nextY = position.y + 1
    if (isValidMove(currentTetromino.shape, { x: position.x, y: nextY })) {
      setPosition({ x: position.x, y: nextY })
    } else {
      placeTetromino()
      checkGameOver()
    }
  }, 500) // Game speed: 500ms

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative w-[300px] h-[600px] border-2 border-gray-900 bg-gray-800">
        {board.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              className={`absolute w-8 h-8 ${cell ? currentTetromino.color : 'bg-gray-900'}`}
              style={{
                left: `${colIdx * 30}px`,
                top: `${rowIdx * 30}px`,
              }}
            />
          ))
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
