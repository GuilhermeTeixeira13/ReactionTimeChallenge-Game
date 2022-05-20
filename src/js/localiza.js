navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position.coords.latitude + " // " + position.coords.longitude);
    displayLocation(position.coords.latitude, position.coords.longitude);
  },
  function errorCallback(error) {
    console.log(error)
  }
);

function displayLocation(latitude, longitude) {
  var geocoder;
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode(
    { 'latLng': latlng },
    function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var add = results[0].formatted_address;
          var value = add.split(",");

          count = value.length;
          country = value[count - 1];
          state = value[count - 2];
          city = value[count - 3];
          const Cidade = state.split(" ");
          console.log("sadasd");
          console.log(" sad");
          console.log("---" + Cidade[2]);
          var cid = Cidade[2];
          console.log("---" + cid);
          document.getElementById("playingFrom").innerHTML = "Playing From: " + cid;
        }
        else {
          console.log("address not found");
        }
      }
      else {
        console.log("Geocoder failed due to: " + status);
      }
    }
  );
}
