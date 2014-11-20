angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('JobsCtrl', function($scope, JobService) {
    JobService.titles().then(function(data) {
      //this will execute when the
      //AJAX call completes.
      $scope.titles = data;
      console.log(data);
    });
})

.controller('JobDetailCtrl', function($scope, $stateParams, JobService) {
    JobService.getJob($stateParams.jobId).then(function(data) {
      //this will execute when the
      //AJAX call completes.
      $scope.job = data;
      console.log(data);
    });
})

.controller('AccountCtrl', function($scope) {
});
