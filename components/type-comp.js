const typeComponent = {
  template: `
  <section class="buttoncontainer">
  <button type="button" class="albums" ng-click="$ctrl.displayClass('Albums');">Albums</button>
    <button type="button" class="books" ng-click="$ctrl.displayClass('Books');">Books</button>
    <button type="button" class="calligraphy" ng-click="$ctrl.displayClass('Calligraphy');">Calligraphy</button>
    <button type="button" class="jewelry" ng-click="$ctrl.displayClass('Jewelry');">Jewelry</button>
    <button type="button" class="lighting" ng-click="$ctrl.displayClass('Lighting Devices');">Lighting Devices</button>
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

