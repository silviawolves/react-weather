import '../assets/css/weather.css';

function Weather() {
    return (
        <div className="weather-wrapper">
            <p>Rainy</p>
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
