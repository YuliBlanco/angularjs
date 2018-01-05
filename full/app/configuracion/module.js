"use strict";

angular.module('app.configuracion', [ 'ui.router']);

angular.module('app.configuracion').config(function ($stateProvider) {

    $stateProvider
        .state('app.configuracion', {
            abstract: true,
            data: {
                title: 'configuracion'
            }
        })

        .state('app.configuracion.configuracion', {
            url: '/configuracion',
            data: {
                title: 'Listado de configuracion de Vehículos'
            },
            views: {
                "content@app": {
                    controller: 'ConfiguraciontablesCtrl as datatables',
                    templateUrl: "app/configuracion/views/configuracion.html"

                }
            }
        })

});
