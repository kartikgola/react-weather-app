let React = require('react');


let WeatherMessage = (props) => {
    return (
            <div>
                <h1> Temperature in {props.cityName} is {props.temp} </h1>
            </div>
        );
}

module.exports = WeatherMessage;  