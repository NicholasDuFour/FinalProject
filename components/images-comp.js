"use strict";
const imagesComponent = {
  template: `
  <div class="typefiles" ng-repeat="item in $ctrl.testItems track by $index" ng-show="item.images[1]">

    <img ng-src="{{item.images[0].baseimageurl}}">
    <button ng-click="showme=true">Learn More</button>

    <section ng-show="showme">
      <p ng-click="showme=false">Close</p>
      <h3>{{ item.title }}</h3>
      <p>Artist: {{ item.people[0].name }}</p>
      <p>Date: {{item.dated}}</p>
      <p>Type: {{item.classification}}</p>
      <p>{{item.division}}</p>
    </section>

  </div>

  `,
  controller: function(TestService){
    const vm = this;
      vm.testItems = TestService.returnClassificationImages();
  }

}


angular
  .module("app")
  .component("imagesComponent", imagesComponent);


  /*
    // controller: ["TestService", function (TestService){
  //   const vm = this;
  //   vm.artList = [];
  //   TestService.getInfo().then((response) =>{
  //     // for (let i = 0; i < 100; i++) {
  //     //   if (response.data.records[i].imagecount > 0){
  //     //     vm.artList.push(response.data.records[i]);
  //         // console.log(response.data.records);
  //       }
  //   )

  // }]
  // // response.data.records[i].imagecount > 0
  */
