import Logo from '../svgs/Logo';
import './Nav.css'
import { useState, useEffect } from "react";

export default function Nav() {
    return(
        <>
            <div className='nav__container'>
                <div className='nav-logo__container'>
                    <Logo></Logo>
                </div>
                <div className='nav-title__container'><h2>ESTUDIO ANTARTIDA</h2></div>
                <div className='nav-list__container'></div>
                <div className='nav-button__container'></div>
            </div>
        </>
    )
}