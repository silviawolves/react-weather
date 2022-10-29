import {useState} from 'react';
import {Input, Space} from 'antd';
import '../assets/css/searchbar.css';

function SearchBar() {
    const {Search} = Input;
    const onSearch = (value) => {
        setCity(value);
        console.log(value);
    };
    const [city, setCity] = useState('');
    return (
        <div className="input-wrapper">
            <Space direction="vertical">
                <Search
                    bordered={false}
                    placeholder="Find city..."
                    onSearch={onSearch}
                    style={{
                        width: 200,
                        textTransform: 'capitalize',
                    }}
                />
            </Space>
        </div>
    );
}

export default SearchBar;
