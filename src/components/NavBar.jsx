import React from 'react';
import Logo from '../assets/icons/Branding.svg'

export default function NavBar(props) {

    return (
        <nav className='main-nav'>
            <button className='icon-btn' onClick={props.onclick}>
            </button>

            <img src={Logo} className='branding' alt='branding logo' />

            <a href='#' className='btn-txt'>
                GITHUB
            </a>
        </nav>
    );
}
