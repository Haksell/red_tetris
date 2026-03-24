// ============================================================================
// CELL COMPONENT — a single cell in the Tetris grid
// ============================================================================
//
// PDF IV: "Prohibited: Canvas, SVG." => Use a styled <div>.
//
// Renders a colored div based on cell state:
// - Empty (0): dark/transparent background
// - Piece color (string): colored background matching the tetrimino
// - Penalty: distinct style (e.g. gray, striped)
//
// TODO:
// - Props: color (Cell type from shared/types)
// - Return a <div> with appropriate Tailwind background color class
// - Aspect-ratio 1:1 to keep cells square
