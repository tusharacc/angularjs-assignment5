(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signUpCtrl = this;
  
//   var firstName = signUpCtrl.firstName;
//   var lastName = signUpCtrl.lastName;
//   var phoneNumber = signUpCtrl.phoneNumber;
//   var email = signUpCtrl.email;
  
  signUpCtrl.saveDetails = function (user){
    console.log("First Name : ",user);
    
    SignUpService.saveDetails(user.firstName,user.lastName,user.phoneNumber,user.email);  
  };
}

})();
