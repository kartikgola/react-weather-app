let React = require('react');
let WeatherForm = require('./WeatherForm');
let WeatherMessage = require('./WeatherMessage');
let openWeatherMap = require('../api/openWeatherMap');
let ErrorModal = require('./ErrorModal');

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
            cityName : undefined,
            temp : undefined,
            errorMessage : undefined
        })
        openWeatherMap.getTemp(cityName).then(function(temp){
            that.setState({
                cityName : cityName,
                temp : temp,
                isLoading : false
            });
        }, function(err){
            that.setState({
                isLoading : false,
                errorMessage : err.message
            });
        });
    },

    componentDidMount : function() {
         let cityName = this.props.location.query.cityName;
         if ( cityName && cityName.length > 0 ) {
             this.handleSearch( cityName );
             window.location.hash = '#/';
         }
    },

    componentWillReceiveProps : function(newProps) { // called when component props get updated
        let cityName = newProps.location.query.cityName;
         if ( cityName && cityName.length > 0 ) {
             this.handleSearch( cityName );
             window.location.hash = '#/';
         }
    },

    render : function(){

        let isLoading = this.state.isLoading;
        let cityName = this.state.cityName;
        let temp = this.state.temp;
        let errorMessage = this.state.errorMessage;

        function renderError(){
            if ( errorMessage  )
                return <ErrorModal message={errorMessage} />
        };

        function renderMessage(){
            if ( isLoading ){
                return <h3 className="text-center"> Fetching weather info... </h3>;
            } else if ( temp && cityName ){
                return <WeatherMessage cityName={cityName} temp={temp}/>;
            }
        };

        return (
            <div>
                <h1 className="text-center page-title"> Get Weather </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;