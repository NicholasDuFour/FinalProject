"use strict";
console.log("image comp here"); 
const imagesComponent = {
  bindings:{
    imagesComponent: "<"
  },
  template: `
  <div ng-repeat="item in $ctrl.classList track by $index" ng-show="item.images[1]">
  <h3>{{ item.title }}</h3>
  <img ng-src="{{item.images[0].baseimageurl}}">
  <p> {{ item.division }} </p> 
  <p> {{ item.description}} </p> 
</div>

`
}


angular
  .module("app")
  .component("imagesComponent", imagesComponent);
