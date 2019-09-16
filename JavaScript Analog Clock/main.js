function runClock(){

  var curDate = new Date();
  var hour = curDate.getHours() % 12;
  var min = curDate.getMinutes();
  var sec = curDate.getSeconds();
  var ms = curDate.getMilliseconds();

  var clock = document.querySelector("div.clock");
  var hourHand = clock.querySelector("div.hour");
  var minHand = clock.querySelector("div.minute");
  var secHand = clock.querySelector("div.second");

  var hourRotation = 30 * hour + 0.5 * min;
  var minRotation = 6 * min + 0.1 * sec;
  var secRotation = 6 * sec + .006 * ms;

  hourHand.style.transform = "rotate(" + hourRotation + "deg)";
  minHand.style.transform = "rotate(" + minRotation + "deg)";
  secHand.style.transform = "rotate(" + secRotation + "deg)";


  requestAnimationFrame(runClock);

}

runClock();
