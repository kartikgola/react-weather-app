let axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=d5d28866503c6b9343fb91376237f670';

module.exports = {
    getTemp : function(cityName){
        let encodedCity = encodeURIComponent(cityName);
        let requestUrl = `${OPEN_WEATHERMAP_URL}&q=${encodedCity}`;

        return axios.get(requestUrl).then(function(res){
            if ( res.data.cod && res.data.message )
                throw new Error(res.data.message); // city not found, typically
            else return res.data.main.temp;
        }, function(res){
            throw new Error('City not found');
        });
    }
}