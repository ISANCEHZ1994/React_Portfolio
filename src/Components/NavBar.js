import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from './Home';
import About from './About';
import LinkedIn from './LinkedIn';

const NavBar = () => {

    const click = useSelector( state => state.navWork );

    const history = useHistory();

    console.log(click, 'this is clicked!');
    
    return(
       <div>
           <button>Home</button>
           <button>About</button>
           <button>LinkedIn</button>
           <button> maybe something else </button>
       </div>
    );

};

export default NavBar;
