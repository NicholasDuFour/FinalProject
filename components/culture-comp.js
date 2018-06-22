"use strict"; 

const cultureComponent = {
    template: `
    <div class="americancontainer" ng-click="$ctrl.displayCulture('American');">
        <img src="images/americanflag.jpg" alt="Flag">
        <div class="americanoverlay"><p>American</p></div>
    </div>
    <div class="egyptiancontainer" ng-click="$ctrl.displayCulture('Egyptian');">
        <img src="images/americanflag.jpg" alt="Flag">
        <div class="americanoverlay"><p>American</p></div>
    </div>
        <button type="button" class="egyptian" ng-click="$ctrl.displayCulture('Egyptian');">Egyptian</button>
        <button type="button" class=" flemish" ng-click="$ctrl.displayCulture('Flemish');">Flemish</button>
        <button type="button" class="french" ng-click="$ctrl.displayCulture('French');">French</button>
        <button type="button" class="italian" ng-click="$ctrl.displayCulture('Italian');">Italian</button>
        <button type="button" class="japanese" ng-click="$ctrl.displayCulture('Japanese');">Japanese</button>
        <button type="button" class="korean" ng-click="$ctrl.displayCulture('Korean');">Korean</button>
        <button type="button" class="spanish" ng-click="$ctrl.displayCulture('Spanish');">Spanish</button>
    </section>

    `, 

    controller: ["$location", "TestService", function($location,TestService){
        const vm = this; 
            vm.displayCulture = function (cultureType) {
              TestService.getCulture(cultureType).then(() => {
                $location.path("/culture-image");
              });
            } 
          }]
        }
        // vm.cultureList = [];
        // vm.nextPage = function () {
        //     TestService.nextPage().then((response) => {
        //     })
        //   }

//         const vm =this;
//         vm.displayCulture = function (cultureType) {
//         TestService.getCulture(cultureType).then((response) => {
//             vm.cultureList = [];
//             for (let i= 0; i < 100; i++) {
//                 vm.cultureList.push(response.data.records[i]);
//             }
//             $location.path("/culture-image");
//         });
//       }
//    }]
// }



angular 
    .module("app")
    .component("cultureComponent", cultureComponent); 

 // vm.material = (value) => { console.log(value) };