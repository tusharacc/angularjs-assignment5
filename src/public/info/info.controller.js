(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService'];
function InfoController(SignUpService) {
  var infoCtrl = this;
  var info;
//   var firstName = signUpCtrl.firstName;
//   var lastName = signUpCtrl.lastName;
//   var phoneNumber = signUpCtrl.phoneNumber;
//   var email = signUpCtrl.email;
  
  infoCtrl.getDetails = SignUpService.getDetails();
 
}

})();
