(function () {
    angular
        .module('app')
        .factory('LeaderboardService', fnLeaderboardService)
    ;
    function fnLeaderboardService(AppMainService, $q, $http) {
        var serviceBase = AppMainService.ApiRoot;
        var colleagues = {};
        colleagues.get_leaderboard = function () {
            var deferred;
            deferred = $q.defer();
            $http
                .get(serviceBase + "/colleagues")
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        return colleagues;
    }

})();
