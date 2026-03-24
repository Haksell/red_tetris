// ============================================================================
// PIECE LOGIC — pure functions, NO `this`
// ============================================================================
//
// PDF IV: "The game logic handling the board and pieces must be implemented
// using pure functions."
//
// Uses TETRIMINOS from shared/constants.ts for shape definitions.
//
// TODO:
//
// getShape(type: TetriminoType, rotation: number): number[][]
//   - Returns the shape matrix for a given type and rotation state
//
// rotatePiece(piece: PieceData): PieceData
//   - Returns a new PieceData with rotation incremented (mod 4)
//   - Does NOT check collisions (that's collision.ts's job)
//
// getSpawnPosition(type: TetriminoType): Position
//   - PDF V.2: "Each player in the same game must receive the same pieces
//     in the same positions and coordinates."
//   - Center the piece horizontally on the 10-wide board
//   - Position at the very top (y = 0 or just above visible area)
