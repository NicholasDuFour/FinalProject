"use strict";

const colorImages = {
  template:
  `<div class="typefiles" ng-repeat="item in $ctrl.checkImages track by $index" ng-show="item.images[1]">

    <img ng-src="{{item.images[0].baseimageurl}}">
    <button ng-click="showme=true">Learn More</button>

    <section ng-show="showme" class="moreinfo">
        <section class="closebtn">
          <i ng-click="showme=false" class="material-icons">close</i>
        </section>
      <h4>{{ item.title || 'No title available' }}</h4>
      <p>Artist: {{ item.people[0].name || 'No artist available'  }}</p>
      <p>Date: {{item.dated || 'No date available' }}</p>
      <p>Type: {{item.classification || 'No description available' }}</p>
      <p>Medium: {{item.medium || 'No description available' }}</p>
      <p>Division: {{item.division || 'No description available' }}</p>
    </section>
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
