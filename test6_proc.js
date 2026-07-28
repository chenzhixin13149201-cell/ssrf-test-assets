var paths=['/proc/self/environ','/proc/self/cmdline','/etc/passwd','/proc/net/tcp'];
var out='';
paths.forEach(function(p){
  var x=new XMLHttpRequest();
  x.open('GET','file://'+p,false);
  try{x.send();out+=p+'='+x.responseText.substring(0,100)+'|';}
  catch(e){out+=p+'=ERR:'+e.message+'|';}
});
document.getElementById('r6').textContent=out;
