var React = require('react');
var GuessNumber = require('./GuessNumber')
var _ = require('underscore')

class Try extends React.Component{
    render() {
        return (
            <div className="table-reponsive">
                <table className="table table-striped">
                    <thead>
                        <tr className="info">
                            <th>
                                YOUR NUMBER?
                            </th>
                            <th>
                                HOW MANY DIGITS AT CORRECT POS?
                            </th>
                            <th>
                                HOW MANY DIGITS AT INCORRECT POS?
                            </th>
                            <th>
                                ...
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.range(this.props.tried.length).map(i => 
                                <GuessNumber key={i} value={this.props.tried[i]} tryResult={this.props.tryResult} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = Try;