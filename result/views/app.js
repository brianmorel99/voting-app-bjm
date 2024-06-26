var app = angular.module('plpoll', []);
var socket = io.connect();

var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');
var bg3 = document.getElementById('background-stats-3');

var piechart = document.getElementById('myChart');
var theChart

app.controller('statsCtrl', function($scope){
  $scope.aPercent = 33;
  $scope.bPercent = 33;
  $scope.cPercent = 33;

  var updateScores = function(){
    socket.on('scores', function (json) {
      data = JSON.parse(json);
      var a = parseInt(data.a || 0);
      var b = parseInt(data.b || 0);
      var c = parseInt(data.c || 0);
      var percentages = getPercentages(a, b, c);
      
      bg1.style.width = percentages.a + "%";
      bg2.style.width = percentages.b + "%";
      bg3.style.width = percentages.c + "%";

      if(theChart) {
        theChart.data.datasets[0].data = [percentages.a, percentages.b, percentages.c]
        theChart.update()
      }
      else
        theChart = new Chart(piechart, {
          type: 'pie',
          data: {
            labels: ['Arsenal', 'Liverpool', 'Manchester City'],
            datasets: [{
              label: 'Results',
              data: [percentages.a, percentages.b, percentages.c],
              backgroundColor: [
                'rgb(219, 0, 7)',
                'rgb(200, 16, 46)',
                'rgb(108, 171, 221)'
              ],
              borderWidth: 1
            }]
          },
          
        });
      
      $scope.$apply(function () {
        $scope.aPercent = percentages.a;
        $scope.bPercent = percentages.b;
        $scope.cPercent = percentages.c;
        $scope.aTotal = a;
        $scope.bTotal = b;
        $scope.cTotal = c;
        $scope.total = a + b + c;
      });
    });
  };

  var init = function(){
    document.body.style.opacity=1;
    updateScores();
  };
  socket.on('message',function(data){
    init();
  });
});

function getPercentages(a, b, c) {
  var result = {};

  if (a + b + c > 0) {
    result.a = Math.round(a / (a + b + c) * 100);
    result.b = Math.round(b / (a + b + c) * 100);
    result.c = 100 - result.a - result.b;
  } else {
    result.a = result.b = result.c = 33;
  }

  return result;
}