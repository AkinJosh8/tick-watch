let stopwatchInterval
    let stopwatchTime = 0;
    
    const stopwatchDisplay = document.getElementById('stopwatch');

    function formatTime(t) {
      const hrs = Math.floor(t / 3600);
      const mins = Math.floor((t % 3600) / 60);
      const secs = t % 60;
      return (
        (hrs < 10 ? '0' + hrs : hrs) +
        ':' +
        (mins < 10 ? '0' + mins : mins) +
        ':' +
        (secs < 10 ? '0' + secs : secs)
      );
    }
    function startStopwatch() {
      if (stopwatchInterval) return; // already running
      stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        stopwatchDisplay.textContent = formatTime(stopwatchTime);
      }, 1000);
    }
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchInterval = null;
    }
    function resetStopwatch() {
      stopStopwatch();
      stopwatchTime = 0;
      stopwatchDisplay.textContent = '00:00:00';
    }