export interface FiveDaysWeatherState {
    weather: any;
    loading: boolean;
    error: null | string;
}

export enum FiveDaysWeatherActionTypes {
    FETCH_FIVEDAYS_WEATHER = 'FETCH_FIVEDAYS_WEATHER',
    FETCH_FIVEDAYS_WEATHER_SUCCESS = 'FETCH_FIVEDAYS_WEATHER_SUCCESS',
    FETCH_FIVEDAYS_WEATHER_ERROR = 'FETCH_FIVEDAYS_WEATHER_ERROR'
}

interface FetchFiveDaysWeatherAction {
    type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER;
}

interface FetchFiveDaysWeatherSuccessAction {
    type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_SUCCESS;
    payload: any
}

interface FetchFiveDaysWeatherErrorAction {
    type: FiveDaysWeatherActionTypes.FETCH_FIVEDAYS_WEATHER_ERROR;
    payload: string
}

export type FiveDaysWeatherAction = FetchFiveDaysWeatherAction | FetchFiveDaysWeatherSuccessAction | FetchFiveDaysWeatherErrorAction