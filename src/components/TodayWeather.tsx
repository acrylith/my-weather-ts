import React from 'react';
import dayjs from 'dayjs';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { bgStyle, formatTemp } from './misc';

export const TodayWeater: React.FC = () => {
    const {weather, error, loading} = useTypedSelector(state => state.today)

    return (
        <div className="main__today tabcontent" id="today">

            {weather.cod === 200?
            <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-7 col-xxl-6">
                    <div className="main__card" style={{background: bgStyle(weather.weather[0].icon)}}>
                        <div className="main__visual visual">
                            <div className="visual__icon">
                                <img src={`./icons/weather/${weather.weather[0].icon}.svg`} alt="weather-icon" />
                            </div>
                            <p className="visual__text">{weather.weather[0].main}</p>
                        </div>
    
                        <div className="main__desc desc">
                            <p className="desc__temp">{formatTemp(weather.main.temp)}</p>
                            <div className="desc__calendar">
                                <p className="desc__day">{dayjs(weather.dt * 1000).format('dddd')}</p>
                                <p className="desc__date">{dayjs(weather.dt * 1000).format('MMMM, DD')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="main__info">
                        <p>Feels like: {formatTemp(weather.main.feels_like)}</p>
                        <p>Pressure: {weather.main.pressure} mm</p>
                        <p>Temp. min: {formatTemp(weather.main.temp_min)}</p>
                        <p>Temp. max: {formatTemp(weather.main.temp_max)}</p>
                        <p>Wind: {weather.wind.speed}m/s, {weather.wind.deg}deg</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Sunrise: {dayjs(weather.sys.sunrise * 1000).format('HH:MM')}</p>
                        <p>Sunset: {dayjs(weather.sys.sunset * 1000).format('HH:MM')}</p>
                    </div>
                </div>
            </div>:

            error ? <h2>{error}</h2>:
            loading ? <div className="preloader"></div>
            :<h2>Please, enter the city</h2>}
        </div>
    );
};