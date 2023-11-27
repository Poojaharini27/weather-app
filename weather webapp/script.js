// Get weather for the entered location
function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    if (!locationInput) {
        alert('Please enter a location.');
        return;
    }

    document.getElementById('temperature').textContent = 'Fetching temperature...';

    const apiKey = '8b78dee7e4dfc63a84cb900a358fdafa'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            document.getElementById('temperature').textContent = `Temperature in ${locationInput}: ${temperature}°C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('temperature').textContent = 'Error fetching temperature';
        });
}
function refreshWeather() {
    document.getElementById('locationInput').value = '';
    document.getElementById('temperature').textContent = '';
}

