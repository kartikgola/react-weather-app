let React = require('react');
let ReactDOM = require('react-dom');
let ReactDOMServer = require('react-dom/server');

let ErrorModal = React.createClass({

    getDefaultProps : function() {
        return {
            title : 'Oops!'
        }
    },

    propTypes : {
        title : React.PropTypes.string,
        message : React.PropTypes.string.isRequired
    },

    componentDidMount: function() {

        let {title, message} = this.props;
        let modalMarkup = (
            <div id='errorModal' className='reveal tiny text-center' data-reveal="">
                <h4> {title} </h4>
                <p> {message} </p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        let modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    },

    render : function() {
    
        return (
            <div>
            </div>
        )
    }
});

module.exports = ErrorModal;