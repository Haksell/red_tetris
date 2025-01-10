// src/components/Tetris.js
import React, { useState } from 'react'
import styled from 'styled-components'

// Components & Helpers
import Board from './Board'
import { createStage } from '../helpers/createStage'
import { checkCollision } from '../helpers/collision'
// Hooks
import { useInterval } from '../hooks/useInterval'
import { usePlayer } from '../hooks/usePlayer'

const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1f1f1f, #3c3c3c);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Tetris() {
  const [stage, setStage] = useState(createStage())
  const [dropTime, setDropTime] = useState(1000) // speed
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()

  // Move piece down
  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Merge the tetromino into the stage
      if (player.pos.y < 1) {
        // Game Over
        setGameOver(true)
        setDropTime(null)
        return
      }
      // Merge
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

      // Check for full rows and clear them
      const clearedStage = newStage.reduce((acc, row) => {
        // If every cell is merged (i.e., not 0)
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

  // Key events
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
        setDropTime(null) // quick drop
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

  // Reset the board & start the game
  const startGame = () => {
    // Reset everything
    setStage(createStage())
    resetPlayer()
    setGameOver(false)
    setDropTime(100)
  }

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        {gameOver ? (
          <div style={{ color: '#fff', marginBottom: '20px' }}>Game Over</div>
        ) : null}

        <Board stage={stage} />

        <button style={{ marginTop: '20px' }} onClick={startGame}>
          {gameOver ? 'Restart Game' : 'Start Game'}
        </button>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
