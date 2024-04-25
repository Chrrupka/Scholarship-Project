import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopMenu.module.css';
import logo from '../../../assets/logo.png';

const TopMenu = () => {
    return (
        <nav className={styles.topMenu}>
            <img src={logo} className={styles.logo} alt="Akademia Tarnowska Logo"/>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/news">Aktualności</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/criteria">Wymagane Dokumenty</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/form">Złóż Wniosek</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/status">Statusy</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/archive">Archiwum</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/">Wyloguj</NavLink>
        </nav>
    );
};

export default TopMenu;
