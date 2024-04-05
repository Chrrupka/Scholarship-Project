// AdminTopMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopMenu.module.css';
import logo from '../../../assets/logo.png';

const TopMenu = () => {
    return (
        <nav className={styles.topMenu}>
            <img src={logo} className={styles.logo} alt="Akademia Tarnowska Logo"/>
            <Link className={styles.link} to="/news">Aktualności</Link>
            <Link className={styles.link} to="/criteria">Wymagane Dokumenty</Link>
            <Link className={styles.link} to="/form">Złóż Wniosek</Link>
            <Link className={styles.link} to="/status">Statusy</Link>
            <Link className={styles.link} to="/archive">Archiwum</Link>
            <Link className={styles.link} to="/">Wyloguj</Link>

        </nav>
    );
};

export default TopMenu;
