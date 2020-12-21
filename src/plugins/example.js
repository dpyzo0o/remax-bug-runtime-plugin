const path = require('path')

const example = options => {
  return {
    registerRuntimePlugin() {
      return path.resolve(__dirname, './runtime.js')
    },
  }
}

module.exports = example
