"use strict"
console.log("color image!"); 

const colorImage = {
    template: `
    <div ng-repeat="item in $ctrl.colorRepeat track by $index" ng-show="item.images[1]">
        <h3>{{ item.title }}</h3>
        <img ng-src="{{item.images[0].baseimageurl}}">
    </div>
    `, 

    controller: function(TestService) {
        const vm = this; 
        vm.colorRepeat = TestService.returnClassificationColorImage(); 
    }
}



angular 
    .module("app")
    .component("colorImage", colorImage); 
