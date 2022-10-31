import {Input} from 'antd';
import {useState} from 'react';
import '../assets/css/searchbar.css';

const {Search} = Input;

function SearchBar() {
    const onSearch = (value) => {
        console.log(value);
    };
    return (
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
    );
}

export default SearchBar;
