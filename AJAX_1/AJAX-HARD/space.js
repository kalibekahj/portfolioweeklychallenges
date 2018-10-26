$(document).ready(function() {
  $("#submit").click(function() {
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;

    function spaceStation() {
      let url =
        "http://api.open-notify.org/iss-pass.json?lat=" +
        latitude +
        "&lon=" +
        longitude;

      fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          json.response.forEach(element => {
            $("#display").append(
              `<p>${Math.floor(
                element.duration / 60
              )} minutes , ${element.duration % 60} seconds </p>`
            );
            $("#display").append(`<p>${new Date(element.risetime * 1000)}</p>`);
          });
        })
        .catch(function() {
          // This is where you run code if the server returns any errors
        });
    }
    spaceStation();
  });

  function setPosition(position) {
    $("#longitude").val(position.coords.longitude);
    $("#latitude").val(position.coords.latitude);
  }

  $("#geolocation").click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      $("#showlocation").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  });
});
