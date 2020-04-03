var Time = setInterval(myTimer, 0);
function myTimer() {
  var d = new Date();
  document.getElementById("display").innerHTML = d.toLocaleTimeString();
}