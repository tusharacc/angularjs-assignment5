(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;
  var details = [];
  service.saveDetails = function (firstName,lastName,phoneNumber,email,menunumber) {
    var detail = {};
    detail.firstName = firstName;
    detail.lastName = lastName;
    detail.phoneNumber = phoneNumber;
    detail.email = email;
    detail.menunumber = menunumber;
    details.push(detail);
    console.log("Details Array while pushing", details);
    
  };


  service.getDetails = function () {
    console.log("Details Array", details);
    return details;
  };

}



})();
