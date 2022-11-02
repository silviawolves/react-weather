import '../assets/css/weather.css';

function Weather(props) {
    return (
        <div className="weather-wrapper">
            <p style={{textTransform: 'capitalize'}}>{props.weather}</p>
            <div>
                <img
                    src={props.image}
                    alt={props.alt}
                    className="weather-img"
                />
            </div>
            <p>{props.temperature}° C</p>
        </div>
    );
}

export default Weather;
