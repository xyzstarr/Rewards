(function(){
    angular
            .module('app')
            .controller('AuthController',fnAuthController)
            ;

    function fnAuthController($scope,$rootScope,$state,$stateParams,$location,$http,AppApi,AuthService,AUTH_EVENTS,Session){

        //<editor-fold desc="Controller Log In Feature">
        $scope.LoginData = {};
        $scope.LoginData.email = '1234@home.com';
        $scope.LoginData.password = '1234@home.com';

        $scope.UserLogin = function(LoginDetails){
            var promise;
            promise = AuthService.UserLogin(LoginDetails);
            promise.then(
                    function(LoginStatus){
                        if(LoginStatus.status==="Success"){
                            $state.transitionTo('app.colleagues');
                        }
                        else {
                            console.log('Ooops');
                        }
                    },
                    function(err){
                        console.log(err);
                    });
        };
        //</editor-fold>

        //<editor-fold desc="Controller Sign Up Feature">
        $scope.SignUpData = {};
        $scope.SignUpData.qt_number = 'thato@home.com';
        $scope.SignUpData.name = 'thato@home.com';
        $scope.SignUpData.email = 'thato@gmail.com';
        $scope.SignUpData.password = 'thato@home.com';
        $scope.SignUpData.phone = 'thato@home.com';
        $scope.SignUpData.confirmpassword = 'thato@home.com';

        $scope.SignUpNewUser = function(SignUpDetails){
            var promise;
            promise = AuthService.SignUpNewUser(SignUpDetails);
            promise.then(
                    function(SignUpResults){
                        if(SignUpResults.status==="success"){
                            $location.path('app/colleagues');
                        }
                        else {
                            console.log('Ooops');
                        }
                    },
                    function(err){
                        console.log(err);
                    });

        };
        //</editor-fold>

        //<editor-fold desc="Controller Sign Out Feature">
        var UserLogOut = function(){
            AppApi.get('logout')
                    .then(function(results){
                        AppApi.toast(results);
                        $state.go('app.login');
                    });
        };
        //</editor-fold>

    }

})();
