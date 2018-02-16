import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LevelPage from './containers/LevelPage';
import GameOverPage from './containers/GameOverPage';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


const App = () =>
  <Router basename={process.env.PUBLIC_URL + '/'}>
    <div>
      <Route exact path="/" component={LevelPage} />
      <Route exact path="/gameover" component={GameOverPage} />
    </div>
  </Router>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
