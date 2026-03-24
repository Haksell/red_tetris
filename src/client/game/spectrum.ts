// ============================================================================
// SPECTRUM COMPUTATION — pure function, NO `this`
// ============================================================================
//
// PDF V.1: "Players can see their opponents' names and a 'spectrum' view
// of their fields. The spectrum shows the height of each column's highest block.
// This view updates in real-time."
//
// TODO:
//
// computeSpectrum(board: Board): Spectrum
//   - For each of the 10 columns, find the highest occupied row
//   - Return an array of 10 numbers representing filled height from bottom
//   - Example: if column 3 has its highest block at row 15 (from top),
//     the spectrum value is 20 - 15 = 5
