"use strict";

angular.module('app.empaque', [ 'ui.router']);

angular.module('app.empaque').config(function ($stateProvider) {

    $stateProvider
        .state('app.empaque', {
            abstract: true,
            data: {
                title: 'Empaque'
            }
        })

        .state('app.empaque.empaque', {
            url: '/empaque',
            data: {
                title: 'Tipo de Empaque'
            },
            views: {
                "content@app": {
                    controller: 'EmpaquetablesCtrl as datatables',
                    templateUrl: "app/empaque/views/tipoempaque.html"

                }
            }
        })

});
