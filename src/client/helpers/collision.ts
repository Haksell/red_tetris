export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on a tetromino cell
      if (player.tetromino[y][x] !== '0') {
        if (
          // 2. Check we're within stage height
          !stage[y + player.pos.y + moveY] ||
          // 3. Check we're within stage width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check if the cell is set to 'merged'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
  return false
}
