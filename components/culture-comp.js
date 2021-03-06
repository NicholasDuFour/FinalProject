"use strict"; 

const cultureComponent = {
    template: `
    <header class="header">
        <a href="#!/home-comp"><img class="logo" src="images/logo.png"></a>
        <a href="#!/home-comp" id="headerlink">
            <h1>Blank Canvas</h1>
        </a>
    </header>
        
    <section class="buttoncontainer">
    <div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('American');">
        <img src="images/america.jpg" alt="Statue of Liberty">
        <div class="imagebuttonoverlay"><p>American</p></div>
    </div>
    <div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Egyptian');">
        <img src="images/egypt.jpg" alt="Pyramid">
        <div class="imagebuttonoverlay"><p>Egyptian</p></div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Flemish');">
        <img src="images/flanders.jpg" alt="Ornate Architecture">
        <div class="imagebuttonoverlay"><p>Flemish</p></div>
    </div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('French');">
        <img src="images/france.jpg" alt="Eiffel Tower">
        <div class="imagebuttonoverlay"><p>French</p></div>
    </div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Italian');">
        <img src="images/italy.jpg" alt="Leaning Tower of Pisa">
        <div class="imagebuttonoverlay"><p>Italian</p></div>
    </div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Japanese');">
        <img src="images/japan.jpg" alt="Japanese Style Home">
        <div class="imagebuttonoverlay"><p>Japanese</p></div>
    </div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Korean');">
        <img src="images/southkorea.jpg" alt="Busan, South Korea from above">
        <div class="imagebuttonoverlay"><p>Korean</p></div>
    </div>
    </div><div class="imagebuttoncontainer" ng-click="$ctrl.displayCulture('Spanish');">
        <img src="images/spanish.jpg" alt="View of city from above">
    <div class="imagebuttonoverlay"><p>Spanish</p></div>
    </div>
    </section>

    `, 

    controller: ["$location", "ArtService", function($location,ArtService){
        const vm = this; 
            vm.displayCulture = function (cultureType) {
              ArtService.getCulture(cultureType).then(() => {
                $location.path("/culture-image");
              });
           } 
        }]
    }


angular 
    .module("app")
    .component("cultureComponent", cultureComponent); 

