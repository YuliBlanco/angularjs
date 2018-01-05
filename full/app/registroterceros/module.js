"use strict";

angular.module('app.registroterceros', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
    .state('app.registroterceros', {
        abstract: true,
        data: {
            title: 'Registro'
        }
    })

    .state('app.registroterceros.registroterceros', {
        url: '/registroterceros',
        data: {
            title: 'Registro de Terceros'
        },
        views: {
            "content@app": {
                controller: 'RegTercerosController',
                templateUrl: "app/registroterceros/views/registroterceros.html"

            }
        }
    })
})
