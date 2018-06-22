"use strict";

function TestService($http, $q) {
  let colorList;
  let classList;
  let cultureList;
  let finalClassList;
  let finalColorArray;
  let noDuplicateColorsArray = [];
  let output = [];
  let cultureTest;
  let page = 1;
  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6";


  const getColor = (colorType) => {
    colorList = [];
    return $q((resolve, reject) => {
      for (let i = 1; i <= 2000; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?size=100&page=${i}&apikey=${key}`
        }).then((response) => {
          for (let itemInArr of response.data.records) {
            if (itemInArr.hasOwnProperty("colors") && itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0 ) {
                for (let color of itemInArr.colors) {
                  if (color.hue === colorType) {
                    colorList.push(itemInArr);
                    console.log(colorList);
                    return colorList
                    }
              }
            }

          }
        };
      })
      resolve(colorList);
    }
  })
}

const returnColorList = () => {
    finalColorArray = colorList;

    return finalColorArray;
}

  const getClassification = (classType) => {
    classList = [];
    return $q((resolve, reject)=>{
      for (let i = 1; i <= 300; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?classification=${classType}&size=100&page=${i}&apikey=${key}`
        }).then((response)=>{
          for (let itemInArr of response.data.records) {
            classList.push(itemInArr);
            return classList
          }
        }) //end of then response
        console.log(i);
        resolve(classList);
      }
    })
  }

  const returnClassificationImages = () => {
    finalClassList = classList;
    return finalClassList;
    console.log(finalClassList);
  }

  const getCulture = (cultureType) => {
    cultureList = [];
    return $q((resolve, reject)=>{
      for (let i = 1; i <= 2000; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?culture=${cultureType}&size=100&page=${i}&apikey=${key}`
        }).then((response)=>{
          // console.log(response);
          for (let itemInArr of response.data.records){
            cultureList.push(itemInArr);
            return cultureList
          }
        })
        resolve(cultureList);
        // console.log(cultureList);
      } //end of for loop
    }) //end of $q
  }

  const returnClassificationCulture = () => {
    cultureTest = cultureList;
    return cultureTest;
    console.log(cultureTest);
  }

  return {
    getClassification,
    returnClassificationImages,
    getCulture,
    returnClassificationCulture,
    getColor,
    returnColorList
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
