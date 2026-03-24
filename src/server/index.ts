// ============================================================================
// SERVER ENTRY POINT
// ============================================================================
//
// PDF V.2.2: "The server runs an asynchronous loop handling events via socket.io.
// It must also serve index.html, bundle.js, and any static assets via HTTP."
//
// PDF V.2: "The game architecture follows a client/server model.
// Clients run in modern browsers, while the server runs on Node.js.
// Communication uses HTTP and socket.io for bidirectional events."
//
// Responsibilities:
// 1. Create an HTTP server (Node.js http module)
// 2. Serve static files from dist/client/ (Vite build output: index.html + bundle.js)
// 3. Attach socket.io to the HTTP server
// 4. Register socket event handlers from ./socket/handlers.ts
// 5. Listen on PORT
//
// In dev: Vite dev server runs on :5173, socket.io server runs on :3000.
//         Vite proxies /socket.io to :3000 (see vite.config.ts).
// In prod: This single server serves both static files and socket.io.
//
// TODO:
// - const app = express() or http.createServer()
// - Serve static files: express.static("dist/client") or manual fs serving
// - const io = new Server(httpServer, { cors: ... })
// - io.on("connection", (socket) => registerHandlers(socket, gameManager))
// - httpServer.listen(PORT)
