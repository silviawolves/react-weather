import './searchbar.css';

function Searchbar() {
    return (
        <Search
            allowClear={true}
            bordered={false}
            placeholder="Search city"
            onSearch={onSearch}
            style={{width: 200}}
        />
    );
}

export default Searchbar;
