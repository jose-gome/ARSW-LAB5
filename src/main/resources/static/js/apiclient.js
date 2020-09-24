var apiclient = (function () {
    let url = "http://localhost:8080/cinema/"

    return {
        getFunctionsByCinema: function (name,callback) {
            $.getJSON(url+name,(data)=>{
                callback(data);
            },null)
        },
        getFunctionsByCinemaAndDate: function (name,date,callback) {
            $.getJSON(url+name+"/"+date,(data)=>{
                callback(data);
            },null)
        },
        getFunctionByNameAndDate: function(name, date, movie,callback){
            $.getJSON(url+name+"/"+date+"/"+movie,(data)=>{
                console.log(data)
                callback(data);
            },null)
        }

    }

})();