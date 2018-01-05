"use strict";

angular.module('app.registrovehiculos', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
    .state('app.registrovehiculos', {
        abstract: true,
        data: {
            title: 'Registro'
        }
    })

    .state('app.registrovehiculos.registrovehiculos', {
        url: '/registrovehiculos',
        data: {
            title: 'Registro de Vehículos'
        },
        views: {
            "content@app": {
                controller: 'mainController',
                templateUrl: "app/registrovehiculos/views/registrovehiculos.html"

            }
        }
    })
})
