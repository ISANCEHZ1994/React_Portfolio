import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { AiFillLinkedin as LinkedInIcon, AiFillGithub as GitHubIcon }  from 'react-icons/ai';
import './NavBar.css';

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

    const goResume = () => {
        history.push('/israel_resume')
        console.log('we are at the Resume page!')
    }

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
            },{
                name: "Resume",
                function: goResume
            }
        ];
        // NOTE: it wasn't working before because we were not 
        // telling the function to return anything!
       return arrayButtons.map( button => 
           
            <motion.button
            className="button"
           whileHover={{ scale: 1.3 }}
           whileTap={{ scale: 0.9 }} 
           onClick={() => button.function()}
            >
                {button.name}
            </motion.button>
            
        );
    };
    
    return(
        
       <div className="navbar">
            <div className="button_container">
                { createButtons() }

                <IconContext.Provider value={{ size: '2em', color: 'black'}} > {/* styles the icons! */}
                    <a href="https://www.linkedin.com/in/israel-sanchez-94132020/" target="_blank">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://github.com/ISANCEHZ1994" target="_blank">
                        <GitHubIcon/>
                    </a>
                </IconContext.Provider>
                
            </div>
               
        
       </div>

    );

};

export default NavBar;
