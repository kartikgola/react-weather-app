let React = require('react');
let {Link, IndexLink} = require('react-router');


let Nav = React.createClass({

    onSearch : function(e){
        e.preventDefault();
        let cityName = this.refs.navSearch.value;
        let encodedCN = encodeURIComponent(cityName);
        if ( cityName.length > 0 ){
            this.refs.navSearch.value = '';
            window.location.hash = '#/?cityName=' + encodedCN;
        }
    },

    render : function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text" > 
                            React Weather App 
                        </li> 
                        <li>
                            <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
                        </li>
                        <li>
                            <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
                        </li>
                        <li>
                            <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref='navSearch' placeholder="Search weather by city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;