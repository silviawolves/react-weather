import 'antd/dist/antd.css';
import './App.css';
import './assets/css/searchbar.css';
import {useState, useEffect} from 'react';
import {Input} from 'antd';
import {API_KEY} from './components/api';
import DateLocation from './components/DateLocation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

const {Search} = Input;

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [city, setCity] = useState('Roma');
    const [result, setResult] = useState({});
    const onSearch = (value) => {
        setCity(value);
    };

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
    }, [city]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <div className="input-wrapper">
                    <Search
                        bordered={false}
                        placeholder="Search city..."
                        onSearch={onSearch}
                        style={{
                            width: 200,
                            textTransform: 'capitalize',
                        }}
                    />
                </div>

                <DateLocation name={result.name} />

                <Weather data={result} />

                <Forecast data={result} />
            </div>
        );
    }
}

export default App;
