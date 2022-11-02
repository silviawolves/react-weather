import {Row, Col} from 'antd';
import '../assets/css/weather.css';

function Weather(props) {
    return (
        <Row align="middle" justify="center" style={{textAlign: 'center'}}>
            <Col span={6}>
                <p style={{textTransform: 'capitalize'}}>
                    {props.data.weather[0].description}
                </p>
            </Col>

            <Col span={6}>
                <img
                    src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
                    alt={props.data.weather[0].description}
                    className="weather-img"
                />
            </Col>

            <Col span={6}>
                <p>{Math.round(props.data.main.temp)}° C</p>
            </Col>
        </Row>
    );
}

export default Weather;
