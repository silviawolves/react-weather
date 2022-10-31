import '../assets/css/weather.css';

function Weather(props) {
    return (
        <div className="weather-wrapper">
            <p>{props.description}</p>
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                    alt=""
                    className="weather-img"
                />
            </div>
            <p>22°</p>
        </div>
    );
}

export default Weather;
