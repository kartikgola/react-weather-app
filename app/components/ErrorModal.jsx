let React = require('react');

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
        let modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    },

    render : function() {

        let {title, message} = this.props;

        return (
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
    }
});

module.exports = ErrorModal;