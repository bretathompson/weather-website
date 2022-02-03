const request = require ('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYnRob21wc29uNDAiLCJhIjoiY2t5d2I0aXc2MDRmZjJ4bjg3YzU1dHpheCJ9.pqJEdheuB8WXtR-XBtkVUw&limit=1'

request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }
 });
}

module.exports = geocode