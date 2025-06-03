async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('result');
  
    if (!location) {
      resultDiv.innerHTML = "❗ Please enter a location.";
      return;
    }
  
    const apiKey = "";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch weather.");
      }
  
      const data = await response.json();
      const tempC = data.current.temp_c;
      const condition = data.current.condition.text;
  
      resultDiv.innerHTML = `
        🌍 Location: <strong>${data.location.name}, ${data.location.country}</strong><br>
        🌡️ Temperature: <strong>${tempC}°C</strong><br>
        ☁️ Condition: <strong>${condition}</strong>
      `;
    } catch (error) {
      resultDiv.innerHTML = "⚠️ Could not get weather. Try a valid location.";
    }
  }
  