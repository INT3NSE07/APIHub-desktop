const { globalShortcut } = require('electron')
const config = require('./config')

exports.toggleGlobalShortcut = function({
  name,
  registered,
  accelerator,
  action
}) {
  if (registered) {
    globalShortcut.unregister(accelerator)
    config.delete(`shortcut.${name}`)
  } else {
    const ret = globalShortcut.register(accelerator, action)
    config.set(`shortcut.${name}`, accelerator)
    if (!ret) {
      console.error(`Failed to register ${accelerator}`)
    }
  }
}
