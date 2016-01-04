// This file contains services for the app
'use strict';

angular.module('AltimeterService', [])

.factory('AltimeterService', [
  '$rootScope',
  '$q',
  function($rootScope, $q) {

    function isAltimeterAvailable(success, error) {
      altimeter.isAltimeterAvailable(success, error);
    }

    function startAltimeterUpdates(success, error) {
      altimeter.startAltimeterUpdates(success, error);
    }

    function stopAltimeterUpdates(success, error) {
      altimeter.stopAltimeterUpdates(success, error);
    }

    // Return object with public functions for this service
    return {
      isAltimeterAvailable: function(success, error) {
        isAltimeterAvailable(success, error);
      },
      startAltimeterUpdates: function(success, error) {
        startAltimeterUpdates(success, error);
      },
      stopAltimeterUpdates: function(success, error) {
        stopAltimeterUpdates(success, error);
      }
    };
  }
])

; // End of angular.module