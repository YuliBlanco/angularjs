/**
 * Created by griga on 2/9/16.
 */


angular.module('app.combinacion').controller('CombinaciontablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/listadocombinacion.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('codigo').withClass('text-danger'),
        DTColumnBuilder.newColumn('codigosemir'),
        DTColumnBuilder.newColumn('descripcion'),
        DTColumnBuilder.newColumn('descripcionsemir'),
        DTColumnBuilder.newColumn('abreviatura'),
        DTColumnBuilder.newColumn('pesomaximo'),
        DTColumnBuilder.newColumn('pesominimo'),
        DTColumnBuilder.newColumn('galonesminimo'),
        DTColumnBuilder.newColumn('galonesmaximo'),
        DTColumnBuilder.newColumn(null).withTitle('Estado').renderWith(function(data, type, full, meta) {
          return '<label class="toggle"><input type="checkbox" name="checkbox-toggle"><i data-swchon-text="ON" data-swchoff-text="OFF"></i>AQUIELCHECK</label>';})

    ];


});
