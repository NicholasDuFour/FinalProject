"use strict";
const imagesComponent = {
  template: `
  <div class="typefiles" ng-repeat="item in $ctrl.testItems track by $index" ng-show="item.images[1]">

    <img ng-src="{{item.images[0].baseimageurl}}">
    <button class="learn" ng-click="showme=true">Learn More</button>

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
