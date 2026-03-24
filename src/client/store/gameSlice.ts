// ============================================================================
// GAME SLICE — Redux state for the Tetris game
// ============================================================================
//
// PDF V.2.3: "Redux to manage application state."
//
// State shape:
// {
//   board: Board,           // 10x20 grid (client-side representation)
//   currentPiece: PieceData | null,
//   nextPiece: PieceData | null,
//   opponents: OpponentInfo[],
//   gameStatus: "waiting" | "playing" | "ended",
//   isHost: boolean,
//   winner: string | null,
// }
//
// Reducers / Actions:
// - updateGameState(payload: GameStatePayload) — full state sync from server
// - updateOpponents(payload: OpponentInfo[]) — spectrum updates
// - addPenaltyLines(payload: PenaltyPayload) — penalty from opponent
// - setGameOver(winner?: string)
// - resetGame()
//
// TODO:
// - createSlice({ name: "game", initialState, reducers })
// - Export actions and reducer
