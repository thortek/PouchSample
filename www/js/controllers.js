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

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
