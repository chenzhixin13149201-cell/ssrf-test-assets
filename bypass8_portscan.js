setTimeout(function(){
  var r=document.getElementById('out');
  var out='';
  var targets=[
    ['127.0.0.1',8080],['127.0.0.1',9090],['127.0.0.1',3000],
    ['127.0.0.1',6379],['127.0.0.1',27017],['127.0.0.1',5432],
    ['127.0.0.1',80],['127.0.0.1',443],['172.17.0.1',80],['10.0.0.1',80]
  ];
  targets.forEach(function(t){
    var x=new XMLHttpRequest();
    x.open('GET','http://'+t[0]+':'+t[1]+'/',false);
    x.timeout=2000;
    try{x.send();out+=t[0]+':'+t[1]+'='+x.status+'|';}
    catch(e){out+=t[0]+':'+t[1]+'=X|';}
  });
  r.textContent=out;
},2500);
