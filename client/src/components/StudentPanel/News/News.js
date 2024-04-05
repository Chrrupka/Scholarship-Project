
import React from 'react';
import styles from './News.module.css';
import TopMenu from "../TopMenu/TopMenu";
import {useAuth} from "../../../hooks/useAuth";


const News = () => {
    useAuth();
    return (

        <div className="application-container">

            <TopMenu/>
            <div className={styles.newsContainer}>
                <h1>POMOC MATERIALNA</h1>
                <h2>dla studentów Akademii Tarnowskiej</h2>
                <h3>w roku akademickim 2023/2024</h3>
                <p>Ogłoszenie o terminach przyjmowania wniosków o przyznanie świadczeń stypendialnych</p>
                <p>w roku akademickim 2023/2024</p>
            </div>
        </div>
    );
};

export default News;
