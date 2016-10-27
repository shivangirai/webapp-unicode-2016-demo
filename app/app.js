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
   hello : 'Hallo' ,
   errorMsg : 'Bitte geben Sie den Namen'
} ;


var app = angular.module('myApp' , ['pascalprecht.translate']);// Introducing angular translate dependancy


app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('de', translationsDE);
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage('en');
}]);// Config Addition

app.controller('Ctrl', ['$translate', '$scope', '$filter' ,  function ( $translate ,  $scope   , $filter) {
 
   $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
 
  $scope.validate = function(){
	  if(typeof $scope.name == 'undefined' || $scope.name == '' ){
		  alert($filter('translate')('errorMsg')) ;
		  return ;
	  }
	  alert($filter('translate')('hello') + ' ' + $scope.name ) ;
  }
  
  $scope.cancel= function(){
	  $scope.name = '' ;
  }
}]);