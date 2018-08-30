import React from 'react';
import {Link} from 'react-router-dom';
import './question.css'


class Question extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            question: null
        }

    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params.questionId !== prevProps.match.params.questionId) {
            this.loadData();
        }
    }

    loadData(){
        fetch('/questions/' + this.props.match.params.questionId)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ question: myJson });

            });
    }

    answerSelected = (answer) => {
        this.props.onAnswer({
            id: this.state.question.id,
            answerType: answer.type
        });
    };

    render() {
        if(!this.state.question) {
            return <div>Proszę czekać</div>;
        }

        if(!this.state.question.id) {
            return <div>Nie znaleznino pytania</div>;
        }

        return (
            <div>
                <h1> {this.state.question.question}</h1>
                {
                    this.state.question.answers.map(answer => {
                        return <div key={answer.type }
                                    onClick={ () => this.answerSelected(answer) }
                        >
                              {answer.content}
                            </div>
                    })
                }
            </div>
        );

    }
}

export default Question;