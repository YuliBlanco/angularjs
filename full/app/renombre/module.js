"use strict";

angular.module('app.renombre', [ 'ui.router']);

angular.module('app.renombre').config(function ($stateProvider) {

    $stateProvider
        .state('app.renombre', {
            abstract: true,
            data: {
                title: 'Renombre'
            }
        })

        .state('app.renombre.renombre', {
            url: '/renombre',
            data: {
                title: 'Renombre de Mercancias'
            },
            views: {
                "content@app": {
                    templateUrl: "app/renombre/views/renombremercancia.html"

                }
            }
        })

});
