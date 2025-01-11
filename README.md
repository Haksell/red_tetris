# red_tetris

## todo

- [ ] fix warnings
- [ ] install tailwind

## game

- [ ] `Player`, `Piece` and `Game` server-side classes
- [ ] terrain is 10 columns x 20 lines
- [ ] each player has his own playing field
- [ ] all players undergo the same series of pieces
- [ ] as soon as a player destroys lines on his ground, the opposing players receive n - 1 lines
- [ ] each player can graphically observe the list of his opponents (name) and the specter of their land.
- [ ] for each column, a spectrum indicates the first line occupied by a piece without providing any details about occupation of the following lines.
- [ ] piece animation
- [ ] the game takes the historical tetriminos and their principles of rotation
- [ ] there is no score, the last player of the game is the winner
- [ ] players should be able to play solo
- [ ] implement collisions
- [ ] implement arrow keys

## server

- [ ] management of games and players
- [ ] distribution of pieces for each game
- [ ] scattering of spectra
- [ ] `http://<server_name_or_ip>:<port>/<room>/<player_name>` (`admin_name`)
- [ ] The first to join a game, will be the person in charge, will have control of the game,
      he can launch it as he pleases. In the end, he will be the only one to be able to restart
      it. At the moment of starting, one of the remaining players will take this role. ????????
- [ ] a player can not join a game during the game
- [ ] several games can be organized simultaneously
- [ ] It offers an HTTP service (in addition to socket.io) whose only purpose is to provide,
      at the launch of the connection from the client, the files `index.html` and `bundle.js`, and
      some additional resources.

## client

- [ ] At the first request, the browser retrieves a file from the server `index.html` references a `"<script />"` tag to a file Javascript (`bundle.js`) which contains the entire code of the client application.
- [ ] The browser runs bundle.js and then there are no more exchanges of HTML files between server and client, the latter is totally standalone for graphical rendering and for application logic management. Only data will be exchanged with the server, bi-directional exchanges in our case are done via socket.io

## bonus

- [ ] scoring system during the game
- [ ] persistence of scores for each player
- [ ] several game modes (invisible parts, increased gravity...)

## push check

- [ ] no `this` except for subclasses of `Error`
- [ ] no `jQuery`
- [ ] no `canvas` (???)
- [ ] no `SVG`
- [ ] no direct DOM manipulation (???)
- [ ] unit tests must cover at least 70% of the statements
- [ ] unit tests must cover at least 70% of the functions
- [ ] unit tests must cover at least 70% of the lines
- [ ] unit tests must cover at least 50% of the branches
- [ ] no pushed .env, API keys...
