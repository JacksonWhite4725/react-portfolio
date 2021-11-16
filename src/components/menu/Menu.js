import React from 'react';
import './Menu.css';

export default function Menu({ menuOpen, setMenuOpen }) {
    return(
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#about'>About Me</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#resume'>Resume</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#footer'>Contact</a>
                </li>
            </ul>
        </div>
    );
};