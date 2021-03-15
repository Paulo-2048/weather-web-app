var apikey = 'kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK';
var baseurl = "http://dataservice.accuweather.com/"


var form = document.getElementById('location');
var country = document.getElementById('country');
var stade = document.getElementById('stade');
var city = document.getElementById('city');
var response = document.getElementById('weather');
// country.value stade.value city.value



var url = 'http://dataservice.accuweather.com/locations/v1/search?apikey=kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK&q=salvador%2Cbahia%2Cbrasil&language=pt-br&details=true';

$.getJSON(`${baseurl}/locations/v1/postalcodes/search?`, {
  'apikey': apikey,
  'q': city
}).then(function (Key) {
  return $.getJSON(`${baseurl}/currentconditions/v1/${locData[0].Key}`, {
      'apikey': apikey
  });
}).then(function (Key) {
  const temp = tempData[0].Key;
  console.log(`${temp.Value}`);
});
//${temp.Unit}
  form.addEventListener('submit', function() {
    response.innerHTML = data
})