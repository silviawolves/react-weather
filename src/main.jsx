import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import Container from './components/Container';
import {weatherReducer} from './store/reducers/weather.reducer';

import 'antd/dist/antd.css';
import './css/style.css';

export const store = configureStore({
    reducer: weatherReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Container />
        </Provider>
    </React.StrictMode>,
);
