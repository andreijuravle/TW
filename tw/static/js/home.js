var app = angular.module('home',['ngAnimate', 'directives'], function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});

app.config(['$interpolateProvider', function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}]);

app.controller('left-menu', ['$scope', function($scope) {

    $scope.submenu = false;
    $scope.menu_items = [{value:"1",submenu:["i1"], show:false}, {value:"2",submenu:["i2"], show:false}, {value:"3",submenu:["i3"], show:false}, {value:"4",submenu:["i4"], show:false}];
    $scope.click = function(index) {
        $scope.menu_items[index]["show"] = !$scope.menu_items[index]["show"];
        for(i = 0; i < $scope.menu_items.length; i++) {
            if(i != index) {
                $scope.menu_items[i]["show"] = false;
            }
        }
    }
}]);

app.controller('pag', ['$scope', function($scope) {

    $scope.list = [{name:"1", value:"1"}, {name:"2", value:"2"}, {name:"3", value:"3"}, {name:"4", value:"4"}];
}]);

var directiveModule = angular.module('directives',[]);

directiveModule.config(['$interpolateProvider', function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}]);

directiveModule.directive('temperature', function() {
    var controller = function($scope, $timeout) {
        $scope.clicked = false;
        $scope.editTemperature = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };

        $scope.editState = function() {
            $scope.clicked = true;
            $scope.state = !$scope.state;
            $scope.feedback = "Set on";

            $timeout(function() {
                $scope.clicked = false;
            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/temperature.html',
        controller: controller
    };
});


directiveModule.directive('rotations', function() {
    var controller = function($scope, $timeout) {
       // console.log($scope);
         $scope.clicked = false;
        $scope.editRotations = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/rotations.html',
        controller: controller
    };
});

directiveModule.directive('itemCard', function() {
    var controller = function($scope, $timeout) {
        
        //console.log($scope);
        $scope.clicked = false;
        $scope.editProgram = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            state: '=',
            list: '=',
            title: '@',
            id: '@',
            details: '@',
            icon: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/itemcarddropdown.html',
        controller: controller
    };
});





directiveModule.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseInt(value, 10);
      });
    }
  };
});


directiveModule.directive('dropdown', function() {
  return {
    require: 'ngModel',
    scope: {
        list: '=',
        title: '@'
    },
    controller: function($scope) {
        console.log("drop aici");
        $scope.dropped = false;
        $scope.selectItem = function(index) {
            console.log(index);
            $scope.title = $scope.list[index].name;
            $scope.dropped = false;
        };

        $scope.drop = function() {
            console.log("dropped");
            $scope.dropped = !$scope.dropped;
        };
    },
    templateUrl: '/static/directivesTemplates/dropdown.html'
  };
});

directiveModule.directive('clock', function() {
    var controller = function($scope, $timeout) {
        //console.log($scope);
        $scope.clicked = false;
        $scope.editClock = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            state: '=',
            list: '=',
            title: '@',
            id: '@',
            details: '@',
            icon: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/clock.html',
        controller: controller
    };
});


directiveModule.directive('textDetails', function() {
    var controller = function($scope, $timeout) {
        console.log($scope);
    };
    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/text.html',
    };
});


/* directive pentru tv*/

directiveModule.directive('volume', function() {
    var controller = function($scope, $timeout) {
        $scope.clicked = false;
        $scope.editVolume = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };

        $scope.editStateTV = function() {
            $scope.clicked = true;
            $scope.state = !$scope.state;
            $scope.feedback = "Set on";

            $timeout(function() {
                $scope.clicked = false;
            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/volume.html',
        controller: controller
    };
});

directiveModule.directive('brightness', function() {
    var controller = function($scope, $timeout) {
       // console.log($scope);
         $scope.clicked = false;
        $scope.editBrightness = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/brightness.html',
        controller: controller
    };
});

directiveModule.directive('clockTv', function() {
    var controller = function($scope, $timeout) {
       // console.log($scope);
            $scope.clicked = false;
        $scope.editClockTV = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            state: '=',
            list: '=',
            title: '@',
            id: '@',
            details: '@',
            icon: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/clockTV.html',
        controller: controller
    };
});


directiveModule.directive('textTvDetails', function() {
    var controller = function($scope, $timeout) {
        console.log($scope);
    };
    return {
        restrict: 'E',
        scope: {
            value: '@',
            state: '@',
            id: '@',
            title: '@',
            rangeText: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/textTV.html',
    };
});

directiveModule.directive('channel', function() {
    var controller = function($scope, $timeout) {
        
        //console.log($scope);
        $scope.clicked = false;
        $scope.editChannel = function() {
            $scope.clicked = true;
            $scope.success = false;
            $scope.feedback = "Success";

            $timeout(function() {
                $scope.clicked = false;

            },1000);
        };
    };

    return {
        restrict: 'E',
        scope: {
            state: '=',
            list: '=',
            title: '@',
            id: '@',
            details: '@',
            icon: '@',
            edit: '&'
        },
        templateUrl: '/static/directivesTemplates/channels.html',
        controller: controller
    };
});