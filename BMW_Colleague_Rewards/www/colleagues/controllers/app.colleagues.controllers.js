(function(){
    angular
            .module('app')
            .controller('ColleagueListController',fnColleagueListController)
            ;
    function fnColleagueListController($scope,$stateParams,$ionicPopup,ColleagueListService,RewardsService,Session){
        var ctrl=this;
        $scope.reward_a_colleague=function(recipient){
            recipient.awarded_to=recipient.user_id;
            recipient.awarded_by=Session.user_id;
            recipient.comments='for sharing screens via lync';
            var promise;
            promise=RewardsService.reward_a_colleague(recipient);
            promise.then(
                    function(results){
                        $ionicPopup.alert({
                            title:results.status,
                            template:results.message
                        });
                        $scope.get_all_colleagues();
                    },
                    function(err){
                        $ionicPopup.alert({
                            title:results.status,
                            template:results.message
                        });
                        console.log(err);
                        $scope.get_all_colleagues();
                    });
        };
        $scope.get_all_colleagues=function(){
            var promise;
            promise=ColleagueListService.get_all_colleagues();
            promise.then(
                    function(data){
                        for(var i=0;i<data.colleagues.length;i++)
                        {

                            data.colleagues[i].total_rewards_today=parseInt(data.colleagues[i].total_rewards_today);
                            data.colleagues[i].total_rewards_this_week=parseInt(data.colleagues[i].total_rewards_this_week);
                            data.colleagues[i].total_rewards_this_month=parseInt(data.colleagues[i].total_rewards_this_month);
                            data.colleagues[i].total_rewards_this_year=parseInt(data.colleagues[i].total_rewards_this_year);
                            data.colleagues[i].total_rewards=parseInt(data.colleagues[i].total_rewards);
                            data.colleagues[i].order_by_value=parseInt(data.colleagues[i].total_rewards);
                            data.colleagues[i].order_by_value_label='Overall';
                        }
                        console.log(data.colleagues);
                        $scope.colleagues=data.colleagues;
                    },
                    function(err){
                        console.log(err);
                    });
            return promise;
        };
        $scope.HoveredColleague=null;
        $scope.set_hovered_colleague=function(user_id){
            $scope.HoveredColleague=parseInt(user_id);
            console.log($scope.HoveredColleague);
        };

        $scope.change_badge_value=function(value){

            for(var i=0;i<$scope.colleagues.length;i++)
            {
                switch(value) {
                    case 'total_rewards_today':
                        $scope.colleagues[i].order_by_value=parseInt($scope.colleagues[i].total_rewards_today);
                        $scope.colleagues[i].order_by_value_label="Total Rewards Today";
                        break;
                    case 'total_rewards_this_week':
                        $scope.colleagues[i].order_by_value=parseInt($scope.colleagues[i].total_rewards_this_week);
                        $scope.colleagues[i].order_by_value_label="Total Rewards This Week";
                        break;
                    case 'total_rewards_this_month':
                        $scope.colleagues[i].order_by_value=parseInt($scope.colleagues[i].total_rewards_this_month);
                        $scope.colleagues[i].order_by_value_label="Total Rewards This Month";
                        break;
                    case 'total_rewards_this_year':
                        $scope.colleagues[i].order_by_value=parseInt($scope.colleagues[i].total_rewards_this_year);
                        $scope.colleagues[i].order_by_value_label="Total Rewards This Year";
                        break;
                    case 'total_rewards':
                        $scope.colleagues[i].order_by_value=parseInt($scope.colleagues[i].total_rewards);
                        $scope.colleagues[i].order_by_value_label="Overall Total Rewards";
                        break;
                    default:
                        $scope.colleagues[i].order_by_value_label="Name";
                        break;
                }
            }
        };

        $scope.get_all_colleagues();
    }
})();

