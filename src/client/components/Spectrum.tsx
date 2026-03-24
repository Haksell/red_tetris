// ============================================================================
// SPECTRUM COMPONENT — shows opponent's board as column heights
// ============================================================================
//
// PDF V.1: "Players can see their opponents' names and a 'spectrum' view
// of their fields. The spectrum shows the height of each column's highest block.
// This view updates in real-time."
//
// Renders a simplified view: 10 columns, each filled from the bottom
// to the height indicated by the spectrum array.
//
// TODO:
// - Props: spectrum (number[10]), playerName (string)
// - Render 10 columns with filled/empty cells based on height
// - Display playerName above/below the spectrum
// - Smaller scale than the main board
