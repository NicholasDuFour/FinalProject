"use strict";

console.log("module!"); 
angular
    .module("app", ["ngRoute"], ['ui.carousel'])
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
        .when("/culture-image", {
            template: `
            <culture-image></culture-image>
             `
        })
        .when("/color-image", {
            template: `
            <color-image></color-image>
             `
        })
        .when("/type-comp", {
            template: `
            <type-component></type-component>
             `
        })
        .when("/images-comp", {
            template: `
            <images-component></images-component>
             `
        })
        .otherwise({ redirectTo: "/home-comp"});
    })

