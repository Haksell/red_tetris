// ============================================================================
// APP — React Router setup
// ============================================================================
//
// PDF V.2.1: "Players join games via a URL like:
// http://<server_name_or_ip>:<port>/<room>/<player_name>"
//
// PDF V.2.1: "Use appropriate routers such as BrowserRouter or MemoryRouter
// for URL handling."
//
// Routes:
//   /                    → Lobby page (room + player name form)
//   /:room/:playerName   → Game page
//
// TODO:
// - BrowserRouter with two routes
// - "/" renders <LobbyPage />
// - "/:room/:playerName" renders <GamePage />
