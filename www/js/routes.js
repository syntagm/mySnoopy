angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mySnoopy.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('mySnoopy.gallery', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('mySnoopy.bio', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bio.html',
        controller: 'bioCtrl'
      }
    }
  })

  .state('mySnoopy', {
    url: '/side-menu21',
    templateUrl: 'templates/mySnoopy.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});