"use strict";

console.log("module!"); 
angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
        .when("/images-comp", {
            template: `
            <images-component></images-component>
             `
        })
        .when("/color-comp", {
            template: `
            <color-component></color-component>
             `
        })
        .when("/period-comp", {
            template: `
            <period-component></period-component>
             `
        })
        .when("/type-comp", {
            template: `
            <type-component></type-component>
             `
        })
    })

