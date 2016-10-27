
var app = angular.module('myApp' , []);

app.controller('Ctrl', ['$scope', function ( $scope) {
 
  $scope.changeLanguage = function (langKey) {
  };
 
  $scope.validate = function(){
	  if(typeof $scope.name == 'undefined' || $scope.name == '' ){
		  alert('Please enter name !!') ;
		  return ;
	  }
	  alert('Hello '+ $scope.name ) ;
  }
  
  $scope.cancel= function(){
	  $scope.name = '' ;
  }
}]);