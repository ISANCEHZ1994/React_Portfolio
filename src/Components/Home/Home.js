import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import israel_pic from '../../Images/israel_profile_pic.jpg';
import YourSnap from '../../Images/YourSnap.png';
import { motion } from 'framer-motion';


export default class Home extends React.Component{
    

    render(){

        return(

        <div className="home">
            <img src={israel_pic} alt="profile_photo" width="280px" height="350px"/>
            
            <h1
                // initial={{ opacity: 1 }}
                // animate={{ scale: 1.5 }}
                // transition={{ duration: 0.5 }}
                className="title"
            > Israel Sanchez: <br></br> Full Stack Developer</h1>
               
          
            <h2
                //  initial={{ opacity: 1 }}
                //   animate={{ scale: 1.5 }}
                //   transition={{ duration: 0.5 }}
            > A portfolio of my projects, abilites and hobbies.</h2>
            
           
            <div className="surrounding_home">
                
                <NavBar/>
                <h1>  Hello From the Home Component </h1>
            <div>
                <h1> Your Snap </h1>
                <img src={YourSnap} alt="YourSnapProject" height="500" width=""></img>
            </div>
                <div>
                    
                </div>
            <br></br>

            <footer className='footer'>
                Here I want contact Info and some more stuffs
            </footer>
            </div> {/* end of surrounding_home className*/}

        </div> //{/* end of home className*/}

        );
    };

};