let React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title"> Examples </h1>
            <p> Here are a few example locations to try out- </p>
            <ol>
                <li>
                    <Link to="/?cityName=New Delhi">New Delhi, IN</Link>
                </li>
                <li>
                    <Link to="/?cityName=Beijing">Beijing, CN</Link>
                </li>
            </ol> 
        </div>
    );
}

module.exports = Examples;