import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import LinkedIn from './Components/LinkedIn';

function App() {

  return (

    <Router>
            <Switch>
                <Route path="/israel_portfolio" component={ Home } />
                <Route path="/israel_about_himself" component={ About } />
                <Route path="/israel_certification" component={ LinkedIn } />
            </Switch>
        </Router>
  );

};

export default App;
