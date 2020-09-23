var app = (function () {
    var cinemaSeleccionado = "";
    var fecha = "";
    var listados = [];
    var seats = []; 

    setCinema = function(){
      cinemaSeleccionado = $("#name").val();
    }
    setFecha = function(){
      fecha = $("#Fecha").val();
    }
    actulizarFunciones = function(){
      apimock.getFunctionsByCinemaAndDate(cinemaSeleccionado, fecha, mapObjetos);
    }
    var mapObjetos = function (listados){
      //console.log(listados);
      var name = listados.map(function(listado){
          $("#tabla > tbody").append(
            "<tr>"+
                    "<td>"+listado.movie.name+"</td>"+
                    "<td>"+listado.movie.genre+"</td>"+
                    "<td>"+listado.date+"</td>"+
                    "<td><button type='button' class='btn btn-primary'>Availability</button></td>"+
            "</tr>"
          );
          seats = listados.seats;
          var c = document.getElementById("myCanvas");
          var lapiz = c.getContext("2d");
          for (var i = 0; i < seats.lengt; i++) {
            for (var j = 0; j < seats[0].lengt; j++) {
              lapiz.fillStyle = "#CD5C5C";  
              if(seats[i][j]){
                lapiz.fillStyle = "#999999"
              }
              lapiz.fillRect(i*20, j*20, 20, 20);
            }
      })
    }
    
    var crearTabla = function(nombre, genero, tiempo, fecha){
      alert (nombre, genero, tiempo, fecha);
    }
  return {
    setCinema: setCinema,
    setFecha: setFecha,
    actulizarFunciones: actulizarFunciones
  }
})();