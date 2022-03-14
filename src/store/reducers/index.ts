import { combineReducers } from 'redux';
import { FiveDaysWeatherReducer } from './FiveDaysWeatherReducer';
import { TodayWeatherReducer } from './TodayWeatherReducer';

export const rootReducer = combineReducers({
    today: TodayWeatherReducer,
    fiveDays: FiveDaysWeatherReducer
})

export type RootState = ReturnType<typeof rootReducer>