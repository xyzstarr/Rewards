(function () {
    angular
        .module('app')
        .controller('ColleagueListController', fnColleagueListController)
    ;
    function fnColleagueListController($scope,$stateParams,$ionicPopup, ColleagueListService,RewardsService, Session) {
        $scope.reward_a_colleague = function (recipient) {
            recipient.awarded_to = recipient.user_id;
            recipient.awarded_by = Session.user_id;
            recipient.comments = 'for sharing screens via lync';
            var promise;
            promise = RewardsService.reward_a_colleague(recipient);
            promise.then(
                function (results) {
                    $ionicPopup.alert({
                        title: results.status,
                        template: results.message
                    });
                    $scope.get_all_colleagues();
                },
                function (err) {
                    $ionicPopup.alert({
                        title: results.status,
                        template: results.message
                    });
                    console.log(err);
                    $scope.get_all_colleagues();
                });
        };
        $scope.get_all_colleagues = function() {
            var promise;
            promise = ColleagueListService.get_all_colleagues();
            promise.then(
                function (data) {
                    console.log(data);
                    $scope.colleagues = data.colleagues;
                },
                function (err) {
                    console.log(err);
                });
            return promise;
        };
        $scope.get_all_colleagues();
    }
})();
