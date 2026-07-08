import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather]=useState(null)
  function setWeatherData(data)
  {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=827756e284df2e600342b8869022504c`)
   .then(res=>res.json()) //it check if there is any error
   .then(data=>setWeather(data)) //it performs the actual logic of the data
  }
 return (
    <div>
      <h1>Weather App</h1>
      <input 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name"
      />
      <button onClick={() => setWeatherData(city)}>Get Weather</button>
      
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App
