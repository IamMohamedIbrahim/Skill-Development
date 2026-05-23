angular.module('stopwatchApp', [])
.controller('StopwatchController', function($scope, $interval) {
  let timer;
  let seconds = 0;

  $scope.time = "00:00:00";

  function formatTime(sec) {
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec % 3600) / 60);
    let s = sec % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  }

  $scope.start = function() {
    if (!timer) {
      timer = $interval(function() {
        seconds++;
        $scope.time = formatTime(seconds);
      }, 1000);
    }
  };

  $scope.stop = function() {
    if (timer) {
      $interval.cancel(timer);
      timer = null;
    }
  };

  $scope.reset = function() {
    $scope.stop();
    seconds = 0;
    $scope.time = "00:00:00";
  };
});
