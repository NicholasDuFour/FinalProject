"use strict";
const typeImagesComponent = {
  template: `
  <header class="header">
      <a href="#!/home-comp"><img class="logo" src="images/logo.png"></a>
      <a href="#!/home-comp" id="headerlink">
        <h1>Blank Canvas</h1>
    </a>
  </header>

  <section class="slideshow">
  <section class="prev">
    <i class="material-icons md-36 prev" ng-click="$ctrl.goBack();">arrow_back_ios</i>
  </section>

    <div class="typefiles">
      <img class="repimg" ng-src="{{ $ctrl.typeRepeat[$ctrl.count].images[0].baseimageurl }}">
      <section class="information">
        <h4>{{ $ctrl.typeRepeat[$ctrl.count].title || 'No title available' }}</h4>
        <p>Artist: {{ $ctrl.typeRepeat[$ctrl.count].people[0].name || 'No artist available'  }}</p>
        <p>Date: {{ $ctrl.typeRepeat[$ctrl.count].dated || 'No date available' }}</p>
        <p>Type: {{ $ctrl.typeRepeat[$ctrl.count].classification || 'No description available' }}</p>
        <p>Medium: {{ $ctrl.typeRepeat[$ctrl.count].medium || 'No description available' }}</p>
        <p>Division: {{ $ctrl.typeRepeat[$ctrl.count].division || 'No description available' }}</p>
        <a ng-href="https://www.harvardartmuseums.org/collections/object/{{ $ctrl.typeRepeat[$ctrl.count].id}}">Source</a>
      </section>
    </div>

    <section class="next">
      <i class="material-icons md-36 next" ng-click="$ctrl.goForward();">arrow_forward_ios</i>
    </section>
  </section>

  <section class="repeatedimages">
  <div class="typefilesdesktop" ng-repeat="item in $ctrl.typeRepeat | unique: 'id' track by $index">
    <img ng-src="{{item.images[0].baseimageurl}}">
    <button class="learn" ng-click="showme=true">Learn More</button>
    <section ng-show="showme" class="moreinfo">

    <section class="closebtn">
      <i ng-click="showme=false" class="material-icons">close</i>
    </section>

    <div class="left">
      <img ng-src="{{item.images[0].baseimageurl}}">
    </div>
    
    <div class="right">

        <h4>{{ item.title || 'No title available' }}</h4>
        <p>Artist: {{ item.people[0].name || 'No artist available'  }}</p>
        <p>Date: {{ item.dated || 'No date available' }}</p>
        <p>Type: {{ item.classification || 'No description available' }}</p>
        <p>Medium: {{ item.medium || 'No description available' }}</p>
        <p>Division: {{ item.division || 'No description available' }}</p>
        <a ng-href="https://www.harvardartmuseums.org/collections/object/{{item.id}}">Source</a>
    </div>
        </section>
    </div>
  </section>

  `,
  controller: [ "ArtService", function(ArtService) {
    const vm = this;
      vm.typeRepeat = ArtService.returnClassificationImages();
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
  .component("typeImagesComponent", typeImagesComponent);
