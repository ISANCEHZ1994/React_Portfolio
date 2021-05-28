import React from 'react';
import NavBar from './NavBar';


export default class Home extends React.Component{
    

    render(){

        return(

        <div>
            <NavBar/>
            <h1>
                Hello From the Home Component
            </h1>
        </div>

        );
    };

};