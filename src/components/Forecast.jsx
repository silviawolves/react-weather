import {Divider, Row, Col} from 'antd';
import {useState, useEffect} from 'react';
import {API_KEY} from '../components/api';
import '../assets/css/forecast.css';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function Forecast(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [forecast, setForecast] = useState({});

    const dayInWeek = new Date().getDay();
    const forecastDays = weekDays
        .slice(dayInWeek, weekDays.length)
        .concat(weekDays.slice(0, dayInWeek));

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}&appid=${API_KEY}&units=metric`,
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setForecast(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Divider orientation="left" className="forecast-title">
                    Daily Forecast
                </Divider>

                <Row align="middle" justify="space-between">
                    {forecast.list.splice(0, 5).map((day, i) => (
                        <Col key={i}>
                            <div className="forecast-wrapper">
                                <div>
                                    <h4>{forecastDays[i]}</h4>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                        alt=""
                                        style={{height: '30px'}}
                                    />
                                    <p>{Math.round(day.main.temp)}° C</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default Forecast;
