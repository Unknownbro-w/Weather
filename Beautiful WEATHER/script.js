const apiKey = 'zfrgvD6eu8pUN8Qe814SwzSbebQOCADE';  // Replace with your AccuWeather API key

async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const locationResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`);
  const locationData = await locationResponse.json();

  if (locationData.length === 0) {
    document.getElementById('weatherDisplay').innerText = 'Location not found';
    return;
  }

  const locationKey = locationData[0].Key;
  const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
  const weatherData = await weatherResponse.json();

  const weatherText = weatherData[0].WeatherText;
  const temperature = weatherData[0].Temperature.Metric.Value;

  document.getElementById('weatherDisplay').innerText = `Weather: ${weatherText}\nTemperature: ${temperature} °C`;
}
