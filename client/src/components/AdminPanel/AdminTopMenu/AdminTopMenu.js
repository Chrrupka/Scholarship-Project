// AdminTopMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminTopMenu.module.css';
import logo from '../../../assets/logo.png';

const AdminTopMenu = () => {
    return (
        <nav className={styles.topMenu}>
            <img src={logo} className={styles.logo} alt="Akademia Tarnowska Logo"/>
            <Link className={styles.link} to="/applications">Aktualne wnioski</Link>
            <Link className={styles.link} to="/admin_archive">Archiwalne wnioski</Link>
            <Link className={styles.link} to="/">Wyloguj</Link>

        </nav>
    );
};

export default AdminTopMenu;
