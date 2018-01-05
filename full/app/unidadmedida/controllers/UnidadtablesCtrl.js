/**
 * Created by griga on 2/9/16.
 */


angular.module('app.unidadmedida').controller('UnidadtablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/listadounidades.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('codigo').withClass('text-danger'),
        DTColumnBuilder.newColumn('unidadmedida'),
        DTColumnBuilder.newColumn('estado')

    ];


});
