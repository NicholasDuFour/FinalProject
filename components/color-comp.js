"use strict";

const colorComponent = {
  template: `
  <section class="buttoncontainer">
    <button type="button" ng-click="$ctrl.displayColor('Red');">Red</button>
    <button type="button" ng-click="$ctrl.displayColor('Orange');">Orange</button>
    <button type="button" ng-click="$ctrl.displayColor('Yellow');">Yellow</button>
    <button type="button" ng-click="$ctrl.displayColor('Green');">Green</button>
    <button type="button" ng-click="$ctrl.displayColor('Blue');">Blue</button>
    <button type="button" ng-click="$ctrl.displayColor('Violet');">Violet</button>
    <button type="button" ng-click="$ctrl.displayColor('Black');">Black</button>
    <button type="button" ng-click="$ctrl.displayColor('White');">White</button>
    <button type="button" ng-click="$ctrl.displayColor('Brown');">Brown</button>
    <button type="button" ng-click="$ctrl.displayColor('Grey');">Grey</button>
  </section>

  <div ng-repeat="item in $ctrl.colorList track by $index" ng-show="item.colorcount[1]">
    <h3>{{ item.title }}</h3>
    <img ng-src="{{item.images[0].baseimageurl}}">
    <p> {{ item.division }} </p> 
    <p> {{ item.description}} </p> 
  </div>
  `,
  controller: ["TestService", function(TestService){
    const vm = this; 
    vm.colorList = [];
//     vm.displayColor = function () {
//       TestService.getColor().then((response) => {
//         for( let i = 0; i > response.data.records[i].colors; i ++) {
//           let innerArray = response.data.records[i].colors[i]; 
//           for(let j = 0; j > innerArray.length; j ++) {
//             let newValue = innerArray[j]; 
//             vm.newValue.push(colorList.colors[j]);
//             console.log(newValue); 
//           }
//         }
//       });
//     }
//   }]
// }
vm.displayColor = function () {
  TestService.getColor().then((response) => {
    for( let i = 0; i > response.data.records[i].colors.length; i ++) {
      let innerArray = response.data.records[i].colors[i].hue; 
      if (response.data.records[i].colors[i].hue === "Red") 
        vm.innerArray.push(colorList.colors[i]);
        console.log(innerArray); 
      }
    });
  }
}]
  //   vm.displayColor = function (colorType) {
  //     vm.colorList = [];
  //     TestService.getColor(colorType).then((response) => {
  //       for(let i = 0; i < 10; i ++) {
  //         vm.colorList.push(response.data.colors.hue); 
  //       }
  //       console.log(colorList.colors[i]);
  //     });
  //   }
  // }]
}

angular
.module("app")
.component("colorComponent", colorComponent)


// for (let j=0; j < 20; j++) {
    // if (response.data.records[i].colors[j].hue === "Red")
    // console.log(response.data.records[i]);



      // for (let i= 0; i < 100; i++) {
      //   let colorList = response.data.records[i];
      //   for (let j = 0; j < 20; j++) {
      //   if (colorList.colors[j].hue === "Red")
      //     vm.colorList.push(colorList.colors[j]);
      //   }
      // }

/* 
        for(let i = 0; i < 10; i ++) {
          // vm.colorList.push(response.data.colors[0].hue); 
        }

for (let i= 0; i < 20; i++) {
          let colorList = response.data.records[i];
          for (let j = 0; j < 20; j++) {
          if (colorList.colors[j].hue === "Grey")
            vm.colorList.push(colorList.colors[j]);
            console.log(colorList.colors[j]);
     }
}



*/