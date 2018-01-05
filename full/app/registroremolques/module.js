"use strict";

angular.module('app.registroremolques', [
    'ui.router',
    'ngResource'
])

.config(function ($stateProvider) {
    $stateProvider
    .state('app.registroremolques', {
        abstract: true,
        data: {
            title: 'Registro'
        }
    })

    .state('app.registroremolques.registroremolques', {
        url: '/registroremolques',
        data: {
            title: 'Registro de Remolques'
        },
        views: {
            "content@app": {
                controller: 'registroRemolController',
                templateUrl: "app/registroremolques/views/registroremolques.html"

            }
        }
    })
})
