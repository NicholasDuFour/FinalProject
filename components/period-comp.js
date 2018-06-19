"use strict"; 

const periodComponent = {
    template: `
    
        <button type="button" ng-click="$ctrl.displayMedium();">STONE</button>
        <button type="button" ng-click="$ctrl.material('Ceramic');">CERAMIC</button>
        <button type="button" ng-click="$ctrl.material('Watercolor');">WATERCOLOR</button>
        <button type="button" ng-click="$ctrl.material('Resin');">RESIN</button>
        <button type="button" ng-click="$ctrl.material('Varnish');">VARNISH</button>
    `, 

    controller: ["TestService", function(TestService){
        const vm = this; 
        vm.material = (value) => { console.log(value) };

    vm.displayMedium = function () {
        TestService.getMedium().then((response) => {
            vm.mediumList = response.data.records[0].name;
            console.log(response.data);
        })
      } 
   }]
}


angular 
    .module("app")
    .component("periodComponent", periodComponent); 



    // <section ng-repeat="item in $ctrl.mediumList track by $index"> 
    // <p>{{item.name}}</p>