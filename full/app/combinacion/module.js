"use strict";

angular.module('app.combinacion', [ 'ui.router']);

angular.module('app.combinacion').config(function ($stateProvider) {

    $stateProvider
        .state('app.combinacion', {
            abstract: true,
            data: {
                title: 'combinacion'
            }
        })

        .state('app.combinacion.combinacion', {
            url: '/combinacion',
            data: {
                title: 'Listado de Combinación de Configuraciones'
            },
            views: {
                "content@app": {
                    controller: 'CombinaciontablesCtrl as datatables',
                    templateUrl: "app/combinacion/views/combinacion.html"

                }
            }
        })

});
