// This file contains controllers for the pages/tabs of the app
'use strict';

angular.module('AltimeterCtrl', [])

.controller('AltimeterCtrl', function($scope, AltimeterService) {
  // initialize data for the view
  $scope.altimeterAvailable = 'empty';
  $scope.altimeterError = 'empty';
  $scope.altimeterData = 'empty';

  $scope.stopUpdates = function() {
    stopAltimeterUpdates();
  };

  // start altimeter updates, first check if the altimeter is available
  $scope.startAltimeterUpdates = function() {
    // check if an altimeter if available on the platform
    // calls the altimeterAvailable function to evaluate starting alimeter updates
    AltimeterService.isAltimeterAvailable(altimeterAvailable, error);
  }

  // stop polling for altimeter updates
  $scope.stopAltimeterUpdates = function() {
    AltimeterService.stopAltimeterUpdates(function(success) {
      if (success === null) {
        altimeterData(''); // set data to blank when updates are stopped
      }
    }, error);
  }

  // updates altimeter data in the view
  function altimeterData(data) {
    $scope.$apply(function() {
      $scope.altimeterData = data;
    });
  }

  // called if altimeter is available, then starts altimeter updates if available is true
  function altimeterAvailable(available) {
    // update view with status of altimeter availability
    $scope.$apply(function() {
      $scope.altimeterAvailable = available;
    });

    // start Altimeter readings if altimeter is available (true)
    if (available) { 
      AltimeterService.startAltimeterUpdates(altimeterData, error);
    }
  }

  // error handling for any altimeter calls
  function error(errorReponse) {
    $scope.$apply(function() {
      $scope.altimeterError = errorReponse;
    });
  }
});
