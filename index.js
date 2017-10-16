var execSync = require('child_process').execSync
var opn = require('opn')


module.exports = function (url) {
  if (process.platform === 'darwin') {
    try {
      execSync('ps cax | grep "Google Chrome"')
      execSync('osascript openChrome.applescript "' + encodeURI(url) + '"', {
        cwd: __dirname,
        stdio: 'ignore',
      })
      return true
    } catch (err) {
      // ignore
    }
  }

  try {
    var options = { app: 'google chrome' }
    opn(url, options).catch(() => {}) // Prevent `unhandledRejection` error.
  } catch (err) {
    // ignore
  }
}
