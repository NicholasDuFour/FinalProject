"use strict";

const colorComponent = {
  template: `
  <section class="buttoncontainer">
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


  <div ng-repeat="item in $ctrl.colorList track by $index" ng-show="item.images[1]">
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.colorList = [];
    const sortStuff = (colorType, response) => {
      let everyObject = response.data.records;
        for (let prop1 of everyObject) {
          if (prop1.hasOwnProperty('colors')) {
            for (let prop2 of prop1.colors) {
              if (prop2["hue"] === colorType) {
                vm.colorList.push(prop1);
              }   
            }
          }
        }
        console.log(vm.colorList);
    };
    vm.tColor = null;
      vm.colorFinder = function (colorType) {
        vm.tColor = colorType;
      TestService.getColor().then((response) => {
        sortStuff(colorType, response);
      })
    };
    vm.nextColorPage = function () {
      vm.colorList = [];
      TestService.nextColorPage().then((response) => {
        sortStuff(vm.tColor, response);
      })
    }
  }]
}


angular
.module("app")
.component("colorComponent", colorComponent);

