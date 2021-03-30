let app_id = 'rCXJSw3S4rkQsY4VmBIaHQ44pGwYGDjJ'
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

    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key_city}?apikey=${app_id}&language=${lenguage}&details=true`)
    .then(result_weather => {
        return result_weather.json()
    }).then(result_weather => {
        init(result_weather, result_from_server)
    })
}

function init(weather_finilize, primary_result) {
    console.log(weather_finilize)
        if(weather_finilize[0]['IsDayTime']) {
            switch (weather_finilize[0]['WeatherIcon']) {
                case 1:
                    // Sunny
                    document.body.style.backgroundImage = 'url("img/sunny.jpg")'
                    break;

                case 2:
                    // Mostly Sunny
                    document.body.style.backgroundImage = 'url("img/mostly-sunny.jpg")'
                    break;
            
                case 3:
                    // Partly sunny
                    document.body.style.backgroundImage = 'url("img/partly-sunny.jpg")'
                    break;
                    
                case 4:
                    // Intermittent Clouds
                    document.body.style.backgroundImage = 'url("img/intermittent-clouds.jpg")'
                    break;
                
                case 5:
                    // Hazy Sunshine
                    document.body.style.backgroundImage = 'url("img/hazy-sunshine.jpg")'
                    break;

                case 6:
                    // Mostly Cloudy
                    document.body.style.backgroundImage = 'url("img/mostly-cloudy.jpg")'
                    break;
            
                case 13:
                    //Mostly Cloudy w/ Showers
                    document.body.style.backgroundImage = 'url("img/mostly-cloudy-w-showers.jpg")'
                    break;
                    
                case 14:
                    //Partly Sunny w/ Showers
                    document.body.style.backgroundImage = 'url("img/partly-sunny-w-showers.jpg")'
                    break;
            
                case 16:
                    //Mostly Cloudy w/ T-Storms
                    document.body.style.backgroundImage = 'url("img/mostly-cloudy-w-t-Storms.jpg")'
                    break;

                case 17:
                    //Partly Sunny w/ T-Storms
                    document.body.style.backgroundImage = 'url("img/partly-sunny-w-t-Storms.jpg")'
                    break;
            
                case 20:
                    //Mostly Cloudy w/ Flurries
                    document.body.style.backgroundImage = 'url("img/mostly-cloudy-w-flurries.jpg")'
                    break;
                    
                case 21:
                    //Partly Sunny w/ Flurries
                    document.body.style.backgroundImage = 'url("img/partly-sunny-w-flurries.jpg")'
                    break;
                
                case 23:
                    //Mostly Cloudy w/ Snow
                    document.body.style.backgroundImage = 'url("img/mostly-cloudy-w-snow")'
                    break;
            
                case 7:
                    //Cloudy
                    document.body.style.backgroundImage = 'url("img/cloudy.jpg")'
                    break;
                    
                case 8:
                    //Dreary (Overcast)
                    document.body.style.backgroundImage = 'url("img/dreary(overcast).jpg")'
                    break;
                
                case 11:
                    //Fog
                    document.body.style.backgroundImage = 'url("img/fog.jpg")'
                    break;

                case 12:
                    //Showers
                    document.body.style.backgroundImage = 'url("img/showers.jpg")'
                    break;
                    
                case 15:
                    //T-Storms
                    document.body.style.backgroundImage = 'url("img/t-storms.jpg")'
                    break;
                
                case 18:
                    //Rain
                    document.body.style.backgroundImage = 'url("img/rain.jpg")'
                    break;

                case 19:
                    //Flurries
                    document.body.style.backgroundImage = 'url("img/flurries.jpg")'
                    break;
                    
                case 22:
                    //Snow
                    document.body.style.backgroundImage = 'url("img/snow.jpg")'
                    break;
                
                case (24,25):
                    //Ice
                    document.body.style.backgroundImage = 'url("img/sleet.jpg")'
                    break;

                case 25:
                    //Sleet
                    document.body.style.backgroundImage = 'url("img/sleet.jpg")'
                    break;
                    
                case 26:
                    //Freezing Rain
                    document.body.style.backgroundImage = 'url("img/freezing-rain.jpg")'
                    break;
                
                case 29:
                    //Rain and Snow
                    document.body.style.backgroundImage = 'url("img/rain-and-snow.jpg")'
                    break;

                default:
                    document.body.style.backgroundImage = 'url("img/default.jpg")'
                    break;
            }
        }
        if(!weather_finilize[0]['IsDayTime']) {
            console.log('Night')
            switch (weather_finilize[0]['WeatherIcon']) {

                case 7:
                    //Cloudy
                    document.body.style.backgroundImage = 'url("img/cloudy.jpg")'
                    break;
                    
                case 8:
                    //Dreary (Overcast)
                    document.body.style.backgroundImage = 'url("img/dreary(overcast).jpg")'
                    break;
                
                case 11:
                    //Fog
                    document.body.style.backgroundImage = 'url("img/fog.jpg")'
                    break;

                case 12:
                    //Showers
                    document.body.style.backgroundImage = 'url("img/showers.jpg")'
                    break;
                    
                case 15:
                    //T-Storms
                    document.body.style.backgroundImage = 'url("img/t-storms.jpg")'
                    break;
                
                case 18:
                    //Rain
                    document.body.style.backgroundImage = 'url("img/rain.jpg")'
                    break;

                case 19:
                    //Flurries
                    document.body.style.backgroundImage = 'url("img/flurries.jpg")'
                    break;
                    
                case 22:
                    //Snow
                    document.body.style.backgroundImage = 'url("img/snow.jpg")'
                    break;
                
                case (24,25):
                    //Ice
                    document.body.style.backgroundImage = 'url("img/sleet.jpg")'
                    break;

                case 25:
                    //Sleet
                    document.body.style.backgroundImage = 'url("img/sleet.jpg")'
                    break;
                    
                case 26:
                    //Freezing Rain
                    document.body.style.backgroundImage = 'url("img/freezing-rain.jpg")'
                    break;
                
                case 29:
                    //Rain and Snow
                    document.body.style.backgroundImage = 'url("img/rain-and-snow.jpg")'
                    break;

                case 33:
                    //Clear
                    document.body.style.backgroundImage = 'url("img/clear.jpg")'
                    break;

                case 34:
                    // Mostly Clear
                    document.body.style.backgroundImage = 'url("img/mostly-night-clear.jpg")'
                    break;

                case 35:
                    //Partly Cloudy
                    document.body.style.backgroundImage = 'url("img/partly-night-cloud.jpg")'
                    break;

                case 36:
                    //Intermittent Clouds
                    document.body.style.backgroundImage = 'url("img/intermittent-night-clouds.jpg")'
                    break;
            
                case 37:
                    //Hazy Moonlight
                    document.body.style.backgroundImage = 'url("img/hazy-moonlight.jpg")'
                    break;

                case 38:
                    //Mostly Cloudy
                    document.body.style.backgroundImage = 'url("img/mostly-night-cloud")'
                    break;

                case 39:
                    //Partly Cloudy w/ Showers
                    document.body.style.backgroundImage = 'url("showers-night.jpg")'
                    break;

                case 40:
                    //Mostly Cloudy w/ Showers
                    document.body.style.backgroundImage = 'url("img/showers-night.jpg")'
                    break;

                case 41:
                    //Partly Cloudy w/ T-Storms
                    document.body.style.backgroundImage = 'url("img/t-storm-night.jpg")'
                    break;

                case 42:
                    //Mostly Cloudy w/ T-Storms
                    document.body.style.backgroundImage = 'url("img/t-storm-night.jpg")'
                    break;

                case 43:
                    //Mostly Cloudy w/ Flurries
                    document.body.style.backgroundImage = 'url("img/flurries-night.jpg")'
                    break;

                case 44:
                    //Mostly Cloudy w/ Snow
                    document.body.style.backgroundImage = 'url("img/snow-night.jpg")'
                    break;
                    

                default:
                    document.body.style.backgroundImage = 'url("img/default.jpg")'
                    break;
            }
        }

        if(weather_finilize[0]['WeatherIcon'] < 10) {
            var icon = '0' + weather_finilize[0]['WeatherIcon']
        }
        else {
            var icon = weather_finilize[0]['WeatherIcon']
        }

        let weather_description_header = document.getElementById('weather_description_header')

        let temperature = document.getElementById('temperature')
        temperature.innerText = Math.floor(weather_finilize[0]['Temperature']['Metric']['Value']) + ' Cº'

        let humidity_element = document.getElementById('humidity')
        humidity_element.innerText = 'Humidity Level: ' + Math.floor(weather_finilize[0]['RelativeHumidity']) + "%"

        let wind_element = document.getElementById('wind_speed')
        wind_element.innerText = 'Wind Speed: ' + Math.floor(weather_finilize[0]['Wind']['Speed']['Metric']['Value']) + ' Km/h'

        let city_header = document.getElementById('city_header')
        city_header.innerText = primary_result[0]['LocalizedName']

        let weather_icon = document.getElementById('document_icon_img')
        weather_icon.src = 'https://developer.accuweather.com/sites/default/files/' + icon + '-s.png'

        let result_description = weather_finilize[0]['WeatherText']
        weather_description_header.innerText = result_description

        
        set_position_for_weather_info()
}

function set_position_for_weather_info() {
    let weather_container = document.getElementById('weather_container')
    let weather_container_hight = weather_container.clientHeight
    let weather_container_width = weather_container.clientWidth

    weather_container.style.left = `calc(50% - ${weather_container_width/2}px)`
    weather_container.style.top = `calc(50% - ${weather_container_hight/2}px)`
    weather_container.style.visibility = 'visible'
}

document.getElementById('search_btn').addEventListener('click', () => {
    let search_term = document.getElementById('search_input').value
    if(search_term)
        search_location(search_term)

    })
