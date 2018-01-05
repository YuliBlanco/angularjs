"use strict";

angular.module('app.unidadmedida', [ 'ui.router']);

angular.module('app.unidadmedida').config(function ($stateProvider) {

    $stateProvider
        .state('app.unidadmedida', {
            abstract: true,
            data: {
                title: 'Unidad  de Medida'
            }
        })

        .state('app.unidadmedida.unidadmedida', {
            url: '/unidadmedida',
            data: {
                title: 'Listado de Unidad de Medida'
            },
            views: {
                "content@app": {
                    controller: 'UnidadtablesCtrl as datatables',
                    templateUrl: "app/unidadmedida/views/medida.html"

                }
            }
        })

});
