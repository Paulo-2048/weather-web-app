let app_id = 'kprhDPh5fXdHtAxYBaVkVRq9pO5vMRSK'
let units = 'metrics'
let search_method = 'zip'

function search_weather(search_term) {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${app_id}&q=${search_term}`).then(result => {
        return result.json()
    }).then(result => {
        init(result)
    })
}

function init(result_from_server) {
    console.log(result_from_server)
}

    document.getElementById('search_btn').addEventListener('click', () => {
        let search_term = document.getElementById('search_input').value
        if(search_term)
        search_weather(search_term)
    })
