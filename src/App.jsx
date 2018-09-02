import React from "react";
import	{
    Router,
    Route,
    Switch,
}	from	'react-router-dom';
import { createHashHistory } from 'history';

import Welcome from './components/welcome';
import Question from './components/question';
import Result from './components/result';

class	NotFound	extends	React.Component	{
    render()	{
        return	<h1>404, Nothing	is	here</h1>;
    }
}

const history = createHashHistory();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            answers:[]
        }

    }

    shouldComponentUpdate() {
        return false;
    }

    onAnswer = ({ id, answerType }) => {
        this.setState ((state) => {
            const next = id === 9 ? "/result" : "/question/" + (id + 1);

            history.push(next);

            return {
                answers: [...state.answers, { id, answerType }]
            }
        });
    };

    render() {
        return  <Router history={history}>
            <Switch>
                <Route	exact	path='/'	component={Welcome}	/>
                <Route  path='/result' render={ () => <Result results={this.state.answers} />} />
                <Route	path='/question/:questionId' render={ (props) => <Question { ...props } onAnswer={this.onAnswer} /> }	/>
                <Route	component={NotFound}	/>
            </Switch>
        </Router>
    }
}




export default App;

