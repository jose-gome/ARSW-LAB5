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
      $("#cineSelect").text("Cinema selected: "+cinemaSeleccionado);
    }
    
    var mapObjetos = function (listados){
      var name = listados.map(function(listado){
          $("#tabla > tbody").append(
            `<tr>
                    <td>${listado.movie.name}</td>
                    <td>${listado.movie.genre}</td>
                    <td>${listado.date}</td>
                    <td><button type="button" onclick="app.getSeats(${listado.idFunction})" class="btn btn-primary">Open Seats</button></td>"
            </tr>`
          );
          
      })

    }
    seats = function(idfuncion){
      apimock.getFunctionsByCinema($("#name").val(),funciones, idfuncion);
    }
    var funciones = function(listados, idfuncion){
      console.log(listados.functions.length);
      for(var i = 0; i< listados.functions.length ; i++){
        var funciones = listados.functions[i];
        for (var key in funciones) {
          if (key === "seats"){
            seats = funciones[key];
          }
          if(key === "idFunction"){
            if(funciones[key] === idfuncion){
              drawSeats()
            }
          }
        }
      }
    }
    drawSeats = function(){
      var c = document.getElementById("myCanvas");
      var lapiz = c.getContext("2d");
      lapiz.fillStyle = "#0531ae";
      lapiz.fillRect(20, 20 , 820, 20);
      lapiz.beginPath();
      for (var i = 0; i < seats[0].length; i++) {
        for (var j = 0; j < seats.length; j++) {
          lapiz.fillStyle = "#000000";  
          if(seats[j][i]){
            lapiz.fillStyle = "#999999"
          }
          lapiz.fillRect(i*70+25, j*70+120, 40, 40);
        }
      }
    }
    
    var crearTabla = function(nombre, genero, tiempo, fecha){
      alert (nombre, genero, tiempo, fecha);
    }
  return {
    setCinema: setCinema,
    setFecha: setFecha,
    actulizarFunciones: actulizarFunciones,
    getSeats :function(idFuncion){
      seats (idFuncion);
    }
     
  }
})();