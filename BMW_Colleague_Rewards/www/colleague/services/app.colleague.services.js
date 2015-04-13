(function () {
    angular
        .module('app')
        .factory('ColleagueService', fnColleagueService)
    ;
    function fnColleagueService(AppMainService, $q, $http) {
        var serviceBase = AppMainService.ApiRoot;
        var colleague = {};
        colleague.get = function (user_id) {
            var deferred;
            deferred = $q.defer();
            $http
                .get(serviceBase + "/colleagues/"+user_id)
                .success(function (result) {
                    console.log(result);
                    deferred.resolve(result);
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        return colleague;
    }

})();
