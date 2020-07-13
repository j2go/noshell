// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';

const terminal = new Terminal();
// Load WebLinksAddon on terminal, this is all that's needed to get web links
// working in the terminal.
terminal.open(document.getElementById('terminal'));
terminal.write('noshell yes')
// terminal.loadAddon(new WebLinksAddon());