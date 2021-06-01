import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from './Home';
import About from './About';
import LinkedIn from './LinkedIn';

const NavBar = () => {

    // const click = useSelector( state => state.navWork );
    // console.log(click, 'this is clicked!');
    
    const history = useHistory();

    const goHome = () => {
        history.push('/israel_portfolio')
    };

    const goAbout = () => {
        history.push('/israel_about_himself')
    };

    const goLinkedIn = () => {
        history.push('/israel_certification')
    };
    
    return(
        
       <div>
           <button onClick={() => goHome()}>Home</button>
           <button onClick={() => goAbout()}>About</button>
           <button onClick={() => goLinkedIn()}>LinkedIn</button>
           <button > maybe something else </button>
       </div>

    );

};

export default NavBar;
