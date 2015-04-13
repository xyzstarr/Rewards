(function () {
    angular
        .module('app')
        .factory('RewardsService', fnRewardsService)
    ;
    function fnRewardsService(AppMainService, $q, $http) {
        var serviceBase = AppMainService.ApiRoot;
        var rewards = {};
        rewards.get_rewards = function () {
            var deferred;
            deferred = $q.defer();
            $http
                .get(serviceBase + "/colleagues")
                .success(function (result) {
                    console.log(result)
                    deferred.resolve(result);
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        rewards.reward_a_colleague = function (recipient) {
            var deferred;
            deferred = $q.defer();
            $http
                .post(serviceBase + "/rewards",recipient)
                .success(function (result) {
                    //console.log(result)
                    deferred.resolve(result);
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        return rewards;
    }

})();
