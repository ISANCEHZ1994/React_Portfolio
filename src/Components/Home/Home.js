import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import israel_pic from '../../Images/israel_profile_pic.jpg';
import { motion } from 'framer-motion';

export default class Home extends React.Component{
    

    render(){

        return(

        <div
        
        className="home"
        >
            <img src={israel_pic} alt="profile_photo" width="280px" height="350px"/>
            <motion.div
            initial="hidden" 
            animate={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            >
                <h1> Israel Sanchez: <br></br> Full Stack Developer</h1>
            </motion.div>
            <motion.div
             animate={{ scale: 1.5 }}
             transition={{ duration: 0.5 }}
            >
                 <h4> A portfolio of Israel's projects, abilites and hobbies. </h4>
            </motion.div>
           
            <div className="surrounding_home">
                <NavBar/>
                <h1>  Hello From the Home Component </h1>
            </div> {/* end of surrounding_home className*/}

        </div>

        );
    };

};