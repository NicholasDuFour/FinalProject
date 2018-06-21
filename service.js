"use strict";

function TestService($http) {
  let colorList = []; 
  let classList = [];
  let cultureList = []; 
  let test;
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


// This is what we are using to access the complete object of each art piece & access colors

  const getColor = (colorType) =>{
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?size=100&page=${page}&apikey=${key}`
    }).then((response)=>{
      page++;
      colorList = response;
      return colorList;
    })
  }

// This is what we are using to access different classes/types of art

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

  // This is what we are using to access different cultures

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

  return {
    nextColorPage,
    getClassification,
    returnClassificationImages, 
    getCulture,  
    returnClassificationCulture,
    getColor 

  }
}

angular
  .module("app")
  .factory("TestService", TestService);
