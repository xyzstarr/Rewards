(function(){
    "use strict";
    angular
            .module('app')
            .config(['$stateProvider','$urlRouterProvider',fnConfigApp])
            ;
    //<editor-fold desc="Description">
    function fnConfigApp($stateProvider,$urlRouterProvider){
        $stateProvider
                .state('app',{
                    url: '/app',
                    templateUrl: "app.core/common/app.tabs.html",
                    abstract: true,
                    controller: 'AppMainController'
                })
                .state('app.home',{
                    url: '/home',
                    authenticate: true,
                    views: {
                        'app-main': {
                            templateUrl: 'app.core/common/app.home.html',
                            controller: 'AppMainController'
                        }
                    }
                })
                .state('app.login',{
                    url: '/login',
                    authenticate: false,
                    views: {
                        'app-main': {
                            templateUrl: 'users/auth/app.login.html',
                            controller: 'AuthController'
                        }
                    }
                })
                .state('app.signup',{
                    url: '/signup',
                    authenticate: false,
                    views: {
                        'app-main': {
                            templateUrl: 'users/auth/app.signup.html',
                            controller: 'AuthController'
                        }
                    }
                })
                .state('app.colleagues',{
                    url: '/colleagues',
                    authenticate: true,
                    views: {
                        'app-colleagues-view': {
                            templateUrl: 'colleagues/partials/app.colleagues.list.html',
                            controller: 'ColleagueListController'
                        }
                    }

                })
                .state('app.colleague',{
                    url: '/colleagues/:user_id',
                    authenticate: true,
                    views: {
                        'app-colleagues-view': {
                            templateUrl: 'colleague/partials/app.colleague.detail.html',
                            controller: 'ColleagueController'
                        }
                    }

                })
                .state('app.leaderboard',{
                    url: '/leaderboard',
                    authenticate: true,
                    views: {
                        'app-leaderboard-view': {
                            templateUrl: 'leaderboard/partials/app.leaderboard.html',
                            controller: 'LeaderboardController'
                        }
                    }

                })
//
//
//                .state('app.login', {
//                    url: '/login',
//                    authenticate: false,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/login/app.login.html',
//                            controller: 'LoginController'
//                        }
//                    }})
//                .state('app.logout', {
//                    url: '/logout',
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/partials/login.html',
//                            controller: 'logoutCtrl'
//                        }
//                    }})
//                .state('app.dashboard', {
//                    url: '/dashboard',
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/partials/dashboard.html',
//                            controller: 'authCtrl'
//                        }
//                    }})
//                .state('app.admin', {
//                    url: '/admin',
//                    views: {
//                        'app-main': {
//                            templateUrl: 'app.admin/app.admin.html',
//                            controller: 'AdminController'
//                        }
//                    }})

//                .state('app.user', {
//                    url: '/user',
//                    //authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/app.users.html',
//                            controller: 'UserSettingsController'
//                        }
//                    }
//                })
//                .state('app.zeemaps', {
//                    url: '/zeemaps',
//                    views: {
//                        'app-main': {
//                            templateUrl: 'testmaps/app.testmaps.html',
//                            controller: 'MapCtrl'
//                        }
//                    }
//                })
//                .state('app.signup', {
//                    url: '/signup',
//                    authenticate: false,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/signup/app.signup.html',
//                            controller: 'SignUpController'
//                        }
//                    }
//                })
//                .state('app.userprofilesettings', {
//                    url: '/userprofilesettings',
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'users/profilesettings/app.users.profilesettings.html',
//                            controller: 'UserProfilesettings'
//                        }
//                    }
//                })
//                .state('app.loadsheddinglanding', {
//                    url: "/loadsheddinglanding",
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: "app.core/common/app.schedules.landing.html",
//                            controller: 'GMapsController'
//                        }
//                    }
//                })
//                // Each tab has its own nav history stack:
//                .state('app.provinces', {
//                    url: "/provinces",
//                    //authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: 'provinces/app.provinces.html',
//                            controller: 'ProvincesController'
//                        }
//                    }
//                })
//                .state('app.municipalities', {
//                    url: "/municipalities/:province_id",
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: "municipalities/app.municipalities.html",
//                            controller: 'MunicipalitiesController'
//                        }
//                    }
//                })
//                .state('app.suburbs', {
//                    url: "/suburbs/:municipal_id",
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: "suburbs/app.suburbs.html",
//                            controller: 'SuburbsController'
//                        }
//                    }
//                })
//                .state('app.schedule', {
//                    url: "/schedules/:suburb_id",
//                    authenticate: true,
//                    views: {
//                        'app-main': {
//                            templateUrl: "schedules/app.schedules.html",
//                            controller: 'SchedulesController'
//                        }
//                    }
//                })
                ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    }
    //</editor-fold>
})();

