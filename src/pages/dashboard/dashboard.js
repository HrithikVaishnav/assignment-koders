import React from 'react';
import './style.css';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
const dashboard = () => {
    return(
        <div>
            <div className="heading">DASHBOARD</div>
            <div className="main-heading">Blog Overview</div>
            <Section1 /> 
            <Section2 />
            <Section3 />
        </div>
    )
}

export default dashboard;