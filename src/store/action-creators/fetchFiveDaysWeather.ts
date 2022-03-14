import axios from "axios"
import { Dispatch } from "redux"
import { FiveDaysWeatherAction, FiveDaysWeatherActionTypes } from "../../types/fiveDaysWeather"

export const fetchFiveDaysWeather = (searchValue: String) => {
    return async (dispatch: Dispatch<FiveDaysWeatherAction>) => {
        try {
            dispatch({type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=8e82a4c8f80f7ddcdd43515982ea3975`)
            setTimeout(() => {
                dispatch({type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_SUCCESS, payload: response})
            }, 1000);
        }
         catch (e) {
            dispatch({
                type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_ERROR,
                payload: "An error is occured"
            })
        }
    }
}