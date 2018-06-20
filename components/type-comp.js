const typeComponent = {
  template: `
  <section class="buttoncontainer">
    <button type="button" ng-click="$ctrl.displayClass('Paintings');">Paintings</button>
    <button type="button" ng-click="$ctrl.displayClass('Prints');">Prints</button>
    <button type="button" ng-click="$ctrl.displayClass('Sculpture');">Sculpture</button>
    <button type="button" ng-click="$ctrl.displayClass('Photographs');">Photographs</button>
    <button type="button" ng-click="$ctrl.displayClass('Albums');">Albums</button>
    <button type="button" ng-click="$ctrl.displayClass('Books');">Books</button>
    <button type="button" ng-click="$ctrl.displayClass('Calligraphy');">Calligraphy</button>
    <button type="button" ng-click="$ctrl.displayClass('Jewelry');">Jewelry</button>
    <button type="button" ng-click="$ctrl.displayClass('Lighting Devices');">Lighting Devices</button>
    <button type="button" ng-click="$ctrl.displayClass('Multiples');">Multiples</button>
    <button type="button" ng-click="$ctrl.displayClass('Plaques');">Plaques</button>
    <button type="button" ng-click="$ctrl.displayClass('Seals');">Seals</button>
    <button type="button" ng-click="$ctrl.displayClass('Textile Arts');">Textile Arts</button>
    <button type="button" ng-click="$ctrl.displayClass('Vessels');">Vessels</button>
  </section>

  <div ng-repeat="item in $ctrl.classList track by $index" ng-show="item.images[1]">
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.classList = [];
    vm.displayClass = function (classType) {
    TestService.getClassification(classType).then((response) => {
      vm.artInfo = response;
      vm.classList = [];
      for (let i= 0; i < 100; i++) {
        vm.classList.push(response.data.records[i]);
        console.log(response.data.records[i]);
      }
      })
    } 
  }]
}

angular
  .module("app")
  .component("typeComponent", typeComponent)

  