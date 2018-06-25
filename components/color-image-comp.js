"use strict";

const colorImages = {
  template:
  `
  <header class="header">
  <img class="logo" src="images/logo.png">
  <a href="#!/home-comp" id="headerlink">
      <h1>Blank Canvas</h1>
  </a>
</header>

<section class="slideshow">
  <div class="typefiles">
    <img class="repimg" ng-src="{{ $ctrl.colorRepeat[$ctrl.count].images[0].baseimageurl }}">
    <i class="material-icons md-36 prev" ng-click="$ctrl.goBack();">arrow_back_ios</i>
    <i class="material-icons md-36 next" ng-click="$ctrl.goForward();">arrow_forward_ios</i>
    <button class="learn" ng-hide="showme" ng-click="showme=true">Learn More</button>
  </div>
</section>


  <section ng-show="showme" class="moreinfo">
      <section class="closebtn">
        <i ng-click="showme=false" class="material-icons">close</i>
      </section>
    <h4>{{ $ctrl.colorRepeat[$ctrl.count].title || 'No title available' }}</h4>
    <p>Artist: {{ $ctrl.colorRepeat[$ctrl.count].people[0].name || 'No artist available'  }}</p>
    <p>Date: {{ $ctrl.colorRepeat[$ctrl.count].dated || 'No date available' }}</p>
    <p>Type: {{ $ctrl.colorRepeat[$ctrl.count].classification || 'No description available' }}</p>
    <p>Medium: {{ $ctrl.colorRepeat[$ctrl.count].medium || 'No description available' }}</p>
    <p>Division: {{ $ctrl.colorRepeat[$ctrl.count].division || 'No description available' }}</p>
  </section>

  `
  ,
  controller: [ "TestService", function(TestService){
    const vm = this;
    vm.colorRepeat = TestService.returnColorList();
    vm.count = 0;
    vm.goForward = () => {
      vm.count++;
    }
    vm.goBack = () => {
      vm.count--;
    }
  }]
}



angular
.module("app")
.component("colorImages", colorImages);
