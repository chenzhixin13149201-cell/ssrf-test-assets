fetch('http://169.254.169.254/latest/meta-data/').then(r=>r.text()).then(t=>{
  document.getElementById('r2').textContent='IMDS:'+t;
}).catch(e=>{
  document.getElementById('r2').textContent='ERR:'+e.message;
});
