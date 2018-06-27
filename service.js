"use strict";

function ArtService($http, $q) {
  let colorList;
  let classList;
  let cultureList;
  let finalClassList;
  let finalColorList;
  let finalCultureList;
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

  const returnColorImages = () => {
    finalColorList = colorList;
    console.log(colorList);
    return finalColorList;
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
            if (itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0) {
                classList.push(itemInArr);
              }
            }
          }
        })
        resolve(classList);
      }
    })
  }

  const returnClassificationImages = () => {
    finalClassList = classList;
    return finalClassList;
  }

  const getCulture = (cultureType) => {
    cultureList = [];
    return $q((resolve, reject)=>{
      for (let i = 1; i <= 2000; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?culture=${cultureType}&size=100&page=${i}&apikey=${key}`
        }).then((response)=>{
          for (let itemInArr of response.data.records){
            if (itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0) {
                cultureList.push(itemInArr);
              }
            }
          }
        })
        resolve(cultureList);
      }
    })
  }

  const returnCultureImages = () => {
    finalCultureList = cultureList;
    return finalCultureList;
  }

  return {
    getClassification,
    returnClassificationImages,
    getCulture,
    returnCultureImages,
    getColor,
    returnColorImages
  }
}

angular
  .module("app")
  .factory("ArtService", ArtService);
