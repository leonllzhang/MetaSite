angular.module('index', ['ngMaterial']).controller("indexController", function($scope, $http) {
   
    $scope.goManually =function(){
        $location.path('/input');
    };

}).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //Guid format.
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    //   s4() + '-' + s4() + s4() + s4();
    return s4();

}
