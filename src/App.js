import React, {useState} from "react";
import axios from "axios";

function App() {
  
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=b2fc2e484a60d1735b399ba807ce6911&units=metric'
  
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
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            
          </div>
        </div>

        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
              <p className="bold">Feels like</p>
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          </div>
          <div className="humidity">
            <p className="bold">Humidity</p>
            {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}
          </div>
          <div className="wind">
            <p className="bold">Windspeed</p>
            {data.main ? <p>{data.wind.speed}km/t</p> : null}
          </div>

        </div>
        }
      </div>
    </div>
    
  );
  
}
 
export default App;
