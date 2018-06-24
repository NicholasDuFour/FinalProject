"use strict"
console.log("culture image!");

const cultureImage = {
    template: `
    <div class="typefiles" ng-repeat="item in $ctrl.cultureRepeat track by $index" ng-show="item.images[1]">

    <img ng-src="{{item.images[0].baseimageurl}}">
    <button class="learn" ng-click="showme=true">Learn More</button>

    <section ng-show="showme" class="moreinfo">
          <section class="closebtn">
            <i ng-click="showme=false" class="material-icons">close</i>
          </section>
        <h4>{{ item.title || 'No title available' }}</h4>
        <p>Artist: {{ item.people[0].name || 'No artist available'  }}</p>
        <p>Date: {{item.dated || 'No date available' }}</p>
        <p>Type: {{item.classification || 'No description available' }}</p>
        <p>Medium: {{item.medium || 'No description available' }}</p>
        <p>Division: {{item.division || 'No description available' }}</p>
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
