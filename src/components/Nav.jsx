import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Group 114.png'
import styles from '../styles/nav.module.css'
import Drower from './Drower';

function Nav(props) {

    const [isOpen, setIsOpen] = useState(false)

    const HandleDrower = () => {
        console.log("Drower")
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className={styles.header} id='heads'>
                <div>
                    <img className={styles.logo} src={logo} alt="logo" />

                    <div className={styles.navLink} >
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/services'} >Services</NavLink>
                        <NavLink to={'/pricing'} >Pricing</NavLink>
                        <NavLink to={'/about-us'} >About Us</NavLink>
                        <NavLink to={'/'}>  Start a Company </NavLink>
                    </div>

                    <div className={styles.hamburger} onClick={HandleDrower}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </header>

            <Drower isOpen={isOpen} HandleDrower={HandleDrower} />

        </>
    );
}

export default Nav;