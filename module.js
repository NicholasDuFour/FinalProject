"use strict";

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
         .when("/color-image-comp", {
            template: `
            <color-images></color-images>
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
        .when("/type-comp", {
            template: `
            <type-component></type-component>
             `
        })
        .when("/type-images-comp", {
            template: `
            <type-images-component></type-images-component>
             `
        })
        .otherwise({ redirectTo: "/home-comp"});
    })

