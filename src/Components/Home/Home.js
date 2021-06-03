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
            
                <motion.h1
                initial={{ opacity: 1 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
                > Israel Sanchez: <br></br> Full Stack Developer</motion.h1>
            
          
                 <motion.h4
                 initial={{ opacity: 1 }}
                  animate={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                 > A portfolio of Israel's projects, abilites and hobbies. </motion.h4>
            
           
            <div className="surrounding_home">
                <NavBar/>
                <h1>  Hello From the Home Component </h1>
            </div> {/* end of surrounding_home className*/}

        </div>

        );
    };

};