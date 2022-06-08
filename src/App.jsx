import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(false)
  const [position, setPosition] =useState();

  let lon , lat;

  useEffect(() => {

    const success = (position) => {

      lon = position.coords.longitude;
      lat = position.coords.latitude;
      
      setPosition({lon,lat})
      setLoading(!loading)
    }

    navigator.geolocation.getCurrentPosition(success);

    
  }, [])
  return (
    <div className="App">
      {
        loading ? 
          <h1>{`latitude: ${position?.lat} longitude: ${position?.lon}`}</h1>
        :
          <Loader />
      }
    </div>
  )
}

export default App
