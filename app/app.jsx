let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('./components/Main');
let Weather = require('./components/Weather');
let About = require('./components/About');
let Examples = require('./components/Examples');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='about' component={About}/>
            <Route path='examples' component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route> 
    </Router>, 
    document.getElementById('app')
);
