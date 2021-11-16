import React from 'react';
import './About.css';
import jackson from '../../images/avatar.png';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function About() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1250,
            strings: ['Web Developer', 'Designer', 'Brewer']
        })
    }, [])
    return(
        <div className='about' id='about'>
            <div className='left-about'>
                <div className='imgContainer'>
                    <img src={jackson} alt='Profile'/>
                </div>
            </div>
            <div className='right-about'>
                <div className='wrapper-about'>
                    <h2>Welcome! I'm</h2>
                    <h1>Jackson White</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    );
};