import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./LinkedIn.css"

export default class LinkedIn extends React.Component{
    

    render(){

        return(

        <div className="linkedIn">

            <NavBar/>
            <h1>
                Hello From the LinkedIn Component
            </h1>

        </div>

        );
    };

};