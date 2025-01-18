import React from 'react'
import Cell from './Cell'

interface BoardProps {
  stage: [number, string][][]
}

const Board: React.FC<BoardProps> = ({ stage }) => {
  const width = stage[0].length // 10
  const height = stage.length // 20

  return (
    <div
      className={`
        grid
        gap-[1px] 
        border-2 
        border-gray-800 
        bg-gray-900
        w-[25vw] 
        max-w-[400px]
      `}
      style={{
        gridTemplateRows: `repeat(${height}, calc(25vw / ${width}))`,
        gridTemplateColumns: `repeat(${width}, 1fr)`,
      }}
    >
      {stage.map((row, y) =>
        row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell[0]} />),
      )}
    </div>
  )
}

export default Board
