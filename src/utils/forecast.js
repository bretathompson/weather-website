const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9a321fba0d1b6355c0ff07be6719a671&query=' + latitude + ',' + longitude +'&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback("unable to find location", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + " .It is currently "+ body.current.temperature + " degrees out. It fells like " + body.current.feelslike + " degress out.")
        }
    });
}

module.exports = forecast






