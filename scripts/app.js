// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });

$.ajax({
  method: "GET",
  url: weekly_quakes_endpoint,
  success: onSuccess,
  error: onError, 

})

function onSuccess(response) {
  //console.log(response);

  var earthQuake = response.features;

  earthQuake.forEach(function(features) {
    //console.log(features);

    var quakeTitle = `<p>${features.properties.title}</p>`;
    $('#info').append(quakeTitle);
  });

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });
}

function onError(e1,e2,e3) {
  console.log('there is an error', e2);
}

});
