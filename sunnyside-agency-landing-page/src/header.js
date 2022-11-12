import React from 'react';
import Navbar from './navbar';

export default function Header() {
    return (
        <header className='header'>
            <Navbar />

            <div className='header--box'>
                <h1 className='header--text'> We are creatives</h1>
                <img src='../images/icon-arrow-down.svg' alt='arrow down' className='header--arrow' />
            </div>
        </header>
    );
}