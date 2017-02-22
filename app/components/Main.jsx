let React = require('react');
let Nav = require('./Nav');

let Main = (props) => {
    return (
            <div>
                <Nav />
                <div className='row'>
                    <div className="columns small-8 medium-6 large-6 small-centered">
                        {props.children}
                    </div>
                </div>
            </div>
        );
}

module.exports = Main;