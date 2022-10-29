import 'antd/dist/antd.css';
import './App.css';
import SearchBar from './components/SearchBar';
import DateLocation from './components/DateLocation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
    return (
        <div className="App">
            <SearchBar />
            <DateLocation />
            <Weather />
            <Forecast />
        </div>
    );
}

export default App;
