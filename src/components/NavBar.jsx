import React from 'react';
import Logo from '../assets/Branding.svg'

export default function NavBar() {
    return <nav>
        <button className='icon-btn'>
        </button>

        <img src={Logo} className='branding' alt='branding logo' />

        <a href='#' className='btn-txt'>
            GITHUB
        </a>
    </nav>;
}
