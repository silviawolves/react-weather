import 'antd/dist/antd.css';
import './App.css';
import SearchBar from './components/SearchBar';
import './App.css';
import DateLocation from './components/DateLocation';
import Weather from './components/Weather';

function App() {
    return (
        <div className="App">
            <SearchBar />
            <DateLocation />
            <Weather />
        </div>
    );
}

export default App;
