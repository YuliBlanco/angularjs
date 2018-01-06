"use strict";

angular.module('app.politica', [ 'ui.router']);

angular.module('app.politica').config(function ($stateProvider) {

    $stateProvider
        .state('app.politica', {
            abstract: true,
            data: {
                title: 'División Política'
            }
        })

        .state('app.politica.politica', {
            url: '/politica',
            data: {
                title: 'Listado de División Política'
            },
            views: {
                "content@app": {
                    controller: 'PoliticatablesCtrl as datatables',
                    templateUrl: "app/divpolitica/views/politica.html"

                }
            }
        })

});
