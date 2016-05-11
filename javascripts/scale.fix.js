var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function calcBday(e) {
  var birth = Date.parse(document.getElementById("bday").value);
  var bday = new Date( birth + 633.7 * 86400000 );
  for (i = 0; i < 40; i++) {
    console.log(bday);
    bday = new Date( bday.getTime() + 633.7 * 86400000 ) ;
  }
}
