(function () {
    "use strict";
    angular
        .module('app')
        .controller('AppMainController', ['$rootScope', '$scope', 'AppMainService', mainController])
    ;
    function mainController($rootScope, $scope, AppMainService,Session) {
        // Form data for the login modal
        $scope.percentage = 66;
        $scope.loginData = {};

        $scope.session_id = $rootScope.session_id;
        $scope.user_id = $rootScope.user_id;
        $scope.name = $rootScope.name;
        $scope.email = $rootScope.email;
    }
})();
