(function(){
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  var timeToCountDown = 4 * 1000;
  var timerId;

  function updataTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    m = ('0' + m).slice(-2);
    m = ('0' + m).slice(-2);
    m = ('00' + m).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown() {
    timerId = setTimeout(function() {
      var elapsedTime = 
      timeLeft = timeToCountDown - (Date.now() - startTime);
      // console.log(timeLeft);
      if (timeLeft < 0) {
        clearTimeout(timerId);
        timeLeft = 0;
        timeToCountDown = 0;
        updataTimer(timeLeft);
        return;
      }
      updataTimer(timeLeft)
      countDown();
    }, 10);
  }


  start.addEventListener('click', function() {
    startTime = Date.now();
    countDown();
  });
}) ();