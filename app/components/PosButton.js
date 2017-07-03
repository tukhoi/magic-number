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
        var btnType = this.props.type == 'InPos' ? "btn-primary" : "btn-info";
        var disabled = this.props.disabled ? 'disabled': '';

        return(
            <button className="btn btnType" onClick={this.clicked} disabled={disabled}>
                {this.state.isToggleOn ? ':)': '-'}
            </button>
        );
    }
}

module.exports = PosButton