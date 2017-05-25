define( [ 'angular',
          'config/config'
          ],
    function( angular, config ) {
        "use strict";

        var HomeController = function($scope) {

            $scope.name= "Bryan";

        };

        HomeController.$inject = [ '$scope' ];

        return HomeController;
    }
);