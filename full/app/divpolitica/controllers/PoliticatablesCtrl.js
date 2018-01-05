/**
 * Created by griga on 2/9/16.
 */


angular.module('app.divpolitica').controller('PoliticatablesCtrl', function(DTOptionsBuilder, DTColumnBuilder){


    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/listadopolitica.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
      DTColumnBuilder.newColumn('codigodivision').withClass('text-danger'),
      DTColumnBuilder.newColumn('nombredivision'),
      DTColumnBuilder.newColumn('codigozona'),
      DTColumnBuilder.newColumn('nombrezona'),
      DTColumnBuilder.newColumn('codigomunicipio'),
      DTColumnBuilder.newColumn('nombremunicipio'),
      DTColumnBuilder.newColumn('codigodepartamento'),
      DTColumnBuilder.newColumn('nombredepartamento'),
      DTColumnBuilder.newColumn('codigometropolitana'),
      DTColumnBuilder.newColumn('estado')
    ];


});
