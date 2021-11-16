import React from 'react';
import './Footer.css';
import { useState } from 'react';
import {LinkedIn, GitHub, Instagram, Facebook} from '@material-ui/icons'

export default function Footer() {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return(
        <div className='footer' id='footer'>
            <div className='left-footer'>
                <h1>Media Profiles</h1>
                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/jackson-white-971030144/' target='_blank' rel='noreferrer'><LinkedIn className='social-icon'/></a>
                    <a href='https://github.com/JacksonWhite4725' target='_blank' rel='noreferrer'><GitHub className='social-icon'/></a>
                    <a href='https://www.instagram.com/jackson.white99/' target='_blank' rel='noreferrer'><Instagram className='social-icon'/></a>
                    <a href='https://www.facebook.com/profile.php?id=100022183622269' target='_blank' rel='noreferrer'><Facebook className='social-icon'/></a>
                </div>
            </div>
            <div className='right-footer'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} 
                action='https://getform.io/f/8e5a53ef-80b2-45cd-9cc2-c57b8f0af14a'
                method='POST' enctype='multipart/form-data' target='_blank' id='wpform'>
                    <input type='text' placeholder='Name' name='Contact-Name' required='required'/>
                    <input type='email' placeholder='Email' name='Contact-Email' required='required'/>
                    <textarea placeholder='Message' name='Contact-Message' required='required'></textarea>
                    <button type='submit' value='Submit'>Send</button>
                    {message && <span>Submitted! I will respond ASAP!</span>}
                </form>
            </div>
        </div>
    );
};