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

        this.numberStyle = {
            'display': 'inline-block',
            'margin': '0.5em',
            'text-align': 'center',
            'background-color': '#aaddaa',
            'color': '#034f84',
            'width': '24px',
            'border-radius': '50%',
            'cursor': 'pointer',
            'font-weight': 'bold'
        };

        this.inputStyle = {
            'width': '10px',
            'v-align': 'bottom'
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
                    {
                        String("0000" + this.props.value).slice(-4).split('').map((number, i) => {
                            return <span style={this.numberStyle} key={i}>
                                {number}
                            </span>
                        })
                    }
                   
                </td>
                <td>
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>
                    <PosButton type='InPos' clicked={this.inPosClick} disabled={this.state.done}/>
                    <span>{this.state.inPos}</span>
                </td>
                <td>
                    {/*<input type="text" ref={(num2Input) => {this.num2Input = num2Input}}></input>*/}
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>
                    <PosButton type='OutPos' clicked={this.outPosClick} disabled={this.state.done}/>
                    <span>{this.state.outPos}</span>
                </td>
                <td>
                    <button className="btn btn-success" onClick={this.tryResult} disabled={this.state.done}>Horray!</button>
                </td>
            </tr>
        )
    }
}

module.exports = GuessNumber