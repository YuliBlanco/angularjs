"use strict";

angular.module('app.remolques', [ 'ui.router']);

angular.module('app.remolques').config(function ($stateProvider) {

    $stateProvider
        .state('app.remolques', {
            abstract: true,
            data: {
                title: 'remolques'
            }
        })

        .state('app.remolques.remolques', {
            url: '/remolques',
            data: {
                title: 'Listado de Marcas Remolques'
            },
            views: {
                "content@app": {
                    controller: 'RemolquestablesCtrl as datatables',
                    templateUrl: "app/remolques/views/remolques.html"

                }
            }
        })

});
