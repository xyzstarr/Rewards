(function () {
    angular
        .module('app')
        .controller('ColleagueController', fnColleagueController)
    ;

    function fnColleagueController($scope, $state,$stateParams, ColleagueService, Session) {
        var vm = this;
        return{
            GetColleague:GetColleague(),
            CurrentUser:CurrentUser()
        };
        function GetColleague() {
            $scope.colleague = {};
            var promise;
            promise = ColleagueService.get($stateParams.user_id);
            promise.then(
                function (data) {
                    $scope.colleague = data.colleague;
                },
                function (err) {
                    console.log(err);
                });
        };
        function CurrentUser() {
            return Session.username;
        };
        GetColleague();
    }

})();
