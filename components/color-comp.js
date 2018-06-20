"use strict";

const colorComponent = {
  template: `
  <section class="buttoncontainer">
    <button type="button" ng-click="$ctrl.displayColor('Red');">Red</button>
    <button type="button" ng-click="$ctrl.displayColor('Orange');">Orange</button>
    <button type="button" ng-click="$ctrl.displayColor('Yellow');">Yellow</button>
    <button type="button" ng-click="$ctrl.displayColor('Green');">Green</button>
    <button type="button" ng-click="$ctrl.displayColor('Blue');">Blue</button>
    <button type="button" ng-click="$ctrl.displayColor('Violet');">Violet</button>
    <button type="button" ng-click="$ctrl.displayColor('Black');">Black</button>
    <button type="button" ng-click="$ctrl.displayColor('White');">White</button>
    <button type="button" ng-click="$ctrl.displayColor('Brown');">Brown</button>
    <button type="button" ng-click="$ctrl.displayColor('Grey');">Grey</button>
  </section>

  <div ng-repeat="item in $ctrl.colorList track by $index" ng-show="item.colorcount[1]">
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.displayColor = function (colorType) {
      vm.colorList = [];
      TestService.getColor(colorType).then((response) => {
        for(let i = 0; i < 10; i ++) {
          vm.colorList.push(response.data.colors.hue); 
        }
        console.log(colorList.colors[i]);
      });
    }
  }]
}

angular
.module("app")
.component("colorComponent", colorComponent)


// for (let j=0; j < 20; j++) {
  //   if (response.data.records[i].colors[j].hue === "Red")
  //   console.log(response.data.records[i]);



      // for (let i= 0; i < 100; i++) {
      //   let colorList = response.data.records[i];
      //   for (let j = 0; j < 20; j++) {
      //   if (colorList.colors[j].hue === "Red")
      //     vm.colorList.push(colorList.colors[j]);