import Item from 'antd/lib/list/Item';
import '../assets/css/datelocation.css';

function DateLocation(props) {
    return (
        <div className="dl-wrapper">
            <h1>{props.name}</h1>
            <p className="date-time">00.00 00/00/0000</p>
        </div>
    );
}

export default DateLocation;
