const typeComponent = {
  template: `
  <button type="button" ng-click="$ctrl.displayClass('Drawings');">Drawings</button>
  <button type="button" ng-click="$ctrl.displayClass('Prints');">Prints</button>
  <button type="button" ng-click="$ctrl.displayClass('Sculpture');">Sculpture</button>
  <button type="button" ng-click="$ctrl.displayClass('Photographs');">Photographs</button>
  <button type="button" ng-click="$ctrl.displayClass('Coins');">Coins</button>


  <div ng-repeat="item in $ctrl.classList track by $index">
    <h3>{{ item.title }}</h3>
    <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.id}}">
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.classList = [];
    vm.displayClass = function (classType) {
    TestService.getClassification(classType).then((response) => {
      vm.artInfo = response;
      for (let i= 0; i < 15; i++) {
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

  