// Tests for board pure functions
//
// PDF V.2.5: "Unit tests must cover at least 70% of statements, functions,
// and lines, and at least 50% of branches."
//
// TODO:
// - Test createBoard() returns 20x10 empty grid
// - Test placePiece() locks piece into board correctly
// - Test clearLines() removes full rows and shifts above rows down
// - Test clearLines() returns correct linesCleared count
// - Test addPenaltyLines() pushes rows at bottom, shifts rest up
// - Test mergePieceOntoBoard() overlays piece for display
// - Test immutability: original board is never mutated
