"use strict"; 

const periodComponent = {
    template: `
        <button type="button" ng-click="$ctrl.displayCulture('American');">American</button>
        <button type="button" ng-click="$ctrl.displayCulture('Korean');">Korean</button>
        <button type="button" ng-click="$ctrl.displayCulture('Roman');">Roman</button>
        <button type="button" ng-click="$ctrl.displayCulture('Irish');">Irish</button>

        <div ng-repeat="item in $ctrl.cultureList track by $index" ng-show="item.images[1]">
        <h3>{{ item.title }}</h3>
        <img ng-src="{{item.images[0].baseimageurl}}">
      </div>

    `, 

    controller: ["TestService", function(TestService){
        const vm = this; 
        vm.cultureList = [];
        // vm.material = (value) => { console.log(value) };
        vm.displayCulture = function (cultureType) {
        TestService.getCulture(cultureType).then((response) => {
            vm.cultureList = [];
            for (let i= 0; i < 100; i++) {
                vm.cultureList.push(response.data.records[i]);
            console.log(response.data.records[i]);        
            }
        })
}
    }]

}



angular 
    .module("app")
    .component("periodComponent", periodComponent); 

