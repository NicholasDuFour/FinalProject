"use strict";

function TestService($http) {
  let artList = [];
  let mediumList = []; 
  let classList = [];
  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6"; 

// This is what we are using to access the complete objects

  const getInfo = () =>{
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?size=15&page=4&apikey=${key}`
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

  const getMedium = (medType) => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?mediumname=${medType}&size=100&page=4&apikey=${key}`
    }).then((response)=>{
      console.log(response); 
      mediumList = response;
      return mediumList;
    })
  }


   const getAllMediums = () => {
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/medium?&apikey=${key}`
    }).then((response)=>{
      console.log(response); 
      return response;
    })
   }


  // const getMedium = () => {
  //   return $http({
  //       method: 'GET', 
  //       url: `https://api.harvardartmuseums.org/medium?q=pathforward:Stone&apikey=${key}`
  //   }).then((response) => {
  //     console.log(response); 
  //     mediumList = response; 
  //     return mediumList;
  //   })
  // }


  return {
    getInfo,
    getClassification,
    getMedium,
    getAllMediums
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
