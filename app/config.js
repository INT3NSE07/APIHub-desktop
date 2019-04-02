const Config = require('electron-store')

module.exports = new Config({
  defaults: {
    lastWindowState: {
      width: 800,
      height: 600
    },
    lastURL: 'https://apihub.cf',
    shortcut: {
      toggleApp: null
    },
    mode: 'dark'
  }
})
