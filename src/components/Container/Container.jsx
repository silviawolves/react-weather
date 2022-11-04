import 'antd/dist/antd.css';
import './container.css';
import '../../css/searchbar.css';

import {useState, useEffect} from 'react';
import {Input, Layout} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {API_KEY} from '../../api';

import dayjs from 'dayjs';
import DateLocation from '../DateLocation';
import Weather from '../Weather';
import Forecast from '../Forecast';

const {Content} = Layout;
const {Search} = Input;

function Container() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [city, setCity] = useState('Venezia');
    const [result, setResult] = useState({});

    const onSearch = (value) => {
        setCity(value);
        if (value === '') {
            setCity(city);
        }
    };

    useEffect(() => {
        const handleError = (response) => {
            if (!response.ok) {
                throw setCity('');
            } else {
                return response.json();
            }
        };

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )
            .then(handleError)
            .then((data) => {
                setIsLoaded(true);
                setResult(data);
            })
            .catch((error) => {
                setError(error);
                setIsLoaded(true);
            });
    }, [city]);

    if (!isLoaded) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <LoadingOutlined />
            </div>
        );
    } else {
        return (
            <div className="App">
                <Content>
                    <div className="input-wrapper">
                        <Search
                            bordered={false}
                            placeholder="Search city..."
                            onSearch={onSearch}
                            style={{width: 200}}
                        />
                    </div>

                    <DateLocation
                        name={result.name}
                        country={result.sys.country.toUpperCase()}
                        date={dayjs().format('dddd')}
                    />

                    <Weather data={result} />
                    <Forecast data={result} />
                </Content>
            </div>
        );
    }
}

export default Container;
