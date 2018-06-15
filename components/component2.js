"use strict"; 

const mediumComponent = {
    template: `
        <button ng-click="$ctrl.displayMedium();">STONE</button>
        <button type="button" ng-click="$ctrl.lol('Ceramic');">
        <button type="button" ng-click="$ctrl.lol('Watercolor');">
        <button type="button" ng-click="$ctrl.lol('Resin');">
        <button type="button" ng-click="$ctrl.lol('Varnish');">

    `, 

    controller: ["TestService", function(TestService){
        const vm = this; 
     
        vm.lol = (value) => { console.log(value) };

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
    .component("mediumComponent", mediumComponent); 



    // <section ng-repeat="item in $ctrl.mediumList track by $index"> 
    // <p>{{item.name}}</p>