import React from 'react';
import './Resume.css';
import resume from '../../images/Jackson_White_Resume.pdf';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Resume() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 90,
            backDelay: 5000,
            strings: ['HTML | JavaScript | CSS | MongoDB | MySQL | Express | React | Node | Python | Digital Marketing | Brewing | Data Analytics | 中文 |']
        })
    }, [])
    return(
        <div className='resume' id='resume'>
            <h1>Resume</h1>
            <div className='skills'>
                <h3><span ref={textRef}></span></h3>
            </div>
            <div className='resume-download'>
                <a href={resume} download='Jackson_White_Resume'>
                    <h2>Download My Resume</h2>
                </a>
            </div>
        </div>
    );
};