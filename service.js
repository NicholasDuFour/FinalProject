"use strict";

function TestService($http) {
  let artList = [];
  const getInfo = () =>{
    return $http({
      method: 'GET',
      url: 'https://api.harvardartmuseums.org/object?size=15&page=4&apikey=88bb71d0-7015-11e8-9d38-6fd658e729d6'
    }).then((response)=>{
      artList = response;
      return artList;
    })
  }

  return {
    getInfo
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
