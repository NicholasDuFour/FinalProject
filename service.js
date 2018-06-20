"use strict";

function TestService($http) {
  let artList = [];
  let cultureList = []; 
  let classList = [];
  let colorList = []; 

  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6"; 

// This is what we are using to access the complete objects

  const getInfo = () =>{
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?size=100&page=4&apikey=${key}`
    }).then((response)=>{
      // console.log(response); 
      artList = response;
      return artList;
    })
  }

// This is what we are using to access 6 different classes of art

  const getClassification = (classType) => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?classification=${classType}&size=100&page=4&apikey=${key}`
    }).then((response)=>{
      console.log(response); 
      classList = response;
      return classList;
    })
  }

  const getCulture = (cultureType) => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?culture=${cultureType}&size=100&page=4&apikey=${key}`
    }).then((response)=>{
      // console.log(response); 
      cultureList = response;
      return cultureList;
    })
  }

  const getColor = (colorType) => {
    return $http({
      method: 'GET',
      url:`https://api.harvardartmuseums.org/object?color/name=${colorType}&size=200&page=4&apikey=${key}`
    }).then((response) => {
      colorList = response; 
      console.log(response); 
      return colorList; 
    })
  }


  return {
    getInfo,
    getClassification,
    getCulture,  
    getColor

  }
}

angular
  .module("app")
  .factory("TestService", TestService);
