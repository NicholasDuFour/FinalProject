"use strict";

function TestService($http, $q) {
  let colorList; 
  let classList = [];
  let cultureList = []; 
  let test;
  let finalColorArray;
  let noDuplicateColorsArray = [];
  let output = []; 
  let cultureTest; 
  let page = 1;
  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6"; 


  const nextColorPage = () => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?size=100&page=${page}&apikey=${key}`
    }).then((response) => {
      page++;
      console.log(page);
      console.log(response);
      return response;
    })
  }

  const getColor = (colorType) => {
    colorList = [];
    return $q((resolve, reject) => {
      for (let i = 1; i <= 200; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?size=100&page=${i}&apikey=${key}`
        }).then((response) => {
          for (let itemInArr of response.data.records) {
            if (itemInArr.hasOwnProperty("colors") && itemInArr.hasOwnProperty("images")) { 
              if (itemInArr.images[0].height > 0 ) {
                for (let color of itemInArr.colors) {
                  if (color.hue === colorType) {
                    // console.log(`WE FOUND ${colorType}`);
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
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?classification=${classType}&size=100&page=${page}&apikey=${key}`
    }).then((response)=>{
      //console.log(response); 
      classList = response.data.records;
      console.log(classList);
      return classList
    })
  }

  const returnClassificationImages = () => {
    test = classList;
    console.log(test);
    return test;
  }

  const getCulture = (cultureType) => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?culture=${cultureType}&size=100&page=${page}&apikey=${key}`
    }).then((response)=>{
      cultureList = response.data.records;
      console.log(cultureList);
      return cultureList;
    })
  }

  const returnClassificationCulture = () => {
    cultureTest = cultureList; 
    console.log(cultureTest); 
    return cultureTest; 
  }
<<<<<<< HEAD
=======
  const getClassificationColorImage = (colorImageType) => {
    
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?classification=${colorImageType}&size=100&page=${page}&apikey=${key}`
    }).then((response)=>{
      //console.log(response); 
      colorImageList = response.data.records;
      console.log(colorImageList);
      return colorImageList
    })
    
  }

  const returnClassificationColorImage = () => {
    colorImageTest = colorImageList;
    console.log(colorImageTest);
    return colorImageTest;
  }
>>>>>>> 1df4fbc91890ce1c05587d5d47a4abbda3fdaa5d

  return {
    nextColorPage,
    getClassification,
    returnClassificationImages, 
    getCulture,  
    returnClassificationCulture,
<<<<<<< HEAD
    getColor 

=======
    getColor,
    returnColorList
>>>>>>> 1df4fbc91890ce1c05587d5d47a4abbda3fdaa5d
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
