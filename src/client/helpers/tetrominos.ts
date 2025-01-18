interface Tetromino {
  shape: string[][] // 2D array representing the Tetromino's shape
  color: string // TODO: RGB interface
}

export const TETROMINOS: { [key: string]: Tetromino } = {
  0: {
    shape: [['0']],
    color: '0, 0, 0', // Empty / no color
  },
  I: {
    shape: [['I', 'I', 'I', 'I']],
    color: '80, 227, 230', // Light teal
  },
  J: {
    shape: [
      ['0', 'J', '0'],
      ['0', 'J', '0'],
      ['J', 'J', '0'],
    ],
    color: '36, 95, 223', // Blue
  },
  L: {
    shape: [
      ['0', 'L', '0'],
      ['0', 'L', '0'],
      ['0', 'L', 'L'],
    ],
    color: '223, 173, 36', // Orange
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '223, 217, 36', // Yellow
  },
  S: {
    shape: [
      ['0', 'S', 'S'],
      ['S', 'S', '0'],
      ['0', '0', '0'],
    ],
    color: '48, 211, 56', // Green
  },
  T: {
    shape: [
      ['0', 'T', '0'],
      ['T', 'T', 'T'],
      ['0', '0', '0'],
    ],
    color: '132, 61, 198', // Purple
  },
  Z: {
    shape: [
      ['Z', 'Z', '0'],
      ['0', 'Z', 'Z'],
      ['0', '0', '0'],
    ],
    color: '227, 78, 78', // Red
  },
}

/**
 * Returns a random Tetromino from the TETROMINOS list.
 */
export const randomTetromino = (): Tetromino => {
  const tetrominos = 'IJLOSTZ'
  const rand = tetrominos[Math.floor(Math.random() * tetrominos.length)]
  return TETROMINOS[rand]
}
