import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import israel_pic from '../../Images/israel_profile_pic.jpg';
import YourSnap from '../../Images/YourSnap.png';
// import { motion } from 'framer-motion';


export default class Home extends React.Component{
    
    render(){

        return(

        <div className="home">
            <a href="https://www.loom.com/share/e5c303f5a6754691bffc1fe275e29473" target="_blank" rel="noreferrer">
                <img src={israel_pic} alt="profile_photo" width="280px" height="350px" />
            </a>
            
            <h1 className="title"> Israel Sanchez: <br></br> Full Stack Developer</h1>
          
            <h2> A portfolio of my projects, abilites and hobbies.</h2>
            
           
            <div className="surrounding_home">
                
                <NavBar/>
                <h1>  Hello From the Home Component </h1>
            <div className="your_snap">
                <h1> Your Snap </h1>
                <img src={YourSnap} alt="YourSnapProject" height="500" width=""></img>
            </div>
               

            <footer className='footer'>
                Here I want contact Info and some more stuffs
                <p>
                    
                </p>
                <p>
                    
                </p>
            </footer>
            </div> {/* end of surrounding_home className*/}

        </div> //{/* end of home className*/}

        );
    };

};