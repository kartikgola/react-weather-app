let React = require('react');
let WeatherForm = require('./WeatherForm');
let WeatherMessage = require('./WeatherMessage');
let openWeatherMap = require('../api/openWeatherMap');

let Weather = React.createClass({

    getInitialState : function() {
        return {
            isLoading : false
        }
    }, 

    handleSearch : function(cityName){
        let that = this;
        
        this.setState({
            isLoading : true,
            cityName : '',
            temp : ''
        })
        openWeatherMap.getTemp(cityName).then(function(temp){
            that.setState({
                cityName : cityName,
                temp : temp,
                isLoading : false
            });
        }, function(errorMessage){
            that.setState({
                isLoading : false
            });
            alert(errorMessage);
        });
    },

    render : function(){

        let isLoading = this.state.isLoading;
        let cityName = this.state.cityName;
        let temp = this.state.temp;

        function renderMessage(){
            if ( isLoading ){
                return <h3> Fetching weather info... </h3>;
            } else if ( temp && cityName ){
                return <WeatherMessage cityName={cityName} temp={temp}/>;
            }
        };

        return (
            <div>
                <h3> Get Weather Component </h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;