import React, { useState } from 'react'
import Board from './Board'
import { createStage } from '../helpers/createStage'
import { checkCollision } from '../helpers/collision'
import { useInterval } from '../hooks/useInterval'
import { usePlayer } from '../hooks/usePlayer'

function Tetris() {
  const [stage, setStage] = useState(createStage())
  const [dropTime, setDropTime] = useState(1000)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        // Game Over
        setGameOver(true)
        setDropTime(null)
        return
      }

      // Merge the tetromino into the stage
      const newStage = stage.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      )

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== '0') {
            newStage[y + player.pos.y][x + player.pos.x] = [value, 'merged']
          }
        })
      })

      // Check for full rows
      const clearedStage = newStage.reduce((acc, row) => {
        if (row.every((cell) => cell[0] !== 0)) {
          // Add an empty row at the top
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']))
        } else {
          acc.push(row)
        }
        return acc
      }, [])

      setStage(clearedStage)
      resetPlayer()
    }
  }

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false })
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        // Down arrow
        setDropTime(1000)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (gameOver) return
    switch (e.keyCode) {
      case 37: // Left
        movePlayer(-1)
        break
      case 39: // Right
        movePlayer(1)
        break
      case 40: // Down
        drop()
        setDropTime(null) // Quick drop
        break
      case 38: // Up
        playerRotate(stage, 1, checkCollision)
        break
      default:
        break
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  const startGame = () => {
    setStage(createStage())
    resetPlayer()
    setGameOver(false)
    setDropTime(1000)
  }

  return (
    <div
      className="
        w-screen 
        h-screen 
        bg-gradient-to-br 
        from-[#1f1f1f] 
        to-[#3c3c3c]
        flex 
        items-center 
        justify-center
      "
      role="button"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onKeyUp={keyUp}
    >
      <div className="flex flex-col items-center">
        {gameOver && <div className="text-white mb-5">Game Over</div>}

        <Board stage={stage} />

        <button
          className="mt-5 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
          onClick={startGame}
        >
          {gameOver ? 'Restart Game' : 'Start Game'}
        </button>
      </div>
    </div>
  )
}

export default Tetris
