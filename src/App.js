import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/contexts/home';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Educations from './components/content/Educations';
import Experiences from './components/content/Experiences';
import Skills from './components/content/Skills';
import Header from './components/header';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Home} />
            <Switch >
              <Route path="/experiences" component={Experiences} />
              <Route path="/educations" component={Educations} />
              <Route path="/skills" component={Skills} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
