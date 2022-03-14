import { WeatherState, WeatherActionTypes, WeatherAction } from "../../types/weather"

const defaultState: WeatherState = {
    weather: {},
    loading: false,
    error: null
}

export const TodayWeatherReducer = (state = defaultState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {loading: true, error: null, weather:{}}
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {loading: false, error: null, weather: action.payload.data}
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {loading: false, error: action.payload, weather:{}}
        default:
            return state
    }
}