(function () {
"use strict";

angular.module('public')
.service('MenuAvailableService', MenuAvailableService);


MenuAvailableService.$inject = ['$http'];
function MenuAvailableService($http) {
  var service = this;

  service.getAllMenuItems = function(){
    var req = $http({
      method: "GET",
      url: ("https://tsaurabh-rest-server.herokuapp.com/menu_items.json")
    });
    return req;
  }
}



})();
