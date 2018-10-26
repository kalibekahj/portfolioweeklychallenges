$(document).ready(function() {
   
    $('#submitWeather').click(function(){

        var city = $("#city").val();

        if(city != ''){

            $.getJSON({

                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city +  
                "&APPID=c63fca9319e61c7557935399df451d76" + "&units=imperial",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                }
            });

        } else {
            $("#error").html('Field cannot be empty');
        }
    });
});
function show(data){
    return "<h2 style='font-size:30px; font-weight: bold;' class='text-center'>Current Weather for " + 
    data.name + ", " + data.sys.country + "</h2>" + 
    "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
    "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
    "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" 
}