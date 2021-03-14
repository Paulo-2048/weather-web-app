var api = 'kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK';
var url = "http://dataservice.accuweather.com/locations/v1/search?apikey=kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK&q=salvador%2Cbahia%2Cbrasil&language=pt-br&details=true"


var form = document.getElementById('location');
var country = document.getElementById('country');
var stade = document.getElementById('stade');
var city = document.getElementById('city');
var response = document.getElementById('weather');
// country.value stade.value city.value



var url = 'http://dataservice.accuweather.com/locations/v1/search?apikey=kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK&q=salvador%2Cbahia%2Cbrasil&language=pt-br&details=true';

fetch(url)
.then(response => response.json())
.then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    var data = [1]['Key']
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })

  form.addEventListener('submit', function() {
    response.innerHTML = data
})