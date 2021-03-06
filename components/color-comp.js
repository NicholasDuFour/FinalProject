"use strict";

const colorComponent = {
  template: `
  <header class="header">
    <a href="#!/home-comp"><img class="logo" src="images/logo.png"></a>
    <a href="#!/home-comp" id="headerlink">
      <h1>Blank Canvas</h1>
      </a>
  </header>
  
  <section class="buttoncontainer">
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Red');">
      <img src="images/red.jpg" alt="Red Pattern">
      <div class="imagebuttonoverlay"><p>Red</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Orange');">
      <img src="images/orange.jpg" alt="Orange Spiral Staircase">
      <div class="imagebuttonoverlay"><p>Orange</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Yellow');">
      <img src="images/yellow.jpg" alt="Yellow Umbrellas">
      <div class="imagebuttonoverlay"><p>Yellow</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Green');">
      <img src="images/green.jpg" alt="Green Crevasse">
      <div class="imagebuttonoverlay"><p>Green</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Blue');">
      <img src="images/blue.jpg" alt="Blue Architecture">
      <div class="imagebuttonoverlay"><p>Blue</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Violet');">
      <img src="images/violet.jpg" alt="Violet Architecture">
      <div class="imagebuttonoverlay"><p>Violet</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Black');">
      <img src="images/black.jpg" alt="Black Portrait">
      <div class="imagebuttonoverlay"><p>Black</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('White');">
      <img src="images/white.jpg" alt="White Architecture">
      <div class="imagebuttonoverlay"><p>White</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Brown');">
      <img src="images/brown.jpg" alt="Brown Wood Grain">
      <div class="imagebuttonoverlay"><p>Brown</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.colorFinder('Grey');">
      <img src="images/grey.jpg" alt="Grey Architecture">
      <div class="imagebuttonoverlay"><p>Grey</p></div>
    </div>
  </section> 
  `,
  controller: ["$location", "ArtService", function($location, ArtService){
    const vm = this; 
    vm.colorFinder = function (colorType) {
      ArtService.getColor(colorType).then((response) => {
        $location.path("/color-image-comp");
      });
    };
  }]
}
 


angular
.module("app")
.component("colorComponent", colorComponent);

