import {Divider, Row, Col} from 'antd';
import '../assets/css/forecast.css';

function Forecast() {
    return (
        <div>
            <Divider orientation="left">Daily Forecast</Divider>

            <Row align="middle" justify="space-between">
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
                <Col>
                    <div className="forecast-wrapper">
                        <h4>Mon</h4>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/116/116251.png"
                                alt=""
                                style={{height: '30px'}}
                            />
                        </div>
                        <p>13°</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Forecast;
