// src/hooks/usePlayer.js
import { useState, useCallback } from 'react'
import { randomTetromino, TETROMINOS } from '../helpers/tetrominos'
import { STAGE_WIDTH } from '../helpers/createStage'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  })

  const rotate = (matrix, dir) => {
    // Transpose rows & columns
    const rotatedTetro = matrix.map((_, idx) => matrix.map((col) => col[idx]))
    // Reverse each row if rotating clockwise or counterclockwise
    if (dir > 0) return rotatedTetro.map((row) => row.reverse())
    return rotatedTetro.reverse()
  }

  const playerRotate = (stage, dir, checkCollision) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player))
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

    // Check collision while rotating
    let offset = 1
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > clonedPlayer.tetromino[0].length) {
        // If we spin too far, revert rotation
        rotate(clonedPlayer.tetromino, -dir)
        clonedPlayer.pos.x = player.pos.x
        return
      }
    }

    setPlayer(clonedPlayer)
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate]
}
