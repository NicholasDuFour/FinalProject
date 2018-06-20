"use strict";

console.log("module!"); 
angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
        .when("/home-comp", {
            template: `
            <home-component></home-component>
             `
        })
        .when("/color-comp", {
            template: `
            <color-component></color-component>
             `
        })
        .when("/culture-comp", {
            template: `
            <culture-component></culture-component>
             `
        })
        .when("/images-comp", {
            template: `
            <images-component></images-component>
             `
        })
        .when("/type-comp", {
            template: `
            <type-component></type-component>
             `
        })
        .otherwise({ redirectTo: "/home-comp"});
    })

