"use strict";

const imagesComponent = {
  template: `

  <div class="image" ng-repeat="item in $ctrl.artList track by $index">
    <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.images[0].idsid}}">
    <p>{{ item.title }}</p>
    <p>{{ item.period }}</p>
    <p>{{ item.department }}</p>
    <p>{{ item.accessionyear }}</p>
    <p> {{ item.medium }} </p> 
  </div>

  `,
  controller: ["TestService", function (TestService){
    const vm = this;
    vm.artList = [];
    TestService.getInfo().then((response) =>{
      // for (let i = 0; i < 100; i++) {
      //   if (response.data.records[i].imagecount > 0){
      //     vm.artList.push(response.data.records[i]);
          // console.log(response.data.records);
        }
    )

  }]
  // response.data.records[i].imagecount > 0
}

angular
  .module("app")
  .component("imagesComponent", imagesComponent)


  /*
    <div ng-repeat="item in $ctrl.artList track by $index">
    <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.images[0].idsid}}">
    <p>{{ item.title }}</p>
    <p>{{ item.period }}</p>
    <p>{{ item.department }}</p>
    <p>{{ item.accessionyear }}</p>
    <p> {{ item.medium }} </p> 
  </div>
  */