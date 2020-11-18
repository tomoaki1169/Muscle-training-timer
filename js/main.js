(function(){
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  // var timeToCountDown = 4 * 1000;
  var timeToCountDown = 0;
  var timerId;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
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
        updateTimer(timeLeft);
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }


  start.addEventListener('click', function() {
    startTime = Date.now();
    countDown();
  });

  min.addEventListener('click', function() {
    timeToCountDown += 60 * 1000;
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click', function() {
    timeToCountDown += 1000;
    updateTimer(timeToCountDown);
  });

  reset.addEventListener('click', function() {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });
})();