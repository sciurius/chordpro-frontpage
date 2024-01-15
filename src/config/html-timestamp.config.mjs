import fs from 'fs-extra'
import pkg from '../../package.json' assert { type: "json" };
import consoleStamp from 'console-stamp';

const version = pkg.version;
const year = new Date().getFullYear()

consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgBlue'});
let action = 'Creating _timestamp.ejs'

var lastCompile = new Date();
var lastCompileISO = lastCompile.toISOString();
//
// Format to custom ISO 8601
//
lastCompile =
  lastCompile.getUTCFullYear() + '-' +
  String(lastCompile.getUTCMonth() + 1).padStart(2, '0') + '-' +
  String(lastCompile.getUTCDate()).padStart(2, '0') + ' ' +
  String(lastCompile.getUTCHours()).padStart(2, '0') + ':' +
  String(lastCompile.getUTCMinutes()).padStart(2, '0') +
  ':' + String(lastCompile.getUTCSeconds()).padStart(2, '0') +
  ' (UTC)';

//
// Create timestamp meta tag .ejs files
//
console.log('Begin::' + action)
try {
  fs.writeFile('./src/html/_timestamp.ejs', '<meta name="created" content="' + lastCompile + '">')
  fs.writeFile('./src/html/_timestamp-og.ejs', '<meta property="og:updated_time" content="' + lastCompileISO + '">')
  console.log('End::' + action)
} catch (error) {
  consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgRed'});
  console.log('Error::' + action + '\n' + error + '\n-------------------------------------------------------------------------------')
}
