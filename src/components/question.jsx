import React from 'react';
import ReactDOM from 'react-dom';

class Question extends React.Component {
    render() {
        return (
            <h1> {this.props.match.params.questionId} </h1>
    )
    }

}

export default Question;