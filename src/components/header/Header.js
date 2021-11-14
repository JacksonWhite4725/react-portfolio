import React from 'react';
import './Header.css';
import {Person, Mail} from '@material-ui/icons'

export default function Header({ menuOpen, setMenuOpen }) {
    return(
        <div className={'header ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#about' className='logo'>Jackson White</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span><a href='tel:303-241-7833'>+1 303-241-7833</a></span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span><a href='mailto: jawh4725@colorado.edu'>jawh4725@colorado.edu</a></span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};