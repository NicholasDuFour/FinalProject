const typeComponent = {
  template: `
  <section class="buttoncontainer">
  <div class="imagebuttoncontainer" ng-click="$ctrl.displayClass('Albums');">
    <img src="images/album.jpg" alt="Album">
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
    <img src="images/jewlery.jpg" alt="Multiples">
    <div class="imagebuttonoverlay"><p>Multiples</p></div>
  </div>

    <button type="button" class="multiples" ng-click="$ctrl.displayClass('Multiples');">Multiples</button>
    <button type="button" class="paintings" ng-click="$ctrl.displayClass('Paintings');">Paintings</button>
    <button type="button" class="photographs" ng-click="$ctrl.displayClass('Photographs');">Photographs</button>
    <button type="button" class="prints" ng-click="$ctrl.displayClass('Plaques');">Plaques</button>
    <button type="button" class="prints" ng-click="$ctrl.displayClass('Prints');">Prints</button>
    <button type="button" class="sculpture" ng-click="$ctrl.displayClass('Sculpture');">Sculpture</button>
    <button type="button" class="seals" ng-click="$ctrl.displayClass('Seals');">Seals</button>
    <button type="button" class="textilearts" ng-click="$ctrl.displayClass('Textile Arts');">Textile Arts</button>
    <button type="button" class="vessels" ng-click="$ctrl.displayClass('Vessels');">Vessels</button>
  </section>
  `,
  controller: ["$location", "TestService", function($location,TestService){
    const vm = this; 
    vm.displayClass = function (classType) {
      TestService.getClassification(classType).then(() => {
        $location.path("/images-comp");
      });
    } 
  }]
}

angular
  .module("app")
  .component("typeComponent", typeComponent)

