// Fetch is a web API that allows us to make AJAX calls in an easy way. It replaces XMLHttpRequest.


// Tutorial approach using then catch and fetch. 
// function getWeather(woeid) {
//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             const today = data.consolidated_weather[0];
//             console.log(`Temperature in ${data.title} is currently: ${today.the_temp}. The min temp will be ${today.min_temp} and the max with be ${today.max_temp}`);
//         })
//         .catch(error => {
//             console.log(`An ERROR occured when getting weather data: ${error}`);
//         });
// }

// getWeather(2487956);
// getWeather(44418);



// Rob async attempt technique. 

async function getEdinburghLocation() {
    const response =  await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=edinburgh');
    const data = await response.json();
    return data[0].woeid;
}

async function getWeather(code) {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${code}`);
    const json = await data.json();
    const location = json.title;
    return await {data: json, location: location};
}


getEdinburghLocation().then(code => {
    return getWeather(code);
})
.then(result => {
    const today = result.data.consolidated_weather[0];
    const location = result.location;
    console.log(`Temperature in ${location} is currently: ${today.the_temp}. The min temp will be ${today.min_temp} and the max with be ${today.max_temp}`);
});