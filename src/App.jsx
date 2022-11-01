import 'antd/dist/antd.css';
import './App.css';
import {useState, useEffect} from 'react';
import {API_KEY} from './components/api';
import SearchBar from './components/SearchBar';
import DateLocation from './components/DateLocation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
    const [result, setResult] = useState('');
    const [city, setCity] = useState('Tokyo');

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResult(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    console.log(result);
    return (
        <div className="App">
            <SearchBar />
            <DateLocation name={result.name} />
            <Weather description={result.name} />
            <Forecast />
        </div>
    );
}
export default App;
