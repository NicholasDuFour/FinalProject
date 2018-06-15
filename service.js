"use strict";

function TestService($http) {
  let artList = [];
  let mediumList = []; 
  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6"; 

  const getInfo = () =>{
    return $http({
      method: 'GET',
      url: `https://api.harvardartmuseums.org/object?size=15&page=4&apikey=${key}`
    }).then((response)=>{
      console.log(response); 
      artList = response;
      return artList;
    })
  }

  const getMedium = () => {
    return $http({
        method: 'GET', 
        url: `https://api.harvardartmuseums.org/medium?q=pathforward:Stone&apikey=${key}`
    }).then((response) => {
      console.log(response); 
      mediumList = response; 
      return mediumList;
    })
  }


  return {
    getInfo,
    getMedium
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
