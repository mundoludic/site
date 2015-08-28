'use strict';

angular.module('delacourApp')
  .directive('socialBtns', function () {
    return{
    	restrict: 'A',
    	templateUrl: 'views/directives/social-btns.html',
    	link: function(scope, element, attrs){
    		  element.bind('mouseover', function() {
        		$('.social-background').css('opacity',0.7);
            $('.social-btns').css('opacity',1);
      		});
      		element.bind('mouseout', function() {
        		$('.social-background').css('opacity',0);
            $('.social-btns').css('opacity',0);
      		});
    	},
      scope: {
        image: '@',
        title: '@',
        description: '@',
        tag: '@',
        url: '@'
      } 
    }
});

angular.module('delacourApp')
  .directive('facebookOpenGraph', function($rootScope) {

    console.log("title:"+$rootScope.title);

    return {
      restrict : 'E',
      // scope: {
      //   url: $rootScope.title  
      // },
      templateUrl: 'views/directives/facebook-open-graph.html',
    }
});