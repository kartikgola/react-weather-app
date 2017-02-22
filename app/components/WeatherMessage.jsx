let React = require('react');


let WeatherMessage = (props) => {
    return (
            <div>
                <h3 className="text-center"> Temperature in {props.cityName} is {props.temp} </h3>
            </div>
        );
}

module.exports = WeatherMessage;  