import {Row, Col, Divider} from 'antd';
import '../assets/css/weather.css';

function Weather(props) {
    return (
        <div className="weather-wrapper">
            <Row
                align="middle"
                justify="center"
                gutter={20}
                style={{textAlign: 'center'}}>
                <Col span={12}>
                    <div className="wrap-col">
                        <img
                            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
                            alt={props.data.weather[0].description}
                            className="weather-img"
                        />
                        <p
                            style={{
                                textTransform: 'capitalize',
                                margin: 0,
                                fontSize: '1.5rem',
                            }}>
                            {props.data.weather[0].description}
                        </p>
                    </div>
                    <div>
                        <p className="temperature">
                            {Math.round(props.data.main.temp)}° C
                        </p>
                    </div>
                </Col>

                <Col span={4}>
                    <p>{Math.round(props.data.main.temp_min)}° C</p>
                    <Divider style={{borderColor: 'white'}} />
                    <p>{Math.round(props.data.main.temp_max)}° C</p>
                </Col>
            </Row>
        </div>
    );
}

export default Weather;
