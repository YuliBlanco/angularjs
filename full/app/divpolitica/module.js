"use strict";

angular.module('app.divpolitica', [ 'ui.router']);

angular.module('app.divpolitica').config(function ($stateProvider) {

    $stateProvider
        .state('app.divpolitica', {
            abstract: true,
            data: {
                title: 'División Política'
            }
        })

        .state('app.divpolitica.divpolitica', {
            url: '/divpolitica',
            data: {
                title: 'Listado División Politica'
            },
            views: {
                "content@app": {
                    controller: 'PoliticatablesCtrl as datatables',
                    templateUrl: "app/divpolitica/views/divpolitica.html"

                }
            }
        })

});
