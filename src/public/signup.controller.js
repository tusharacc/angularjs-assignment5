(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService','MenuAvailableService','$scope'];
function SignUpController(SignUpService,MenuAvailableService,$scope) {
  var signUpCtrl = this;
  var shortName = [];
  signUpCtrl.isPresent = false;
  
  signUpCtrl.saveDetails = function (user){
    console.log("First Name : ",user);
    
    var menuAvailable = MenuAvailableService.getAllMenuItems();
    menuAvailable
    .then(function(response){
      response.data.menu_items.forEach(function(data){
          shortName.push(data.short_name);
      });
      console.log('Short Name : ',shortName);
      console.log('Menu Number : ',user.menunumber);
      signUpCtrl.isPresent = shortName.find(function(element){
          
          if (element == user.menunumber){
              return true;
          }
          
      })? false: true;
      
      if (!signUpCtrl.isPresent){
        SignUpService.saveDetails(user.firstName,user.lastName,user.phoneNumber,user.email,user.menunumber);
        signUpCtrl.class = "alert alert-success";
        signUpCtrl.message = "Thank You! Your details have been saved.";
      } else {
        signUpCtrl.class = "alert alert-danger";  
        signUpCtrl.message = "Oh snap! Change a few things up and try submitting again.";
      }
      console.log('is Present : ',signUpCtrl.isPresent);
    }).catch(function (errorResponse){
        console.log(errorResponse.message);
        signUpCtrl.alert = false;
    });
    
  };
}

})();
