import React from 'react';
import Logo from '../assets/icons/Branding.svg'

export default function NavBar(props) {

    return (
        <nav className='main-nav'>
            {props.isMain === true ? <NavBarMain onclick={props.onclick} /> : <NavBarWithBack onclick={props.onclick} />}
        </nav>
    );
}


function NavBarMain(props) {
    return (
        <>
            <button className='icon-btn icon-menu' onClick={props.onclick}>
            </button>

            <img src={Logo} className='branding' alt='branding logo' />

            <a href='#' className='btn-txt'>
                GITHUB
            </a>
        </>
    );
}

function NavBarWithBack(props) {
    return (
        <>
            <button className='icon-btn icon-back' onClick={props.onclick}>
            </button>

            <a href='#' className='btn-txt'>
                GITHUB
            </a>
        </>
    );
}
