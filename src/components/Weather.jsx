import '../assets/css/weather.css';

function Weather(props) {
    return (
        <div className="weather-wrapper">
            <p style={{textTransform: 'capitalize'}}>
                {props.data.weather[0].description}
            </p>

            <div>
                <img
                    src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
                    alt={props.data.weather[0].description}
                    className="weather-img"
                />
            </div>

            <p>{Math.round(props.data.main.temp)}° C</p>
        </div>
    );
}

export default Weather;
