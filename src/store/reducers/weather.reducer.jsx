import {fetchWeather} from '../actions/weather.action';
import {createReducer} from '@reduxjs/toolkit';

export const weatherReducer = createReducer({}, (builder) =>
    builder.addCase('FETCH_WEATHER', (state, action) => action.payload),
);
