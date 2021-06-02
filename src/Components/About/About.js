import React from 'react';
import NavBar from '../NavBar/NavBar';
import './About.css';


export default class About extends React.Component{
    

    render(){

        return(

        <div className="about">
            
            <NavBar/>
            <h1>
                Hello From the About Component
            </h1>

        </div>

        );
    };

};