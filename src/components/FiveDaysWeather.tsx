import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import dayjs from "dayjs";
import { bgStyle, formatTemp } from './misc';

export const FiveDaysWeather: React.FC = () => {
    const {weather, loading, error} = useTypedSelector(state => state.fiveDays)

    const renderInterval = (item: any) => {
        return(
            <div className="col-lg-4 col-sm-6" key={item.dt}>
                <div className="display__interval" style={{background: bgStyle(item.weather[0].icon)}}>
                    <p className="display__date">{dayjs(item.dt * 1000).format('DD:MM')}</p>
                    <p className="display__time">{dayjs(item.dt * 1000).format('HH:mm')}</p>
                    <div className="display__visual visual">
                        <div className="visual__icon">
                            <img src={`./icons/weather/${item.weather[0].icon}.svg`} alt={item.weather[0].icon} />
                        </div>
                        <p className="visual__text">{item.weather[0].description}</p>
                    </div>
                    <p className="display__temp">{formatTemp(item.main.temp)}</p>
                    <p className="display__flike">Feels like: {formatTemp(item.main.feels_like)}</p>
                    <p className="display__pressure">Pressure: {item.main.pressure}mm</p>
                    <p className="display__humidity">Humidity: {item.main.humidity}%</p>
                </div>
            </div>
        )
    }

    return(
        <div className="main__fdays tabcontent" id="5days">
            {weather.cod === '200'?
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-7 col-xxl-6">
                        <div className="main__display display">
                            <div className="row flex-nowrap" id="display">
                                {weather.list.map(renderInterval)}
                            </div>
                        </div>
                    </div>
                </div>:
                error ? <h2>{error}</h2>:
                loading ? <div className="preloader"></div>:
                <h2>Please, enter the city</h2>
            }
            
        </div>
    )
}