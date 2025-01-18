const params = {
  server: {
    host: '0.0.0.0',
    port: 3004,
    get url() {
      return `http://${this.host}:${this.port}`
    },
  },
}

module.exports = params

// TODO: params.ts
// const params = {
//   server: {
//     host: '0.0.0.0',
//     port: 3004,
//     get url() {
//       return `http://${this.host}:${this.port}`
//     },
//   },
// }

// export default params
