var React = require('react');
var GuessNumber = require('./GuessNumber')
var _ = require('underscore')

class Try extends React.Component{
    render() {
        return (
            <div className="table-reponsive">
                <table className="table table-bordered">
                    <thead>
                        <tr className="info">
                            <th>
                                <button className="btn btn-info center-block" disabled>
                                    <i className="glyphicon glyphicon-question-sign"></i>
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-primary center-block" disabled>
                                    <i className="glyphicon glyphicon-ok"></i>
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-warning center-block" disabled>
                                    <i className="glyphicon glyphicon-ok"></i>
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-success center-block" disabled>
                                    <i className="glyphicon glyphicon-thumbs-up"></i>
                                </button>
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