import { FiveDaysWeatherState, FiveDaysWeatherActionTypes, FiveDaysWeatherAction } from "../../types/fiveDaysWeather"

const defaultState: FiveDaysWeatherState = {
    weather: {},
    loading: false,
    error: null
}

export const FiveDaysWeatherReducer = (state = defaultState, action: FiveDaysWeatherAction): FiveDaysWeatherState => {
    switch (action.type) {
        case FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER:
            return {loading: true, error: null, weather:{}}
        case FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_SUCCESS:
            return {loading: false, error: null, weather: action.payload.data}
        case FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_ERROR:
            return {loading: false, error: action.payload, weather:{}}
        default:
            return state
    }
}