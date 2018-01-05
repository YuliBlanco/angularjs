"use strict";

angular.module('app.marcas', [ 'ui.router']);

angular.module('app.marcas').config(function ($stateProvider) {

    $stateProvider
        .state('app.marcas', {
            abstract: true,
            data: {
                title: 'Marcas'
            }
        })

        .state('app.marcas.marcas', {
            url: '/marcas',
            data: {
                title: 'Listado de Marcas de Vehículos'
            },
            views: {
                "content@app": {
                    controller: 'MarcastablesCtrl as datatables',
                    templateUrl: "app/marcas/views/marcas.html"

                }
            }
        })

});
