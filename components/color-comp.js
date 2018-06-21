"use strict";

const colorComponent = {
  template: `
  <section class="buttoncontainer">
  <button type="button" ng-click="$ctrl.searchColorInfo();">ColorGetRequest</button>


  <button type="button" ng-click="$ctrl.nextColorPage();">Next Page</button>

    <button type="button" ng-click="$ctrl.colorFinder('Red');">Red</button>
    <button type="button" ng-click="$ctrl.colorFinder('Orange');">Orange</button>
    <button type="button" ng-click="$ctrl.colorFinder('Yellow');">Yellow</button>
    <button type="button" ng-click="$ctrl.colorFinder('Green');">Green</button>
    <button type="button" ng-click="$ctrl.colorFinder('Blue');">Blue</button>
    <button type="button" ng-click="$ctrl.colorFinder('Violet');">Violet</button>
    <button type="button" ng-click="$ctrl.colorFinder('Black');">Black</button>
    <button type="button" ng-click="$ctrl.colorFinder('White');">White</button>
    <button type="button" ng-click="$ctrl.colorFinder('Brown');">Brown</button>
    <button type="button" ng-click="$ctrl.colorFinder('Grey');">Grey</button>
  </section> 
  `,
  controller: ["$location", "TestService", function($location, TestService){
    const vm = this; 
    vm.colorList = [];
    const sortArtObject = (colorType, response) => {
    };
    vm.testColor = null;
    vm.colorFinder = function (colorType) {
      vm.testColor = colorType;
      TestService.getColor(colorType).then((response) => {
        vm.coolStuff = response;
        $location.path("/color-image-comp");

      });
    };
    vm.nextColorPage = function () {
      vm.colorList = [];
      TestService.nextColorPage().then((response) => {
        sortArtObject(vm.testColor, response);
      })
    }

  }]
}
 



angular
.module("app")
.component("colorComponent", colorComponent);

