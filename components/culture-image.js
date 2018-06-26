"use strict"
console.log("culture image!");

const cultureImage = {
    template: `
    <header class="header">
        <img class="logo" src="images/logo.png">
        <a href="#!/home-comp" id="headerlink">
            <h1>Blank Canvas</h1>
        </a>
    </header>

    <section class="slideshow">
    <section class="prev">
      <i class="material-icons md-36 prev" ng-click="$ctrl.goBack();">arrow_back_ios</i>
    </section>

      <div class="typefiles">
        <img class="repimg" ng-src="{{ $ctrl.cultureRepeat[$ctrl.count].images[0].baseimageurl }}">
        <button class="learn" ng-hide="showme" ng-click="showme=true">Learn More</button>
      </div>

      <section class="next">
        <i class="material-icons md-36 next" ng-click="$ctrl.goForward();">arrow_forward_ios</i>
      </section>
    </section>

    <section ng-show="showme" class="moreinfo">
        <section class="closebtn">
            <i ng-click="showme=false" class="material-icons">close</i>
        </section>
        <h4>{{ $ctrl.cultureRepeat[$ctrl.count].title || 'No title available' }}</h4>
        <p>Artist: {{ $ctrl.cultureRepeat[$ctrl.count].people[0].name || 'No artist available'  }}</p>
        <p>Date: {{ $ctrl.cultureRepeat[$ctrl.count].dated || 'No date available' }}</p>
        <p>Type: {{ $ctrl.cultureRepeat[$ctrl.count].classification || 'No description available' }}</p>
        <p>Medium: {{ $ctrl.cultureRepeat[$ctrl.count].medium || 'No description available' }}</p>
        <p>Division: {{ $ctrl.cultureRepeat[$ctrl.count].division || 'No description available' }}</p>
    </section>
    `,

    controller: [ "TestService", function(TestService) {
        const vm = this;
        vm.cultureRepeat = TestService.returnClassificationCulture();
        vm.count = 0;
        vm.goForward = () => {
            vm.count++;
        }
        vm.goBack = () => {
            vm.count--;
        }
    }]
}



angular
    .module("app")
    .component("cultureImage", cultureImage);

    {/* <img ng-src="https://ids.lib.harvard.edu/ids/view/{{item.images[0].idsid}}"> */}
