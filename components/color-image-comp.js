"use strict";

const colorImages = {
  template: `<div ng-repeat="item in $ctrl.checkImages track by $index" ng-show="item.images[1]">
  
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
  </div>
  `
  ,
  controller: [ "TestService", function(TestService){
    const vm = this; 
    console.log('hello');
    vm.checkImages = TestService.returnColorList();
    console.log(vm.checkImages);
    
   

  }]
}



angular
.module("app")
.component("colorImages", colorImages);