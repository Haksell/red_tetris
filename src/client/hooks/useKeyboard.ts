// ============================================================================
// useKeyboard HOOK — captures keyboard input for piece movement
// ============================================================================
//
// PDF V.1.1 — Piece Movement:
// "Left/Right arrows: Move piece horizontally."
// "Up arrow: Rotate piece."
// "Down arrow: Soft drop."
// "Spacebar: Hard drop to fill a gap."
//
// Responsibilities:
// - Listen to keydown events on the window
// - Map arrow keys + spacebar to move actions
// - Call emit(PLAYER_MOVE, { action }) via socket
// - Only active when gameStatus === "playing"
//
// PDF IV: "Client-side code must be written without using the `this` keyword."
//
// TODO:
// - const useKeyboard = (emit: EmitFn, gameStatus: string) => { ... }
// - useEffect with addEventListener("keydown", handler)
// - Map: ArrowLeft->left, ArrowRight->right, ArrowUp->rotate,
//         ArrowDown->soft_drop, Space->hard_drop
// - Cleanup listener on unmount
