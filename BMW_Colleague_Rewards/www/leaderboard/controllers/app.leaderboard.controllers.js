(function () {
    angular
        .module('app')
        .controller('LeaderboardController', fnLeaderboardController)
    ;
    function fnLeaderboardController($scope,$stateParams,$ionicPopup, LeaderboardService,RewardsService, Session) {
        $scope.get_leaderboard = function() {
            var promise;
            promise = LeaderboardService.get_leaderboard();
            promise.then(
                function (data) {
                    console.log(000);
                    $scope.leaderboard = data.colleagues;
                    console.log(data);
                    console.log(111);
                },
                function (err) {
                    console.log(err);
                });
            return promise;
        };
        $scope.get_leaderboard();
    }
})();
