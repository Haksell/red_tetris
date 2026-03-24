// ============================================================================
// PIECE CLASS (server-side, OOP)
// ============================================================================
//
// PDF IV: "The server-side code must follow an object-oriented approach using
// prototypes. At minimum, you should define classes for Player, Piece, and Game."
//
// PDF V.1: "The game will use the original Tetrimino shapes and rotation rules."
// (see shared/constants.ts for shape definitions)
//
// Responsibilities:
// - Store piece type (I, O, T, S, Z, J, L), current rotation, position {x, y}
// - Provide rotation logic (0 -> 1 -> 2 -> 3 -> 0)
// - Provide shape getter (returns the current rotation matrix from TETRIMINOS)
//
// PDF V.2: "Each player in the same game must receive the same pieces
// in the same positions and coordinates — even if at different times."
// => The Game class generates the sequence; Piece just holds one piece's state.
//
// TODO:
// - class Piece { type, rotation, pos }
// - rotate(): Piece (return new rotated state)
// - getShape(): number[][] (current rotation matrix)
// - static spawn(type: TetriminoType): Piece (centered at top of board)
