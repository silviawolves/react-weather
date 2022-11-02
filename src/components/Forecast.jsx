import {Divider, Row, Col} from 'antd';
import {useState, useEffect} from 'react';
import {API_KEY} from '../components/api';
import '../assets/css/forecast.css';

function Forecast(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}&appid=${API_KEY}&units=metric`,
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    console.log(data);
                    setForecast(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    return (
        <div>
            <Divider orientation="left">Daily Forecast</Divider>

            <Row align="middle" justify="space-between">
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                {/* <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col> */}
            </Row>
        </div>
    );
}

export default Forecast;
