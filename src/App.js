import './App.css';
import Main from './Components/Main';
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
                <Route path="/israel_portfolio" component={ Main } />
                <Route path="/israel_about_himself" component={ About } />
                <Route path="/israel_certification" component={ LinkedIn } />
            </Switch>
        </Router>
  );
}

export default App;
