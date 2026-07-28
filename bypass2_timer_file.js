setTimeout(function(){
  var r=document.getElementById('out');
  var x=new XMLHttpRequest();
  x.open('GET','file:///etc/hostname',false);
  try{x.send();r.textContent='HOST:'+x.responseText;}
  catch(e){r.textContent='HOST_ERR:'+e.message;}
},2500);
