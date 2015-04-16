(function(global){
    "use strict";
    angular
            .module('app')
            .constant('constants',{
                APP_TITLE:'BMW Cookie Reward System',
                APP_DESCRIPTION:'Motivating our fellow colleagues.',
                APP_VERSION:'1.0'
            })
            .constant('AUTH_EVENTS',{
                loginSuccess:'auth-login-success',
                loginFailed:'auth-login-failed',
                logoutSuccess:'auth-logout-success',
                sessionTimeout:'auth-session-timeout',
                notAuthenticated:'auth-not-authenticated',
                notAuthorized:'auth-not-authorized'
            })
            .run(['$ionicPlatform','$rootScope','$state','$location','AppApi','AuthService',fnAppRun])
            ;
    function fnAppRun($ionicPlatform,$rootScope,$state,$location,AppApi,Session){



        $ionicPlatform.ready(platformIsReady);
        $rootScope.$on('$stateChangeStart',fnStateChangeStart);

        function platformIsReady(){

            if(window.cordova&&window.cordova.plugins.Keyboard){
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar){
                StatusBar.styleDefault();
            }
        }

        function fnStateChangeStart(event,toState,toParams,fromState,fromParams){
            if(toState.authenticate&&!$rootScope.is_user_authenticated){
                $state.transitionTo("app.login");
                event.preventDefault();
            }
        }

        function onOnline(){
            console.log($cordovaNetwork.isOffline());
        }

        function onResume(){
            console.log($cordovaNetwork.isOffline());
        }
    }
})(window);
