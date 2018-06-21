"use strict";
const imagesComponent = {
  template: `
  <div ng-repeat="item in $ctrl.testItems track by $index" ng-show="item.images[1]">
  <ui-carousel 
  slides="ctrl.slides"
  slides-to-show="3"
  slides-to-scroll="1"
  initial-slide="1"
  autoplay="true"
  autoplay-speed="2000">
 
  <carousel-item>
  <h3>{{ item.title + 1 }}</h3>
  <img ng-src="{{item.images[0].baseimageurl}}">
</div>
  </carousel-item>
</ui-carousel>
    

  `,
  controller: function(TestService){
    const vm = this; 
      vm.testItems = TestService.returnClassificationImages();
  } 

}


angular
  .module("app",['ui.carousel'])
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
