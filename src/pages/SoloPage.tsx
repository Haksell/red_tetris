// https://tetris.fandom.com/wiki/Super_Rotation_System#Spawn_orientation_and_location
const TETROMINOS = {
  I: [
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
  J: [
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
  ],
  L: [
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
  ],
  O: [
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ],
  S: [
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  ],
  Z: [
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  ],
  T: [
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  ],
}

const CELL_SIZE = 32
const GRID_HEIGHT = 20
const GRID_WIDTH = 10

const EMPTY_COLOR = '#0f172a'
const COLORS: Record<string, string> = {
  I: '#22d3ee',
  T: '#a855f7',
}

const createGrid = () => {
  const grid = Array.from({ length: GRID_HEIGHT }, () =>
    Array.from({ length: GRID_WIDTH }, () => 'empty'),
  )

  grid[0][0] = 'I'
  grid[0][GRID_WIDTH - 1] = 'I'
  grid[GRID_HEIGHT - 1][0] = 'I'
  grid[GRID_HEIGHT - 1][GRID_WIDTH - 1] = 'I'

  grid[19][5] = 'T'
  grid[19][6] = 'T'
  grid[19][7] = 'T'
  grid[18][6] = 'T'

  return grid
}

const Cell: React.FC<{ type: string }> = ({ type }) => (
  <div
    className="rounded-sm transition-all duration-200"
    style={{
      width: CELL_SIZE,
      height: CELL_SIZE,
      backgroundColor: COLORS[type] ?? EMPTY_COLOR,
    }}
  />
)

const SoloPage: React.FC = () => {
  const grid = createGrid()

  return (
    <div className="flex-1 w-full flex items-center justify-center bg-slate-950">
      <div className="p-2 rounded-xl bg-slate-900 backdrop-blur-xl shadow-2xl border border-white/10">
        <div className="p-1 rounded-lg border border-white/10">
          <div
            className="grid bg-slate-900 p-2 rounded-md shadow-inner gap-0.5"
            style={{
              gridTemplateColumns: `repeat(${GRID_WIDTH}, ${CELL_SIZE}px)`,
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => <Cell key={`${rowIndex}-${colIndex}`} type={cell} />),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoloPage
