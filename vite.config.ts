import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/*

Excerpts from the subject:
- The browser loads index.html, which includes a reference to bundle.js containing the full
  application.
- The server runs an asynchronous loop handling events via socket.io. It must also serve
  index.html, bundle.js, and any static assets via HTTP.

By default, Rolldown (Vite's bundler) adds a hash to the bundle filenames to make caching easy:

$ npm run build && tree dist
dist
├── assets
│   ├── index-BVgk9x-J.js
│   └── index-BxCiNsbW.css
├── favicon.svg
└── index.html

Additionally, Rolldown has automatic code splitting when the application gets bigger.
Disabling it is a hack to respect the subject, not a desirable solution.

*/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // build: {
  //   rolldownOptions: {
  //     output: {
  //       entryFileNames: `assets/bundle.js`,
  //       assetFileNames: `assets/[name].[ext]`,
  //       codeSplitting: false,
  //     },
  //   },
  // },
})
