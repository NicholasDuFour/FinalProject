"use strict"; 

const typeComponent = {
  template: `
  <header class="header">
    <img class="logo" src="images/logo.png">
      <a href="#!/home-comp" id="headerlink">
        <h1>Blank Canvas</h1>
      </a>
  </header>

  <section class="buttoncontainer">
  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Albums');">
    <img src="images/album.jpg" alt="Albums">
    <div class="imagebuttonoverlay"><p>Albums</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Books');">
    <img src="images/books.jpg" alt="Books">
    <div class="imagebuttonoverlay"><p>Books</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Calligraphy');">
    <img src="images/calligraphy.jpg" alt="Calligraphy">
    <div class="imagebuttonoverlay"><p>Calligraphy</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Jewelry');">
    <img src="images/jewlery.jpg" alt="Jewelry">
    <div class="imagebuttonoverlay"><p>Jewelry</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Lighting');">
    <img src="images/lights.jpg" alt="Lights">
    <div class="imagebuttonoverlay"><p>Lighting</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Multiples');">
    <img src="images/multiples.jpg" alt="Multiples">
    <div class="imagebuttonoverlay"><p>Multiples</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Paintings');">
    <img src="images/paintings.jpg" alt="Paintings">
    <div class="imagebuttonoverlay"><p>Paintings</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Photographs');">
    <img src="images/photos.jpg" alt="Photographs">
    <div class="imagebuttonoverlay"><p>Photographs</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Plaques');">
    <img src="images/plaques.jpg" alt="Plaques">
    <div class="imagebuttonoverlay"><p>Plaques</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Prints');">
    <img src="images/prints.jpg" alt="Prints">
    <div class="imagebuttonoverlay"><p>Prints</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Sculpture');">
    <img src="images/sculpture.jpg" alt="Sculptures">
    <div class="imagebuttonoverlay"><p>Sculptures</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Seals');">
    <img src="images/seal.jpg" alt="Seals">
    <div class="imagebuttonoverlay"><p>Seals</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Textile Arts');">
    <img src="images/textile.jpg" alt="Textiles">
    <div class="imagebuttonoverlay"><p>Textiles</p></div>
  </div>

  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Vessels');">
    <img src="images/vessels.jpg" alt="Vessels">
    <div class="imagebuttonoverlay"><p>Vessels</p></div>
  </div>

  </section>
  `,
  controller: ["$location", "TestService", function($location,TestService){
    const vm = this; 
    vm.displayClass = function (classType) {
      TestService.getClassification(classType).then(() => {
        $location.path("/type-images-comp");
      });
    } 
  }]
}

angular
  .module("app")
  .component("typeComponent", typeComponent)

