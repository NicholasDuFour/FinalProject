const typeComponent = {
  template: `
  <button type="button" ng-click="$ctrl.displayClass('Paintings');">Paintings</button>
  <button type="button" ng-click="$ctrl.displayClass('Prints');">Prints</button>
  <button type="button" ng-click="$ctrl.displayClass('Sculpture');">Sculpture</button>
  <button type="button" ng-click="$ctrl.displayClass('Photographs');">Photographs</button>
  <button type="button" ng-click="$ctrl.displayClass('Textile Arts');">Textile Arts</button>
  <button type="button" ng-click="$ctrl.displayClass('Manuscripts');">Manuscripts</button>


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

  