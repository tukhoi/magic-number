var React = require('react');
var PosButton = require('./PosButton');

class GuessNumber extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { 
            inPos: 0,
            outPos: 0,
            done: false
        };

        this.tryResult = () => {
            this.setState({
                done: true
            });
            this.props.tryResult(this.props.value, this.state.inPos, this.state.outPos);
        };

        this.toggleInPos = () => {
            this.setState(prevState => ({
                inPos: prevState.inPos + 1
            }));
        };

        this.inPosClick = (toggleOn) => {
            if (toggleOn)
                this.setState((prevState) => ({
                    inPos: prevState.inPos + 1
                }));
            else
                this.setState((prevState) => ({
                    inPos: prevState.inPos - 1
                }));
        };

        this.outPosClick = (toggleOn) => {
            if (toggleOn)
                this.setState((prevState) => ({
                    outPos: prevState.outPos + 1
                }));
            else
                this.setState((prevState) => ({
                    outPos: prevState.outPos - 1
                }));
        };
    }

    render() {
        return (
            <tr>
                <td>
                    <div>
                    {
                        String("0000" + this.props.value).slice(-4).split('').map((number, i) => {
                            {/*return <span style={this.numberStyle} key={i}>
                                {number}
                            </span>*/
                                return <button className="btn btn-info">
                                    {number}
                                </button>
                            }
                        })
                    }
                    </div>
                </td>
                <td>
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>&nbsp;
                    <i className="glyphicon glyphicon-arrow-right"></i>&nbsp;
                    <span className="h3">{this.state.inPos}</span>
                </td>
                <td>
                    {/*<input type="text" ref={(num2Input) => {this.num2Input = num2Input}}></input>*/}
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>&nbsp;
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>&nbsp;
                    <i className="glyphicon glyphicon-arrow-right"></i>&nbsp;
                    <span className="h3">{this.state.outPos}</span>
                </td>
                <td>
                    <button className="btn btn-success center-block" onClick={this.tryResult} disabled={this.state.done}>
                        <i className="glyphicon glyphicon-hand-up"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

module.exports = GuessNumber