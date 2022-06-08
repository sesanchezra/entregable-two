import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WheaterCard from './components/WheaterCard'
import axios from 'axios'


const backgrounds ={
  "clear sky" :'https://images.unsplash.com/photo-1623846736569-1d90cba76d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' ,
  "few clouds" : 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  "scattered clouds":'https://images.unsplash.com/photo-1646069816777-7e8a69b0596f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80', 
  "broken clouds": 'https://images.unsplash.com/photo-1646069816777-7e8a69b0596f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  "shower rain": 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  "rain":'https://images.unsplash.com/photo-1476044591369-74ee6ac6899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  "thunderstorm":"https://images.unsplash.com/photo-1587228270638-2c0ac062c01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "snow" : "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80",
  "mist" : "https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
}


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

    
  // 
  
  return (
    <div className="App" style={{backgroundImage: `url(${backgrounds[`${weather?.weather[0].description}`]}`, backgroundSize: 'cover'}}>
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
