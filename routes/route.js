"use strict";

const route = {
    template: `
    `,
    controller: [MuseumService, function(MuseumService) {
        const vm = this;
    }]
}

angular
    .module("app")
    .component("route", route);