var React = require('react');
var Try = require('./Try')
var _ = require('underscore')

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: _.range(9999),
            tried: [],
        };

         _.range(this.state.mark.length).map(i => this.state.mark[i] = true);

        this.tryRandom = () => Math.floor(Math.random() * 9999);

        this.start = () => {
            var tryNumber = this.tryRandom();
            this.tryAndSee(tryNumber);
        };

        this.tryAndSee = (tryNumber) => {
            this.setState(prevState => ({
                tried: prevState.tried.concat(tryNumber)
            }));
        };

        this.process = (tryNumber, inPos, outPos) => {
            let temp = this.state.mark;

            for(var i = 0; i < temp.length; i++){
                if (temp[i]) {
                    var tryNumberDigitArray = this.formatNumber(tryNumber);
                    var iDigitArray =  this.formatNumber(i);

                    var inPosResult = this.countInPos(tryNumberDigitArray, iDigitArray);
                    var outPosResult = this.countOutPos(tryNumberDigitArray, iDigitArray);

                    temp[i] = inPosResult == inPos && outPos == outPos;
                }
            }

            this.setState({
                mark: temp
            });

            var left = this.pickLeft();
            var win = left.length == 1;

            if (win) alert('The number in your mind is ' + this.formatNumber(left[0]));
            var next = this.pickNext(left);
            this.tryAndSee(next);
        };

        this.countInPos = (firstNumberDigitArray, secondNumberDigitArray) => {
            var countResult = 0;
            _.range(4).map(i => {
                if (firstNumberDigitArray[i] === secondNumberDigitArray[i]) countResult++;
            });

            return countResult;
        };

        this.countOutPos = (firstNumberDigitArray, secondNumberDigitArray) => {
            var countResult = 0;

            for (var i = 0; i < firstNumberDigitArray.length; i++)
                for (var j = i + 1; j < secondNumberDigitArray.left; j++)
                    if (firstNumberDigitArray[i] == secondNumberDigitArray[j])
                        countResult++;

            return countResult;
        };

        this.formatNumber = (number) => String("00000" + number).slice(-4).split('');

        this.pickLeft = () => {
            //var left = [];
            var left = _.range(this.state.mark.length).reduce((a, i)=>{
                if (this.state.mark[i]) return a.concat(i);
                return a;
            }, []);

            return left;
        };

        this.pickNext = (left) => {
            var index = Math.floor(Math.random() * left.length);

            return left[index];
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Magic Number</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3><button className="btn btn-primary" onClick={this.start}>Start</button></h3>
                    </div>
                </div>
                
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <Try tried={this.state.tried} tryResult={this.process}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Game;