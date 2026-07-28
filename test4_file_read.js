var x=new XMLHttpRequest();
x.open('GET','file:///etc/hostname',false);
try{x.send();document.getElementById('r4').textContent='FILE:'+x.responseText;}
catch(e){document.getElementById('r4').textContent='FILEERR:'+e.message;}
