import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>what is GPT3?</a></p>
          <p><a href='#posibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>

      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toogleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
        }
        {toogleMenu && (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;