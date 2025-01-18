import React, { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useInterval'

const COLS = 10
const ROWS = 20

const TETROMINOS = [
  {
    // I
    rotations: [
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
    ],
    color: 'bg-cyan-400',
  },
  {
    // J
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-orange-400',
  },
  {
    // L
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-blue-400',
  },
  {
    // O
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-yellow-400',
  },
  {
    // S
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-red-400',
  },
  {
    // T
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-purple-400',
  },
  {
    // Z
    rotations: [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
      ],
    ],
    color: 'bg-green-400',
  },
]

// Utility function to create an empty board
const createEmptyBoard = () => {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
}

const Tetris: React.FC = () => {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentTetromino, setCurrentTetromino] = useState(TETROMINOS[0]) // TODO: rand
  const [rotation, setRotation] = useState(0)
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
        setRotation((x) => x + 1)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [position, currentTetromino, isGameOver])

  // Handle moving the tetromino
  const moveTetromino = (dx: number, dy: number) => {
    if (isGameOver) return

    const newPosition = { x: position.x + dx, y: position.y + dy }
    if (isValidMove(currentTetromino.rotations[rotation % 4], newPosition)) {
      setPosition(newPosition)
    }
  }

  // Validate if tetromino is in a valid position
  const isValidMove = (shape: number[][], position: { x: number; y: number }) => {
    return shape.every((row, rIdx) =>
      row.every((cell, cIdx) => {
        const newX = position.x + cIdx
        const newY = position.y + rIdx
        return (
          cell === 0 ||
          (newX >= 0 && newX < COLS && newY < ROWS && board[newY][newX] === 0)
        )
      }),
    )
  }

  // Place the tetromino on the board when it reaches the bottom
  const placeTetromino = () => {
    const newBoard = [...board]
    currentTetromino.rotations[rotation % 4].forEach((row, rIdx) => {
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
    let newBoard = board.filter((row) => row.some((cell) => cell === 0)) // Keep non-full rows
    const clearedLines = ROWS - newBoard.length
    newBoard = [...Array(clearedLines).fill(Array(COLS).fill(0)), ...newBoard] // Add empty rows at the top
    setBoard(newBoard)
    if (clearedLines > 0) {
      // You can track score here by adding clearedLines
    }
  }

  // Handle game over
  const checkGameOver = () => {
    if (board[0].some((cell) => cell !== 0)) {
      setIsGameOver(true)
    }
  }

  useInterval(() => {
    if (isGameOver) return
    const nextY = position.y + 1
    if (
      isValidMove(currentTetromino.rotations[rotation % 4], { x: position.x, y: nextY })
    ) {
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
              className={`absolute w-8 h-8 ${
                cell ? currentTetromino.color : 'bg-gray-900'
              }`}
              style={{
                left: `${colIdx * 30}px`,
                top: `${rowIdx * 30}px`,
              }}
            />
          )),
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
