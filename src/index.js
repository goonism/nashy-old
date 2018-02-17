import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import registerServiceWorker from 'registerServiceWorker';
import LevelPage from 'containers/LevelPage';
import GameOverPage from 'containers/GameOverPage';

import 'index.css';

const App = () => <Router basename={process.env.PUBLIC_URL + '/'}>
    <Switch>
        <Route exact path="/" component={LevelPage}/>
        <Route exact path="/gameover" component={GameOverPage}/>
    </Switch>
</Router>

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
