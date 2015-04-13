(function () {
    "use strict";
    angular
        .module('app')
        .factory('Session', fnSessionHandler)
        .factory('AuthService', fnAuthService)
    ;
    function fnAuthService(AppMainService, Session, AUTH_EVENTS, $rootScope, $q, $http) {
        var service_base = AppMainService.ApiRoot;
        var user = {};
        user.UserLogin = function (login_data) {
            var deferred;
            deferred = $q.defer();
            $http
                .post(service_base + "/login", login_data)
                .success(function (result) {
                    deferred.resolve(result);
                    if (result.status === "Success") {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        Session.create(result);
                        //$state.go('app.colleagues');
                        //TODO uncomment these redirections

                        //$location.path('app/colleagues');
                    }
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        user.SignUpNewUser = function (sign_up_data) {
            var deferred;
            deferred = $q.defer();
            $http
                .post(service_base + "/signup", sign_up_data)
                .success(function (result) {
                    deferred.resolve(result);
                    console.log(result)
                    if (result.status === "Success") {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        Session.create(result);
                        //$state.go('app.colleagues');
                        //TODO uncomment these redirections
                        //$location.path('app/colleagues');
                    }
                })
                .error(function (result) {
                    deferred.reject(result);
                })
            ;
            return deferred.promise;
        };
        return user;
    }
    function fnSessionHandler($rootScope) {
        this.create = function (user) {
            this.session_id = user.session_id;
            this.user_id = user.user_id;
            this.username = user.username;
            $rootScope.is_user_authenticated = true;


            $rootScope.session_id = user.session_id;
            $rootScope.user_id = user.user_id;
            $rootScope.name = user.name;
            $rootScope.email = user.email;

            console.log(user);
        };
        this.destroy = function () {
            this.session_id = null;
            this.user_id = null;
            this.username = null;

            $rootScope.is_user_authenticated = false;
            $rootScope.session_id = null;
            $rootScope.user_id = null;
            $rootScope.name = null;
        };
        return this;
    }


})();
