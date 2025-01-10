// src/components/Board.js
import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 25vw;
  max-width: 400px;
  background: #111;
`

function Board({ stage }) {
  return (
    <StyledBoard width={stage[0].length} height={stage.length}>
      {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledBoard>
  )
}

export default Board
