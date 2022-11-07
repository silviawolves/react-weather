import 'antd/dist/antd.css';
import './container.css';

import {useState, useEffect} from 'react';
import {Input, Layout, Form} from 'antd';
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

    const [form] = Form.useForm();

    const onSearch = (value) => {
        setCity(value);
        if (value === '') {
            setCity(city);
        }
    };

    const onSubmit = ({search}) => {
        form.resetFields();
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
            <div
                className="App"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage:
                        result.weather[0].id >= 200 &&
                        result.weather[0].id <= 232
                            ? 'url(./public/img/storm.jpg)'
                            : result.weather[0].id >= 500 &&
                              result.weather[0].id <= 531
                            ? 'url(./public/img/rain.jpg)'
                            : result.weather[0].id >= 600 &&
                              result.weather[0].id <= 622
                            ? 'url(./public/img/snow.jpg)'
                            : result.weather[0].id >= 801 &&
                              result.weather[0].id <= 804
                            ? 'url(./public/img/cloudy.jpg)'
                            : result.weather[0].id === 800
                            ? 'url(./public/img/clear.jpg)'
                            : '',
                }}>
                <Content>
                    <Form
                        form={form}
                        className="input-wrapper"
                        onFinish={onSubmit}>
                        <Form.Item name="search">
                            <Search onSearch={onSearch} />
                        </Form.Item>
                    </Form>

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
