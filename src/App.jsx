import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WheaterCard from './components/WheaterCard'
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(false)
  const [position, setPosition] = useState();
  const [weather, setWeather] = useState();

  let lon, lat;

  useEffect(() => {

    const success = (position) => {

      lon = position.coords.longitude;
      lat = position.coords.latitude;

      setPosition({ lon, lat })
      

    }

    navigator.geolocation.getCurrentPosition(success);

  }, [])

  useEffect(() => {

    if (position !== undefined) {
      const API_KEY = '81c71d1ea3e659fe2fe5bf3cc3f8c5b5';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position?.lat}&lon=${position?.lon}&appid=${API_KEY}`

      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(error => console.log(error))
      
      
      
    }

  }, [position])

  useEffect(() => {
    if(weather!==undefined){
      setLoading(!loading)
    }
  }, [weather])

  console.log(weather);

  return (
    <div className="App">
      {
        loading ?
          <WheaterCard
            weather={weather}
          />
          :
          <Loader />
      }

    </div>
  )
}

export default App
