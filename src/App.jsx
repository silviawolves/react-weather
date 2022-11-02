import 'antd/dist/antd.css';
import './App.css';
import {useState, useEffect} from 'react';
import {API_KEY} from './components/api';
import SearchBar from './components/SearchBar';
import DateLocation from './components/DateLocation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState({});

    const [city, setCity] = useState('Milano');

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setResult(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    // useEffect(() => {
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=${
    //             result.coord && result.coord.lat
    //         }&lon=${result.coord && result.coord.lon}&appid=${API_KEY}`,
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setResult(data);
    //         });
    // }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <SearchBar />
                <DateLocation name={result.name} />
                <Weather
                    weather={result.weather[0].description.toUpperCase()}
                    image={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
                    alt={result.weather[0].description}
                    temperature={Math.round(result.main.temp)}
                />
                <Forecast />
            </div>
        );
    }
}

export default App;
