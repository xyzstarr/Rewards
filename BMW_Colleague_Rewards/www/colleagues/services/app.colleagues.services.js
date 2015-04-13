(function () {
    angular
        .module('app')
        .factory('ColleagueListService', fnColleagueListService)
    ;

    function fnColleagueListService(AppMainService, $q, $http) {
        var serviceBase = AppMainService.ApiRoot;
        var colleagues = {};
        colleagues.get_all_colleagues = function () {
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
