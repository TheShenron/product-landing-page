import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/drower.module.css'
import logo from '../Assets/Group 114.png'

function Drower({ isOpen ,HandleDrower }) {
    console.log(isOpen)

    return (
        <>
            <section className={`${styles.drower} ${isOpen ? styles.drowerOpen : ''}`}>
                <div>
                    <div>
                        <div>
                            <img src={logo} alt="" />
                            <div className={styles.close} onClick={HandleDrower}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <NavLink onClick={HandleDrower} to={'/'} >Home</NavLink>
                        <NavLink onClick={HandleDrower} to={'/services'} >Services</NavLink>
                        <NavLink onClick={HandleDrower} to={'/pricing'} >Pricing</NavLink>
                        <NavLink onClick={HandleDrower} to={'/about-us'} >About Us</NavLink>
                        <NavLink onClick={HandleDrower} to={'/'}>  Start a Company </NavLink>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Drower;