"use strict";

angular.module('app.carrocerias', [ 'ui.router']);

angular.module('app.carrocerias').config(function ($stateProvider) {

    $stateProvider
        .state('app.carrocerias', {
            abstract: true,
            data: {
                title: 'carrocerias'
            }
        })

        .state('app.carrocerias.carrocerias', {
            url: '/carrocerias',
            data: {
                title: 'Listado de Carrocerias de Vehículos'
            },
            views: {
                "content@app": {
                    controller: 'CarroceriastablesCtrl as datatables',
                    templateUrl: "app/carrocerias/views/carrocerias.html"

                }
            }
        })

});
