"use strict";

angular.module('app.lineas', [ 'ui.router']);

angular.module('app.lineas').config(function ($stateProvider) {

    $stateProvider
        .state('app.lineas', {
            abstract: true,
            data: {
                title: 'Lineas'
            }
        })

        .state('app.lineas.lineas', {
            url: '/lineas',
            data: {
                title: 'Listado de Lineas de Vehículos'
            },
            views: {
                "content@app": {
                    controller: 'LineastablesCtrl as datatables',
                    templateUrl: "app/lineas/views/lineas.html"

                }
            }
        })

});
