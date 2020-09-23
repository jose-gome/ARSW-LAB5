var app = (function () {
    var cinemaSeleccionado = "";
    var fecha = "";
    var listados = [];
    var listadosDos = [];
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
      console.log(listados);
      var name = listados.map(function(listado){
          $("#tabla > tbody").append(
            "<tr>"+
                    "<td id='movieName'>"+listado.movie.name+"</td>"+
                    "<td>"+listado.movie.genre+"</td>"+
                    "<td>"+listado.date+"</td>"+
                    "<td><button type='button' onclick='app.drawSeats()' class='btn btn-primary'>Availability</button></td>"+
            "</tr>"
          );
          
      })

    }
    getSeats = function(){
      console.log($("#movieName").val());
      apimock.getFunctionsByCinema($("#movieName").val(),drawSeats);
    }
    
    var drawSeats = function(listadosDos){
    
      console.log(listadosDos);
      //seats = listado.seats;
      var name = listadosDos.map(function(listado){  
        seats = listado.seats;  
        var c = document.getElementById("myCanvas");
        var lapiz = c.getContext("2d");
        lapiz.fillStyle = "#0531ae";
        lapiz.fillRect(20, 20 , 20, 20);
        lapiz.beginPath();
        for (var i = 0; i < seats.length; i++) {
          for (var j = 0; j < seats[0].length; j++) {
            lapiz.fillStyle = "#000000";  
            if(seats[i][j]){
              lapiz.fillStyle = "#999999"
            }
            lapiz.fillRect(i*40+45, j*20+105, 20, 20);
          }
        }
      });
    }
    
    var crearTabla = function(nombre, genero, tiempo, fecha){
      alert (nombre, genero, tiempo, fecha);
    }
  return {
    setCinema: setCinema,
    setFecha: setFecha,
    actulizarFunciones: actulizarFunciones,
    getSeats : getSeats
  }
})();