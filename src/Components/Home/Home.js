import React from 'react';
import NavBar from '../NavBar';
import './Home.css';
import israel_pic from '../../Images/israel_profile_pic.jpg';
import { motion } from 'framer-motion';

export default class Home extends React.Component{
    

    render(){

        return(

        <motion.div 
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        className="home"
        >
            <img src={israel_pic} alt="profile_photo" width="280px" height="350px"/>
            <h1> Israel Sanchez: <br></br> Full Stack Developer</h1>
            <h4> A portfolio of Israel's projects, abilites and hobbies. </h4>
            <div className="surrounding_home">
                <NavBar/>
                <h1>  Hello From the Home Component </h1>
            </div> {/* end of surrounding_home className*/}

        </motion.div>

        );
    };

};