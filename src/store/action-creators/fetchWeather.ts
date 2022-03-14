import axios from "axios"
import { Dispatch } from "redux"
import { WeatherAction, WeatherActionTypes } from "../../types/weather"


export const fetchWeather = (searchValue: String) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8e82a4c8f80f7ddcdd43515982ea3975`)
            setTimeout(() => {
                dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response})
            }, 1000);
        }
         catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: "An error is occured"
            })
        }
    }
}