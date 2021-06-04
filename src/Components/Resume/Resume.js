import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Resume.css';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import isResume from './ISanchezResume.pdf';

const Resume = () => {

    // const works = console.log('loaded correctly')

    return(
        <div className="resume">
            <NavBar/>
            <motion.h1
            // animate={{ scale: 1.5 }}
            // transition={{ duration: 0.5 }}
            > Resume in PDF Format </motion.h1>
            <Document 
            file={isResume}
            >
                <Page pageNumber={1}/>
            </Document>
        </div>
    );

};

export default Resume;