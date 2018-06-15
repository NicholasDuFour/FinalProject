"use strict";

const route = {
    template: `
    `,
    controller: ["TestService", function(TestService) {
        const vm = this;
    }]
}

angular
    .module("app")
    .component("route", route);
