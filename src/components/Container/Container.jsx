import 'antd/dist/antd.css';
import './container.css';
import '../../css/searchbar.css';

import {useState, useEffect} from 'react';
import {Input, Layout, Form} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {API_KEY} from '../../api';
import {useForm} from 'react-hook-form';

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
        console.log(search);
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
                    padding: '2rem',
                    borderRadius: '20px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage:
                        result.weather[0].id >= 801 &&
                        result.weather[0].id <= 804
                            ? 'url(./public/img/cloudy.jpg)'
                            : result.weather[0].id === 800
                            ? 'url(./public/img/clear_sky.webp)'
                            : '',
                }}>
                <Content>
                    <Form
                        form={form}
                        className="input-wrapper"
                        onFinish={onSubmit}>
                        <Form.Item name="search">
                            <Search
                                allowClear={true}
                                bordered={false}
                                placeholder="Search city"
                                onSearch={onSearch}
                                style={{width: 200}}
                            />
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
