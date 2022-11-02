import '../assets/css/datelocation.css';

function DateLocation(props) {
    return (
        <div className="dl-wrapper">
            <h1 style={{textTransform: 'capitalize'}}>{props.name}</h1>
            <p className="date-time">Today</p>
        </div>
    );
}

export default DateLocation;
