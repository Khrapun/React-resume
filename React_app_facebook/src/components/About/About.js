import React from 'react';
import './About.css';
import BackGroundAbout from '../BackGroundAbout/BackGroundAbout';

function About(props) {
    return (
        <div className='about'>
            <BackGroundAbout />
            <div className='container'>
                <h1 className='about__title'>{props.title}</h1>
                <div className='about__description'>{props.children}</div>
            </div>
        </div>
    );
}

export default About;
