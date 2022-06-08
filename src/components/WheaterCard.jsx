import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faCloud, faDropletSlash } from '@fortawesome/free-solid-svg-icons'


const WheaterCard = ({ weather }) => {

    const [celsius, setCelsius] = useState(true)


    let tempArray = [];

    const temp = (tempArray, weather) => {
        tempArray.push(weather?.main.temp)
        tempArray.push(Number((weather?.main.temp - 273.15).toFixed(2)))
        tempArray.push(Number(((1.8 * ((weather?.main.temp) - 273.15)) + 32).toFixed(2)))

        return tempArray
    }

    tempArray = temp(tempArray, weather);

    const changeTemp = () => {
        setCelsius(!celsius)
    }

    return (
        <div className='weather'>
            <div className='weather-container'>

                <h2>{`${weather?.name} , ${weather?.sys.country}`}</h2>

                <div className='weather-content'>
                    <div className='weather-description'>
                        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon-weather" />
                        <div className='weather-description-temp'>
                            <h3>
                                {
                                    celsius ?
                                        `${tempArray[1]} Cº `
                                        :
                                        `${tempArray[2]} Fº`
                                }
                            </h3>
                            <button onClick={changeTemp}>
                                {
                                    celsius ?
                                        `Convert to Fº`
                                        :
                                        `Convert to Cº`

                                }
                            </button>
                        </div>
                    </div>


                    <div className='weather-info'>
                        <div className='title'>
                            <h3>{weather?.weather[0].description}</h3>
                        </div>
                        <div className='wind-speed'>
                            <FontAwesomeIcon icon={faWind} />
                            <h4>Wind Speed:</h4>
                            <p>{weather?.wind.speed} m/s</p>
                        </div>
                        <div className='clouds'>
                            <FontAwesomeIcon icon={faCloud} />
                            <h4>Clouds:</h4>
                            <p>{weather?.clouds.all} % </p>
                        </div>
                        <div className='clouds'>
                            <FontAwesomeIcon icon={faDropletSlash} />
                            <h4>Humidity:</h4>
                            <p>{weather?.main.humidity} % </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheaterCard
