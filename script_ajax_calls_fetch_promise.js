// Fetch is a web API that allows us to make AJAX calls in an easy way. It replaces XMLHttpRequest.

// async function getEdinburghLocation() {
//     const response =  await (await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=edinburgh')).json();
//     return response[0].woeid;
// }

// async function getWeather(code) {
// fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${code}`)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(`An ERROR occured when getting weather data: ${error}`);
//     });
// }


// getEdinburghLocation().then(code => {
//     getWeather(code);
// });



// Tutorial approach using then catch and fetch. 
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const today = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} is currently: ${today.the_temp}. The min temp will be ${today.min_temp} and the max with be ${today.max_temp}`);
        })
        .catch(error => {
            console.log(`An ERROR occured when getting weather data: ${error}`);
        });
}

getWeather(2487956);
getWeather(44418);