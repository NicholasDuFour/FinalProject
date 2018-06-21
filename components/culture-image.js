"use strict"
console.log("culture image!"); 

const cultureImage = {
    template: `
    {{hello}}
    <div ng-repeat="item in $ctrl.cultureRepeat track by $index" ng-show="item.images[1]">
        <h3>{{ item.title }}</h3>
        <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.images[0].idsid}}">
    </div>
    `, 

    controller: function(TestService) {
        const vm = this; 
        vm.cultureRepeat = TestService.returnClassificationCulture(); 
    }
}


angular 
    .module("app")
    .component("cultureImage", cultureImage); 