import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

const NavBar = () => {

    const history = useHistory();

    const goHome = () => {
        history.push('/israel_portfolio');
    };

    const goAbout = () => {
        history.push('/israel_about_himself');
    };

    const goLinkedIn = () => {
        history.push('/israel_certification');
    };

    // const arrayButtons = [
    //     {
    //         name: "Home",
    //         function: goHome,
    //     },{
    //         name: "About",
    //         function: goAbout,
    //     },{
    //         name: "LinkedIn Certified",
    //         function: goLinkedIn,
    //     }
    // ];
    
    // const createButtons = () => {
    //     arrayButtons.map( (button) => {
    //         return(
    //         <motion.button
    //        whileHover={{ scale: 1.3 }}
    //        whileTap={{ scale: 0.9 }} 
    //        onClick={() => button.function()}
    //         >
    //             {button.name}
    //         </motion.button>
    //         );
    //     });
    // };
    
    return(
        
       <div>
           {/* { createButtons() } */}
           <motion.button 
           whileHover={{ scale: 1.3 }}
           whileTap={{ scale: 0.9 }} 
           onClick={() => goHome()}>Home</motion.button>
           <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => goAbout()}>About</motion.button>
           <motion.button  
           whileHover={{ scale: 1.3 }}
           whileTap={{ scale: 0.9 }} 
           onClick={() => goLinkedIn()}>LinkedIn</motion.button>
       </div>

    );

};

export default NavBar;
