import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

const NavBar = (props) => {

    const history = useHistory();

    const goHome = () => {
        history.push('/israel_portfolio');
        console.log('we are at the home page!')
    };

    const goAbout = () => {
        history.push('/israel_about_himself');
        console.log('we are at the about page!')
    };

    const goLinkedIn = () => {
        history.push('/israel_certification');
        console.log('we are at the LinkedIn page!')
    };

    const createButtons = () => {

        const arrayButtons = [
            {
                name: "Home",
                function: goHome,
            },{
                name: "About",
                function: goAbout,
            },{
                name: "LinkedIn Certified",
                function: goLinkedIn,
            }
        ];
        // NOTE: it wasn't working before because we were not telling the function to return anything!
       return arrayButtons.map( button => 
           
            <motion.button
           whileHover={{ scale: 1.3 }}
           whileTap={{ scale: 0.9 }} 
           onClick={() => button.function()}
            >
                {button.name}
            </motion.button>
            
        );
    };
    
    return(
        
       <div>
          
           { createButtons() }
            {/* <div className="buttons">
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
            </div> */}
          
       </div>

    );

};

export default NavBar;
