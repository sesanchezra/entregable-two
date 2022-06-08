import React, { useState } from 'react'
import Loader from './Loader'

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

            <h1>Weather App</h1>
            <h2>{`${weather?.name} , ${weather?.sys.country}`}</h2>

            <div className='weather-content'>
                <div className='weather-description'>
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon-weather" />
                    <h3>
                        {
                            celsius ?
                                `${tempArray[1] } Cº `
                            :
                                `${tempArray[2] } Fº`
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


                <div className='weather-info'>

                </div>
            </div>








        </div>
    )
}

export default WheaterCard
