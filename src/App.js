import React, {useState} from "react";
import axios from "axios";

function App() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Sydney,{{country}}&APPID=b2fc2e484a60d1735b399ba807ce6911'

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type='text'/>
        </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
            
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
              <p className="bold">25°C</p>
              <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">40%</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12MPH</p>
            <p>Windspeed</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
