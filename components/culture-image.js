"use strict"
console.log("culture image!");

const cultureImage = {
    template: `
    <div class="typefiles" ng-repeat="item in $ctrl.cultureRepeat track by $index" ng-show="item.images[1]">

        <img ng-src="{{item.images[0].baseimageurl}}">
        <button ng-click="showme=true">Learn More</button>

        <section ng-show="showme">
          <p ng-click="showme=false">Close</p>
          <h3>{{ item.title }}</h3>
          <p>Artist: {{ item.people[0].name }}</p>
          <p>Date: {{item.dated}}</p>
          <p>Type: {{item.classification}}</p>
          <p>Medium: {{item.medium}}</p>
          <p>{{item.division}}</p>
        </section>

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

    {/* <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.images[0].idsid}}"> */}
