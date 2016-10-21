var translationsEN = {
  HEADLINE: 'Welcome to...!!' ,
  NAME: 'Name' ,
  EMAIL: 'E-mail' ,
  BUTTON_LANG_DE : 'German' , 
  BUTTON_LANG_EN : 'English' ,
  ZoomIn : 'Proceed',
  cancel : 'Cancel' ,
  hello : 'Hello' ,
  errorMsg : 'Please enter Name'
} ;

var translationsDE = {
   HEADLINE: 'Willkommen zu...!!' ,  
   NAME: 'Name',
   BUTTON_LANG_DE : 'Deutsche' , 
   BUTTON_LANG_EN : 'Englisch' ,
   ZoomIn : 'Vorgehen',
   cancel : 'Stornieren' ,
   hello : 'Hallo' ,
   errorMsg : 'Bitte geben Sie den Namen'
}
var app = angular.module('myApp' , ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('de', translationsDE);
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage('en');
}]);

app.controller('Ctrl', ['$scope', function ( $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
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