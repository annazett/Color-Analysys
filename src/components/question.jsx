import React from 'react';
import {Link} from 'react-router-dom';
import styles from './question.css';

console.log(styles);

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
        fetch(`https://color-analysys.firebaseio.com/questions/${parseInt(this.props.match.params.questionId, 10) - 1}.json`)
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
            <div className={ "question" }>
                <h1> {this.state.question.question}</h1>
                {
                    this.state.question.answers.map(answer => {
                        return <div className={ "answer" } key={answer.type}
                                    onClick={ () => this.answerSelected(answer) }
                        >
                              { answer.img && <img src={ require("../images/" + answer.img) } className={ "answerImage" }/> }
                              {answer.content}
                            </div>
                    })
                }
            </div>
        );

    }
}

export default Question;