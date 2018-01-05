"use strict";

angular.module('app.mercancias', [ 'ui.router']);

angular.module('app.mercancias').config(function ($stateProvider) {

    $stateProvider
        .state('app.mercancias', {
            abstract: true,
            data: {
                title: 'Mercancis'
            }
        })

        .state('app.mercancias.mercancias', {
            url: '/mercancias',
            data: {
                title: 'Listado de Mercancias'
            },
            views: {
                "content@app": {
                    templateUrl: "app/mercancias/views/mercancias.html"

                }
            }
        })

});
