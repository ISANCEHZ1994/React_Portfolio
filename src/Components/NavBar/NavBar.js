import React from 'react';
import { useHistory } from "react-router-dom";
// import { motion } from 'framer-motion';
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
           
            <button
           className="button"
        //    whileHover={{ scale: 1.3 }}
        //    whileTap={{ scale: 0.9 }} 
           onClick={() => button.function()}
            >
                {button.name}
            </button>
            
        );
    };
    
    return(
        
       <div className="navbar">
            <div className="button_container">
                { createButtons() } {/* YES BUTTONS */}
            <div>
                {/* <h4>Social Media: </h4> */}
                <IconContext.Provider value={{ size: '3em', color: 'black'}} > {/* styles the icons! */}
                    <a href="https://www.linkedin.com/in/israel-sanchez-94132020/" target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://github.com/ISANCEHZ1994" target="_blank" rel="noreferrer">
                        <GitHubIcon/>
                    </a>
                </IconContext.Provider>
            </div>
                
                
            </div>
               
        
       </div>

    );

};

export default NavBar;
