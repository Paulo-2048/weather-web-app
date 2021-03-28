// Get a new key api
let app_id = 'sRRaDRGEykdtS88LghG1cKjZFT96HsEp'
let units = 'metrics'
let search_method = 'zip'
var lenguage = 'pt-br'

function get_search_method(search_term) {
    if(search_term.length === (5) && Number.parseInt(search_term) + '' === search_term)
        search_method = 'postalcodes'
    else
        search_method = 'cities'
}

function search_location(search_term) {
    get_search_method(search_term)
    fetch(`http://dataservice.accuweather.com/locations/v1/${search_method}/search?apikey=${app_id}&q=${search_term}&details=true`).then(result => {
        return result.json()
    }).then(result => {
        search_weather(result)
    })
}

function search_weather(result_from_server) {
    var key_city = result_from_server[0]['Key']

    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key_city}?apikey=${app_id}&language=${lenguage}`)
    .then(result_weather => {
        return result_weather.json()
    }).then(result_weather => {
        init(result_weather)
    })
}

function init(weather_finilize) {
    console.log(weather_finilize)
    
}

document.getElementById('search_btn').addEventListener('click', () => {
    let search_term = document.getElementById('search_input').value
    if(search_term)
        search_weather(search_term)
    })
