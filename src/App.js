import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About';
import LinkedIn from './Components/LinkedIn';
import { motion } from "framer-motion";

function App() {

  return (
    <motion.div   
    // animate={{ scale: 1.2 }}
    // transition={{ duration: 0.3 }}
    >
        <Router>
            <Switch>
                <Route exact path="/" component={ Home }  />
                <Route path="/israel_portfolio" component={ Home } />
                <Route path="/israel_about_himself" component={ About } />
                <Route path="/israel_certification" component={ LinkedIn } />
            </Switch>
        </Router>  
    </motion.div>
  );

};

export default App;
