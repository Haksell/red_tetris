// ============================================================================
// GAME PAGE — /:room/:playerName
// ============================================================================
//
// PDF V.2.1: "Players join games via a URL like:
// http://<server_name_or_ip>:<port>/<room>/<player_name>"
//
// This page is the main game view. When it mounts:
// 1. Extract room and playerName from URL params (useParams)
// 2. Connect to socket.io server
// 3. Emit JOIN_ROOM with { room, playerName }
// 4. Render the game UI
//
// Layout (use CSS grid or flexbox, NO tables per PDF IV):
// ┌──────────────────────────────────────────┐
// │  Opponents (spectrums)  │  Your Board    │
// │  ┌─────┐ ┌─────┐       │  ┌──────────┐  │
// │  │spec1│ │spec2│ ...    │  │  10x20   │  │
// │  └─────┘ └─────┘       │  │  grid    │  │
// │                         │  └──────────┘  │
// │                         │  Next piece    │
// └──────────────────────────────────────────┘
//
// PDF V.1: "Players can see their opponents' names and a 'spectrum' view
// of their fields. The spectrum shows the height of each column's highest
// block. This view updates in real-time."
//
// PDF V.2.1: "The first player to join becomes the host and controls when
// to start or restart the game." => Show a "Start Game" button if isHost.
//
// TODO:
// - useParams() to get room and playerName
// - useSocket(room, playerName) hook to connect
// - useGameState() to get board, piece, opponents, status
// - useKeyboard() to handle inputs
// - Render <Board />, <OpponentList />, <NextPiece />
// - Conditional "Start Game" button for host
// - Game over / winner overlay
