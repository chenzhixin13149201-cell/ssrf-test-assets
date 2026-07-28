var targets=['http://127.0.0.1:8080/','http://127.0.0.1:9090/','http://localhost:3000/',
'http://172.17.0.1/','http://10.0.0.1/','http://192.168.1.1/'];
var out='';
targets.forEach(function(t,i){
  var x=new XMLHttpRequest();
  x.open('GET',t,false);
  try{x.send();out+=i+':OK('+x.status+')|';}
  catch(e){out+=i+':ERR|';}
});
document.getElementById('r7').textContent=out;
