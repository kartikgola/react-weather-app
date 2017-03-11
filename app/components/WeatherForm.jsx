let React = require('react');

let WeatherForm = React.createClass({

    onFormSubmit : function(e){
        e.preventDefault();
        var cityName = this.refs.cityName.value;
        if ( cityName.length > 0 ) {
            this.props.onSearch(cityName);
        }
    },

    render : function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='search' ref='cityName' placeholder='Search weather by city' />
                    <button className="button expanded hollow" type='submit'> Submit </button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;