// ============================================================================
// BOARD COMPONENT — renders the player's 10x20 playing field
// ============================================================================
//
// PDF V.1: "Each field is 10 columns wide and 20 rows tall."
// PDF IV: "HTML must not use <TABLE /> elements. Layouts must use grid or flexbox."
// PDF IV: "Prohibited: Canvas, SVG."
//
// Renders:
// - A CSS grid of 10 columns x 20 rows
// - Each cell is a <Cell /> with a color (empty, piece color, or penalty)
// - The current falling piece is overlaid onto the board
//
// This component must be FUNCTIONAL (no `this`).
// PDF IV: "Client-side code must be written without using the `this` keyword."
//
// TODO:
// - Props: board (Board), currentPiece (PieceData) | null
// - Merge currentPiece onto board for display (pure function)
// - Render 10x20 grid of <Cell /> components
// - Use Tailwind CSS grid: grid-cols-10
