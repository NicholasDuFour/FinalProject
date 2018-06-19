"use strict";

const colorComponent = {
  template: `
  <button type="button" ng-click="$ctrl.displayClass('Drawings');">Drawings</button>
  <button type="button" ng-click="$ctrl.displayClass('Prints');">Prints</button>
  <button type="button" ng-click="$ctrl.displayClass('Sculpture');">Sculpture</button>
  <button type="button" ng-click="$ctrl.displayClass('Photographs');">Photographs</button>
  <button type="button" ng-click="$ctrl.displayClass('Coins');">Coins</button>


  <button type="button" ng-click="$ctrl.allMediums();">All Mediums</button>

  <div ng-repeat="item in $ctrl.classList track by $index" ng-show="item.images[1]">
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.classList = [];
    vm.displayClass = function (classType) {
    TestService.getClassification(classType).then((response) => {
      vm.artInfo = response;
      vm.classList = [];
      for (let i= 0; i < 100; i++) {
        vm.classList.push(response.data.records[i]);
        console.log(response.data.records[i]);
      }
      })
    } 
    vm.displayMedium = function (medType) {
      vm.mediumList = [];
      TestService.getMedium(medType).then((response) => {
        vm.medInfo = response;
        for (let i= 0; i < 15; i++) {
          vm.mediumList.push(response.data.records[i]);
          console.log(response.data.records[i]);
        }
        })
      } 
      vm.allMediums = function () {
        TestService.getAllMediums().then((response) => {
          console.log(response);
        })
      }
  }]
}

angular
  .module("app")
  .component("colorComponent", colorComponent)

  