import React from 'react';
import './Portfolio.css';
import {GitHub, ExitToApp, AttachMoney, Theaters, FitnessCenter, Create, Code, Today} from '@material-ui/icons'

export default function Portfolio() {
    return(
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className='port-container'>
                <div className='project'>
                    <a href='https://pure-anchorage-16941.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <AttachMoney className='proj-img'/>
                            <h3>Budget Tracker</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/JacksonWhite4725/budget-tracker' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://pure-anchorage-16941.herokuapp.com/' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <a href='https://afternoon-refuge-09743.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <Theaters className='proj-img'/>
                            <h3>Drink and Movie</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/murda02/project-2' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://afternoon-refuge-09743.herokuapp.com/' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <a href='https://aqueous-mesa-97115.herokuapp.com/?id=618db69d108d7300166fbc30' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <FitnessCenter className='proj-img'/>
                            <h3>Workout Tracker</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/JacksonWhite4725/workout-tracker' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://aqueous-mesa-97115.herokuapp.com/?id=618db69d108d7300166fbc30' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <a href='https://blooming-hamlet-47910.herokuapp.com/' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <Create className='proj-img'/>
                            <h3>Note Taker</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/JacksonWhite4725/note-taker' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://blooming-hamlet-47910.herokuapp.com/' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <a href='https://jacksonwhite4725.github.io/coding-quiz/' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <Code className='proj-img'/>
                            <h3>Coding Quiz</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/JacksonWhite4725/coding-quiz' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://jacksonwhite4725.github.io/coding-quiz/' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
                <div className='project'>
                    <a href='https://jacksonwhite4725.github.io/work-day-schedule/' target='_blank' rel='noreferrer'>
                        <div className='port-item'>
                            <Today className='proj-img'/>
                            <h3>Workday Schedular</h3>
                        </div>
                    </a>
                    <div className='port-icons'>
                        <a href='https://github.com/JacksonWhite4725/work-day-schedule' target='_blank' rel='noreferrer'>
                            <GitHub/>
                        </a>
                        <a href='https://jacksonwhite4725.github.io/work-day-schedule/' target='_blank' rel='noreferrer'>
                            <ExitToApp/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};