import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AdminTopMenu.module.css';
import logo from '../../../assets/logo.png';

const AdminTopMenu = () => {
    return (
        <nav className={styles.topMenu}>
            <img src={logo} className={styles.logo} alt="Akademia Tarnowska Logo"/>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/applications">Aktualne wnioski</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/admin_archive">Archiwalne wnioski</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} to="/">Wyloguj</NavLink>

        </nav>
    );
};

export default AdminTopMenu;
