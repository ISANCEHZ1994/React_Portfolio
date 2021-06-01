import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import LinkedIn from './Components/LinkedIn/LinkedIn';

function App() {

  return (
   
        <Router>
            <Switch>
                <Route exact path="/" component={ Home }  />
                <Route path="/israel_portfolio" component={ Home } />
                <Route path="/israel_about_himself" component={ About } />
                <Route path="/israel_certification" component={ LinkedIn } />
            </Switch>
        </Router>  
    
  );

};

export default App;
