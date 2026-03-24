// ============================================================================
// useGameState HOOK — reads game state from Redux store
// ============================================================================
//
// Convenience hook that selects relevant state slices:
// - board, currentPiece, nextPiece
// - opponents (with spectrums)
// - gameStatus (waiting | playing | ended)
// - isHost, winner
//
// TODO:
// - const useGameState = () => useSelector(selectGameState)
// - Return typed game state object
