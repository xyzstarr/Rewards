(function () {
    "use strict";
    angular
        .module('app')
        .factory('AppMainService', ['$rootScope', appMainService])
        .factory("AppApi", ['AppMainService', '$http', 'toaster', '$q', '$ionicPopup', appApi])
    ;

    function appMainService() {
        var apiRoot = "http://thitos:8080/webapps/apis/rewardsystem-api/api/v1/";
        //var base_url = "http://allonia.co.za/loadshedding/api/v1";

        var CurrentUser = function(){
            var deferred;
            deferred = $q.defer();
            $http
                .get(serviceBase + q)
                .success(function (result) {
                    deferred.resolve(result);
                    //console.log(result);
                    // thePopUp(result.error, result.colleagues);
                })
                .error(function (result) {
                    deferred.reject(result);
                    console.log(result);
                    thePopUp(result.status, result.message);
                })
            ;
            return deferred.promise;
        }

        return {
            ApiRoot: apiRoot,
            CurrentUser:CurrentUser
        };
    }

    function appApi(AppMainService, $http, toaster, $q, $ionicPopup) {
        // This service connects to our REST API
        var serviceBase = AppMainService.ApiRoot;


        var obj = {};

        var thePopUp = function (status, message) {
            $ionicPopup.alert({
                title: status,
                template: message
            });
        };

        function successfulCall(data) {
            console.log(data);
        }
        ;
        function unsuccessfulCall() {
            deferred.reject({"status": "error", "message": "An error occured!!!"});
            $ionicPopup.alert({
                title: 'Error!',
                template: 'Please check your credentials!'
            });
        }
        ;
        obj.toast = function (data) {
            toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        };
        obj.get = function (q) {
            var deferred;
                deferred = $q.defer();
            $http
                .get(serviceBase + q)
                .success(function (result) {
                    deferred.resolve(result);
                    //console.log(result);
                   // thePopUp(result.error, result.colleagues);
                })
                .error(function (result) {
                    deferred.reject(result);
                    console.log(result);
                    thePopUp(result.status, result.message);
                })
            ;
            return deferred.promise;
        };
        obj.post = function (q, object) {
            var deferred = $q.defer();
            $http
                .post(serviceBase + q, object)
                .success(function (result) {
                    deferred.resolve(result);
                    console.log(result);
                    thePopUp(result.status, result.message);
                })
                .error(function (result) {
                    deferred.reject({"status": "error", "message": "An error occured!!!"});
                    console.log(result);
                    thePopUp('error', 'An error occured!!!');
                });
            return deferred.promise;
        };
        obj.put = function (q, object) {
            var deferred = $q.defer();
            $http
                .put(serviceBase + q, object)
                .success(this.successfulCall)
                .error(this.unsuccessfulCall);
        };
        obj.delete = function (q) {
            var deferred = $q.defer();
            $http
                .delete(serviceBase + q)
                .success(this.successfulCall)
                .error(this.unsuccessfulCall);
        };
        return obj;
    }

})();
