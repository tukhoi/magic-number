var React = require('react');

class PosButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isToggleOn: false};

        this.clicked = () => {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));

            this.props.clicked(!this.state.isToggleOn);
        };
    }

    render() {
        var btnClassName = this.props.type == 'InPos' ? "btn btn-primary" : "btn btn-warning";
        var disabled = this.props.disabled ? 'disabled': '';


        return(
            <button className={btnClassName} onClick={this.clicked} disabled={disabled}>
                {this.state.isToggleOn ? <i className="glyphicon glyphicon-ok"></i>: <i className="glyphicon glyphicon-remove"></i>}
            </button>
        );
    }
}

module.exports = PosButton