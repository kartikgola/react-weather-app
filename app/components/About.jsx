let React = require('react');

let About = (props) => {
    return (
        <div>
            <h1 className="text-center"> About </h1>
            <p> 
                Weather Application built with React.
                Built for learning React component and states.
            </p>
            <p>
                Some specs - 
                <ul>
                    <li> 
                        JavaScript framework - <a href="https://facebook.github.io/react"> React </a>
                    </li>
                    <li>
                        Weather API - <a href="http://openweathermap.org"> Open Weather Map </a>
                    </li>
                </ul>
            </p>
        </div>
    );
}

module.exports = About;